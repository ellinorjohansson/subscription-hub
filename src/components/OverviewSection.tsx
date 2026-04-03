const OverviewSection = () => {
  return (
    <section className="grid grid-cols-1 gap-4 px-10 py-10 lg:grid-cols-2 lg:gap-4 lg:px-40">
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.08))] px-10 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <h2 className="text-sm uppercase tracking-[0.18em] text-amber-100/55">
          Monthly spend
        </h2>
        <span className="mt-2 block text-3xl font-semibold tracking-tight text-amber-50">
          848 kr
        </span>
      </div>
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.08))] px-10 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <h2 className="text-sm uppercase tracking-[0.18em] text-amber-100/55">
          Yearly estimate
        </h2>
        <span className="mt-2 block text-3xl font-semibold tracking-tight text-amber-50">
          10 430 kr
        </span>
      </div>
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.08))] px-10 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <h2 className="text-sm uppercase tracking-[0.18em] text-amber-100/55">
          Active
        </h2>
        <span className="mt-2 block text-3xl font-semibold tracking-tight text-amber-50">
          4
        </span>
      </div>
      <div className="rounded-2xl border border-amber-200/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(217,119,6,0.08))] px-10 py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04),0_18px_60px_rgba(0,0,0,0.22)] backdrop-blur-sm">
        <h2 className="text-sm uppercase tracking-[0.18em] text-amber-100/55">
          Paused
        </h2>
        <span className="mt-2 block text-3xl font-semibold tracking-tight text-amber-50">
          2
        </span>
      </div>
    </section>
  );
};

export default OverviewSection;