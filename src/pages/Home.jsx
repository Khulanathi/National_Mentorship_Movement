import { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useCountUp, useScrollAnimation } from '../hooks/useAnimations'

const stats = [
  { label: 'People Impacted Since Inception', value: 7958, icon: 'fa-solid fa-users', color: 'text-red-400' },
  { label: 'Active Mentors', value: 1862, icon: 'fa-solid fa-user-tie', color: 'text-amber-400' },
  { label: 'Mentees Currently Supported', value: 257, icon: 'fa-solid fa-seedling', color: 'text-orange-400' },
  { label: 'Mentees Supported Since Inception', value: 3108, icon: 'fa-solid fa-chart-line', color: 'text-purple-400' },
]

function StatItem({ label, value, icon, color }) {
  const { count, ref } = useCountUp(value, 2500)
  return (
    <div ref={ref} className="flex flex-col items-center text-center p-6">
      <i className={`${icon} ${color} text-3xl mb-3`}></i>
      <div className="text-4xl md:text-5xl font-black text-white mb-1">
        {count.toLocaleString()}
        <span className="text-amber-400">+</span>
      </div>
      <div className="text-slate-400 text-sm font-medium">{label}</div>
    </div>
  )
}

const programs = [
  {
    name: 'CSIR Entrepreneur Development',
    partner: 'CSIR',
    desc: 'Guiding grass-roots entrepreneurs through a structured journey "from pain to pitch" under CSIR alumni mentors.',
    icon: 'fa-solid fa-flask',
    color: 'bg-red-500',
  },
  {
    name: 'Nedbank Staff Volunteer Programme',
    partner: 'Nedbank',
    desc: 'Mobilising and training Nedbank staff, matching them to NGOs and community beneficiaries to drive meaningful change.',
    icon: 'fa-solid fa-building-columns',
    color: 'bg-orange-500',
  },
  {
    name: 'Mancosa Alumni Mentorship',
    partner: 'Mancosa',
    desc: 'Alumni supporting 2nd, 3rd year and postgrad students to make informed decisions about their futures.',
    icon: 'fa-solid fa-graduation-cap',
    color: 'bg-purple-500',
  },
  {
    name: 'Pernod Ricard Township Entrepreneurs',
    partner: 'Pernod Ricard',
    desc: 'Training Pernod Ricard staff to mentor township entrepreneurs, driving economic growth at the grassroots level.',
    icon: 'fa-solid fa-store',
    color: 'bg-amber-500',
  },
]

const testimonials = [
  {
    quote:
      'This mentoring partnership has impacted my business positively. My mentor taught me new skills such as time management. I have become more confident. This has been a great experience.',
    name: 'NMM Mentee',
    role: 'Entrepreneur, Johannesburg',
    initial: 'T',
    color: 'bg-red-500',
  },
  {
    quote:
      'Starting up, it is great to have someone who takes an interest in you and your business and gives you direction. My mentor looked through every aspect of the business and helped me position it better for my target market.',
    name: 'NMM Mentee',
    role: 'Small Business Owner',
    initial: 'M',
    color: 'bg-orange-500',
  },
  {
    quote:
      "My mentoring partnership has been critical to the clarity of my vision, level of my thinking and the strategic direction of my business. Mentorship is key to unlocking real potential.",
    name: 'NMM Mentee',
    role: 'Startup Founder',
    initial: 'L',
    color: 'bg-amber-500',
  },
]

const partners = [
  'Nedbank', 'Deloitte', 'CSIR', 'Mancosa', 'Pernod Ricard',
  'IDC', 'Standard Bank', 'Old Mutual', 'Sanlam', 'FCB Africa',
  'IQ Business', 'Technology Innovation Agency',
]

export default function Home() {
  useScrollAnimation()

  return (
    <div>
      {/* Ã¢â€â‚¬Ã¢â€â‚¬ HERO Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #120304 0%, #1A0507 40%, #2D0A10 70%, #1A0507 100%)' }}
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(204,30,50,0.18) 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, rgba(245,158,11,0.08) 0%, transparent 70%)' }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-6">
                Enabling All
                <br />
                <span className="text-gradient">South Africans</span>
                <br />
                to Prosper & Grow
              </h1>
              <p className="text-xl md:text-2xl text-red-200 font-semibold mb-4">
                Through Mentorship {' '}
                <span className="text-amber-400">The Power of Two</span>
              </p>
              <p className="text-base md:text-lg text-slate-300 max-w-xl mb-10 leading-relaxed">
                We mobilise volunteer mentors and connect them with entrepreneurs, students,
                and professionals who need their skills and experience  transforming lives
                and building a stronger nation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/get-involved" className="btn-primary text-base px-8 py-4 text-lg rounded-xl">
                  <i className="fa-solid fa-user-tie"></i>
                  Become a Mentor
                </Link>
                <Link to="/get-involved" className="btn-secondary text-base px-8 py-4 text-lg rounded-xl">
                  <i className="fa-solid fa-seedling"></i>
                  Become a Mentee
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6">
                {[
                  { icon: 'fa-solid fa-check-circle', text: '100% Free to Participate', color: 'text-orange-400' },
                  { icon: 'fa-solid fa-shield-halved', text: 'Section 18A PBO', color: 'text-red-400' },
                  { icon: 'fa-solid fa-map-pin', text: 'Nationwide Reach', color: 'text-amber-400' },
                ].map(({ icon, text, color }) => (
                  <div key={text} className="flex items-center gap-2">
                    <i className={`${icon} ${color} text-sm`}></i>
                    <span className="text-slate-300 text-sm font-medium">{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right  visual card stack */}
            <div className="hidden lg:flex justify-center items-center relative">
              <div className="relative w-full max-w-md">
                {/* Main card */}
                <div
                  className="rounded-3xl p-8 text-center shadow-2xl relative z-10"
                  style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.12)' }}
                >
                  <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <i className="fa-solid fa-handshake text-white text-4xl"></i>
                  </div>
                  <div className="text-white font-black text-2xl mb-1">The Power of Two</div>
                  <p className="text-slate-300 text-sm mb-6">
                    Mentorship doubles results  people with mentors are twice as likely to succeed.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: 'Mentors', val: '1,862', icon: 'fa-user-tie', c: 'text-red-400' },
                      { label: 'Impacted', val: '7,958+', icon: 'fa-chart-line', c: 'text-orange-400' },
                    ].map(({ label, val, icon, c }) => (
                      <div key={label} className="bg-white/5 rounded-xl p-3">
                        <i className={`fa-solid ${icon} ${c} text-lg mb-1 block`}></i>
                        <div className="text-white font-bold text-lg">{val}</div>
                        <div className="text-slate-400 text-xs">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div
                  className="absolute -top-4 -right-4 bg-amber-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-lg z-20 flex items-center gap-1.5"
                >
                  <i className="fa-solid fa-star"></i>
                  10 Years of Impact
                </div>

                {/* Bottom floating card */}
                <div
                  className="absolute -bottom-6 -left-6 rounded-2xl px-5 py-4 shadow-xl z-20 flex items-center gap-3"
                  style={{ background: 'rgba(15,35,68,0.95)', border: '1px solid rgba(255,255,255,0.1)' }}
                >
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-location-dot text-white"></i>
                  </div>
                  <div>
                    <div className="text-white text-xs font-bold">Nationwide</div>
                    <div className="text-slate-400 text-xs">South Africa</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll indicator — anchored to section bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 z-20">
          <span className="text-white text-xs uppercase tracking-widest">Scroll</span>
          <i className="fa-solid fa-chevron-down text-white animate-bounce"></i>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ STATS Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section style={{ background: '#2D0A10' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {stats.map((s) => (
              <StatItem key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ MISSION Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="animate-in order-2 lg:order-1">
              <div className="relative">
                <div
                  className="rounded-3xl p-10 h-80 flex flex-col items-center justify-center text-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}
                >
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: 'radial-gradient(circle at 30% 30%, #F87171, transparent 60%), radial-gradient(circle at 70% 70%, #F59E0B, transparent 60%)',
                    }}
                  />
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-red-500 rounded-2xl flex items-center justify-center">
                        <i className="fa-solid fa-user-tie text-white text-2xl"></i>
                      </div>
                      <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
                        <i className="fa-solid fa-link text-white text-sm"></i>
                      </div>
                      <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center">
                        <i className="fa-solid fa-seedling text-white text-2xl"></i>
                      </div>
                    </div>
                    <div className="text-white font-black text-3xl mb-2">Mentor + Mentee</div>
                    <div className="text-amber-400 font-semibold">= The Power of Two</div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center shadow-xl">
                  <div className="text-white text-center">
                    <div className="font-black text-xl leading-none">10</div>
                    <div className="text-xs font-semibold">Years</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="animate-in animate-in-delay-1 order-1 lg:order-2">
              <span className="section-tag">Our Mission</span>
              <h2 className="section-heading mb-5">
                Building a Mentorship Movement at Scale
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5 text-lg">
                The National Mentorship Movement is a platform where mentors and mentees meet
                to help shape our nation. NMM is more than an idea  it is a belief in the
                power of the innovative spirit of South Africans to make our country great.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We mobilise volunteer mentors willing and able to give back, and match them with
                those in South Africa who could benefit from their skills and experience  impacting
                both. As a result, we are grooming future entrepreneurs, developing confident individuals,
                transforming the economy, and building trusted relationships across society.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: 'fa-solid fa-handshake', title: 'One-on-One', desc: 'Personalised mentorship relationships' },
                  { icon: 'fa-solid fa-users', title: 'Group Mentorship', desc: 'Peer and group learning programmes' },
                  { icon: 'fa-solid fa-building', title: 'Corporate Partners', desc: 'CSI & staff volunteer programmes' },
                  { icon: 'fa-solid fa-lightbulb', title: 'All Sectors', desc: 'Entrepreneurs, students & professionals' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <i className={`${icon} text-red-600 text-sm`}></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{title}</div>
                      <div className="text-slate-500 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about" className="btn-primary">
                <i className="fa-solid fa-arrow-right"></i>
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ HOW IT WORKS Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="section-tag">Simple Process</span>
            <h2 className="section-heading">How Mentorship Works</h2>
            <p className="section-subheading mx-auto">
              Three easy steps to begin a transformative mentorship journey  for both mentors and mentees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-16 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-red-200 via-amber-200 to-orange-200"></div>

            {[
              {
                step: '01',
                icon: 'fa-solid fa-user-plus',
                title: 'Register & Profile',
                desc: 'Sign up on our platform as a mentor or mentee. Complete your profile with your skills, goals, and areas of interest.',
                color: 'bg-red-600',
                delay: '',
              },
              {
                step: '02',
                icon: 'fa-solid fa-arrows-rotate',
                title: 'Smart Matching',
                desc: 'Our platform intelligently matches you with the ideal mentor or mentee based on your profile, goals, and mutual compatibility.',
                color: 'bg-amber-500',
                delay: 'animate-in-delay-1',
              },
              {
                step: '03',
                icon: 'fa-solid fa-chart-line',
                title: 'Grow Together',
                desc: 'Meet regularly, set goals, track progress, and transform each other\'s lives through the power of shared knowledge and experience.',
                color: 'bg-orange-500',
                delay: 'animate-in-delay-2',
              },
            ].map(({ step, icon, title, desc, color, delay }) => (
              <div key={step} className={`animate-in ${delay} relative`}>
                <div className="card p-8 h-full">
                  <div className="flex items-start gap-4 mb-5">
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
                      <i className={`${icon} text-white text-xl`}></i>
                    </div>
                    <div className="text-slate-200 font-black text-5xl leading-none">{step}</div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in">
            <Link to="/how-it-works" className="btn-outline">
              <i className="fa-solid fa-circle-info"></i>
              Learn More About the Process
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ PROGRAMMES Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-14 animate-in">
            <div>
              <span className="section-tag">Our Work</span>
              <h2 className="section-heading">Featured Programmes</h2>
              <p className="text-slate-500 mt-3 max-w-xl">
                We work across sectors, partnering with leading organisations to deliver impact at scale.
              </p>
            </div>
            <Link to="/programs" className="btn-outline whitespace-nowrap">
              <i className="fa-solid fa-grid-2"></i>
              View All Programmes
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {programs.map(({ name, partner, desc, icon, color }, i) => (
              <div
                key={name}
                className={`animate-in animate-in-delay-${i % 4} card p-7 flex gap-5`}
              >
                <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <i className={`${icon} text-white text-lg`}></i>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-slate-900">{name}</h3>
                  </div>
                  <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                    {partner}
                  </span>
                  <p className="text-slate-500 text-sm mt-2 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ TESTIMONIALS Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}
      >
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-3">
              Real Stories
            </span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white">
              Voices from Our Community
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role, initial, color }, i) => (
              <div
                key={i}
                className={`animate-in animate-in-delay-${i} rounded-2xl p-7 flex flex-col`}
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <i className="fa-solid fa-quote-left text-red-400/40 text-4xl mb-4"></i>
                <p className="text-slate-200 leading-relaxed flex-grow mb-6 text-sm">&ldquo;{quote}&rdquo;</p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white font-bold`}>
                    {initial}
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{name}</div>
                    <div className="text-slate-400 text-xs">{role}</div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fa-solid fa-star text-amber-400 text-xs"></i>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-in">
            <Link to="/impact" className="btn-gold">
              <i className="fa-solid fa-chart-bar"></i>
              See Full Impact
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ PARTNERS Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 animate-in">
            <p className="text-slate-400 text-sm uppercase font-semibold tracking-widest">
              Trusted by leading organisations across South Africa
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 animate-in">
            {partners.map((p) => (
              <span
                key={p}
                className="px-5 py-2.5 bg-white border border-slate-200 rounded-full text-slate-600 text-sm font-medium hover:border-red-300 hover:text-red-600 transition-colors cursor-default shadow-sm"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ GET INVOLVED CTA Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Join the Movement</span>
            <h2 className="section-heading">Ready to Make a Difference?</h2>
            <p className="section-subheading mx-auto">
              Whether you have experience to share or goals to achieve  there is a place for you in the NMM community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mentor card */}
            <div
              className="animate-in rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #CC1E32, #9B1425)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(30%, -30%)' }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <i className="fa-solid fa-user-tie text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-extrabold mb-3">Become a Mentor</h3>
                <p className="text-red-100 mb-6 leading-relaxed">
                  Share your expertise, give back to your community, and make a lasting impact
                  on someone's life and business.
                </p>
                <ul className="space-y-2 mb-7">
                  {['Flexible time commitment', 'Nationwide virtual mentoring', 'Training & platform support'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-red-100">
                      <i className="fa-solid fa-check text-red-300 text-xs"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/get-involved" className="inline-flex items-center gap-2 bg-white text-red-700 font-bold px-6 py-3 rounded-xl hover:bg-red-50 transition-colors">
                  <i className="fa-solid fa-arrow-right"></i>
                  Register as Mentor
                </Link>
              </div>
            </div>

            {/* Mentee card */}
            <div
              className="animate-in animate-in-delay-1 rounded-3xl p-8 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #E85020, #C44010)' }}
            >
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10"
                style={{ background: 'radial-gradient(circle, white, transparent)', transform: 'translate(30%, -30%)' }}
              />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-5">
                  <i className="fa-solid fa-seedling text-white text-2xl"></i>
                </div>
                <h3 className="text-2xl font-extrabold mb-3">Become a Mentee</h3>
                <p className="text-orange-100 mb-6 leading-relaxed">
                  Access the guidance of experienced professionals and unlock your full potential in
                  business, career, or personal growth.
                </p>
                <ul className="space-y-2 mb-7">
                  {['Matched to the right mentor', 'Goal setting & progress tracking', 'Access to learning resources'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-orange-100">
                      <i className="fa-solid fa-check text-orange-300 text-xs"></i>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link to="/get-involved" className="inline-flex items-center gap-2 bg-white text-orange-700 font-bold px-6 py-3 rounded-xl hover:bg-orange-50 transition-colors">
                  <i className="fa-solid fa-arrow-right"></i>
                  Register as Mentee
                </Link>
              </div>
            </div>
          </div>

          {/* Corporate row */}
          <div
            className="animate-in mt-6 rounded-2xl p-7 flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-200"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                <i className="fa-solid fa-building text-amber-500 text-xl"></i>
              </div>
              <div>
                <h4 className="font-bold text-slate-900">Corporate Partnerships</h4>
                <p className="text-slate-500 text-sm">
                  Integrate mentorship into your CSI or staff volunteer strategy.
                </p>
              </div>
            </div>
            <Link to="/get-involved" className="btn-gold whitespace-nowrap">
              <i className="fa-solid fa-handshake"></i>
              Partner with Us
            </Link>
          </div>
        </div>
      </section>

      {/* Ã¢â€â‚¬Ã¢â€â‚¬ CONTACT STRIP Ã¢â€â‚¬Ã¢â€â‚¬ */}
      <section
        className="py-16"
        style={{ background: '#2D0A10' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-extrabold text-white mb-2">Have Questions?</h3>
              <p className="text-slate-400">
                Reach out to the NMM team  we&apos;d love to hear from you.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:connect@mentorshipmovement.co.za"
                className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                <i className="fa-solid fa-envelope"></i>
                connect@mentorshipmovement.co.za
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 border border-white/20 text-white hover:bg-white/10 font-semibold px-6 py-3 rounded-xl transition-colors">
                <i className="fa-solid fa-paper-plane"></i>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
