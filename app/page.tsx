import OverviewSection from "@/src/components/OverviewSection";
import QuickAddSection from "@/src/components/QuickAddSection";
import YourSubscription from "@/src/components/YourSubscription";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans text-amber-50/95">
      <OverviewSection />
      <QuickAddSection />
      <YourSubscription />
    </main>
  );
}
