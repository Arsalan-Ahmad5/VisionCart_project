import React from "react";
import { Link } from "react-router-dom";
import { Camera, ScanSearch, CreditCard, ShoppingBag, ArrowRight } from "lucide-react";
import { detectionLogs, transactions } from "../../data/landingdata";

function SupervisorDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">
            Supervisor Operations Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            Real-time checkout monitoring and retail operations
          </p>
        </div>

        <Link
          to="/supervisor/live-checkout"
          className="inline-flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2.5 rounded-lg text-sm font-semibold shadow-sm transition"
        >
          <Camera size={18} />
          Launch Live Checkout
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-slate-500">Live Cameras</p>
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
          </div>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">2 Active</h2>
          <p className="mt-2 text-xs text-green-600 font-medium">
            Camera 01 & 02 Online
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Total Detections</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">1,284</h2>
          <p className="mt-2 text-xs text-teal-700 font-medium">
            94.6% Avg Confidence
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Today's Transactions</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">₹1,210</h2>
          <p className="mt-2 text-xs text-green-600 font-medium">
            4 Recorded Checkouts
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-medium text-slate-500">Completed Orders</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">4 Orders</h2>
          <p className="mt-2 text-xs text-slate-500">
            1 Walk-in pending
          </p>
        </div>
      </div>

      {/* Main sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Detections */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <ScanSearch className="h-5 w-5 text-teal-700" />
              <h2 className="text-base font-semibold text-slate-900">
                Recent AI Detections
              </h2>
            </div>
            <Link
              to="/supervisor/detection-logs"
              className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {detectionLogs.slice(0, 4).map((log) => (
              <div key={log.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{log.product}</p>
                  <p className="text-xs text-slate-500">
                    {log.camera} • {log.timestamp}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-0.5 rounded text-xs font-semibold bg-teal-50 text-teal-700">
                    {log.confidence}
                  </span >
                  <p className="text-xs text-slate-500 mt-1">Qty: {log.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-5 w-5 text-teal-700" />
              <h2 className="text-base font-semibold text-slate-900">
                Recent Checkout Transactions
              </h2>
            </div>
            <Link
              to="/supervisor/transactions"
              className="text-xs font-semibold text-teal-700 hover:text-teal-800 flex items-center gap-1"
            >
              View all <ArrowRight size={12} />
            </Link>
          </div>

          <div className="divide-y divide-slate-100">
            {transactions.slice(0, 4).map((txn) => (
              <div key={txn.id} className="py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{txn.id}</p>
                  <p className="text-xs text-slate-500">
                    {txn.method} • {txn.date}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-slate-900">₹{txn.amount}</p>
                  <span
                    className={`inline-block px-2 py-0.5 rounded text-[11px] font-semibold mt-1 ${
                      txn.status === "Success"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {txn.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupervisorDashboard;
