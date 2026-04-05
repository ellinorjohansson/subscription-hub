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

  return (
    <SubscriptionsContext.Provider value={{ subscriptions, addSubscription }}>
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
