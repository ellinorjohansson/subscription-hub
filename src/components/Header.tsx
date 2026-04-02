const Header = () => {
  return (
    <header className="flex flex-row justify-between bg-grey px-30 py-8 items-center shadow-md">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-amber-100">Subtracker</h1>
        <span className="text-sm text-amber-100/80">Manage your subscriptions</span>
      </div>
      <div>
        <button className="rounded-xl bg-amber-700 px-5 py-2 cursor-pointer">+ Add Subscription</button>
      </div>
    </header>
  )
}

export default Header;