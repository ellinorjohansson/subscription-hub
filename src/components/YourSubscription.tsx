"use client";

import { useSubscriptions } from "@/src/context/SubscriptionsContext";
import { useState } from "react";
import EditSubscription from "./EditSubscription";
import { useSubscriptionCount } from "../hooks/useSubscriptionCounts";

const formatBillingDate = (value?: Date | string) => {
  if (!value) {
    return "";
  }

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return String(value);
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
  }).format(date);
};

const getStatusClasses = (status: "active" | "paused" | "canceled") => {
  if (status === "paused") {
    return {
      badge: "border-yellow-300/12 bg-yellow-300/10",
      dot: "bg-yellow-300",
      text: "text-yellow-300",
    };
  }

  if (status === "canceled") {
    return {
      badge: "border-red-400/12 bg-red-500/10",
      dot: "bg-red-700",
      text: "text-red-300",
    };
  }

  return {
    badge: "border-green-400/10 bg-green-500/10",
    dot: "bg-green-400",
    text: "text-green-400",
  };
};

const YourSubscription = () => {
  const { subscriptions, updateSubscription, deleteSubscription } =
    useSubscriptions();
  const { active, paused } = useSubscriptionCount();

  const canceledCount = subscriptions.filter(
    (subscription) => subscription.status === "canceled"
  ).length;

  const [openId, setOpenId] = useState<string | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

  const openEdit = () => {
    setOpenId(null);
    setIsEditOpen(true);
  };

  const closeEdit = () => {
    setIsEditOpen(false);
  };

  const handlePause = (id: string) => {
    updateSubscription(id, { status: "paused" });
    setOpenId(null);
  };

  const handleCancel = (id: string) => {
    updateSubscription(id, { status: "canceled" });
    setOpenId(null);
  };

  const handleDelete = (id: string) => {
    deleteSubscription(id);
    setOpenId(null);
  };

  return (
    <section className="px-10 lg:pl-40 mt-22">
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-amber-50">
          Your Subscription
        </h2>
        <div className="grid w-full grid-cols-2 gap-2 lg:inline-flex lg:w-auto lg:gap-0 lg:overflow-hidden lg:rounded-xl lg:border lg:border-amber-200/10 lg:bg-white/4 lg:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] lg:backdrop-blur-sm">
          <button className="cursor-pointer rounded-xl bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] px-6 py-2 text-center text-amber-50 shadow-[0_8px_30px_rgba(180,83,9,0.2)] lg:rounded-none lg:px-8">
            All {subscriptions.length}
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8">
            Active {active}
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8">
            Paused {paused}
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 lg:rounded-none lg:border-0 lg:bg-transparent lg:px-8">
            Canceled {canceledCount}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 py-12">
        {subscriptions.map((subscription) => {
          const statusClasses = getStatusClasses(subscription.status);

          return (
            <div
              key={subscription._id}
              className={`rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]
                ${openId === subscription._id ? "relative z-50" : "relative"}`}
            >
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row gap-4">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-amber-50 ring-1 ring-white/6"
                    style={{ backgroundColor: subscription.brandColor }}
                  >
                    <span className="text-xl font-bold">
                      {subscription.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-semibold text-amber-50">
                      {subscription.name}
                    </h3>
                    <span className="text-sm text-amber-100/62">
                      {subscription.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div
                    className={`flex flex-row items-center gap-2 rounded-full border px-4 py-1 ${statusClasses.badge}`}
                  >
                    <div
                      className={`h-2 w-2 rounded-full ${statusClasses.dot}`}
                    ></div>
                    <span
                      className={`text-sm capitalize ${statusClasses.text}`}
                    >
                      {subscription.status}
                    </span>
                  </div>

                  <div className="relative inline-block">
                    <button
                      onClick={() =>
                        setOpenId((prev) =>
                          prev === subscription._id ? null : subscription._id
                        )
                      }
                      className="flex cursor-pointer gap-1 rounded-md p-2 hover:bg-white/10 transition"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-white/60"></div>
                    </button>

                    {openId === subscription._id && (
                      <ul
                        role="menu"
                        className="absolute z-50 right-0 mt-2 w-40 rounded-xl border border-white/10 bg-zinc-900 shadow-xl backdrop-blur"
                      >
                        <li>
                          <button
                            onClick={openEdit}
                            className="w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                          >
                            Edit
                          </button>
                        </li>

                        <li>
                          <button
                            onClick={() => handlePause(subscription._id)}
                            className="w-full px-4 py-2 text-left text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
                          >
                            Pause
                          </button>
                        </li>

                        <li className="border-t border-white/10" />

                        <li>
                          <button
                            onClick={() => handleCancel(subscription._id)}
                            className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={() => handleDelete(subscription._id)}
                            className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 hover:text-red-300 transition"
                          >
                            Delete
                          </button>
                        </li>
                      </ul>
                    )}
                  </div>

                  {isEditOpen && <EditSubscription onClose={closeEdit} />}
                </div>
              </div>
              <div className="mt-3 flex flex-row justify-between">
                <div>
                  <span className="text-amber-50">
                    {subscription.price} kr{" "}
                    <span className="text-amber-50/55">
                      /{subscription.billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </span>
                  <span className="ml-5 text-amber-50/55">
                    {formatBillingDate(subscription.nextBillingDate)}
                  </span>
                </div>
                <div>
                  <span className="text-sm text-amber-50/55">
                    {subscription.billingCycle === "monthly"
                      ? "Monthly"
                      : "Yearly"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default YourSubscription;
