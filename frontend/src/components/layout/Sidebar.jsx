import { NavLink } from 'react-router-dom'
import { menuItems } from '../../data/landingdata'
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">

      <div className="h-16 flex items-center px-6 border-b border-slate-800">
        <Link to='/dashboard'>
        <h1 className="text-xl font-bold">
          Vision<span className="text-teal-500">Cart</span>
        </h1>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-6">

        <p className="px-3 mb-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
          Management
        </p>

        <div className="space-y-1">
          {menuItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-md text-sm font-medium transition ${
                  isActive
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

      </nav>

      {/* Bottom */}
      <div className="p-4 border-t border-slate-800">
        <p className="text-xs text-slate-500">
          VisionCart
        </p>
        <p className="text-xs text-slate-600 mt-1">
          Retail Management System
        </p>
      </div>

    </aside>
  )
}

export default Sidebar;