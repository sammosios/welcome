import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'HOME', to: '/' },
  { label: 'PHILOSOPHY', to: '/philosophy' },
  { label: 'STACK', to: '/stack' },
  { label: 'CONSULT', to: '/consult' },
]

export default function TopNavBar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0e0e0e]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-8 md:pl-24 py-4">
        <NavLink to="/" className="text-xl font-bold tracking-tighter text-primary font-headline">
          SAM MOSIOS
        </NavLink>

        {/* Desktop nav */}
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
          <NavLink
            to="/consult"
            className="bg-primary text-on-primary px-4 py-1.5 font-label text-xs font-bold rounded hover:brightness-110 active:scale-95 transition-all"
          >
            GET IN TOUCH
          </NavLink>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-gray-400 transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden border-t border-white/5 bg-[#0e0e0e] px-8 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-label text-sm uppercase transition-colors ${
                  isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
