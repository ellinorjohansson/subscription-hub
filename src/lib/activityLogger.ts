import Activity, { IActivity } from "../models/Activity";

type LogActivityInput = {
  userId: string;
  subscriptionId: string;
  subscriptionName: string;
  eventType: IActivity["eventType"];
  message: string;
  occurredAt?: Date;
};

export async function logActivity({
  userId,
  subscriptionId,
  subscriptionName,
  eventType,
  message,
  occurredAt = new Date(),
}: LogActivityInput) {
  try {
    return await Activity.create({
      userId,
      subscriptionId,
      subscriptionName,
      eventType,
      message,
      occurredAt,
    });
  } catch (error) {
    console.error("Failed to log activity:", error);
    return null;
  }
}
