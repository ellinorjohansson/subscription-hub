const QuickAddSection = () => {
  return (
    <section className="px-30">
      <h2 className="text-amber-50/90 mb-2">Quick add from history</h2>
      <div className="flex flex-row gap-2">
        <button className="cursor-pointer flex flex-row items-center gap-2 border border-amber-800 rounded-lg px-5 py-1">
          <div className="bg-red-700 w-4 h-4 rounded-full"></div>
          Netflix
        </button>
        <button className="cursor-pointer flex flex-row items-center gap-2 border border-amber-800 rounded-lg px-5 py-1">
          <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
          Disney +
        </button>
        <button className="cursor-pointer flex flex-row items-center gap-2 border border-amber-800 rounded-lg px-5 py-1">
          <div className="bg-green-600 w-4 h-4 rounded-full"></div>
          Spotify
        </button>
        <button className="cursor-pointer flex flex-row items-center gap-2 border border-amber-800 rounded-lg px-5 py-1">
          <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
          Snapchat
        </button>
      </div>
    </section>
  )
}

export default QuickAddSection;