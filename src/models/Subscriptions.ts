import mongoose, { Schema, Model } from "mongoose";

// How the data should look in my code
export interface ISubscription {
  _id: string;
  name: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  category: string;
  nextBillingDate?: Date;
  brandColor: string;
  status: "active" | "paused" | "canceled";
};

const SubscriptionSchema = new Schema<ISubscription>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    billingCycle: {
      type: String,
      enum: ['monthly', 'yearly'],
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    nextBillingDate: {
      type: Date,
    },
    brandColor: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'paused', 'canceled'],
      default: 'active',
    },
  }
);

// Create model so you can create, find, update
const Subscription: Model<ISubscription> = mongoose.models.Subscription || mongoose.model<ISubscription>("Subscription", SubscriptionSchema);

export default Subscription;