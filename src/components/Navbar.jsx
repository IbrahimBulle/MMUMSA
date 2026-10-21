
import { useState } from 'react'
import Logo from '../assets/mmumsa.png'
import { Link } from 'react-router'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const linkStyle =
    'block rounded-lg px-4 py-3 font-bold text-white hover:bg-green-400 hover:text-black transition-colors'

  return (
    <nav className="relative bg-green-700 text-white">
      <div className="flex h-20 items-center justify-between px-4">

        {/* Logo and title */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="MMUMSA Logo"
            className="h-14 w-14 object-contain"
          />
          <h1 className="text-sm font-bold sm:text-lg lg:text-xl">
            MMUMSA
          </h1>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-2 md:flex">
          <Link to="/about" className={linkStyle}>About</Link>
          <Link to="/history" className={linkStyle}>Activities</Link>
          <Link to="/events" className={linkStyle}>Events</Link>
          <Link to="/events" className={linkStyle}>Galary</Link>
          <Link to="/sponsors" className={linkStyle}>Sponsors</Link>
        </div>

        {/* Mobile menu wrapper */}
        <div className="relative md:hidden">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-3xl hover:bg-green-900"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? '✕' : '☰'}
          </button>

          {/* Popup menu */}
          {isOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 flex w-44 flex-col gap-1 rounded-xl bg-green-800 p-2 shadow-xl">
              <Link to="/about" className={linkStyle} onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/history" className={linkStyle} onClick={() => setIsOpen(false)}>
                History
              </Link>
              <Link to="/events" className={linkStyle} onClick={() => setIsOpen(false)}>
                Events
              </Link>
              <Link to="/sponsors" className={linkStyle} onClick={() => setIsOpen(false)}>
                Sponsors
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
