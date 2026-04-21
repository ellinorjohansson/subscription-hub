"use client";

import OverviewSection from "@/src/components/OverviewSection";
import QuickAddSection from "@/src/components/QuickAddSection";
import RecentActivity from "@/src/components/RecentActivity";
import YourSubscription from "@/src/components/YourSubscription";
import EditSubscription from "@/src/components/EditSubscription";
import { useState } from "react";

export default function Home() {
  const [editingSubscriptionId, setEditingSubscriptionId] = useState<
    string | null
  >(null);

  const openEdit = (subscriptionId: string) => {
    setEditingSubscriptionId(subscriptionId);
  };

  const closeEdit = () => {
    setEditingSubscriptionId(null);
  };

  return (
    <main className="flex flex-col flex-1 font-sans text-amber-50/95 overflow-visible">
      <OverviewSection />
      <QuickAddSection onQuickAdd={openEdit} />
      <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] overflow-visible">
        <YourSubscription onOpenEdit={openEdit} />
        <RecentActivity />
      </div>

      {editingSubscriptionId && (
        <EditSubscription
          key={editingSubscriptionId}
          subscriptionId={editingSubscriptionId}
          onClose={closeEdit}
        />
      )}
    </main>
  );
}
