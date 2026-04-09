import { NavLink } from 'react-router-dom'

const navItems = [
  { icon: 'home', label: 'HOME', to: '/' },
  { icon: 'psychology', label: 'PHILOSOPHY', to: '/philosophy' },
  { icon: 'layers', label: 'STACK', to: '/stack' },
  { icon: 'send', label: 'CONSULT', to: '/consult' },
]

export default function SideNavBar() {
  return (
    <aside className="fixed left-0 top-0 h-screen hidden md:flex flex-col z-[60] bg-[#131313] w-20 hover:w-64 transition-all duration-300 group">
      <nav className="flex-1 px-4 mt-8 space-y-4">
        {navItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 cursor-pointer transition-all ${
                isActive
                  ? 'bg-surface-container text-primary border-l-4 border-primary'
                  : 'text-gray-500 hover:text-white hover:bg-surface-container'
              }`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-label uppercase text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {item.label}
            </span>
          </NavLink>
        ))}
      </nav>

      <div className="p-4">
        <NavLink
          to="/consult"
          className="block w-full bg-surface-container text-primary border border-primary/20 py-3 rounded font-label text-xs uppercase text-center opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap active:brightness-125"
        >
          GET IN TOUCH
        </NavLink>
      </div>
    </aside>
  )
}
