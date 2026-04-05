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