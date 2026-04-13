"use client";
import { useEffect, useState } from "react";

type Activity = {
  _id: string;
  subscriptionId: string;
  subscriptionName: string;
  eventType: "created" | "paused" | "canceled";
  message: string;
  occurredAt: string | Date;
};

const formatDate = (value: string | Date) => {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return "";
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

const RecentActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const loadActivities = async () => {
      try {
        setHasError(false);

        const response = await fetch("/api/activities?limit=10", {
          cache: "no-store",
        });

        const result = await response.json();

        if (response.ok && result.success) {
          setActivities(result.data ?? []);
        } else {
          setHasError(true);
        }
      } catch (error) {
        console.error("Failed to load activities:", error);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    loadActivities();

    const handleActivityChanged = () => {
      loadActivities();
    };

    window.addEventListener("activity:changed", handleActivityChanged);

    return () => {
      window.removeEventListener("activity:changed", handleActivityChanged);
    };
  }, []);

  return (
    <section className="px-10 lg:pr-40 mb-20 mt-0 lg:mt-22">
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
        <h2 className="font-bold text-lg text-amber-50 mb-4">
          Recent Activity
        </h2>

        {isLoading ? (
          <p className="text-sm text-amber-50/70">Loading activity...</p>
        ) : hasError ? (
          <p className="text-sm text-red-300">Failed to load recent activity</p>
        ) : activities.length === 0 ? (
          <p className="text-sm text-amber-50/70">No recent activity yet</p>
        ) : (
          <ol>
            {activities.map((activity) => (
              <li
                key={activity._id}
                className="flex flex-row justify-between mb-2 px-3 py-2 rounded-2xl hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]"
              >
                <div className="flex flex-col">
                  <h3 className="text-amber-50">{activity.subscriptionName}</h3>
                  <span className="text-amber-50/70 text-sm">
                    {activity.message}
                  </span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-amber-50/70 text-sm">
                    {formatDate(activity.occurredAt)}
                  </span>
                </div>
              </li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
};

export default RecentActivity;
