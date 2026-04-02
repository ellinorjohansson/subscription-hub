const YourSubscription = () => {
  return (
    <section className="px-10 md:px-30 mt-10">
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
    </section>
  )
}

export default YourSubscription;