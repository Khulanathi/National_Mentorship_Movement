import { Link } from 'react-router-dom'

const footerLinks = {
  Organization: [
    { label: 'About NMM', path: '/about' },
    { label: 'Our Story', path: '/about' },
    { label: 'Leadership', path: '/about' },
    { label: 'Partners & Clients', path: '/about' },
  ],
  Programs: [
    { label: 'All Programs', path: '/programs' },
    { label: 'Corporate Mentorship', path: '/programs' },
    { label: 'Entrepreneur Support', path: '/programs' },
    { label: 'Learning Practice', path: '/learning-practice' },
  ],
  'Get Involved': [
    { label: 'Become a Mentor', path: '/get-involved' },
    { label: 'Become a Mentee', path: '/get-involved' },
    { label: 'Corporate Partnerships', path: '/get-involved' },
    { label: 'Donate', path: '/donate' },
  ],
  Resources: [
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Our Impact', path: '/impact' },
    { label: 'Contact Us', path: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ background: '#1A0507' }} className="text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-5">
              <div className="bg-white rounded-xl px-4 py-2.5 inline-block shadow-md">
                <img src="/LogoNew.png" alt="National Mentorship Movement" className="h-10 w-auto" />
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-6">
              A Non-Profit Organisation dedicated to building a mentorship movement at scale
              across all sectors of South Africa. Founded 2015.
            </p>
            <div className="flex gap-3">
              {[
                { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/SAMentorship/', label: 'Facebook' },
                { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/national_mentorship_movement/', label: 'Instagram' },
                { icon: 'fa-brands fa-linkedin-in', href: 'https://za.linkedin.com/company/national-mentorship-movement', label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-xl bg-white/10 hover:bg-red-600 flex items-center justify-center text-white/70 hover:text-white transition-all duration-200"
                >
                  <i className={`${icon} text-sm`}></i>
                </a>
              ))}
            </div>

            {/* NPC badge */}
            <div className="mt-6 inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
              <i className="fa-solid fa-certificate text-amber-400 text-sm"></i>
              <span className="text-white/70 text-xs font-medium">NPC Ã‚Â· Section 18A PBO Ã‚Â· Est. 2015</span>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
                {section}
              </h4>
              <ul className="space-y-2.5">
                {links.map(({ label, path }) => (
                  <li key={label}>
                    <Link
                      to={path}
                      className="text-slate-400 hover:text-white text-sm transition-colors duration-150 flex items-center gap-2 group"
                    >
                      <i className="fa-solid fa-angle-right text-xs text-slate-600 group-hover:text-red-400 transition-colors"></i>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact strip */}
        <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: 'fa-solid fa-envelope',
              label: 'Email',
              value: 'connect@mentorshipmovement.co.za',
              href: 'mailto:connect@mentorshipmovement.co.za',
            },
            {
              icon: 'fa-solid fa-location-dot',
              label: 'Location',
              value: 'Johannesburg, South Africa',
              href: null,
            },
            {
              icon: 'fa-solid fa-globe',
              label: 'Website',
              value: 'mentorshipmovement.co.za',
              href: 'https://mentorshipmovement.co.za',
            },
          ].map(({ icon, label, value, href }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-red-600/20 flex items-center justify-center flex-shrink-0">
                <i className={`${icon} text-red-400 text-sm`}></i>
              </div>
              <div>
                <div className="text-slate-500 text-xs">{label}</div>
                {href ? (
                  <a
                    href={href}
                    className="text-slate-300 text-sm hover:text-white transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="text-slate-300 text-sm">{value}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} National Mentorship Movement. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1.5">
            <i className="fa-solid fa-heart text-red-500/60 text-xs"></i>
            Built for a better South Africa
          </p>
        </div>
      </div>
    </footer>
  )
}
