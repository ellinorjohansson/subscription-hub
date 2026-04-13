import mongoose, { Schema, Model } from "mongoose";

// How the data should look in my code
export interface IActivity {
  subscriptionId: string;
  subscriptionName: string;
  eventType: "created" | "paused" | "canceled" | "deleted";
  message: string;
  occurredAt: Date;
}

const ActivitySchema = new Schema<IActivity>(
  {
    subscriptionName: {
      type: String,
      required: true,
    },
    eventType: {
      type: String,
      enum: ["created", "paused", "canceled", "deleted"],
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    occurredAt: {
      type: Date,
      default: Date.now,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// Create model so you can create, find, update
const Activity: Model<IActivity> =
  mongoose.models.Activity ||
  mongoose.model<IActivity>("Activity", ActivitySchema);

export default Activity;
