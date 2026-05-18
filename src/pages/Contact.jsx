import { useScrollAnimation } from '../hooks/useAnimations'

export default function Contact() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-4">Reach Out</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Get in Touch</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Have questions about our programmes, partnership opportunities, or how to get involved?
            We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form takes 3 of 5 cols */}
            <div className="lg:col-span-3 animate-in">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Send us a Message</h2>
              <p className="text-slate-500 mb-8">Fill in the form below and a member of our team will get back to you.</p>

              <div className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="ct-fname" className="block text-sm font-semibold text-slate-700 mb-1.5">First Name</label>
                    <input type="text" id="ct-fname" placeholder="Your first name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-lname" className="block text-sm font-semibold text-slate-700 mb-1.5">Last Name</label>
                    <input type="text" id="ct-lname" placeholder="Your last name"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="ct-email" className="block text-sm font-semibold text-slate-700 mb-1.5">Email Address</label>
                  <input type="email" id="ct-email" placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="ct-phone" className="block text-sm font-semibold text-slate-700 mb-1.5">Phone Number (Optional)</label>
                  <input type="tel" id="ct-phone" placeholder="+27 XX XXX XXXX"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="ct-subject" className="block text-sm font-semibold text-slate-700 mb-1.5">Subject</label>
                  <select id="ct-subject"
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm bg-white"
                  >
                    <option value="">What is your enquiry about?</option>
                    <option>Becoming a Mentor</option>
                    <option>Becoming a Mentee</option>
                    <option>Corporate Partnership</option>
                    <option>Donations</option>
                    <option>Learning Practice / VLP</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ct-message" className="block text-sm font-semibold text-slate-700 mb-1.5">Message</label>
                  <textarea id="ct-message" rows={5} placeholder="Tell us how we can help..."
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input type="checkbox" id="ct-consent" className="mt-1 w-4 h-4 accent-red-600 flex-shrink-0" />
                  <label htmlFor="ct-consent" className="text-slate-500 text-sm leading-relaxed">
                    I consent to NMM storing my information to respond to this enquiry. I understand this is a demo form and no data is stored or transmitted.
                  </label>
                </div>

                <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                  <i className="fa-solid fa-paper-plane"></i>
                  Send Message
                </button>
                <p className="text-slate-400 text-xs text-center">
                  Demo form submissions are not sent or stored.
                </p>
              </div>
            </div>

            {/* Info panel takes 2 of 5 cols */}
            <div className="lg:col-span-2 animate-in animate-in-delay-1">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-6">Contact Details</h2>

              <div className="space-y-4 mb-8">
                {[
                  {
                    icon: 'fa-solid fa-envelope',
                    label: 'Email',
                    value: 'connect@mentorshipmovement.co.za',
                    href: 'mailto:connect@mentorshipmovement.co.za',
                    color: 'bg-red-600',
                  },
                  {
                    icon: 'fa-solid fa-location-dot',
                    label: 'Location',
                    value: 'Johannesburg, Gauteng, South Africa',
                    href: null,
                    color: 'bg-orange-500',
                  },
                  {
                    icon: 'fa-solid fa-globe',
                    label: 'Website',
                    value: 'mentorshipmovement.co.za',
                    href: 'https://mentorshipmovement.co.za',
                    color: 'bg-amber-500',
                  },
                ].map(({ icon, label, value, href, color }) => (
                  <div key={label} className="card p-5 flex items-start gap-4">
                    <div className={`w-11 h-11 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`${icon} text-white`}></i>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} className="text-slate-800 font-medium text-sm hover:text-red-600 transition-colors">{value}</a>
                      ) : (
                        <span className="text-slate-800 font-medium text-sm">{value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="card p-6 mb-6">
                <h4 className="font-bold text-slate-900 mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {[
                    { icon: 'fa-brands fa-facebook-f', href: 'https://www.facebook.com/SAMentorship/', label: 'Facebook', color: 'bg-red-600' },
                    { icon: 'fa-brands fa-instagram', href: 'https://www.instagram.com/national_mentorship_movement/', label: 'Instagram', color: 'bg-gradient-to-br from-purple-500 to-pink-500' },
                    { icon: 'fa-brands fa-linkedin-in', href: 'https://za.linkedin.com/company/national-mentorship-movement', label: 'LinkedIn', color: 'bg-red-700' },
                  ].map(({ icon, href, label, color }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                      className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity shadow-sm`}
                    >
                      <i className={`${icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden" style={{ height: '200px', background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}>
                <div className="h-full flex flex-col items-center justify-center text-center p-6">
                  <i className="fa-solid fa-map-location-dot text-red-400 text-4xl mb-3"></i>
                  <div className="text-white font-bold">Johannesburg</div>
                  <div className="text-slate-400 text-sm">Gauteng, South Africa</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ teaser */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <span className="section-tag">Quick Answers</span>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {[
              {
                q: 'Is NMM mentorship free to join?',
                a: 'Yes! Participation as a mentor or mentee is completely free of charge. NMM is funded through corporate partnerships and donations.',
              },
              {
                q: 'How long does a mentorship programme last?',
                a: 'Most NMM programmes run over a 12-month period, with regular monthly meetings between mentor and mentee. Some structured cohort programmes may have different timelines.',
              },
              {
                q: 'Can I mentor or be mentored virtually?',
                a: 'Absolutely. All our mentorship can take place virtually online meetings, calls, or messaging making it accessible for participants across South Africa and even internationally.',
              },
              {
                q: 'Does my company need to be based in South Africa?',
                a: 'Our focus is primarily on South African participants, but we welcome international mentors who want to contribute to building a stronger South Africa.',
              },
              {
                q: 'How is NMM funded?',
                a: 'NMM is funded through corporate partnerships, programme fees from clients, and donations from individuals and organisations who believe in the power of mentorship.',
              },
            ].map(({ q, a }, i) => (
              <div key={i} className={`animate-in animate-in-delay-${i % 4} card p-6`}>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <i className="fa-solid fa-question text-red-600 text-sm"></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{q}</h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
