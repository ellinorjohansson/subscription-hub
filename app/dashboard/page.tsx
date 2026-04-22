"use client";

import EditSubscription from "@/src/components/EditSubscription";
import OverviewSection from "@/src/components/OverviewSection";
import QuickAddSection from "@/src/components/QuickAddSection";
import RecentActivity from "@/src/components/RecentActivity";
import YourSubscription from "@/src/components/YourSubscription";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const { status } = useSession();

  const [editingSubscriptionId, setEditingSubscriptionId] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.replace("/");
    }
  }, [router, status]);

  const openEdit = (subscriptionId: string) => {
    setEditingSubscriptionId(subscriptionId);
  };

  const closeEdit = () => {
    setEditingSubscriptionId(null);
  };

  if (status !== "authenticated") {
    return null;
  }

  return (
    <>
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
    </>
  );
};

export default Dashboard;
