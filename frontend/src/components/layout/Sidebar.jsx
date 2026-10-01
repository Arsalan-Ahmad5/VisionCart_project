import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Boxes,
  Users,
  Camera,
  ScanSearch,
  CreditCard,
  ShoppingBag,
  UserCircle,
  LogOut,
  X,
} from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Sidebar({ isOpen = false, onClose = () => {} }) {
  const { role, user, logout } = useAuth();
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);

  // Define role-specific menus
  const adminMenuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Products", path: "/admin/products", icon: Package },
    { name: "Inventory", path: "/admin/inventory", icon: Boxes },
    { name: "Users", path: "/admin/users", icon: Users },
  ];

  const supervisorMenuItems = [
    { name: "Dashboard", path: "/supervisor/dashboard", icon: LayoutDashboard },
    { name: "Live Checkout", path: "/supervisor/live-checkout", icon: Camera },
    { name: "Detection Logs", path: "/supervisor/detection-logs", icon: ScanSearch },
    { name: "Transactions", path: "/supervisor/transactions", icon: CreditCard },
    { name: "Orders", path: "/supervisor/orders", icon: ShoppingBag },
  ];

  const menuItems = role === "admin" ? adminMenuItems : role === "supervisor" ? supervisorMenuItems : [];

  const handleLogout = () => {
    onClose();
    logout();
    navigate("/login");
  };

  const dashboardPath = role === "admin" ? "/admin/dashboard" : role === "supervisor" ? "/supervisor/dashboard" : "/login";

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/60 backdrop-blur-xs lg:hidden transition-opacity"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-64 min-h-screen bg-slate-900 text-white flex flex-col justify-between select-none transition-transform duration-300 ease-in-out lg:static lg:translate-x-0 ${
          isOpen ? "translate-x-0 shadow-2xl" : "-translate-x-full"
        }`}
      >
        <div>
          {/* Brand Header */}
          <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
            <Link
              to={dashboardPath}
              onClick={onClose}
              className="flex items-center gap-2.5"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-slate-900 font-bold text-sm">
                V
              </div>
              <h1 className="text-xl font-bold tracking-tight">
                Vision<span className="text-teal-500">Cart</span>
              </h1>
            </Link>

            {/* Close button on mobile */}
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
              aria-label="Close sidebar"
            >
              <X size={18} />
            </button>
          </div>

          {/* Navigation */}
          <nav className="px-3 py-6">
            <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
              {role === "admin" ? "Administration" : role === "supervisor" ? "Checkout Operations" : "Menu"}
            </p>

            <div className="space-y-1">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${
                        isActive
                          ? "bg-teal-600 text-white shadow-sm"
                          : "text-slate-300 hover:bg-slate-800 hover:text-white"
                      }`
                    }
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </NavLink>
                );
              })}
            </div>
          </nav>
        </div>

        {/* Bottom Section: Profile & Logout */}
        <div className="border-t border-slate-800 p-3 space-y-1">
          {/* Profile Item */}
          <button
            type="button"
            onClick={() => setShowProfileModal(true)}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition text-left"
          >
            <UserCircle size={18} className="text-teal-400" />
            <div className="flex-1 min-w-0">
              <p className="truncate text-sm font-medium">{user?.name || "Profile"}</p>
              <p className="text-[11px] text-slate-400 capitalize">{role || "User"}</p>
            </div>
          </button>

          {/* Logout Item */}
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 hover:text-red-300 transition text-left"
          >
            <LogOut size={18} />
            <span>Logout</span>
          </button>

          {/* System Footer Note */}
          <div className="pt-3 px-3">
            <p className="text-[11px] text-slate-400">VisionCart Retail v1.0</p>
          </div>
        </div>
      </aside>

      {/* Profile Modal */}
      {showProfileModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-sm w-full p-6 border border-slate-200">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <h2 className="text-base font-semibold text-slate-900">User Profile</h2>
              <button
                onClick={() => setShowProfileModal(false)}
                className="text-slate-400 hover:text-slate-600 rounded-md p-1"
              >
                <X size={18} />
              </button>
            </div>

            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-lg">
                  {user?.name ? user.name.charAt(0).toUpperCase() : "U"}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{user?.name || "VisionCart User"}</h3>
                  <p className="text-xs text-slate-500">{user?.email}</p>
                </div>
              </div>

              <div className="rounded-lg bg-slate-50 p-3 text-xs space-y-1.5 border border-slate-100">
                <div className="flex justify-between">
                  <span className="text-slate-500">User ID:</span>
                  <span className="font-medium text-slate-700">{user?.id ?? "N/A"}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Role:</span>
                  <span className="font-semibold uppercase tracking-wider text-teal-700">{role}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Access Scope:</span>
                  <span className="font-medium text-slate-700">
                    {role === "admin" ? "Full System & Inventory Management" : "Live Retail Checkout & Logs"}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-5 flex gap-2">
              <button
                type="button"
                onClick={() => setShowProfileModal(false)}
                className="flex-1 rounded-lg border border-slate-300 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50"
              >
                Close
              </button>
              <button
                type="button"
                onClick={handleLogout}
                className="flex-1 rounded-lg bg-red-600 py-2 text-xs font-semibold text-white hover:bg-red-700"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;