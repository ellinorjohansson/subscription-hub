"use client";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ISubscription } from "../models/Subscriptions";
import { useSubscriptions } from "@/src/context/SubscriptionsContext";

// The overlay renders through a portal into document.body, so even though the open state still lived in ex Header, the overlay itself is no longer nested inside the header layout. So it sits on top of the whole page.

interface AddSubscriptionProps {
  onClose: () => void;
}

const AddSubscription = ({ onClose }: AddSubscriptionProps) => {
  const { addSubscription } = useSubscriptions();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [billingCycle, setBillingCycle] =
    useState<ISubscription["billingCycle"]>("monthly");
  const [category, setCategory] = useState("Other");
  const [nextBillingDate, setNextBillingDate] = useState("");
  const [brandColor, setBrandingColor] = useState("#f59e0b");

  const handleSubmit = async (
    e: React.SyntheticEvent<HTMLFormElement, SubmitEvent>
  ) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/subscriptions", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          price,
          billingCycle,
          category,
          nextBillingDate,
          brandColor,
        }),
      });

      const result = await response.json();

      if (result.success) {
        addSubscription(result.data);
        setName("");
        setPrice("");
        setBillingCycle("monthly");
        setCategory("Other");
        setNextBillingDate("");
        setBrandingColor("#f59e0b");
        onClose();
      } else {
        console.log("Something went wrong");
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  // Prevent background scrolling while the modal is open.
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);
  // So the overlay opens on top of everything
  if (typeof document === "undefined") {
    return null;
  }
  // CreatePortal so it opens on top of everything
  return createPortal(
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 px-4 py-6 backdrop-blur-sm">
      <div className="flex min-h-full items-start justify-center sm:items-center">
        <div className="w-full max-w-2xl rounded-2xl border border-amber-200/10 bg-black/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)]">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-xl font-bold">Add subscription</h2>
            <button
              className="cursor-pointer text-2xl text-amber-50/70 hover:text-white"
              onClick={onClose}
            >
              x
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <label className="block">
              <h3 className="mb-1">Name</h3>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder="e.g Netflix"
                type="text"
                required
                className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
              />
            </label>

            <div className="flex gap-5 mt-5">
              <label className="flex-1">
                <h3 className="mb-1">Price (SEK)</h3>
                <input
                  value={price}
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="109"
                  type="number"
                  min="0"
                  step="0.01"
                  required
                  className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
                />
              </label>

              <label className="flex-1">
                <h3 className="mb-1">Billing cycle</h3>
                <select
                  value={billingCycle}
                  onChange={(event) =>
                    setBillingCycle(
                      event.target.value as ISubscription["billingCycle"]
                    )
                  }
                  className="w-full px-3 py-2 rounded-lg border border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition cursor-pointer appearance-none"
                >
                  <option value="monthly" className="bg-zinc-900">
                    Monthly
                  </option>
                  <option value="yearly" className="bg-zinc-900">
                    Yearly
                  </option>
                </select>
              </label>
            </div>

            <label className="block mt-5">
              <h3 className="mb-1">Category</h3>
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="border cursor-pointer rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
              >
                <option value="Other" className="bg-zinc-900">
                  Other
                </option>
                <option value="Entertainment" className="bg-zinc-900">
                  Entertainment
                </option>
                <option value="Software" className="bg-zinc-900">
                  Software
                </option>
                <option value="Health" className="bg-zinc-900">
                  Health
                </option>
                <option value="Storage" className="bg-zinc-900">
                  Storage
                </option>
                <option value="Shopping" className="bg-zinc-900">
                  Shopping
                </option>
                <option value="Productivity" className="bg-zinc-900">
                  Productivity
                </option>
                <option value="News" className="bg-zinc-900">
                  News
                </option>
                <option value="music" className="bg-zinc-900">
                  Music
                </option>
                <option value="gaming" className="bg-zinc-900">
                  Gaming
                </option>
              </select>
            </label>

            <label className="block mt-5">
              <h3 className="mb-1">Next billing date</h3>
              <input
                value={nextBillingDate}
                onChange={(event) => setNextBillingDate(event.target.value)}
                type="date"
                className="border cursor-pointer rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
              />
            </label>

            <label className="block mt-5">
              <h3 className="mb-1">Branding color</h3>
              <div className="flex gap-2 items-center">
                <input
                  type="color"
                  value={brandColor}
                  onChange={(e) => setBrandingColor(e.target.value)}
                  className="w-12 h-11 px-2 py-1 border rounded-lg cursor-pointer border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
                />

                <input
                  type="text"
                  value={brandColor}
                  onChange={(e) => setBrandingColor(e.target.value)}
                  className="border rounded-lg px-3 py-2 w-full  border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
                />
              </div>
            </label>

            <div className="flex gap-3 justify-end mt-10">
              <button
                type="button"
                className="border border-amber-50/40 rounded-lg px-3 py-1 hover:bg-white/5"
                onClick={onClose}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-lg px-3 py-1 border border-amber-300/15 bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] text-amber-50 shadow-[0_10px_30px_rgba(180,83,9,0.28)] transition duration-200 hover:brightness-110"
              >
                Add subscription
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default AddSubscription;
