const OverviewSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-4 px-30 py-10">
      <div className="rounded-xl bg-amber-800/20 px-10 py-4">
        <h2 className="text-amber-50/90">Monthly spend</h2>
        <span className="text-amber-50 text-2xl">848 kr</span>
      </div>
      <div className="rounded-xl bg-amber-800/20 px-10 py-4">
        <h2 className="text-amber-50/90">Yearly estimate</h2>
        <span className="text-amber-50 text-2xl">10 430 kr</span>
      </div>
      <div className="rounded-xl bg-amber-800/20 px-10 py-4">
        <h2 className="text-amber-50/90">Active</h2>
        <span className="text-amber-50 text-2xl">4</span>
      </div>
      <div className="rounded-xl bg-amber-800/20 px-10 py-4">
        <h2 className="text-amber-50/90">Paused</h2>
        <span className="text-amber-50 text-2xl">2</span>
      </div>
    </section>
  )
}

export default OverviewSection;