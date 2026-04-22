import connectDB from "@/src/lib/db";
import Activity from "@/src/models/Activity";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function GET(request: NextRequest) {
  try {
    const token = await getToken({ req: request });
    const userId = token?.sub;

    if (!userId) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    await connectDB();

    const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000); // 7 days
    await Activity.deleteMany({ userId, occurredAt: { $lt: sevenDaysAgo } });

    const { searchParams } = new URL(request.url);
    const rawLimit = searchParams.get("limit");

    const limit = Math.min(Math.max(Number(rawLimit) || 10, 1));

    const activities = await Activity.find({ userId })
      .sort({ occurredAt: -1, createdAt: -1 })
      .limit(limit);

    return NextResponse.json({
      success: true,
      data: activities,
    });
  } catch (error) {
    console.error("Error fetching activities:", error);

    return NextResponse.json(
      { success: false, error: "Failed to fetch activities" },
      { status: 500 }
    );
  }
}
