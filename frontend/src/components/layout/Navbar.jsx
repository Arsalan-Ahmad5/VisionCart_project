import React from "react";
import { Bell, UserCircle, Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar({ onToggleSidebar }) {
  const { user, role } = useAuth();

  const title =
    role === "admin"
      ? "Admin Console"
      : role === "supervisor"
      ? "Supervisor Operations"
      : "Dashboard";

  const subtitle =
    role === "admin"
      ? "Retail operations & inventory management"
      : role === "supervisor"
      ? "Live checkout & detection monitoring"
      : "Retail operations overview";

  const roleDisplay =
    role === "admin"
      ? "Administrator"
      : role === "supervisor"
      ? "Supervisor"
      : "Guest";

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-6">
      {/* Left: Hamburger + Title */}
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="lg:hidden p-2 -ml-1 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-none transition shrink-0"
          aria-label="Open navigation menu"
        >
          <Menu size={20} />
        </button>

        <div className="min-w-0">
          <h1 className="text-base sm:text-lg font-semibold text-slate-900 truncate">
            {title}
          </h1>
          <p className="hidden sm:block text-xs text-slate-500 truncate">
            {subtitle}
          </p>
        </div>
      </div>

      {/* Center Search (desktop/tablet) */}
      <div className="hidden md:flex flex-1 max-w-md mx-6">
        <input
          type="search"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-3 sm:gap-5 shrink-0">
        {/* Notification */}
        <button
          type="button"
          className="relative text-slate-500 hover:text-slate-800 p-1 rounded-full transition"
          aria-label="Notifications"
        >
          <Bell size={20} />
          <span className="absolute 0 top-0.5 right-0.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-2 sm:gap-3 pl-3 sm:pl-4 border-l border-slate-200">
          <UserCircle size={32} className="text-slate-400 shrink-0" />
          <div className="hidden sm:block leading-tight text-left">
            <p className="text-sm font-medium text-slate-900 truncate max-w-[130px]">
              {user?.name || "VisionCart User"}
            </p>
            <p className="text-xs text-slate-500 capitalize">{roleDisplay}</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;