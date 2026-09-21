import React from "react";
import { Bell, UserCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar() {
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
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-slate-900">{title}</h1>
        <p className="text-xs text-slate-500">{subtitle}</p>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-6">
        <input
          type="search"
          placeholder="Search..."
          className="w-full px-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-teal-500"
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-5">
        {/* Notification */}
        <button
          type="button"
          className="relative text-slate-500 hover:text-slate-800"
        >
          <Bell size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <UserCircle size={34} className="text-slate-400" />
          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-900">
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