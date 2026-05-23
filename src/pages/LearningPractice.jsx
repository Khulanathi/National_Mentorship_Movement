import { Link } from 'react-router-dom'
import { useScrollAnimation } from '../hooks/useAnimations'

const thoughtLeaders = [
  {
    name: 'Peter Senge',
    title: 'MIT Sloan School of Management  SoL Founder',
    desc: 'Senior Lecturer at MIT Sloan and founder of the Society for Organizational Learning (SoL), established at MIT in 1997. Author of "The Fifth Discipline."',
    icon: 'fa-solid fa-atom',
    color: 'bg-red-600',
  },
  {
    name: 'Ben Zander',
    title: 'Boston Philharmonic Orchestra  Author & Speaker',
    desc: 'World-renowned conductor, celebrated speaker and author. Founder of the Boston Philharmonic Orchestra, known for transformational leadership philosophies.',
    icon: 'fa-solid fa-music',
    color: 'bg-amber-500',
  },
  {
    name: 'Otto Scharmer',
    title: 'MIT Sloan  Theory U',
    desc: 'Senior Lecturer at MIT Sloan, deeply influential researcher and practitioner in leadership, organizational learning, and systems change. Creator of Theory U.',
    icon: 'fa-solid fa-circle-nodes',
    color: 'bg-purple-500',
  },
  {
    name: 'Adam Kahane',
    title: 'Expert on Transformative Collaboration',
    desc: 'Expert in uniting people across differences to drive meaningful change. Author of "Facilitating Breakthrough," "Collaborating with the Enemy," and "Solving Tough Problems."',
    icon: 'fa-solid fa-people-arrows',
    color: 'bg-orange-500',
  },
  {
    name: 'Margaret Wheatley',
    title: 'Author  Management Consultant',
    desc: 'American writer, teacher, speaker and management consultant who works to create organisations and communities worthy of human habitation.',
    icon: 'fa-solid fa-globe',
    color: 'bg-rose-500',
  },
  {
    name: 'Robert Fritz',
    title: 'Structural Dynamics  Author',
    desc: 'American author, management consultant, composer and filmmaker known for developing structural dynamics  the study of how structural relationships impact behaviour.',
    icon: 'fa-solid fa-diagram-project',
    color: 'bg-teal-500',
  },
  {
    name: 'Dr. Daniel H. Kim',
    title: 'MIT Center for Organisational Learning',
    desc: 'Research Director at MIT\'s Center for Organisational Learning and founding trustee of the Society for Organizational Learning (SoL).',
    icon: 'fa-solid fa-book-open-reader',
    color: 'bg-indigo-500',
  },
  {
    name: 'Sonja Blignaut',
    title: 'Complexity Guide  Waycraft Creator',
    desc: 'Creator of Waycraft, bridging insight and embodiment to support people navigating inner thresholds, identity transitions, and the terrain of becoming.',
    icon: 'fa-solid fa-compass',
    color: 'bg-orange-500',
  },
  {
    name: 'York Zucchi',
    title: 'Former Goldman Sachs  TEDx Presenter',
    desc: 'Swiss-born investor and entrepreneur with 31+ years of experience across many countries. Former Goldman Sachs banker and TEDx presenter.',
    icon: 'fa-solid fa-chart-line',
    color: 'bg-cyan-500',
  },
  {
    name: 'Lorraine Margherita',
    title: 'Collaborative Organizational Advisor',
    desc: 'Bilingual Collaborative Organizational Advisor to 7,000+ managers and leaders. Published author and speaker on participatory environments and impact.',
    icon: 'fa-solid fa-users-gear',
    color: 'bg-pink-500',
  },
  {
    name: 'Art Kleiner',
    title: 'Writer  Researcher  Entrepreneur',
    desc: 'Writer specialising in responsible AI, strategic leadership, and organisational learning. Director of research at Dialogues and faculty at NYU.',
    icon: 'fa-solid fa-pen-nib',
    color: 'bg-violet-500',
  },
  {
    name: 'Magda du Preez',
    title: 'Psychologist  Adjunct Professor',
    desc: 'Psychologist and management consultant with expertise in leadership, team selection and building high-performance cultures. Adjunct professor at Long Island University.',
    icon: 'fa-solid fa-brain',
    color: 'bg-lime-600',
  },
]

export default function LearningPractice() {
  useScrollAnimation()

  return (
    <div>
      {/* Hero */}
      <section className="page-hero" style={{ background: 'linear-gradient(-135deg, #1A0507 0%, #2D1015 55%, #1A0507 100%)' }}>
        {/* Reverse-diagonal stripe pattern */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #fff 0px, #fff 1px, transparent 1px, transparent 14px)' }}
        />
        {/* Decorative icon */}
        <i className="fa-solid fa-book-open absolute -bottom-8 -right-8 text-white/[0.04] pointer-events-none select-none" style={{ fontSize: '20rem', lineHeight: 1 }}></i>
        {/* Left + right accent bars */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent"></div>
        <div className="absolute right-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-purple-500/60 to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-purple-300 font-semibold text-sm uppercase tracking-widest mb-4">Knowledge &amp; Growth</span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-5">Virtual Learning Practice</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            In collaboration with the Global Society for Organisational Learning (SoL), we connect communities with world-renowned thought leaders every month.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div className="animate-in">
              <span className="section-tag">About the VLP</span>
              <h2 className="section-heading mb-5">Stay Mindful of the World Around You</h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                The National Mentorship Movement has partnered with{' '}
                <strong>Global SoL (Society for Organisational Learning)</strong> to facilitate meaningful
                community engagement by connecting individuals with thought leaders across a range of topics.
              </p>
              <p className="text-slate-600 leading-relaxed mb-5">
                This collaboration aims to spark insightful conversations, inspire action, and provide
                practical guidance on issues that matter most to communities.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Founded by Peter Senge in 1997 at MIT, SoL is a global non-profit network dedicated to
                enhancing collective intelligence in complex human systems. Together with SoL, we foster
                personal and organisational learning by connecting passionate individuals to a like-minded
                community that grows, discovers, and learns together.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: 'fa-solid fa-calendar', title: '3rd Thursday Monthly', desc: 'Regular online sessions' },
                  { icon: 'fa-solid fa-globe', title: 'Global Thought Leaders', desc: 'World-renowned speakers' },
                  { icon: 'fa-solid fa-users', title: 'Open Community', desc: 'Local & international audience' },
                  { icon: 'fa-solid fa-laptop', title: 'Virtual Format', desc: 'Join from anywhere' },
                ].map(({ icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <i className={`${icon} text-red-600 text-sm`}></i>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900 text-sm">{title}</div>
                      <div className="text-slate-500 text-xs">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-in animate-in-delay-1">
              <div className="rounded-3xl p-10 relative overflow-hidden text-center"
                style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{ backgroundImage: 'radial-gradient(circle at 60% 20%, #60A5FA, transparent 60%)' }}
                />
                <div className="relative z-10">
                  <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <i className="fa-solid fa-brain text-white text-4xl"></i>
                  </div>
                  <div className="text-white font-black text-2xl mb-2">Virtual Learning Practice</div>
                  <div className="text-red-300 text-sm mb-6">In Partnership with Global SoL</div>
                  <div className="bg-white/10 border border-white/20 rounded-xl p-4 mb-4">
                    <div className="text-amber-400 font-bold text-sm mb-1">
                      <i className="fa-solid fa-calendar mr-2"></i>Next Session
                    </div>
                    <div className="text-white font-semibold">3rd Thursday of Every Month</div>
                    <div className="text-slate-400 text-xs mt-1">Online  Open to All</div>
                  </div>
                  <Link to="/contact"
                    className="inline-flex items-center gap-2 bg-red-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-red-700 transition-colors"
                  >
                    <i className="fa-solid fa-envelope"></i>
                    Register for Next Session
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thought leaders */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 animate-in">
            <span className="section-tag">Our Speakers</span>
            <h2 className="section-heading">Featured Thought Leaders</h2>
            <p className="section-subheading mx-auto">
              We invite our local and international community to engage in conversations with prominent thinkers,
              practitioners, and change-makers from around the world.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {thoughtLeaders.map(({ name, title, desc, icon, color }, i) => (
              <div key={name} className={`animate-in animate-in-delay-${i % 4} card p-6`}>
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <i className={`${icon} text-white text-lg`}></i>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-slate-900">{name}</h3>
                    <p className="text-red-600 text-xs font-semibold leading-snug mt-0.5">{title}</p>
                  </div>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SoL Partnership */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #1A0507, #3D0C14)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <i className="fa-solid fa-earth-africa text-white text-3xl"></i>
          </div>
          <h2 className="text-3xl font-extrabold text-white mb-4">Global Society for Organisational Learning</h2>
          <p className="text-slate-300 leading-relaxed mb-8 text-lg">
            Founded by Peter Senge in 1997 at MIT, SoL is a global non-profit network dedicated to
            enhancing collective intelligence in complex human systems. Together with SoL, NMM fosters
            personal and organisational learning by connecting passionate individuals to a like-minded
            community that grows, discovers, and learns together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary px-8 py-4">
              <i className="fa-solid fa-calendar-plus"></i>
              Join Next Session
            </Link>
            <Link to="/get-involved" className="btn-secondary px-8 py-4">
              <i className="fa-solid fa-handshake"></i>
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
