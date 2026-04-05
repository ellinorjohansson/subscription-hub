"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useState,
} from "react";
import type { ISubscription } from "../models/Subscriptions";

type SubscriptionsContextValue = {
  subscriptions: ISubscription[];
  addSubscription: (subscription: ISubscription) => void;
};

const SubscriptionsContext = createContext<SubscriptionsContextValue | undefined>(
  undefined
);

export const SubscriptionsProvider = ({ children }: { children: ReactNode }) => {
  const [subscriptions, setSubscriptions] = useState<ISubscription[]>([]);

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
    throw new Error("useSubscriptions must be used within a SubscriptionsProvider");
  }

  return context;
};