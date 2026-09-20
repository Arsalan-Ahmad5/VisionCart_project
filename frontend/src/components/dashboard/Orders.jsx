import { Search, ShoppingCart } from "lucide-react";
import { orders } from "../../data/landingdata";

function Orders() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Orders
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          View and manage customer orders
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Orders</p>
          <h2 className="text-2xl font-bold mt-2">124</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Completed</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">
            118
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Pending</p>
          <h2 className="text-2xl font-bold mt-2 text-orange-600">
            6
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">

        <div className="relative w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search orders..."
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-teal-600"
          />
        </div>

      </div>

      {/* Orders Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Order ID
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Customer
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Items
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Total
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Date
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-slate-100 last:border-none"
              >

                <td className="px-5 py-4 font-medium text-teal-700">
                  {order.id}
                </td>

                <td className="px-5 py-4 text-slate-700">
                  {order.customer}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {order.items}
                </td>

                <td className="px-5 py-4 font-medium">
                  ₹{order.total}
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {order.date}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      order.status === "Completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </div>
  );
}

export default Orders;