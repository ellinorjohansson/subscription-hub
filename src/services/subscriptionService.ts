import { ISubscription } from "../models/Subscriptions";

export async function getSubscriptions(): Promise<ISubscription[]> {
  try {
    const res = await fetch(
      // Get your data from your API. If this NEXT_PUBLIC exist use it or else use localhost
      `${process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"}/api/subscriptions`,
      {
        cache: "no-store", // dont cache the answer, always get new fresh data
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch subscriptions"); // if server answer with 500 or 404 -> throw error
    }

    const data = await res.json(); // convert to json if
    return data.data || []; // if data.data exist return it or else empty array
  } catch (error) { // if something went wrong throw error
    console.error("Error fetching subscriptions:", error);
    return [];
  }
}