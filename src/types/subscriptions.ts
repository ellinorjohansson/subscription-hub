export type Subscription = {
  id: string;
  name: string;
  price: number;
  billingCycle: "monthly" | "yearly";
  category: string;
  nextBillingDate: string;
  brandColor: string;
  status: "active" | "paused" | "canceled";
};