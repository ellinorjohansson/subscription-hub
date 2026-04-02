const Header = () => {
  return (
    <header className="sticky top-0 z-30 flex flex-row items-center justify-between border-b border-amber-200/8 bg-[linear-gradient(180deg,rgba(18,15,11,0.88),rgba(18,15,11,0.55))] px-10 py-8 backdrop-blur-xl md:px-30">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold tracking-[0.02em] text-amber-50">
          Subtracker
        </h1>
        <span className="text-sm text-amber-100/65">
          Manage your subscriptions
        </span>
      </div>
      <div>
        <button className="cursor-pointer rounded-xl border border-amber-300/15 bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] px-5 py-2 text-sm font-medium text-amber-50 shadow-[0_10px_30px_rgba(180,83,9,0.28)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110">
          + Add Subscription
        </button>
      </div>
    </header>
  );
};

export default Header;