import { Search, Receipt } from "lucide-react";
import { transactions } from "../../data/landingdata";

function Transactions() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Transactions
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Track all payment transactions
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Transactions</p>
          <h2 className="text-2xl font-bold mt-2">118</h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Successful</p>
          <h2 className="text-2xl font-bold mt-2 text-green-600">
            114
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Revenue</p>
          <h2 className="text-2xl font-bold mt-2">
            ₹24,850
          </h2>
        </div>

      </div>

      {/* Search */}
      <div className="bg-white border border-slate-200 rounded-xl p-4">

        <div className="relative w-full sm:w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search transactions..."
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-teal-600"
          />
        </div>

      </div>

      {/* Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">

          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Transaction
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Order ID
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Amount
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Payment
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
            {transactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="border-b border-slate-100 last:border-none"
              >

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      <Receipt size={17} className="text-teal-700" />
                    </div>

                    <span className="font-medium text-slate-900">
                      {transaction.id}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 text-teal-700">
                  {transaction.orderId}
                </td>

                <td className="px-5 py-4 font-medium">
                  ₹{transaction.amount}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {transaction.method}
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {transaction.date}
                </td>

                <td className="px-5 py-4">
                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      transaction.status === "Success"
                        ? "bg-green-50 text-green-700"
                        : "bg-orange-50 text-orange-700"
                    }`}
                  >
                    {transaction.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>
        </div>
      </div>

    </div>
  );
}

export default Transactions;