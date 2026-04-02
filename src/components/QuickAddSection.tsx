const QuickAddSection = () => {
  return (
    <section className="px-10 md:px-30">
      <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-amber-100/60">
        Quick add from history
      </h2>
      <div className="flex flex-row gap-2">
        <button className="flex cursor-pointer flex-row items-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-5 py-2 text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50">
          <div className="bg-red-700 w-4 h-4 rounded-full"></div>
          Netflix
        </button>
        <button className="flex cursor-pointer flex-row items-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-5 py-2 text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50">
          <div className="bg-blue-500 w-4 h-4 rounded-full"></div>
          Disney +
        </button>
        <button className="flex cursor-pointer flex-row items-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-5 py-2 text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50">
          <div className="bg-green-600 w-4 h-4 rounded-full"></div>
          Spotify
        </button>
        <button className="flex cursor-pointer flex-row items-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-5 py-2 text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50">
          <div className="bg-yellow-300 w-4 h-4 rounded-full"></div>
          Snapchat
        </button>
      </div>
    </section>
  );
};

export default QuickAddSection;