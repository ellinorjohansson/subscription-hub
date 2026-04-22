"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSession } from "next-auth/react";
import type { ISubscription } from "../models/Subscriptions";

type SubscriptionsContextValue = {
  subscriptions: ISubscription[];
  addSubscription: (subscription: ISubscription) => void;
  updateSubscription: (id: string, updates: Partial<ISubscription>) => void;
  deleteSubscription: (id: string) => void;
};

const SubscriptionsContext = createContext<
  SubscriptionsContextValue | undefined
>(undefined);

export const SubscriptionsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);
  const { data: session, status } = useSession();
  const userId = session?.user?.id;

  useEffect(() => {
    if (status !== "authenticated" || !userId) {
      return;
    }

    let cancelled = false;

    const loadSubscriptions = async () => {
      try {
        const response = await fetch("/api/subscriptions", {
          cache: "no-store",
        });
        const result = await response.json();

        if (!cancelled && response.ok && result.success) {
          setSubscriptions(result.data ?? []);
        }
      } catch (error) {
        console.error("Failed to load subscriptions:", error);
      }
    };

    loadSubscriptions();

    return () => {
      cancelled = true;
      setSubscriptions([]);
    };
  }, [userId, status]);

  const addSubscription = (subscription: ISubscription) => {
    setSubscriptions((prev) => [subscription, ...prev]);

    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("activity:changed"));
    }
  };

  // Call your API and then the PUT in route.ts starts
  const updateSubscription = async (
    id: string,
    updates: Partial<ISubscription>
  ) => {
    try {
      const res = await fetch("/api/subscriptions", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
          name: updates.name,
          price: updates.price,
          billingCycle: updates.billingCycle,
          category: updates.category,
          brandColor: updates.brandColor,
          status: updates.status,
          nextBillingDate: updates.nextBillingDate,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubscriptions((prev) =>
          prev.map((sub) => (sub._id === id ? result.data : sub))
        );

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("activity:changed"));
        }
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  const deleteSubscription = async (id: string) => {
    try {
      const res = await fetch("/api/subscriptions", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });

      const result = await res.json();

      if (result.success) {
        setSubscriptions((prev) => prev.filter((sub) => sub._id !== id));

        if (typeof window !== "undefined") {
          window.dispatchEvent(new Event("activity:changed"));
        }
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Delete failed:", error);
    }
  };

  return (
    <SubscriptionsContext.Provider
      value={{
        subscriptions,
        addSubscription,
        updateSubscription,
        deleteSubscription,
      }}
    >
      {children}
    </SubscriptionsContext.Provider>
  );
};

export const useSubscriptions = () => {
  const context = useContext(SubscriptionsContext);

  if (!context) {
    throw new Error(
      "useSubscriptions must be used within a SubscriptionsProvider"
    );
  }

  return context;
};
