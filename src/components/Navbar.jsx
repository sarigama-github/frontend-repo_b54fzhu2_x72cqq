import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
      isActive ? 'text-white bg-black/30' : 'text-black/80 hover:text-black'
    }`

  return (
    <header className="w-full sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm"></div>
            <span className="font-semibold tracking-tight text-lg text-black">Ikshana Z Inc.</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <NavLink to="/" className={navLinkClass} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/blog" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </nav>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-black/80 hover:bg-black/5"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-black/5 bg-white/90">
          <div className="px-4 py-3 space-y-1">
            <NavLink to="/" className={navLinkClass} onClick={() => setOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/services" className={navLinkClass} onClick={() => setOpen(false)}>
              Services
            </NavLink>
            <NavLink to="/blog" className={navLinkClass} onClick={() => setOpen(false)}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
