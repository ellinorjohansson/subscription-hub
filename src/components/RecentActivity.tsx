const RecentActivity = () => {
  return (
    <section className="px-10 lg:pr-40 mb-20 mt-0 lg:mt-22">
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.06))] px-8 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm transition duration-200 hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
        <h2 className="font-bold text-lg text-amber-50 mb-4">Recent Activity</h2>
        <ol>
          <li className="flex flex-row justify-between mb-2 px-3 py-2 rounded-2xl hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
            <div className="flex flex-col">
              <h3 className="text-amber-50">Netflix</h3>
              <span className="text-amber-50/70 text-sm">Payment processed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-50 text-sm">169 kr</span>
              <span className="text-amber-50/70 text-sm">Dec 15, 2026</span>
            </div>
          </li>

          <li className="flex flex-row justify-between mb-2 px-3 py-2 rounded-2xl hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
            <div className="flex flex-col">
              <h3 className="text-amber-50">Gym membership</h3>
              <span className="text-amber-50/70 text-sm">Subscription paused</span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-50 text-sm h-6"></span>
              <span className="text-amber-50/70 text-sm">Dec 15, 2026</span>
            </div>
          </li>

          <li className="flex flex-row justify-between mb-2 px-3 py-2 rounded-2xl hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
            <div className="flex flex-col">
              <h3 className="text-amber-50">Spotify</h3>
              <span className="text-amber-50/70 text-sm">Payment processed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-50 text-sm">109 kr</span>
              <span className="text-amber-50/70 text-sm">Dec 15, 2026</span>
            </div>
          </li>

          <li className="flex flex-row justify-between mb-2 px-3 py-2 rounded-2xl hover:border-amber-200/16 hover:bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(217,119,6,0.09))]">
            <div className="flex flex-col">
              <h3 className="text-amber-50">HBO Max</h3>
              <span className="text-amber-50/70 text-sm">Subscription canceled</span>
            </div>
            <div className="flex flex-col">
              <span className="text-amber-50 text-sm h-6"></span>
              <span className="text-amber-50/70 text-sm">Dec 15, 2026</span>
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default RecentActivity;