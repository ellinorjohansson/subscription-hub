import Activity, { IActivity } from "../models/Activity";

type LogActivityInput = {
  subscriptionId: string;
  subscriptionName: string;
  eventType: IActivity["eventType"];
  message: string;
  occurredAt?: Date;
};

export async function logActivity({
  subscriptionId,
  subscriptionName,
  eventType,
  message,
  occurredAt = new Date(),
}: LogActivityInput) {
  try {
    return await Activity.create({
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
