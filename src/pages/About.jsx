import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useAnimations'

const timeline = [
  { year: '2015', event: 'NMM Founded', desc: 'Following a forum of business leaders who discussed how mentorship could address unemployment and poor entrepreneurial health in South Africa.' },
  { year: '2016', event: 'First Corporate Partnerships', desc: 'Launched initial programmes with forward-thinking corporate partners committed to transforming communities.' },
  { year: '2018', event: 'Platform Upgrade', desc: 'Adopted the world-class Everwise platform to enable smarter matching, goal-setting and programme monitoring.' },
  { year: '2020', event: 'Pandemic Pivot to Virtual', desc: 'Seamlessly moved all mentorship online, enabling Standard Bank\'s MentorSA programme to help SMEs survive Covid.' },
  { year: '2022', event: '5,000+ People Impacted', desc: 'Crossed the milestone of impacting 5,000 lives through mentorship across programmes and sectors.' },
  { year: '2025', event: '10 Years of Impact', desc: 'Celebrating a decade of building bridges, transforming lives and strengthening the South African economy through the Power of Two.' },
]

const team = [
  { name: 'Maurice Radebe', role: 'Chairman', sub: 'Executive Vice President, Sasol Energy & Wits Business School', icon: 'fa-solid fa-star', color: 'bg-amber-500' },
  { name: 'Dave Wilson', role: 'CEO & Co-Founder', sub: 'Retired COO, Deloitte Consulting Africa', icon: 'fa-solid fa-crown', color: 'bg-red-600' },
  { name: 'Paul Bacher', role: 'Co-Founder', sub: 'Co-founder NetActive, NetFlorist & OrtJet', icon: 'fa-solid fa-lightbulb', color: 'bg-orange-500' },
  { name: 'Adam Craker', role: 'Steering Committee', sub: 'CEO, IQ Business', icon: 'fa-solid fa-briefcase', color: 'bg-purple-500' },
  { name: 'Brett Morris', role: 'Steering Committee', sub: 'Group CEO, FCB Africa', icon: 'fa-solid fa-bullhorn', color: 'bg-rose-500' },
  { name: 'Nkateko Khoza', role: 'Independent Director', sub: 'CEO, Dzana Investments', icon: 'fa-solid fa-chart-pie', color: 'bg-teal-500' },
]

const values = [
  { icon: 'fa-solid fa-handshake', title: 'Partnership', desc: 'We believe in the power of collaboration between mentors and mentees, and with our corporate and NGO partners.' },
  { icon: 'fa-solid fa-globe-africa', title: 'Inclusivity', desc: 'Our mentorship is for all South Africans across race, gender, sector, and geography.' },
  { icon: 'fa-solid fa-chart-line', title: 'Impact', desc: 'We measure success by real outcomes jobs created, businesses grown, confidence gained.' },
  { icon: 'fa-solid fa-shield-halved', title: 'Integrity', desc: 'We operate with transparency and accountability as a registered NPC and Section 18A PBO.' },
]

export default function About() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-4">About Us</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">
            Who We Are
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A non-profit organisation dedicated to building a mentorship movement at scale across all sectors of South Africa since 2015.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-8">
            {['Non-Profit Company', 'Section 18A PBO', 'Founded 2015', 'Johannesburg, SA'].map((badge) => (
              <span key={badge} className="bg-white/10 border border-white/20 text-white/80 text-sm font-medium px-4 py-1.5 rounded-full">
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {[
              {
                icon: 'fa-solid fa-crosshairs',
                title: 'Our Mission',
                color: 'bg-red-600',
                content: 'To build a mentorship movement at scale across all sectors of South Africa. We mobilise volunteer mentors who are willing and able to give back, and match them with those who could benefit from their skills and experience, impacting both.',
              },
              {
                icon: 'fa-solid fa-eye',
                title: 'Our Vision',
                color: 'bg-orange-500',
                content: 'Enabling all South Africans to prosper and grow through mentorship. We envision a society where knowledge and experience flows freely across generations, sectors, and communities building a stronger, more cohesive nation.',
              },
            ].map(({ icon, title, color, content }) => (
              <div key={title} className="animate-in card p-8">
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center mb-5`}>
                  <i className={`${icon} text-white text-lg`}></i>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-4">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{content}</p>
              </div>
            ))}
          </div>

          {/* What is Mentorship */}
          <div className="animate-in rounded-3xl p-10 md:p-14 text-center mb-20"
            style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}
          >
            <i className="fa-solid fa-quote-left text-red-400/30 text-5xl mb-4 block"></i>
            <p className="text-2xl md:text-3xl font-bold text-white leading-relaxed max-w-3xl mx-auto mb-6">
              &ldquo;Mentorship is a partnership and relationship between two (or more) people to achieve mutually agreed goals through the reciprocal sharing of knowledge, experience and wisdom.&rdquo;
            </p>
            <span className="text-amber-400 font-semibold">Ã¢â‚¬â€ NMM Definition of Mentorship</span>
          </div>

          {/* Values */}
          <div className="text-center mb-12 animate-in">
            <span className="section-tag">What We Stand For</span>
            <h2 className="section-heading">Our Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <div key={title} className={`animate-in animate-in-delay-${i} card p-6 text-center`}>
                <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${icon} text-red-600 text-xl`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Our Journey</span>
            <h2 className="section-heading">10 Years of Building the Movement</h2>
          </div>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200"></div>
            <div className="space-y-10">
              {timeline.map(({ year, event, desc }, i) => (
                <div key={year} className={`animate-in animate-in-delay-${i % 4} flex gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className="md:w-1/2 flex justify-start md:justify-end md:pr-10">
                    <div className={`card p-5 max-w-xs ${i % 2 !== 0 ? 'md:ml-10 md:mr-0' : ''}`}>
                      <div className="text-red-600 font-black text-xl mb-1">{year}</div>
                      <div className="font-bold text-slate-900 mb-2">{event}</div>
                      <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  <div className="flex-shrink-0 relative flex items-start mt-5 md:mt-0 md:items-center">
                    <div className="w-4 h-4 bg-red-600 rounded-full border-4 border-white shadow-md relative z-10"></div>
                  </div>
                  <div className="hidden md:block md:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-24 bg-white" id="leadership">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">The Team</span>
            <h2 className="section-heading">Our Leadership</h2>
            <p className="section-subheading mx-auto">
              An active and committed board of business leaders dedicated to growing mentorship across South Africa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map(({ name, role, sub, icon, color }, i) => (
              <div key={name} className={`animate-in animate-in-delay-${i % 3} card p-6 flex items-start gap-4`}>
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${icon} text-white`}></i>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{name}</h4>
                  <div className="text-red-600 text-sm font-semibold">{role}</div>
                  <div className="text-slate-500 text-xs mt-1">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section */}
      <section className="py-20" style={{ background: '#1A0507' }} id="partners">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-in">
            <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-3">Collaboration</span>
            <h2 className="text-3xl font-extrabold text-white">Partners & Clients</h2>
            <p className="text-slate-400 mt-3">Organisations that trust NMM to deliver mentorship impact</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 animate-in">
            {['CSIR', 'Deloitte', 'IDC', 'Mancosa', 'Nedbank', 'Pernod Ricard', 'Standard Bank', 'Old Mutual', 'Sanlam Investment Group', 'FCB Africa', 'IQ Business', 'Technology Innovation Agency', 'Tourism Business Council of SA', 'SuperSport', 'Sunshine Cinema', 'V&A Waterfront', 'Craft & Design Institute', 'Fix Forward', 'Primestars', 'Da Vinci Institute', 'Printing SA'].map((p) => (
              <span key={p} className="px-4 py-2 bg-white/8 border border-white/10 rounded-full text-slate-300 text-sm font-medium hover:bg-red-600/20 hover:border-red-400/30 transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/get-involved" className="btn-primary">
              <i className="fa-solid fa-handshake"></i>
              Become a Partner
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
