"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import type { Subscription } from "../types/subscriptions";

type SubscriptionsContextValue = {
  subscriptions: Subscription[];
  addSubscription: (subscription: Subscription) => void;
};

const SubscriptionsContext = createContext<SubscriptionsContextValue | undefined>(
  undefined
);

export const SubscriptionsProvider = ({ children }: { children: ReactNode }) => {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);

  const addSubscription = (subscription: Subscription) => {
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
    throw new Error("useSubscriptions must be used within a SubscriptionsProvider");
  }

  return context;
};