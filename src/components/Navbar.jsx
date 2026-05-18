import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'How It Works', path: '/how-it-works' },
  { label: 'Our Impact', path: '/impact' },
  {
    label: 'Programs',
    path: '/programs',
    dropdown: [
      { label: 'All Programs', path: '/programs' },
      { label: 'Learning Practice', path: '/learning-practice' },
    ],
  },
  { label: 'Get Involved', path: '/get-involved' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location.pathname])

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <div className={`transition-all duration-300 rounded-xl overflow-hidden ${
                !isScrolled ? 'bg-white px-3 py-1.5 shadow-lg' : ''
              }`}>
                <img
                  src="/LogoNew.png"
                  alt="National Mentorship Movement"
                  className="h-10 w-auto"
                />
              </div>
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-1 ${
                      isActive(link.path) && link.path !== '#'
                        ? isScrolled
                          ? 'bg-red-50 text-red-600'
                          : 'bg-white/15 text-white'
                        : isScrolled
                        ? 'text-slate-600 hover:text-red-600 hover:bg-slate-50'
                        : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                    {link.dropdown && (
                      <i className="fa-solid fa-chevron-down text-xs opacity-60"></i>
                    )}
                  </Link>

                  {link.dropdown && activeDropdown === link.label && (
                    <div className="absolute top-full left-0 pt-2 w-52">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 overflow-hidden">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.label}
                            to={item.path}
                            className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600 font-medium transition-colors"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA + Mobile toggle */}
            <div className="flex items-center gap-3">
              <Link
                to="/donate"
                className={`hidden sm:inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${
                  isScrolled
                    ? 'text-slate-600 hover:text-red-600'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                <i className="fa-solid fa-heart text-red-400"></i>
                Donate
              </Link>
              <Link
                to="/get-involved"
                className="hidden sm:inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
              >
                <i className="fa-solid fa-arrow-right"></i>
                Get Involved
              </Link>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className={`lg:hidden p-2 rounded-lg transition-colors ${
                  isScrolled ? 'text-slate-700 hover:bg-slate-100' : 'text-white hover:bg-white/10'
                }`}
                aria-label="Toggle menu"
              >
                <i className={`fa-solid ${mobileOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? 'max-h-screen' : 'max-h-0'
          } bg-white border-t border-slate-100`}
        >
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <div key={link.label}>
                <Link
                  to={link.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    isActive(link.path) && link.path !== '#'
                      ? 'bg-red-50 text-red-600'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <div className="pl-4 mt-1 space-y-1">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.label}
                        to={item.path}
                        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm text-slate-500 hover:text-red-600 hover:bg-red-50 transition-colors"
                      >
                        <i className="fa-solid fa-angle-right text-xs"></i>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to="/donate"
                className="flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-6 py-3 rounded-xl hover:border-red-300 hover:text-red-600 transition-colors"
              >
                <i className="fa-solid fa-heart text-red-400"></i>
                Donate
              </Link>
              <Link
                to="/get-involved"
                className="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
              >
                <i className="fa-solid fa-arrow-right"></i>
                Get Involved
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
