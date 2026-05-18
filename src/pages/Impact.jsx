import { Link } from 'react-router-dom'
import { useCountUp, useScrollAnimation } from '../hooks/useAnimations'

function ImpactStat({ value, suffix = '', label, icon, color, desc }) {
  const { count, ref } = useCountUp(value, 2500)
  return (
    <div ref={ref} className="card p-8 text-center">
      <div className={`w-16 h-16 ${color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
        <i className={`${icon} text-white text-2xl`}></i>
      </div>
      <div className="text-4xl md:text-5xl font-black text-slate-900 mb-1">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="font-bold text-slate-700 mb-2">{label}</div>
      <p className="text-slate-500 text-sm">{desc}</p>
    </div>
  )
}

const allStats = [
  { value: 7958, suffix: '+', label: 'People Impacted', icon: 'fa-solid fa-users', color: 'bg-red-600', desc: 'Lives transformed through mentorship since our inception in 2015.' },
  { value: 1862, suffix: '', label: 'Active Mentors', icon: 'fa-solid fa-user-tie', color: 'bg-amber-500', desc: 'Volunteer professionals contributing their time and expertise.' },
  { value: 257, suffix: '', label: 'Mentees Currently Supported', icon: 'fa-solid fa-seedling', color: 'bg-orange-500', desc: 'Individuals currently in active mentorship relationships.' },
  { value: 3108, suffix: '+', label: 'Mentees Since Inception', icon: 'fa-solid fa-chart-line', color: 'bg-purple-500', desc: 'Total mentees who have benefited from the NMM platform.' },
  { value: 10, suffix: '', label: 'Years of Operation', icon: 'fa-solid fa-calendar-days', color: 'bg-rose-500', desc: 'A decade of building the mentorship movement across South Africa.' },
  { value: 20, suffix: '+', label: 'Corporate Partners', icon: 'fa-solid fa-building', color: 'bg-teal-500', desc: 'Leading organisations partnering with NMM to drive social impact.' },
]

const testimonials = [
  {
    quote: 'This mentoring partnership has impacted my business positively. My mentor taught me new skills such as time management. I have become more confident. This has been a great experience.',
    name: 'NMM Mentee', role: 'Entrepreneur', initial: 'T', color: 'bg-red-500',
  },
  {
    quote: 'Starting up, it is great to have someone who takes an interest in you and your business to give you some direction. My mentor helped me position it better for my target market and align my strengths to the services I should be offering.',
    name: 'NMM Mentee', role: 'Small Business Owner', initial: 'N', color: 'bg-orange-500',
  },
  {
    quote: 'The value of having a mentor goes beyond professional development it equally encompasses personal development. Having someone who encourages critical thinking has been helpful and has encouraged me to apply a holistic approach.',
    name: 'NMM Mentee', role: 'Professional', initial: 'A', color: 'bg-amber-500',
  },
  {
    quote: 'Being in a mentoring partnership helped me take my passion and transform it into a business proposition with clear and measurable value. Mentorship is key.',
    name: 'NMM Mentee', role: 'Creative Entrepreneur', initial: 'B', color: 'bg-purple-500',
  },
  {
    quote: 'My NMM mentor helped my business partner and I rethink the model, enabling us to redefine the business strategy. I am growing and my business is growing. Thank you NMM for making this possible.',
    name: 'NMM Mentee', role: 'Co-Founder', initial: 'M', color: 'bg-rose-500',
  },
  {
    quote: 'NMM is a very wonderful initiative. You get to meet, discuss and learn from the best. You get to be exposed to very valuable information that if acted upon, can change your life almost immediately. I can recommend it 100%.',
    name: 'NMM Mentee', role: 'Mentee Graduate', initial: 'S', color: 'bg-teal-500',
  },
]

const partnerQuotes = [
  {
    quote: 'We are confident that the NMM business model can help achieve the needed support for the youth that will have a robust impact at scale.',
    name: 'Michelle Yorke',
    role: 'Regional Chapter Manager SA, ANDE',
    org: 'ANDE',
  },
  {
    quote: 'The program has the potential to contribute significantly to solving the unemployment crisis and changing lives for generations to come, while at the same time building bridges between people of different cultures and economic backgrounds.',
    name: 'Glen Lumley',
    role: 'Former MD, EOH Digital',
    org: 'EOH',
  },
  {
    quote: 'The National Mentorship Movement provides the opportunity to harness the exceptional business skills and experience we have in our country to support the development of SMMEs to create economic growth through entrepreneurialism.',
    name: 'Adam Craker',
    role: 'CEO, IQ Business',
    org: 'IQ Business',
  },
  {
    quote: 'We believe that the NMM has shown how their model can fundamentally improve the economy of South Africa by tapping into the knowledge of successful South African business leaders and entrepreneurs.',
    name: 'Brett Morris',
    role: 'Group CEO, FCB Africa',
    org: 'FCB Africa',
  },
]

export default function Impact() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-4">Measuring Success</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Our Impact</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A decade of real change in businesses, careers, communities, and lives across South Africa.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">By the Numbers</span>
            <h2 className="section-heading">The Scale of Our Reach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allStats.map((stat, i) => (
              <div key={stat.label} className={`animate-in animate-in-delay-${i % 4}`}>
                <ImpactStat {...stat} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Mentorship Works */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <span className="section-tag">Research-Backed</span>
            <h2 className="section-heading">Why Mentorship Doubles Results</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'fa-solid fa-graduation-cap', stat: '2x', label: 'More likely to aspire to and graduate from university', color: 'bg-red-600' },
              { icon: 'fa-solid fa-briefcase', stat: '2x', label: 'More likely to assume leadership roles in society and business', color: 'bg-amber-500' },
              { icon: 'fa-solid fa-chart-line', stat: '2x', label: 'More likely to grow and employ more people', color: 'bg-orange-500' },
              { icon: 'fa-solid fa-calendar-days', stat: '2x', label: 'More likely for businesses to survive longer than 5 years', color: 'bg-purple-500' },
            ].map(({ icon, stat, label, color }, i) => (
              <div key={label} className={`animate-in animate-in-delay-${i} flex items-center gap-5 card p-6`}>
                <div className={`w-16 h-16 ${color} rounded-2xl flex flex-col items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-black text-xl leading-none">{stat}</span>
                  <i className={`${icon} text-white/80 text-xs mt-1`}></i>
                </div>
                <p className="text-slate-700 font-medium leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentee testimonials */}
      <section className="py-24" style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">Voices from the Movement</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">What Mentees Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map(({ quote, name, role, initial, color }, i) => (
              <div key={i} className={`animate-in animate-in-delay-${i % 4} rounded-2xl p-6 flex flex-col`}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <i className="fa-solid fa-quote-left text-red-400/40 text-3xl mb-3"></i>
                <p className="text-slate-200 text-sm leading-relaxed flex-grow mb-5">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 ${color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {initial}
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{name}</div>
                    <div className="text-slate-400 text-xs">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Partner Perspectives</span>
            <h2 className="section-heading">What Our Partners Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerQuotes.map(({ quote, name, role, org }, i) => (
              <div key={i} className={`animate-in animate-in-delay-${i % 4} card p-7`}>
                <i className="fa-solid fa-quote-left text-slate-200 text-4xl mb-4 block"></i>
                <p className="text-slate-700 leading-relaxed mb-5">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                    <i className="fa-solid fa-building text-red-600 text-sm"></i>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-sm">{name}</div>
                    <div className="text-slate-500 text-xs">{role}</div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">{org}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors of impact */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Where We Work</span>
            <h2 className="section-heading">Sectors of Impact</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { icon: 'fa-solid fa-tractor', label: 'Agriculture', color: 'text-green-600 bg-green-50' },
              { icon: 'fa-solid fa-plane', label: 'Tourism', color: 'text-sky-600 bg-sky-50' },
              { icon: 'fa-solid fa-industry', label: 'Manufacturing', color: 'text-slate-600 bg-slate-50' },
              { icon: 'fa-solid fa-store', label: 'Township Economy', color: 'text-amber-600 bg-amber-50' },
              { icon: 'fa-solid fa-palette', label: 'Creative Economy', color: 'text-purple-600 bg-purple-50' },
              { icon: 'fa-solid fa-graduation-cap', label: 'Education', color: 'text-red-600 bg-red-50' },
              { icon: 'fa-solid fa-microchip', label: 'Technology', color: 'text-indigo-600 bg-indigo-50' },
              { icon: 'fa-solid fa-briefcase', label: 'Corporate', color: 'text-rose-600 bg-rose-50' },
              { icon: 'fa-solid fa-chart-pie', label: 'Finance', color: 'text-teal-600 bg-teal-50' },
              { icon: 'fa-solid fa-lightbulb', label: 'Entrepreneurship', color: 'text-orange-600 bg-orange-50' },
            ].map(({ icon, label, color }, i) => (
              <div key={label} className={`animate-in animate-in-delay-${i % 4} card p-5 text-center`}>
                <div className={`w-12 h-12 ${color.split(' ')[1]} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${icon} ${color.split(' ')[0]} text-lg`}></i>
                </div>
                <div className="font-semibold text-slate-800 text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in">
          <h2 className="section-heading mb-5">Be Part of the Impact</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            Join the movement and help us write the next chapter of South Africa's mentorship story.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="btn-primary px-8 py-4">
              <i className="fa-solid fa-arrow-right"></i>
              Get Involved
            </Link>
            <Link to="/donate" className="btn-gold px-8 py-4">
              <i className="fa-solid fa-heart"></i>
              Support Our Work
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
