"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import type { ISubscription } from "../models/Subscriptions";

type SubscriptionsContextValue = {
  subscriptions: ISubscription[];
  addSubscription: (subscription: ISubscription) => void;
  updateSubscription: (id: string, updates: Partial<ISubscription>) => void;
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

  useEffect(() => {
    const loadSubscriptions = async () => {
      try {
        const response = await fetch("/api/subscriptions", {
          cache: "no-store",
        });
        const result = await response.json();

        if (response.ok && result.success) {
          setSubscriptions(result.data ?? []);
        }
      } catch (error) {
        console.error("Failed to load subscriptions:", error);
      }
    };

    loadSubscriptions();
  }, []);

  const addSubscription = (subscription: ISubscription) => {
    setSubscriptions((prev) => [...prev, subscription]);
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
          status: updates.status,
        }),
      });

      const result = await res.json();
      if (result.success) {
        setSubscriptions((prev) =>
          prev.map((sub) => (sub._id === id ? result.data : sub))
        );
      } else {
        console.error(result.error);
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <SubscriptionsContext.Provider
      value={{ subscriptions, addSubscription, updateSubscription }}
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
