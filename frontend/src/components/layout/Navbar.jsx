import React from 'react'
import {Bell,UserCircle} from 'lucide-react'
function Navbar() {
  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h1>
        <p className="text-xs text-slate-500">
          Retail operations overview
        </p>
      </div>

    <div className="hidden md:flex flex-1 max-w-md">
  <input
    type="search"
    placeholder="Search..."
    className="w-full px-4 py-2 border border-slate-200 rounded-lg
               focus:outline-none focus:border-teal-500"
  />
</div>

      {/* Right */}
      <div className="flex items-center gap-5">

        {/* Notification */}
        <button className="relative text-slate-500 hover:text-slate-800">
          <Bell size={20} />

          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* User */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <UserCircle size={34} className="text-slate-400" />

          <div className="leading-tight">
            <p className="text-sm font-medium text-slate-900">
              Arpit Verma
            </p>
            <p className="text-xs text-slate-500">
              Administrator
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;
  