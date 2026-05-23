import { useScrollAnimation } from '../hooks/useAnimations'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Individual Supporter',
    amount: 'R100',
    period: '/month',
    color: 'border-red-200',
    headerColor: 'bg-red-50',
    btnColor: 'bg-red-600 hover:bg-red-700',
    icon: 'fa-solid fa-user',
    impact: 'Helps fund matching tools and mentor training for 1 mentorship pair per month.',
    features: [
      'Monthly newsletter with impact stories',
      'NMM supporter certificate',
      'Tax deductible (Section 18A)',
    ],
  },
  {
    name: 'Champion',
    amount: 'R500',
    period: '/month',
    color: 'border-amber-400',
    headerColor: 'bg-amber-50',
    btnColor: 'bg-amber-500 hover:bg-amber-600',
    icon: 'fa-solid fa-star',
    highlight: true,
    badge: 'Most Popular',
    impact: 'Sponsors a full mentee\'s 12-month programme, from matching through to graduation.',
    features: [
      'Quarterly impact report',
      'Named on NMM supporter wall',
      'Invitation to annual celebration event',
      'Tax deductible (Section 18A)',
    ],
  },
  {
    name: 'Catalyst',
    amount: 'R2,000',
    period: '/month',
    color: 'border-orange-300',
    headerColor: 'bg-orange-50',
    btnColor: 'bg-orange-600 hover:bg-orange-700',
    icon: 'fa-solid fa-bolt',
    impact: 'Funds a full group mentorship cohort, supporting up to 10 mentees simultaneously.',
    features: [
      'Personalised impact dashboard',
      'Logo on NMM website',
      'Meet the team  virtual briefing',
      'Priority access to new programmes',
      'Tax deductible (Section 18A)',
    ],
  },
]

const impactStats = [
  { amount: 'R100', desc: 'Helps fund platform tools for one mentorship pair for a month', icon: 'fa-solid fa-wrench' },
  { amount: 'R500', desc: 'Covers the cost of onboarding and training one new mentor', icon: 'fa-solid fa-chalkboard-user' },
  { amount: 'R2,000', desc: 'Supports a mentee through a full 12-month programme', icon: 'fa-solid fa-seedling' },
  { amount: 'R10,000', desc: 'Funds a complete group mentorship cohort of 10 mentees', icon: 'fa-solid fa-users' },
]

export default function Donate() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(135deg, #2D0A10 0%, #1A0507 40%, #4A0A18 100%)' }}>
        {/* Large spaced dots */}
        <div className="absolute inset-0 opacity-[0.05]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 2px, transparent 2px)', backgroundSize: '50px 50px' }}
        />
        {/* Faded heart in background */}
        <i className="fa-solid fa-heart absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white/[0.04] pointer-events-none select-none" style={{ fontSize: '28rem', lineHeight: 1 }}></i>
        {/* Top accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Support Our Work</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Give the Gift of
            <span className="text-amber-400"> Mentorship</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Your donation helps us connect more mentors with those who need them &mdash; transforming businesses, careers, and lives across South Africa.
          </p>
          <div className="mt-6 inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-5 py-2.5 rounded-full border border-white/20">
            <i className="fa-solid fa-certificate text-amber-400"></i>
            All donations are tax-deductible under Section 18A
          </div>
        </div>
      </section>

      {/* Impact per Rand */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <span className="section-tag">Your Impact</span>
            <h2 className="section-heading">Every Rand Counts</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {impactStats.map(({ amount, desc, icon }, i) => (
              <div key={amount} className={`animate-in animate-in-delay-${i} card p-6 text-center`}>
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${icon} text-amber-500 text-lg`}></i>
                </div>
                <div className="text-2xl font-black text-amber-500 mb-2">{amount}</div>
                <p className="text-slate-600 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation tiers */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Choose Your Level</span>
            <h2 className="section-heading">Donation Tiers</h2>
            <p className="section-subheading mx-auto">
              Pick the level that works for you. Every contribution  large or small  makes a meaningful difference.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map(({ name, amount, period, color, headerColor, btnColor, icon, impact, features, highlight, badge }, i) => (
              <div
                key={name}
                className={`animate-in animate-in-delay-${i} relative rounded-2xl border-2 ${color} overflow-hidden ${highlight ? 'shadow-xl scale-105' : 'shadow-sm'} bg-white transition-all duration-300 hover:shadow-xl`}
              >
                {badge && (
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {badge}
                  </div>
                )}
                <div className={`${headerColor} p-6 border-b border-slate-100`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 ${btnColor.split(' ')[0]} rounded-xl flex items-center justify-center`}>
                      <i className={`${icon} text-white`}></i>
                    </div>
                    <h3 className="font-extrabold text-slate-900 text-lg">{name}</h3>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="text-4xl font-black text-slate-900">{amount}</span>
                    <span className="text-slate-500 text-sm mb-1">{period}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-slate-50 rounded-xl p-4 mb-5">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      <i className="fa-solid fa-bolt text-amber-500 mr-2"></i>
                      {impact}
                    </p>
                  </div>
                  <ul className="space-y-2.5 mb-7">
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                        <i className="fa-solid fa-check text-orange-500 mt-0.5 text-xs flex-shrink-0"></i>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full ${btnColor} text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2`}>
                    <i className="fa-solid fa-heart"></i>
                    Donate {amount}/month
                  </button>
                  <p className="text-slate-400 text-xs text-center mt-2">Demo  no payment processed</p>
                </div>
              </div>
            ))}
          </div>

          {/* Custom amount */}
          <div className="animate-in mt-8 card p-7 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-grow">
              <h4 className="font-extrabold text-slate-900 text-lg mb-1">Custom Amount</h4>
              <p className="text-slate-500 text-sm">Make a once-off or recurring donation of any amount.</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-semibold">R</span>
                <input
                  type="number"
                  placeholder="Amount"
                  className="pl-8 pr-4 py-3 border border-slate-200 rounded-xl w-36 focus:outline-none focus:ring-2 focus:ring-red-500 text-slate-800"
                />
              </div>
              <button className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap flex items-center gap-2">
                <i className="fa-solid fa-heart"></i>
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why donate */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Why Give</span>
            <h2 className="section-heading">Your Support Makes This Possible</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-percent',
                title: '100% Goes to Impact',
                desc: 'Every rand donated is invested directly into connecting mentors with mentees and running life-changing programmes.',
                color: 'bg-red-600',
              },
              {
                icon: 'fa-solid fa-receipt',
                title: 'Tax Deductible',
                desc: 'As a registered Section 18A Public Benefit Organisation, your donation qualifies for a full tax deduction.',
                color: 'bg-amber-500',
              },
              {
                icon: 'fa-solid fa-chart-line',
                title: 'Measurable Impact',
                desc: 'We provide transparent reporting on how your donation is used and what outcomes were achieved.',
                color: 'bg-orange-500',
              },
            ].map(({ icon, title, desc, color }, i) => (
              <div key={title} className={`animate-in animate-in-delay-${i} card p-7 text-center`}>
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <i className={`${icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate giving CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <i className="fa-solid fa-building text-red-400 text-4xl mb-5 block"></i>
          <h2 className="text-3xl font-extrabold text-white mb-4">Corporate Giving</h2>
          <p className="text-slate-300 text-lg mb-8">
            Looking to make a larger impact through a corporate donation or sponsorship? We&apos;d love to work with you to design a contribution that aligns with your CSI strategy.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-gold px-8 py-4">
              <i className="fa-solid fa-envelope"></i>
              Get in Touch
            </Link>
            <Link to="/get-involved" className="btn-secondary px-8 py-4">
              <i className="fa-solid fa-handshake"></i>
              Partner with NMM
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
