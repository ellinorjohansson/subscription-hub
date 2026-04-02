const YourSubscription = () => {
  return (
    <section className="px-10 md:px-60 mt-22">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <h2 className="mb-3 text-2xl font-semibold tracking-tight text-amber-50">
          Your Subscription
        </h2>
        <div className="grid w-full grid-cols-2 gap-2 md:inline-flex md:w-auto md:gap-0 md:overflow-hidden md:rounded-xl md:border md:border-amber-200/10 md:bg-white/4 md:shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] md:backdrop-blur-sm">
          <button className="cursor-pointer rounded-xl bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] px-6 py-2 text-center text-amber-50 shadow-[0_8px_30px_rgba(180,83,9,0.2)] md:rounded-none md:px-8">
            All 7
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 md:rounded-none md:border-0 md:bg-transparent md:px-8">
            Active 4
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 md:rounded-none md:border-0 md:bg-transparent md:px-8">
            Paused 2
          </button>
          <button className="cursor-pointer rounded-xl border border-amber-200/10 bg-white/4 px-6 py-2 text-center text-amber-100/72 transition duration-200 hover:bg-white/6 hover:text-amber-50 md:rounded-none md:border-0 md:bg-transparent md:px-8">
            Canceled 1
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 py-12">
        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-600/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">N</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">Netflix</h3>
                <span className="text-sm text-amber-100/62">Entertainment</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-green-400/10 bg-green-500/10 px-4 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">169 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Jan 15</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-green-700/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">Spotify</h3>
                <span className="text-sm text-amber-100/62">Music</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-green-400/10 bg-green-500/10 px-4 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">109 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Jan 8</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-orange-500/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">Adobe Creative Cloud</h3>
                <span className="text-sm text-amber-100/62">Software</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-green-400/10 bg-green-500/10 px-4 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">341 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Jan 8</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Yearly</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-sky-500/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">Gym Membership</h3>
                <span className="text-sm text-amber-100/62">Health</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-yellow-300/12 bg-yellow-300/10 px-4 py-1">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm text-yellow-300">Paused</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">449 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Feb 4</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-fuchsia-600/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">H</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">HBO Max</h3>
                <span className="text-sm text-amber-100/62">Entertainment</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-red-400/12 bg-red-500/10 px-4 py-1">
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                <span className="text-sm text-red-300">Canceled</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">179 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Jan 8</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-yellow-500/24 text-amber-50 ring-1 ring-white/6">
                <span className="text-xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-semibold text-amber-50">Snapchat</h3>
                <span className="text-sm text-amber-100/62">Social</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center gap-2 rounded-full border border-green-400/10 bg-green-500/10 px-4 py-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-green-400">Active</span>
              </div>
              <button className="flex flex-row cursor-pointer gap-0.5">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
              </button>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <div>
              <span className="text-amber-50">89 kr <span className="text-amber-50/55">/mo</span></span>
              <span className="ml-5 text-amber-50/55">Jan 8</span>
            </div>
            <div>
              <span className="text-sm text-amber-50/55">Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourSubscription;