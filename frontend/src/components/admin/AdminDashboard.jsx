import React from 'react'

function AdminDashboard() {
  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        {/* <h1 className="text-2xl font-semibold text-slate-900">
          Dashboard
        </h1> */}

        <h1 className="mt-1 text-m text-slate-500">
          Overview of your retail operations
        </h1>
      </div>


      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Revenue</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            ₹24,580
          </h2>
          <p className="mt-2 text-xs text-green-600">
            +12.5% this month
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            128
          </h2>
          <p className="mt-2 text-xs text-green-600">
            +8.2% this month
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Products</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            42
          </h2>
          <p className="mt-2 text-xs text-slate-500">
            Active products
          </p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Low Stock</p>
          <h2 className="mt-2 text-2xl font-bold text-slate-900">
            7
          </h2>
          <p className="mt-2 text-xs text-amber-600">
            Needs attention
          </p>
        </div>

      </div>


      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Sales Overview */}
        <div className="col-span-1 lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-slate-900">
                Sales Overview
              </h2>

              <p className="text-sm text-slate-500 mt-1">
                Revenue performance
              </p>
            </div>

            <select className="text-sm border border-slate-200 rounded-lg px-3 py-2 w-full sm:w-auto">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <div className="h-64 flex items-center justify-center text-sm text-slate-400">
            Sales chart will appear here
          </div>

        </div>


        {/* Inventory Status */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">

          <h2 className="text-base font-semibold text-slate-900">
            Inventory Status
          </h2>

          <p className="text-sm text-slate-500 mt-1">
            Current stock overview
          </p>

          <div className="mt-6 space-y-5">

            <div className="flex justify-between">
              <span className="text-sm text-slate-600">
                In Stock
              </span>
              <span className="text-sm font-semibold text-green-600">
                35
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-600">
                Low Stock
              </span>
              <span className="text-sm font-semibold text-amber-600">
                7
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-600">
                Out of Stock
              </span>
              <span className="text-sm font-semibold text-red-600">
                2
              </span>
            </div>

          </div>

        </div>

      </div>


      {/* Bottom Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* Recent Orders */}
        <div className="col-span-1 lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Recent Orders
            </h2>

            <button className="text-sm text-teal-600 font-medium">
              View all
            </button>
          </div>

          <div className="space-y-3">

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  #VC1024
                </p>
                <p className="text-xs text-slate-500">
                  3 items
                </p>
              </div>

              <span className="text-sm font-semibold">
                ₹540
              </span>

              <span className="text-xs font-medium text-green-600">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  #VC1023
                </p>
                <p className="text-xs text-slate-500">
                  2 items
                </p>
              </div>

              <span className="text-sm font-semibold">
                ₹320
              </span>

              <span className="text-xs font-medium text-green-600">
                Completed
              </span>
            </div>

            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-slate-900">
                  #VC1022
                </p>
                <p className="text-xs text-slate-500">
                  5 items
                </p>
              </div>

              <span className="text-sm font-semibold">
                ₹890
              </span>

              <span className="text-xs font-medium text-amber-600">
                Pending
              </span>
            </div>

          </div>

        </div>


        {/* Low Stock */}
        <div className="bg-white border border-slate-200 rounded-xl p-5">

          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base font-semibold text-slate-900">
              Low Stock
            </h2>

            <button className="text-sm text-teal-600 font-medium">
              View all
            </button>
          </div>

          <div className="space-y-4">

            <div className="flex justify-between">
              <span className="text-sm text-slate-700">
                Milk
              </span>
              <span className="text-xs text-red-600 font-medium">
                4 left
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-700">
                Bread
              </span>
              <span className="text-xs text-red-600 font-medium">
                2 left
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-slate-700">
                Orange Juice
              </span>
              <span className="text-xs text-amber-600 font-medium">
                3 left
              </span>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;
