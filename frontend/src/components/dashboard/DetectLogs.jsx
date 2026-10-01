import { Search, ScanSearch } from "lucide-react";
import { detectionLogs } from "../../data/landingdata";

function DetectionLogs() {
  return (
    <div className="space-y-6">

      <div>
        <h1 className="text-2xl font-semibold text-slate-900">
          Detection Logs
        </h1>

        <p className="text-sm text-slate-500 mt-1">
          Monitor product detection activity from cameras
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Total Detections</p>
          <h2 className="text-2xl font-bold mt-2">
            1,284
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Average Confidence</p>
          <h2 className="text-2xl font-bold mt-2 text-teal-700">
            94.6%
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">Active Cameras</p>
          <h2 className="text-2xl font-bold mt-2">
            2
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
            placeholder="Search detection logs..."
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
                Detection ID
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Product
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Confidence
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Quantity
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Camera
              </th>
              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Timestamp
              </th>
            </tr>
          </thead>

          <tbody>
            {detectionLogs.map((log) => (
              <tr
                key={log.id}
                className="border-b border-slate-100 last:border-none"
              >

                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-teal-50 rounded-lg">
                      <ScanSearch
                        size={17}
                        className="text-teal-700"
                      />
                    </div>

                    <span className="font-medium text-slate-900">
                      {log.id}
                    </span>
                  </div>
                </td>

                <td className="px-5 py-4 font-medium">
                  {log.product}
                </td>

                <td className="px-5 py-4">
                  <span className="text-green-700 font-medium">
                    {log.confidence}
                  </span>
                </td>

                <td className="px-5 py-4">
                  {log.quantity}
                </td>

                <td className="px-5 py-4 text-slate-600">
                  {log.camera}
                </td>

                <td className="px-5 py-4 text-slate-500">
                  {log.timestamp}
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

export default DetectionLogs;