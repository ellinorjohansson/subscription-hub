"use client";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import AddSubscription from "./AddSubscription";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { data: session, status } = useSession();

  const OpenOverlay = () => setIsOpen(true);
  const CloseOverlay = () => setIsOpen(false);

  const isAuthPage =
    pathname === "/" || pathname === "/login" || pathname === "/signup";

  if (status !== "authenticated" || isAuthPage) {
    return null;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };

  return (
    <header className="sticky top-0 z-30 flex flex-row items-center justify-between border-b border-amber-200/8 bg-[linear-gradient(180deg,rgba(18,15,11,0.88),rgba(18,15,11,0.55))] px-10 py-8 backdrop-blur-xl lg:px-30">
      <div className="flex flex-col">
        <h1 className="text-2xl font-semibold tracking-[0.02em] text-amber-50">
          Subtracker
        </h1>
        <span className="text-sm text-amber-100/65">
          Welcome {session.user.username}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <button
          onClick={OpenOverlay}
          className="flex flex-row cursor-pointer rounded-xl border border-amber-300/15 bg-[linear-gradient(135deg,rgba(217,119,6,0.92),rgba(180,83,9,0.88))] px-5 py-2 text-xl md:text-sm font-medium text-amber-50 shadow-[0_10px_30px_rgba(180,83,9,0.28)] transition duration-200 hover:brightness-110"
        >
          + <span className="hidden md:block ml-1">Add Subscription</span>
        </button>
        <button
          onClick={handleLogout}
          className="cursor-pointer rounded-xl border border-amber-300/20 px-4 py-2 text-sm font-medium text-amber-100 transition hover:bg-amber-100/10"
        >
          Logout
        </button>
        {isOpen && <AddSubscription onClose={CloseOverlay} />}
      </div>
    </header>
  );
};

export default Header;
