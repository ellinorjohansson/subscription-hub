import { logActivity } from "@/src/lib/activityLogger";
import { getNextBillingDate } from "@/src/lib/billingDate";
import connectDB from "@/src/lib/db";
import Subscription, { type ISubscription } from "@/src/models/Subscriptions";
import { NextRequest, NextResponse } from "next/server";

const isSameUtcDate = (a: Date, b: Date) =>
  a.getUTCFullYear() === b.getUTCFullYear() &&
  a.getUTCMonth() === b.getUTCMonth() &&
  a.getUTCDate() === b.getUTCDate();

export async function GET() {
  try {
    await connectDB();
    const subscriptions = await Subscription.find().sort({ createdAt: -1 });

    await Promise.all(
      subscriptions.map(async (subscription) => {
        if (!subscription.nextBillingDate) {
          return;
        }

        const advancedDate = getNextBillingDate(
          subscription.nextBillingDate,
          subscription.billingCycle,
          subscription.status
        );

        if (!advancedDate) {
          return;
        }

        const currentDate = new Date(subscription.nextBillingDate);
        if (Number.isNaN(currentDate.getTime())) {
          return;
        }

        if (!isSameUtcDate(currentDate, advancedDate)) {
          subscription.nextBillingDate = advancedDate;
          await subscription.save();
        }
      })
    );

    return NextResponse.json({ success: true, data: subscriptions });
  } catch (error) {
    console.error("Error fetching subscriptions:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch subscriptions" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      name,
      price,
      billingCycle,
      category,
      nextBillingDate,
      brandColor,
      status,
    } = body;

    const newSubscription = new Subscription({
      name,
      price: Number(price),
      billingCycle,
      category,
      nextBillingDate,
      brandColor,
      status: status ?? "active",
    });

    await newSubscription.save();

    await logActivity({
      subscriptionId: String(newSubscription._id),
      subscriptionName: newSubscription.name,
      eventType: "created",
      message: "Subscription added",
    });

    return NextResponse.json(
      { success: true, data: newSubscription },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating subscription:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create subscription" },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    await connectDB();
    const body = await request.json();
    const {
      id,
      name,
      price,
      billingCycle,
      category,
      brandColor,
      status,
      nextBillingDate,
    } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const updateData: Partial<
      Pick<
        ISubscription,
        | "name"
        | "price"
        | "billingCycle"
        | "category"
        | "brandColor"
        | "status"
        | "nextBillingDate"
      >
    > = {};

    if (name !== undefined) {
      updateData.name = name;
    }

    if (price !== undefined) {
      updateData.price = Number(price);
    }

    if (billingCycle !== undefined) {
      updateData.billingCycle = billingCycle;
    }

    if (category !== undefined) {
      updateData.category = category;
    }

    if (brandColor !== undefined) {
      updateData.brandColor = brandColor;
    }

    if (status !== undefined) {
      updateData.status = status;
    }

    if (nextBillingDate !== undefined) {
      updateData.nextBillingDate = nextBillingDate;
    }

    const existingSubscription = await Subscription.findById(id);

    if (!existingSubscription) {
      return NextResponse.json(
        { success: false, error: "Subscription not found" },
        { status: 404 }
      );
    }

    const updateSubscription = await Subscription.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updateSubscription) {
      return NextResponse.json(
        { success: false, error: "Subscription not found" },
        { status: 404 }
      );
    }

    if (status && status !== existingSubscription.status) {
      await logActivity({
        subscriptionId: String(updateSubscription._id),
        subscriptionName: updateSubscription.name,
        eventType: status,
        message: `Subscription ${status}`,
      });
    }

    return NextResponse.json({ success: true, data: updateSubscription });
  } catch (error) {
    console.error("Error update subscription:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update subscription" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    await connectDB();
    const { id } = await request.json();

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const deletedSubscription = await Subscription.findByIdAndDelete(id);

    if (!deletedSubscription) {
      return NextResponse.json(
        { success: false, error: "Subscription not found" },
        { status: 404 }
      );
    }

    await logActivity({
      subscriptionId: String(deletedSubscription._id),
      subscriptionName: deletedSubscription.name,
      eventType: "deleted",
      message: "Subscription deleted",
    });

    return NextResponse.json({ success: true, data: deletedSubscription });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete subscription" },
      { status: 500 }
    );
  }
}
