import { useMemo } from "react";
import { useSubscriptions } from "../context/SubscriptionsContext";

export function useSubscriptionCount() {
  const { subscriptions } = useSubscriptions();

  const result = useMemo(() => {
    let active = 0;
    let paused = 0;
    let yearlyEstimated = 0;
    let monthlySpend = 0;

    subscriptions.forEach((subscription) => {
      if (subscription.status === "active") {
        active += 1;
        yearlyEstimated += (subscription.price || 0) * 12;
        monthlySpend += subscription.price;
      }
      if (subscription.status === "paused") {
        paused += 1;
      }
    });
    return { active, paused, yearlyEstimated, monthlySpend };
  }, [subscriptions]);
  return result;
}
