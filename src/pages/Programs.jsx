import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useAnimations'
import ImageSlider from '../components/ImageSlider'

const allPrograms = [
  {
    name: 'CSIR Entrepreneur Development Programme',
    partner: 'CSIR',
    category: 'Entrepreneurship',
    status: 'Active',
    icon: 'fa-solid fa-flask',
    color: 'bg-red-600',
    desc: 'Taking grass-roots entrepreneurs through a structured journey "from pain to pitch" under the guidance of CSIR alumni mentors. A focused programme that builds business fundamentals and investor-readiness.',
    tags: ['Entrepreneurs', 'CSIR Alumni', 'Structured Programme'],
  },
  {
    name: 'Nedbank Staff Volunteer Mentorship',
    partner: 'Nedbank',
    category: 'Corporate CSI',
    status: 'Active',
    icon: 'fa-solid fa-building-columns',
    color: 'bg-orange-500',
    desc: 'NMM mobilises, trains and matches Nedbank staff volunteers to Nedbank-supported NGOs and their beneficiaries  driving meaningful community impact through staff engagement.',
    tags: ['Staff Volunteers', 'NGO Beneficiaries', 'CSI Programme'],
  },
  {
    name: 'Mancosa Alumni Mentorship Programme',
    partner: 'Mancosa',
    category: 'Education',
    status: 'Active',
    icon: 'fa-solid fa-graduation-cap',
    color: 'bg-purple-500',
    desc: 'A large structured group programme connecting alumni with 2nd and 3rd year and postgraduate students to help them make good decisions about their futures and careers.',
    tags: ['University Students', 'Alumni Mentors', 'Group Programme'],
  },
  {
    name: 'Pernod Ricard Township Entrepreneur Programme',
    partner: 'Pernod Ricard',
    category: 'Corporate CSI',
    status: 'Active',
    icon: 'fa-solid fa-store',
    color: 'bg-amber-500',
    desc: 'NMM trains Pernod Ricard staff and runs a programme where they mentor township entrepreneurs, driving economic growth and empowerment at the grassroots level.',
    tags: ['Township Entrepreneurs', 'Corporate Mentors', 'Community Impact'],
  },
  {
    name: 'Deloitte Governance Academy',
    partner: 'Deloitte',
    category: 'Corporate',
    status: 'Active',
    icon: 'fa-solid fa-scale-balanced',
    color: 'bg-rose-500',
    desc: 'Providing mentorship support through retired Deloitte partners to current and aspirant board members attending the Deloitte Governance Academy.',
    tags: ['Board Members', 'Governance', 'Retired Partners'],
  },
  {
    name: 'IDC Internal Group Mentorship',
    partner: 'IDC',
    category: 'Internal Corporate',
    status: 'Active',
    icon: 'fa-solid fa-people-group',
    color: 'bg-teal-500',
    desc: 'An internal group mentorship programme for IDC staff designed to increase knowledge transfer, retention, and employee development across the organisation.',
    tags: ['Staff Development', 'Knowledge Transfer', 'Retention'],
  },
  {
    name: 'Standard Bank MentorSA Programme',
    partner: 'Standard Bank',
    category: 'SMME Support',
    status: 'Previous',
    icon: 'fa-solid fa-coins',
    color: 'bg-yellow-500',
    desc: 'Enabled small and medium enterprises to survive and pivot following Covid through targeted group and one-on-one mentorship support.',
    tags: ['SMMEs', 'Post-Covid Recovery', 'Group & 1-on-1'],
  },
  {
    name: 'Tourism Business Council Programme',
    partner: 'TBCSA',
    category: 'Sector Specific',
    status: 'Previous',
    icon: 'fa-solid fa-plane-departure',
    color: 'bg-sky-500',
    desc: 'Supporting entrepreneurs and graduates of the tourism industry executive development programme to survive and thrive in the highly competitive tourism sector.',
    tags: ['Tourism Sector', 'Entrepreneurs', 'EDP Graduates'],
  },
  {
    name: 'Old Mutual Leadership Programme',
    partner: 'Old Mutual',
    category: 'Leadership',
    status: 'Previous',
    icon: 'fa-solid fa-landmark',
    color: 'bg-indigo-500',
    desc: 'In partnership with ULP  interactive forums and group and one-on-one mentorship to develop a strong community of confident, financially literate and ethical leaders.',
    tags: ['Leadership Development', 'Financial Literacy', 'Ethics'],
  },
  {
    name: 'Technology Innovation Agency (TIA)',
    partner: 'TIA',
    category: 'Innovation',
    status: 'Previous',
    icon: 'fa-solid fa-microchip',
    color: 'bg-violet-500',
    desc: 'Establishing a mentorship platform and volunteer mentor community to support entrepreneurs in the innovation sector, fostering a culture of entrepreneurial innovation in South Africa.',
    tags: ['Innovation', 'Entrepreneurs', 'Tech Sector'],
  },
  {
    name: 'SuperSport Women in Sport Ally',
    partner: 'SuperSport',
    category: 'Sector Specific',
    status: 'Previous',
    icon: 'fa-solid fa-person-running',
    color: 'bg-orange-500',
    desc: 'Providing mentorship process and content support to a group of women in the Women in Sport Ally Programme to empower them to excel within the organisation.',
    tags: ['Women in Sport', 'Gender Equity', 'Corporate'],
  },
  {
    name: 'V&A Waterfront Tenant Recovery',
    partner: 'V&A Waterfront / CDI Capital',
    category: 'Entrepreneurship',
    status: 'Previous',
    icon: 'fa-solid fa-water',
    color: 'bg-cyan-500',
    desc: 'An innovative compressed group mentorship programme to support Waterfront tenants in recovering from the pandemic and growing their businesses into the upswing.',
    tags: ['Post-Covid', 'Retail', 'Group Mentorship'],
  },
]

const categories = ['All', 'Active', 'Entrepreneurship', 'Corporate CSI', 'Education', 'Corporate', 'Internal Corporate', 'Leadership', 'SMME Support', 'Sector Specific', 'Innovation']

export default function Programs() {
  const [activeFilter, setActiveFilter] = useState('All')
  useScrollAnimation()

  const filtered = allPrograms.filter((p) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Active') return p.status === 'Active'
    return p.category === activeFilter
  })

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(150deg, #2D0A10 0%, #1A0507 50%, #1C0508 100%)' }}>
        {/* Grid cross-hatch pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 32px)'
        }} />
        {/* Decorative icon */}
        <i className="fa-solid fa-briefcase absolute -bottom-6 -left-6 text-white/[0.04] pointer-events-none select-none" style={{ fontSize: '20rem', lineHeight: 1 }}></i>
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500/70 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4">Our Work</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Programmes</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            We work with leading organisations across South Africa to design and deliver tailored mentorship
            programmes that create lasting impact.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {[
              { icon: 'fa-solid fa-check-circle', text: `${allPrograms.filter(p => p.status === 'Active').length} Active Programmes` },
              { icon: 'fa-solid fa-building', text: '20+ Partner Organisations' },
              { icon: 'fa-solid fa-users', text: 'All Sectors & Sizes' },
            ].map(({ icon, text }) => (
              <span key={text} className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm px-4 py-2 rounded-full border border-white/20">
                <i className={`${icon} text-amber-400`}></i>
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Programmes slider */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="animate-in">
              <span className="section-tag">Our Programmes in Action</span>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">
                Real Events, Real Impact
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                From university campuses in Mpumalanga to innovation forums in the Northern Cape —
                NMM programmes run across South Africa, delivering world-class mentorship where it’s needed most.
              </p>
              <div className="flex flex-wrap gap-3">
                {['University Campus', 'Corporate Events', 'Innovation Forums', 'Community Workshops'].map((tag) => (
                  <span key={tag} className="text-xs font-semibold bg-red-50 text-red-600 border border-red-100 px-3 py-1.5 rounded-full">{tag}</span>
                ))}
              </div>
            </div>
            <ImageSlider
              images={[
                { src: '/images/nmm-01.png', caption: 'University of Mpumalanga mentorship event' },
                { src: '/images/nmm-03.png', caption: 'Northern Cape Innovation Forum panel' },
                { src: '/images/nmm-25.png', caption: 'Corporate volunteer programme launch' },
                { src: '/images/nmm-26.png', caption: 'Group mentorship session' },
                { src: '/images/nmm-27.png', caption: 'NMM graduation ceremony' },
                { src: '/images/nmm-28.png', caption: 'Community outreach event' },
              ]}
              height="h-[340px]"
              interval={3800}
              className="animate-in animate-in-delay-1 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* Partnership model */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-in">
            <span className="section-tag">How We Partner</span>
            <h2 className="section-heading">Our Partnership Model</h2>
            <p className="section-subheading mx-auto">
              Our model is inherently one of collaboration  we design bespoke programmes with partners across the public, private, and NGO sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'fa-solid fa-building', title: 'Corporate Partners', desc: 'Organisations that provide access to volunteer mentors, fund programmes, or integrate mentorship into their CSI strategy.', color: 'bg-red-600' },
              { icon: 'fa-solid fa-people-arrows', title: 'Beneficiary Partners', desc: 'NGOs, universities, and incubators whose members, students or beneficiaries can benefit from mentorship support.', color: 'bg-orange-500' },
              { icon: 'fa-solid fa-heart-hands', title: 'Social Partners', desc: 'Sponsoring organisations and foundations who believe in the power of mentorship to transform South Africa.', color: 'bg-amber-500' },
            ].map(({ icon, title, desc, color }) => (
              <div key={title} className="animate-in card p-7 text-center">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <i className={`${icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme listing */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 animate-in">
            <div>
              <span className="section-tag">All Programmes</span>
              <h2 className="section-heading">Current & Previous Work</h2>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10 animate-in">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeFilter === cat
                    ? 'bg-red-600 text-white shadow-md'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-red-300 hover:text-red-600'
                }`}
              >
                {cat}
                {cat === 'Active' && (
                  <span className="ml-1.5 w-1.5 h-1.5 bg-orange-400 rounded-full inline-block"></span>
                )}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map(({ name, partner, category, status, icon, color, desc, tags }, i) => (
              <div key={name} className={`animate-in animate-in-delay-${i % 4} card p-7`}>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className={`${icon} text-white`}></i>
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-extrabold text-slate-900 leading-snug">{name}</h3>
                      <span className={`flex-shrink-0 text-xs font-bold px-2.5 py-1 rounded-full ${
                        status === 'Active' ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-500'
                      }`}>
                        {status === 'Active' && <span className="inline-block w-1.5 h-1.5 bg-orange-500 rounded-full mr-1.5 align-middle"></span>}
                        {status}
                      </span>
                    </div>
                    <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-0.5 rounded-md mr-2">{partner}</span>
                    <span className="text-xs text-slate-400">{category}</span>
                  </div>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mt-4 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs bg-slate-100 text-slate-600 font-medium px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20 text-slate-400">
              <i className="fa-solid fa-filter text-4xl mb-4 block"></i>
              No programmes found for this filter.
            </div>
          )}
        </div>
      </section>

      {/* Entrepreneurship Centre feature */}
      <section className="py-20 bg-white" id="entrepreneurship">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in">
              <span className="section-tag">Featured Initiative</span>
              <h2 className="section-heading mb-5">Entrepreneurship Centre</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                The NMM Entrepreneurship Centre is dedicated to supporting South African entrepreneurs
                at every stage of their journey  from idea to launch, and from survival to scale.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Through structured mentorship programmes, access to experienced business mentors, and
                connections to funding and market opportunities, we help entrepreneurs build businesses
                that create jobs and drive economic transformation.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Structured "from pain to pitch" journeys',
                  'Access to CSIR alumni and industry experts',
                  'Township and creative economy focus',
                  'Links to funding bodies like NYDA and SEDA',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fa-solid fa-check text-orange-600 text-xs"></i>
                    </div>
                    <span className="text-slate-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/get-involved" className="btn-primary">
                <i className="fa-solid fa-lightbulb"></i>
                Join as an Entrepreneur
              </Link>
            </div>
            <div className="animate-in animate-in-delay-1">
              <div className="rounded-3xl p-10 h-72 flex flex-col items-center justify-center text-center relative overflow-hidden"
                style={{ background: 'linear-gradient(135deg, #1A0507, #1E3A5F)' }}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 30% 70%, #F59E0B, transparent 60%)' }}
                />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <i className="fa-solid fa-lightbulb text-white text-4xl"></i>
                  </div>
                  <div className="text-white font-extrabold text-2xl mb-1">Entrepreneurship Centre</div>
                  <div className="text-amber-400 text-sm font-semibold">From Idea to Impact</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            Want to Run a Programme with NMM?
          </h2>
          <p className="text-slate-400 mb-8 text-lg">
            We design bespoke programmes for corporates, NGOs, universities, and government entities. Let&apos;s build something meaningful together.
          </p>
          <Link to="/contact" className="btn-gold text-base px-8 py-4">
            <i className="fa-solid fa-paper-plane"></i>
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  )
}
