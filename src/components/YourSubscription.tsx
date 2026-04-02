const YourSubscription = () => {
  return (
    <section className="px-10 md:px-30 mt-22">
      <div className="flex flex-col md:flex-row justify-between">
        <h2 className="text-2xl mb-3">Your Subscription</h2>
        <div className="inline-flex rounded-lg overflow-hidden bg-gray-50/5">
          <button className="px-14 md:px-8 bg-amber-700 cursor-pointer">
            All 7
          </button>
          <button className="px-14 md:px-8 cursor-pointer">
            Active 4
          </button>
          <button className="px-14 md:px-8 cursor-pointer">
            Paused 2
          </button>
          <button className="px-14 md:px-8 cursor-pointer">
            Canceled 1
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-5 py-12">
        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-red-700 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">N</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Netflix</h3>
                <span className="text-amber-50/90 text-sm">Entertainment</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-green-900/60 gap-2 px-4 py-0.5 rounded-full">
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
              <span>169 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Jan 15</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-green-700 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Spotify</h3>
                <span className="text-amber-50/90 text-sm">Music</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-green-900/60 gap-2 px-4 py-0.5 rounded-full">
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
              <span>109 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Jan 8</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-green-700 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">A</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Adobe Creative Cloud</h3>
                <span className="text-amber-50/90 text-sm">Software</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-green-900/60 gap-2 px-4 py-0.5 rounded-full">
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
              <span>341 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Jan 8</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Yearly</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-blue-400 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">G</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Gym Membership</h3>
                <span className="text-amber-50/90 text-sm">Health</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-yellow-300/20 gap-2 px-4 py-0.5 rounded-full">
                <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
                <span className="text-sm text-yellow-600">Paused</span>
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
              <span>449 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Feb 4</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-purple-700 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">H</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">HBO Max</h3>
                <span className="text-amber-50/90 text-sm">Entertainment</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-red-700/20 gap-2 px-4 py-0.5 rounded-full">
                <div className="w-2 h-2 bg-red-700 rounded-full"></div>
                <span className="text-sm text-red-700">Canceled</span>
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
              <span>179 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Jan 8</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Monthly</span>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-amber-800/20 px-8 py-4">
          <div className="flex flex-row justify-between items-center">
            <div className="flex flex-row gap-4">
              <div className="bg-yellow-600 p-2 rounded-xl w-12 h-12 grid place-items-center">
                <span className="text-xl font-bold">S</span>
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold">Snapchat</h3>
                <span className="text-amber-50/90 text-sm">Social</span>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center">
              <div className="flex flex-row items-center bg-green-900/60 gap-2 px-4 py-0.5 rounded-full">
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
              <span>89 kr <span className="text-amber-50/70">/mo</span></span>
              <span className="ml-5 text-amber-50/70">Jan 8</span>
            </div>
            <div>
              <span className="text-amber-50/70 text-sm">Monthly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourSubscription;