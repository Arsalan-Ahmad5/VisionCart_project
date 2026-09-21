import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShieldAlert, ArrowLeft, LogOut } from "lucide-react";
import { useAuth } from "../context/AuthContext";

function Unauthorized() {
  const { role, user, logout } = useAuth();
  const navigate = useNavigate();

  const handleDashboardRedirect = () => {
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else if (role === "supervisor") {
      navigate("/supervisor/dashboard");
    } else {
      navigate("/login");
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {/* Brand */}
        <div className="mb-6 flex justify-center items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-700 text-sm font-bold text-white">
            V
          </div>
          <span className="text-xl font-bold text-slate-900">
            Vision<span className="text-teal-600">Cart</span>
          </span>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-amber-50 text-amber-600">
            <ShieldAlert className="h-8 w-8" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">Access Denied</h1>
          <p className="mt-2 text-sm text-slate-600">
            You do not have permission to access this resource. This area is restricted to authorized roles.
          </p>

          {user && (
            <div className="mt-4 rounded-lg bg-slate-50 p-3 text-xs text-slate-600 border border-slate-200">
              <p>
                Logged in as: <span className="font-semibold text-slate-900">{user.name || user.email}</span>
              </p>
              <p className="mt-1">
                Role: <span className="font-semibold uppercase tracking-wider text-teal-700">{user.role}</span>
              </p>
            </div>
          )}

          <div className="mt-6 flex flex-col gap-3">
            <button
              onClick={handleDashboardRedirect}
              className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-teal-700 text-sm font-semibold text-white hover:bg-teal-800 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Return to My Dashboard
            </button>

            <button
              onClick={handleLogout}
              className="flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-slate-300 text-sm font-medium text-slate-700 hover:bg-slate-100 transition"
            >
              <LogOut className="h-4 w-4" />
              Sign In With Different Account
            </button>
          </div>
        </div>

        <p className="mt-6 text-xs text-slate-400">
          VisionCart Automated Retail & Inventory System
        </p>
      </div>
    </div>
  );
}

export default Unauthorized;
