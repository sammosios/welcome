import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'PHILOSOPHY', to: '/philosophy' },
  { label: 'STACK', to: '/stack' },
  { label: 'CONSULT', to: '/consult' },
]

export default function TopNavBar() {
  return (
    <header className="fixed top-0 w-full z-50 flex justify-between items-center px-8 md:pl-24 py-4 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <NavLink to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
        SAM MOSIOS
      </NavLink>

      <nav className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <NavLink
            key={link.label}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) =>
              `font-label text-sm uppercase transition-colors ${
                isActive
                  ? 'text-primary border-b border-primary/30 pb-1'
                  : 'text-gray-400 hover:text-primary'
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-gray-400 cursor-pointer hover:text-primary transition-colors">
          sensors
        </span>
        <NavLink
          to="/consult"
          className="bg-primary text-on-primary px-4 py-1.5 font-label text-xs font-bold rounded hover:brightness-110 active:scale-95 transition-all"
        >
          CONTACT
        </NavLink>
      </div>
    </header>
  )
}
