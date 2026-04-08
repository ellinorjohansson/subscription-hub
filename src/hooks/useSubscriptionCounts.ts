import { useMemo } from "react";
import { useSubscriptions } from "../context/SubscriptionsContext";

export function useSubscriptionCount() {
  const { subscriptions } = useSubscriptions();

  const counts = useMemo(() => {
    return subscriptions.reduce(
      (acc, subscription) => {
        if (subscription.status === "active") acc.active += 1;
        if (subscription.status === "paused") acc.paused += 1;
        return acc;
      },
      { active: 0, paused: 0 }
    );
  }, [subscriptions]);
  return counts;
}
