import { Search, Plus, Package } from "lucide-react";
import { inventory } from "../../data/landingdata";

function Inventory() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Inventory
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Monitor and manage product stock
          </p>
        </div>

        <button className="flex items-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg text-sm font-medium">
          <Plus size={18} />
          Stock Adjustment
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-4 gap-4">

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Products</p>
          <h2 className="text-2xl font-bold mt-2 text-slate-900">
            5
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Stock</p>
          <h2 className="text-2xl font-bold mt-2 text-slate-900">
            87
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Low Stock</p>
          <h2 className="text-2xl font-bold mt-2 text-orange-600">
            1
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Out of Stock</p>
          <h2 className="text-2xl font-bold mt-2 text-red-600">
            1
          </h2>
        </div>

      </div>

      {/* Filters */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">
        <div className="relative w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search inventory..."
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-teal-600"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Product
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                SKU
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Stock
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Location
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Status
              </th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr
                key={item.id}
                className="border-b border-slate-100 last:border-none"
              >
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      <Package size={18} className="text-teal-700" />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        {item.product}
                      </p>
                      <p className="text-xs text-slate-500">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {item.sku}
                </td>

                <td className="px-5 py-4 font-medium text-slate-900">
                  {item.stock}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {item.location}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      item.status === "In Stock"
                        ? "bg-green-50 text-green-700"
                        : item.status === "Low Stock"
                        ? "bg-orange-50 text-orange-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {item.status}
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

export default Inventory;