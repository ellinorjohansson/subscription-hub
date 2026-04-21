"use client";
import { useSubscriptions } from "../context/SubscriptionsContext";

interface QuickAddSectionProps {
  onQuickAdd: (subscriptionId: string) => void;
}

const QuickAddSection = ({ onQuickAdd }: QuickAddSectionProps) => {
  const { subscriptions } = useSubscriptions();

  return (
    <section className="px-10 lg:px-40">
      <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-amber-100/60">
        Quick add from history
      </h2>
      <ul className="flex flex-wrap gap-2">
        {subscriptions
          .filter((sub) => sub.status === "canceled")
          .map((sub) => (
            <li key={sub._id}>
              <button
                onClick={() => onQuickAdd(sub._id)}
                className="flex min-w-[calc(50%-0.25rem)] cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-4 py-2 text-sm text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50 sm:min-w-0 sm:justify-start sm:px-5"
              >
                <div
                  className="h-4 w-4 rounded-full"
                  style={{ backgroundColor: sub.brandColor }}
                ></div>
                {sub.name}
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default QuickAddSection;
