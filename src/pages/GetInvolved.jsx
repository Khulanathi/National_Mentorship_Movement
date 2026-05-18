import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useAnimations'

function FormInput({ label, type = 'text', placeholder, id }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm"
      />
    </div>
  )
}

function FormSelect({ label, id, options }) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
      <select
        id={id}
        className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm bg-white"
      >
        <option value="">Select an option...</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export default function GetInvolved() {
  const [activeTab, setActiveTab] = useState('mentor')
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-4">Join the Movement</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Get Involved</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you&apos;re a seasoned professional ready to give back, someone seeking guidance, or a company looking to create impact there&apos;s a place for you here.
          </p>
        </div>
      </section>

      {/* Three paths */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Your Path</span>
            <h2 className="section-heading">How Would You Like to Participate?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                id: 'mentor',
                icon: 'fa-solid fa-user-tie',
                title: 'Become a Mentor',
                subtitle: 'Give back your expertise',
                color: 'bg-red-600',
                bgActive: 'bg-red-600',
                desc: 'Share your skills, experience, and wisdom with someone who needs your guidance.',
              },
              {
                id: 'mentee',
                icon: 'fa-solid fa-seedling',
                title: 'Become a Mentee',
                subtitle: 'Accelerate your growth',
                color: 'bg-orange-500',
                bgActive: 'bg-orange-500',
                desc: 'Access the knowledge and guidance of experienced professionals to reach your goals.',
              },
              {
                id: 'corporate',
                icon: 'fa-solid fa-building',
                title: 'Corporate Partnership',
                subtitle: 'Drive social impact',
                color: 'bg-amber-500',
                bgActive: 'bg-amber-500',
                desc: 'Integrate mentorship into your CSI strategy or run a staff volunteer programme.',
              },
            ].map(({ id, icon, title, subtitle, color, desc }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`card p-7 text-left transition-all duration-300 ${
                  activeTab === id ? 'ring-2 ring-offset-2 ring-red-500 shadow-xl -translate-y-1' : ''
                }`}
              >
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-4`}>
                  <i className={`${icon} text-white text-xl`}></i>
                </div>
                <h3 className="font-extrabold text-slate-900 text-lg">{title}</h3>
                <p className="text-red-600 text-sm font-semibold mb-2">{subtitle}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                {activeTab === id && (
                  <div className="mt-3 flex items-center gap-1.5 text-red-600 text-xs font-semibold">
                    <i className="fa-solid fa-arrow-down"></i> See registration below
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Mentor Form */}
          {activeTab === 'mentor' && (
            <div className="animate-in max-w-3xl mx-auto">
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-user-tie text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Mentor Registration</h3>
                    <p className="text-slate-500 text-sm">Share your expertise and transform a life</p>
                  </div>
                </div>

                <div className="bg-red-50 rounded-xl p-5 mb-8">
                  <h4 className="font-bold text-red-900 mb-3">Why become a mentor?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Flexible typically 2 hours/month',
                      'Virtual or in-person sessions',
                      'Full training & platform access',
                      'Make a meaningful difference',
                      'Broaden your own perspective',
                      'Build your professional network',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-red-800">
                        <i className="fa-solid fa-check text-red-500 text-xs"></i> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput label="First Name" id="mentor-fname" placeholder="Your first name" />
                    <FormInput label="Last Name" id="mentor-lname" placeholder="Your last name" />
                  </div>
                  <FormInput label="Email Address" type="email" id="mentor-email" placeholder="your@email.com" />
                  <FormInput label="Phone Number" type="tel" id="mentor-phone" placeholder="+27 XX XXX XXXX" />
                  <FormInput label="Current Job Title" id="mentor-title" placeholder="e.g. Senior Manager, Entrepreneur" />
                  <FormInput label="Company / Organisation" id="mentor-company" placeholder="Where do you work?" />
                  <FormSelect
                    label="Area of Expertise"
                    id="mentor-expertise"
                    options={['Business & Entrepreneurship', 'Finance & Accounting', 'Technology & Innovation', 'Marketing & Sales', 'Human Resources', 'Legal', 'Agriculture', 'Education', 'Healthcare', 'Other']}
                  />
                  <FormSelect
                    label="Mentoring Availability"
                    id="mentor-availability"
                    options={['2 hours/month', '4 hours/month', '6+ hours/month', 'Flexible']}
                  />
                  <div>
                    <label htmlFor="mentor-why" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Why do you want to become a mentor?
                    </label>
                    <textarea
                      id="mentor-why"
                      rows={3}
                      placeholder="Share your motivation..."
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                    <i className="fa-solid fa-paper-plane"></i>
                    Submit Mentor Application
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    This is a demo form. Submissions do not go anywhere for demo purposes only.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Mentee Form */}
          {activeTab === 'mentee' && (
            <div className="animate-in max-w-3xl mx-auto">
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-seedling text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Mentee Registration</h3>
                    <p className="text-slate-500 text-sm">Start your growth journey today</p>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-5 mb-8">
                  <h4 className="font-bold text-orange-900 mb-3">Who can become a mentee?</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      'Entrepreneurs at any stage',
                      'University students',
                      'Young professionals',
                      'Career changers',
                      'Township business owners',
                      'Anyone with a growth mindset',
                    ].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-orange-800">
                        <i className="fa-solid fa-check text-orange-500 text-xs"></i> {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput label="First Name" id="mentee-fname" placeholder="Your first name" />
                    <FormInput label="Last Name" id="mentee-lname" placeholder="Your last name" />
                  </div>
                  <FormInput label="Email Address" type="email" id="mentee-email" placeholder="your@email.com" />
                  <FormInput label="Phone Number" type="tel" id="mentee-phone" placeholder="+27 XX XXX XXXX" />
                  <FormSelect
                    label="I am currently..."
                    id="mentee-status"
                    options={['An Entrepreneur', 'Employed', 'In Education', 'Unemployed / Job Seeking', 'Career Transition', 'Other']}
                  />
                  <FormSelect
                    label="Area Where I Need Mentorship"
                    id="mentee-area"
                    options={['Starting a Business', 'Growing a Business', 'Career Development', 'Financial Management', 'Leadership Skills', 'Academic Guidance', 'Personal Development', 'Other']}
                  />
                  <div>
                    <label htmlFor="mentee-goals" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      What are your main goals for the mentorship?
                    </label>
                    <textarea
                      id="mentee-goals"
                      rows={3}
                      placeholder="What do you hope to achieve through mentorship?"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                    <i className="fa-solid fa-paper-plane"></i>
                    Submit Mentee Application
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    This is a demo form. Submissions do not go anywhere for demo purposes only.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Corporate Form */}
          {activeTab === 'corporate' && (
            <div className="animate-in max-w-3xl mx-auto">
              <div className="card p-8 md:p-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                    <i className="fa-solid fa-building text-white text-lg"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900">Corporate Partnership Enquiry</h3>
                    <p className="text-slate-500 text-sm">Let&apos;s design a programme that delivers real impact</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                  {[
                    { icon: 'fa-solid fa-check', title: 'Staff Volunteer Programmes', desc: 'Engage your employees' },
                    { icon: 'fa-solid fa-check', title: 'CSI Mentorship Initiatives', desc: 'Drive community impact' },
                    { icon: 'fa-solid fa-check', title: 'Internal Development Programmes', desc: 'Retain top talent' },
                  ].map(({ icon, title, desc }) => (
                    <div key={title} className="bg-amber-50 rounded-xl p-4 text-center">
                      <i className={`${icon} text-amber-500 text-xl mb-2 block`}></i>
                      <div className="font-bold text-slate-800 text-sm">{title}</div>
                      <div className="text-slate-500 text-xs">{desc}</div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput label="Contact Person (Full Name)" id="corp-name" placeholder="Your full name" />
                    <FormInput label="Job Title" id="corp-title" placeholder="Your role" />
                  </div>
                  <FormInput label="Company Name" id="corp-company" placeholder="Your organisation" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormInput label="Email Address" type="email" id="corp-email" placeholder="work@company.com" />
                    <FormInput label="Phone Number" type="tel" id="corp-phone" placeholder="+27 XX XXX XXXX" />
                  </div>
                  <FormSelect
                    label="Type of Programme Interested In"
                    id="corp-type"
                    options={['Staff Volunteer Mentorship', 'CSI / Community Mentorship', 'Internal Employee Development', 'Entrepreneur Support', 'Student Mentorship', 'Not Sure Need Guidance']}
                  />
                  <FormInput label="Approximate Number of Participants" id="corp-size" placeholder="e.g. 50, 200, 500+" />
                  <div>
                    <label htmlFor="corp-message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Tell us about your goals
                    </label>
                    <textarea
                      id="corp-message"
                      rows={4}
                      placeholder="What outcomes are you hoping to achieve? Any specific sectors or communities?"
                      className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>
                  <button className="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2 text-base">
                    <i className="fa-solid fa-paper-plane"></i>
                    Submit Partnership Enquiry
                  </button>
                  <p className="text-slate-400 text-xs text-center">
                    This is a demo form. Submissions do not go anywhere for demo purposes only.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
