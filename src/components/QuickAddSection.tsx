const QuickAddSection = () => {
  return (
    <section className="px-10 md:px-60">
      <h2 className="mb-4 text-sm uppercase tracking-[0.18em] text-amber-100/60">
        Quick add from history
      </h2>
      <div className="flex flex-wrap gap-2">
        <button className="flex min-w-[calc(50%-0.25rem)] cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-4 py-2 text-sm text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50 sm:min-w-0 sm:justify-start sm:px-5">
          <div className="h-4 w-4 rounded-full bg-red-700"></div>
          Netflix
        </button>
        <button className="flex min-w-[calc(50%-0.25rem)] cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-4 py-2 text-sm text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50 sm:min-w-0 sm:justify-start sm:px-5">
          <div className="h-4 w-4 rounded-full bg-blue-500"></div>
          Disney +
        </button>
        <button className="flex min-w-[calc(50%-0.25rem)] cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-4 py-2 text-sm text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50 sm:min-w-0 sm:justify-start sm:px-5">
          <div className="h-4 w-4 rounded-full bg-green-600"></div>
          Spotify
        </button>
        <button className="flex min-w-[calc(50%-0.25rem)] cursor-pointer flex-row items-center justify-center gap-2 rounded-xl border border-amber-200/10 bg-white/3 px-4 py-2 text-sm text-amber-50/88 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition duration-200 hover:border-amber-300/20 hover:bg-amber-300/8 hover:text-amber-50 sm:min-w-0 sm:justify-start sm:px-5">
          <div className="h-4 w-4 rounded-full bg-yellow-300"></div>
          Snapchat
        </button>
      </div>
    </section>
  );
};

export default QuickAddSection;