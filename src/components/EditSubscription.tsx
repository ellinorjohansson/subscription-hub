"use client";
import { useEffect, useState } from "react";

const EditSubscription = () => {
  const [color, setColor] = useState("#f59e0b");

  {/*So page not scroll*/ }
  useEffect(() => {
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.paddingRight = "0px";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="min-w-100 md:min-w-150 rounded-2xl border border-amber-200/10 bg-black/90 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)]">
        <div className="flex justify-between items-center mb-5">
          <h2 className="font-bold text-xl">Edit subscription</h2>
          <button
            className="cursor-pointer text-amber-50/70 text-2xl hover:text-white"
          >
            x
          </button>
        </div>

        <div>
          <label className="block">
            <h3 className="mb-1">Name</h3>
            <input type="text" className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none" />
          </label>

          <div className="flex gap-5 mt-5">
            <label className="flex-1">
              <h3 className="mb-1">Price (SEK)</h3>
              <input type="number" className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none" />
            </label>

            <label className="flex-1">
              <h3 className="mb-1">Billing cycle</h3>
              <select className="w-full px-3 py-2 rounded-lg border border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition cursor-pointer appearance-none">
                <option value="monthly" className="bg-zinc-900">Monthly</option>
                <option value="yearly" className="bg-zinc-900">Yearly</option>
              </select>
            </label>
          </div>

          <label className="block mt-5">
            <h3 className="mb-1">Category</h3>
            <select className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none">
              <option value="entertainment" className="bg-zinc-900">Entertainment</option>
              <option value="entertainment" className="bg-zinc-900">Software</option>
              <option value="entertainment" className="bg-zinc-900">Health</option>
              <option value="entertainment" className="bg-zinc-900">Storage</option>
              <option value="entertainment" className="bg-zinc-900">Shopping</option>
              <option value="entertainment" className="bg-zinc-900">Productivity</option>
              <option value="entertainment" className="bg-zinc-900">News</option>
              <option value="music" className="bg-zinc-900">Music</option>
              <option value="gaming" className="bg-zinc-900">Gaming</option>
              <option value="entertainment" className="bg-zinc-900">Other</option>
            </select>
          </label>

          <label className="block mt-5">
            <h3 className="mb-1">Next billing date</h3>
            <input type="date" className="border rounded-lg w-full px-3 py-2 border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none" />
          </label>

          <label className="block mt-5">
            <h3 className="mb-1">Branding color</h3>
            <div className="flex gap-2 items-center">

              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-12 h-9 px-2 py-1 border rounded-lg cursor-pointer border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
              />

              <input
                type="text"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="border rounded-lg px-2 py-1 w-full  border-amber-200/10 bg-black/30 text-amber-50 backdrop-blur-sm focus:outline-none focus:border-amber-300/30 focus:bg-black/40 transition appearance-none"
              />
            </div>
          </label>

          <div className="flex gap-3 justify-end mt-10">
            <button
              className="border border-amber-50/40 rounded-lg px-3 py-1 hover:bg-white/5"
            >
              Cancel
            </button>

            <button className="rounded-lg px-3 py-1 border border-amber-300/15 bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] text-amber-50 shadow-[0_10px_30px_rgba(180,83,9,0.28)] transition duration-200 hover:brightness-110">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditSubscription;