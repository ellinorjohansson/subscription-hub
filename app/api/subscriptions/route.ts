import connectDB from "@/src/lib/db";
import Subscription from "@/src/models/Subscriptions";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const subscriptions = await Subscription.find().sort({ createdAt: -1 });

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
    const { name, price, billingCycle, category, nextBillingDate, brandColor } =
      body;

    const newSubscription = new Subscription({
      name,
      price: Number(price),
      billingCycle,
      category,
      nextBillingDate,
      brandColor,
    });

    await newSubscription.save();

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
    const { id, status, nextBillingDate } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID is required" },
        { status: 400 }
      );
    }

    const updateData: {
      status?: "active" | "paused" | "canceled";
      nextBillingDate?: string | Date | null;
    } = {};

    if (status !== undefined) {
      updateData.status = status;
    }

    if (nextBillingDate !== undefined) {
      updateData.nextBillingDate = nextBillingDate;
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

    return NextResponse.json({ success: true, data: deletedSubscription });
  } catch (error) {
    console.error("Error deleting subscription:", error);
    return NextResponse.json(
      { success: false, error: "Failed to delete subscription" },
      { status: 500 }
    );
  }
}
