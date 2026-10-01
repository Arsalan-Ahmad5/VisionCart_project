import { Search, Plus, MoreVertical, Users as UsersIcon } from "lucide-react";
import { users } from "../../data/landingdata";

function Users() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold text-slate-900">
            Users
          </h1>

          <p className="text-sm text-slate-500 mt-1">
            Manage users and their access permissions
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-teal-700 hover:bg-teal-800 text-white px-4 py-2 rounded-lg text-sm font-medium w-full sm:w-auto">
          <Plus size={18} />
          Add User
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">
            Total Users
          </p>

          <h2 className="text-2xl font-bold mt-2 text-slate-900">
            24
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">
            Active Users
          </p>

          <h2 className="text-2xl font-bold mt-2 text-green-600">
            22
          </h2>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl p-5">
          <p className="text-sm text-slate-500">
            Supervisors
          </p>

          <h2 className="text-2xl font-bold mt-2 text-teal-700">
            18
          </h2>
        </div>

      </div>

      {/* Search + Filter */}
      <div className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">

        <div className="relative w-full sm:w-80">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search users..."
            className="w-full border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm outline-none focus:border-teal-600"
          />
        </div>

        <select className="w-full sm:w-auto border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-600 outline-none focus:border-teal-600">
          <option>All Roles</option>
          <option>Admin</option>
          <option>Supervisor</option>
        </select>

      </div>

      {/* Users Table */}
      <div className="bg-white border border-slate-200 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[640px]">

          <thead className="bg-slate-50 border-b border-slate-200">
            <tr>

              <th className="text-left px-5 py-4 font-medium text-slate-600">
                User
              </th>

              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Role
              </th>

              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Status
              </th>

              <th className="text-left px-5 py-4 font-medium text-slate-600">
                Joined
              </th>

              <th className="text-right px-5 py-4 font-medium text-slate-600">
                Actions
              </th>

            </tr>
          </thead>

          <tbody>

            {users.map((user) => (

              <tr
                key={user.id}
                className="border-b border-slate-100 last:border-none"
              >

                {/* User */}
                <td className="px-5 py-4">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-teal-50 flex items-center justify-center">
                      <UsersIcon
                        size={17}
                        className="text-teal-700"
                      />
                    </div>

                    <div>
                      <p className="font-medium text-slate-900">
                        {user.name}
                      </p>

                      <p className="text-xs text-slate-500">
                        {user.email}
                      </p>
                    </div>

                  </div>

                </td>

                {/* Role */}
                <td className="px-5 py-4">

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.role === "Admin"
                        ? "bg-teal-50 text-teal-700"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    {user.role}
                  </span>

                </td>

                {/* Status */}
                <td className="px-5 py-4">

                  <span
                    className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                      user.status === "Active"
                        ? "bg-green-50 text-green-700"
                        : "bg-red-50 text-red-700"
                    }`}
                  >
                    {user.status}
                  </span>

                </td>

                {/* Joined */}
                <td className="px-5 py-4 text-slate-500">
                  {user.joined}
                </td>

                {/* Actions */}
                <td className="px-5 py-4 text-right">

                  <button className="p-2 rounded-lg hover:bg-slate-100">
                    <MoreVertical
                      size={18}
                      className="text-slate-500"
                    />
                  </button>

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

export default Users;