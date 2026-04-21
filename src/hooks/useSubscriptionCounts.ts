import { useSubscriptions } from "../context/SubscriptionsContext";

export function useSubscriptionCount() {
  const { subscriptions } = useSubscriptions();

  let active = 0;
  let paused = 0;
  let yearlyEstimated = 0;
  let monthlySpend = 0;

  subscriptions.forEach((subscription) => {
    if (subscription.status === "active") {
      active += 1;
      const price = subscription.price || 0;
      yearlyEstimated +=
        subscription.billingCycle === "monthly" ? price * 12 : price;
      monthlySpend += subscription.price;
    }
    if (subscription.status === "paused") {
      paused += 1;
    }
  });
  return { active, paused, yearlyEstimated, monthlySpend };
}
