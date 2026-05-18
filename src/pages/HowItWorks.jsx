import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useAnimations'

const steps = [
  {
    num: '01',
    icon: 'fa-solid fa-user-plus',
    title: 'Register on the Platform',
    color: 'bg-red-600',
    forMentor: 'Create a detailed profile showcasing your expertise, industry experience, and the areas you can mentor in. Specify your availability and preferred communication style.',
    forMentee: 'Share your goals, background, and the areas where you need guidance whether business, career, academics, or personal growth.',
  },
  {
    num: '02',
    icon: 'fa-solid fa-sliders',
    title: 'Onboarding & Preparation',
    color: 'bg-amber-500',
    forMentor: 'Complete NMM\'s mentor training to understand best practices, effective communication, and goal-setting frameworks.',
    forMentee: 'Attend an onboarding session to understand how the mentorship process works and what to expect from your mentor relationship.',
  },
  {
    num: '03',
    icon: 'fa-solid fa-arrows-rotate',
    title: 'Smart Matching',
    color: 'bg-purple-500',
    forMentor: 'Our platform intelligently matches you with a mentee whose goals align with your expertise. You can review the match and confirm the partnership.',
    forMentee: 'Be matched with a mentor whose background and skills align with your goals. Review your match and connect when you\'re ready.',
  },
  {
    num: '04',
    icon: 'fa-solid fa-calendar-check',
    title: 'Regular Meetings',
    color: 'bg-orange-500',
    forMentor: 'Meet your mentee regularly (monthly at minimum). Use the platform to schedule sessions, share resources, and track milestones.',
    forMentee: 'Schedule regular check-ins with your mentor, come prepared with questions and progress updates, and take ownership of your journey.',
  },
  {
    num: '05',
    icon: 'fa-solid fa-bullseye',
    title: 'Goal Setting & Tracking',
    color: 'bg-rose-500',
    forMentor: 'Help your mentee define SMART goals and track progress over the programme period. Provide constructive feedback and celebrate wins.',
    forMentee: 'Set clear, measurable goals with your mentor\'s guidance. Track your progress on the platform and reflect on your growth over time.',
  },
  {
    num: '06',
    icon: 'fa-solid fa-trophy',
    title: 'Reflect & Graduate',
    color: 'bg-teal-500',
    forMentor: 'At programme completion, provide feedback on the partnership. Many mentors continue the relationship beyond the formal period.',
    forMentee: 'Celebrate your achievements, share your story, and consider paying it forward by becoming a mentor yourself one day.',
  },
]

const platformFeatures = [
  { icon: 'fa-solid fa-user-check', title: 'Profile Registration', desc: 'Mentors and mentees register their offerings and expectations on our world-class platform.' },
  { icon: 'fa-solid fa-arrows-rotate', title: 'Intelligent Matching', desc: 'Algorithmic matching pairs mentors and mentees based on goals, skills, and sector alignment.' },
  { icon: 'fa-solid fa-chart-bar', title: 'Progress Monitoring', desc: 'Track relationship effectiveness and outcomes over a 12-month programme period.' },
  { icon: 'fa-solid fa-calendar', title: 'Meeting Scheduling', desc: 'Built-in scheduling tools for mentors and mentees to easily book and manage sessions.' },
  { icon: 'fa-solid fa-flag', title: 'Goal Management', desc: 'Record, track, and celebrate goals keeping both parties accountable and motivated.' },
  { icon: 'fa-solid fa-comments', title: 'In-Platform Chat', desc: 'Secure messaging between mentor and mentee, with document sharing capabilities.' },
  { icon: 'fa-solid fa-book-open', title: 'Learning Resources', desc: 'Access curated content, templates, and guidance materials to enhance every session.' },
  { icon: 'fa-solid fa-people-group', title: 'Community Access', desc: 'Participate in peer communities and group sessions beyond the one-on-one relationship.' },
]

export default function HowItWorks() {
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
          <span className="inline-block text-red-300 font-semibold text-sm uppercase tracking-widest mb-4">The Process</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">How It Works</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            A clear, structured process that takes both mentors and mentees from registration to transformation with support every step of the way.
          </p>
        </div>
      </section>

      {/* Mentorship defined */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-in">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4">What is Mentorship?</h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-6">
            Mentorship is a <strong>partnership and relationship</strong> between two (or more) people to achieve mutually agreed goals
            through the reciprocal sharing of knowledge, experience and wisdom.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { icon: 'fa-solid fa-users-gear', title: 'Doubles Results', desc: 'People with mentors are twice as likely to succeed in business and career growth.' },
              { icon: 'fa-solid fa-graduation-cap', title: 'Education Impact', desc: 'Mentees are twice as likely to aspire to and graduate from university.' },
              { icon: 'fa-solid fa-briefcase', title: 'Business Growth', desc: 'Businesses with mentored leaders are twice as likely to grow, employ and survive beyond 5 years.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-red-50 rounded-2xl p-5">
                <i className={`${icon} text-red-600 text-2xl mb-3 block`}></i>
                <div className="font-bold text-slate-900 mb-1">{title}</div>
                <div className="text-slate-600 text-sm">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-in">
            <span className="section-tag">Step by Step</span>
            <h2 className="section-heading">The Mentorship Journey</h2>
            <p className="section-subheading mx-auto">
              Each step is designed to set both mentor and mentee up for a meaningful and impactful relationship.
            </p>
          </div>

          <div className="space-y-6">
            {steps.map(({ num, icon, title, color, forMentor, forMentee }, i) => (
              <div key={num} className={`animate-in animate-in-delay-${i % 4} card p-7`}>
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Step header */}
                  <div className="md:w-1/3 flex items-start gap-4">
                    <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                      <i className={`${icon} text-white text-xl`}></i>
                    </div>
                    <div>
                      <div className="text-slate-300 font-black text-3xl leading-none">{num}</div>
                      <h3 className="font-extrabold text-slate-900 text-lg mt-1">{title}</h3>
                    </div>
                  </div>
                  {/* For mentor/mentee */}
                  <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-red-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-user-tie text-red-600 text-sm"></i>
                        <span className="text-red-700 font-semibold text-sm">For Mentors</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{forMentor}</p>
                    </div>
                    <div className="bg-orange-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <i className="fa-solid fa-seedling text-orange-600 text-sm"></i>
                        <span className="text-orange-700 font-semibold text-sm">For Mentees</span>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{forMentee}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">The Technology</span>
            <h2 className="section-heading">Our Platform</h2>
            <p className="section-subheading mx-auto">
              After a worldwide search, we selected the best platform available to power our mentorship programmes
              enabling seamless connection, tracking, and growth.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {platformFeatures.map(({ icon, title, desc }, i) => (
              <div key={title} className={`animate-in animate-in-delay-${i % 4} card p-6`}>
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-700 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${icon} text-white text-lg`}></i>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme types */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Programme Models</span>
            <h2 className="section-heading">Types of Mentorship We Offer</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: 'fa-solid fa-user-group',
                title: 'One-on-One Mentorship',
                color: 'bg-red-600',
                desc: 'The most personalised form of mentorship. A single mentor is matched with a single mentee, allowing for deep, focused, and tailored guidance over a period of 12 months.',
                tags: ['Highly personalised', '12-month programme', 'Regular one-on-one sessions'],
              },
              {
                icon: 'fa-solid fa-users',
                title: 'Group Mentorship',
                color: 'bg-amber-500',
                desc: 'One mentor works with a group of mentees, facilitating peer learning, shared experiences, and collective problem-solving. Ideal for cohorts and structured programmes.',
                tags: ['Scalable', 'Peer learning', 'Community building'],
              },
              {
                icon: 'fa-solid fa-people-arrows',
                title: 'Peer Mentorship',
                color: 'bg-orange-500',
                desc: 'Many-to-many model where participants of similar experience levels mentor each other, sharing knowledge, challenges, and solutions as equals in a structured format.',
                tags: ['Mutual growth', 'Horizontal learning', 'Network building'],
              },
            ].map(({ icon, title, color, desc, tags }) => (
              <div key={title} className="animate-in card p-7">
                <div className={`w-14 h-14 ${color} rounded-2xl flex items-center justify-center mb-5`}>
                  <i className={`${icon} text-white text-xl`}></i>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-slate-100 text-slate-600 px-3 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1d4ed8, #1e40af)' }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your Journey?</h2>
          <p className="text-red-200 mb-8">Join thousands of South Africans already growing through the power of mentorship.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/get-involved" className="bg-white text-red-700 font-bold px-8 py-4 rounded-xl hover:bg-red-50 transition-colors flex items-center gap-2">
              <i className="fa-solid fa-arrow-right"></i>
              Get Involved Now
            </Link>
            <Link to="/contact" className="border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-2">
              <i className="fa-solid fa-envelope"></i>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
