import OverviewSection from "@/src/components/OverviewSection";
import QuickAddSection from "@/src/components/QuickAddSection";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 font-sans dark:bg-black">
      <OverviewSection />
      <QuickAddSection />
    </main>
  );
}
