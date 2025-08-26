import { motion } from 'framer-motion'

const skills = [
  { id: 'javascript', name: 'JavaScript', icon: `/icons/javascript.svg` },
  { id: 'react', name: 'React', icon: `/icons/react.svg` },
  { id: 'express', name: 'Express', icon: `/icons/express.svg` },
  { id: 'nodejs', name: 'Node.js', icon: `/icons/nodejs.svg` },
  { id: 'git', name: 'Git', icon: `/icons/git.svg` },
  { id: 'github', name: 'GitHub', icon: `/icons/github.svg` },
  { id: 'cpp', name: 'C/C++', icon: `/icons/cpp.svg` },
  { id: 'java', name: 'Java', icon: `/icons/java.svg` },
  { id: 'python', name: 'Python', icon: `/icons/python.svg` },
  { id: 'Linux', name: 'Linux', icon: `/icons/linux.svg` },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(180deg, rgba(22,22,26,0.4) 0%, rgba(14,14,16,0.4) 100%)' }} />
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex justify-center"
        >
          {/* SIZE MANAGEMENT: Adjust grid layout here - grid-cols-3 controls number of columns, gap-6 controls spacing between cards */}
          <div className="grid grid-cols-3 gap-6 max-w-2xl">
            {skills.map((skill) => (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                className="group relative rounded-2xl p-5 bg-[#16161A] border border-white/5 transition-all duration-300 shadow-[0_0_0_0_rgba(127,90,240,0)] hover:shadow-[0_8px_24px_-8px_rgba(127,90,240,0.35)] hover:-translate-y-0.5 hover:border-[#9D4EDD] flex items-center justify-center"
              >
                {/* SIZE MANAGEMENT: Adjust tooltip positioning here - -top-2 controls tooltip distance from card */}
                <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0E0E10] text-text-primary text-xs px-2 py-1 rounded-md border border-white/10 whitespace-nowrap">
                  {skill.name}
                </div>
                {/* SIZE MANAGEMENT: Adjust icon container size here - w-14 h-14 controls the icon wrapper dimensions */}
                <div className="w-20 h-15 flex items-center justify-center">
                  {/* SIZE MANAGEMENT: Adjust icon size here - w-10 h-10 controls the actual icon dimensions */}
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 filter saturate-0 brightness-200 group-hover:filter-none"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="sr-only">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 