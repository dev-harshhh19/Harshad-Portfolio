import { motion } from 'framer-motion'

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Subtle textured background overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(1200px 400px at 10% -20%, rgba(127,90,240,0.08), transparent 60%), radial-gradient(1000px 300px at 110% 120%, rgba(157,78,221,0.06), transparent 60%)',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
      >
        {/* Left: Decorative asymmetric panel with intro copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl w-full h-72 sm:h-80 md:h-96 overflow-hidden border border-white/10 bg-[#0F0F12]"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: '22px 22px',
            }}
          />

          {/* Accent diagonal strip */}
          <div
            className="absolute -left-8 -top-8 w-2/3 h-10 rounded-full blur-md"
            style={{ background: 'linear-gradient(90deg, #9D4EDD, #7F5AF0)' }}
          />

          {/* Content: Intro sentences (hover lifts text only) */}
          <div className="relative z-10 h-full flex items-end p-6 group">
            <div className="max-w-2xl transform transition-transform duration-200 group-hover:-translate-y-1.5">
              <div className="text-xs uppercase tracking-widest text-text-secondary mb-2">Profile</div>
              <h3 className="text-text-primary text-2xl sm:text-3xl font-bold mb-3">Harshad Nikam</h3>
              <p className="text-text-secondary leading-relaxed">
                I build modern, performant web apps using the MERN stack and explore practical AI integrations that enhance user experience and product value.
              </p>
              <p className="text-text-secondary leading-relaxed mt-2">
                I enjoy clean UI, scalable APIs, and delivering reliable features with attention to detail, accessibility, and performance.
              </p>
            </div>
          </div>

          

          {/* Corner glow accents */}
          <div className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full blur-3xl" style={{ background: '#7F5AF022' }} />
          <div className="absolute -top-10 -right-24 w-64 h-64 rounded-full blur-3xl" style={{ background: '#9D4EDD22' }} />
        </motion.div>
       
        {/* Right column: stacked asymmetric cards */}
        <div className="space-y-4">
          {/* Libraries and Framework */}
          <div className="group rounded-3xl p-5 md:p-6 bg-[#0F0F12] border border-white/5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] relative overflow-hidden w-full">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(420px 140px at 20% 0%, #7F5AF0 0%, transparent 60%)' }} />
            <div className="text-text-secondary text-xs mb-2 transform transition-transform duration-200 group-hover:-translate-y-1.5">Experianced and worked with different</div>
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 transform transition-transform duration-200 group-hover:-translate-y-1.5">Libraries and Framework</h3>
            <div className="flex flex-wrap gap-1.5 transform transition-transform duration-200 group-hover:-translate-y-1.5">
              {['ReactJS', 'Express', 'NodeJs', 'Three.js', 'TailwindCSS', 'Framer Motion'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-xl bg-white/5 border border-white/10 text-text-primary text-[11px]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Filler / useful block */}
          <div className="group rounded-3xl p-5 md:p-6 bg-[#0F0F12] border border-white/5 relative overflow-hidden w-full">
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ background: 'radial-gradient(420px 140px at 100% 20%, #9D4EDD 0%, transparent 60%)' }} />
            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3 transform transition-transform duration-200 group-hover:-translate-y-1.5">Currently exploring</h3>
            <ul className="list-disc pl-5 space-y-1 text-text-secondary transform transition-transform duration-200 group-hover:-translate-y-1.5">
              {['Next.js App Router', 'Animations with Framer Motion', 'Cloud deployments on AWS', 'AI-ML workflows'].map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>



      {/* Keyframe for underline slide */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        .animate-slide { animation: slide 2.2s infinite linear; }
      `}</style>
    </section>
  )
}

export default About


