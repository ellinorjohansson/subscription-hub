export function getNextBillingDate(
  nextBillingDate: string | Date | null,
  billingCycle: "monthly" | "yearly",
  status: "active" | "paused" | "canceled"
): Date | null {
  if (!nextBillingDate) return null;

  if (status === "canceled" || status === "paused") {
    return null;
  }

  const today = new Date();
  const original = new Date(nextBillingDate);

  if (billingCycle === "monthly") {
    const next = new Date(
      today.getFullYear(),
      today.getMonth(),
      original.getDate()
    );

    if (next <= today) {
      next.setMonth(next.getMonth() + 1);
    }

    return next;
  }

  if (billingCycle === "yearly") {
    const next = new Date(
      today.getFullYear(),
      today.getMonth(),
      original.getDate()
    );

    if (next <= today) {
      next.setFullYear(next.getFullYear() + 1);
    }

    return next;
  }

  return null;
}
