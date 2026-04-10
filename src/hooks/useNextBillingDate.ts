export function useNextBillingDate(nextBillingDate: string | Date) {
  const today = new Date();
  const originalDate = new Date(nextBillingDate);

  const nextDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    originalDate.getDate()
  );

  if (nextDate <= today) {
    nextDate.setMonth(nextDate.getMonth() + 1);
  }

  return nextDate;
}
