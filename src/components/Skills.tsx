const skills = [
  { id: 'javascript', name: 'JavaScript', icon: `/icons/javascript.svg` },
  { id: 'react', name: 'React', icon: `/icons/react.svg` },
  { id: 'typescript', name: 'TypeScript', icon: `/icons/TypeScript.svg` },
  { id: 'nextjs', name: 'Next.js', icon: `/icons/nextjs.svg` },
  { id: 'nodejs', name: 'Node.js', icon: `/icons/node.svg` },
  { id: 'express', name: 'Express', icon: `/icons/express.svg` },
  { id: 'nest', name: 'Nest.js', icon: `/icons/nest-js.svg` },
  { id: 'cpp', name: 'C/C++', icon: `/icons/cpp.svg` },
  { id: 'git', name: 'Git', icon: `/icons/git.svg` },
  { id: 'github', name: 'GitHub', icon: `/icons/github.svg` },
  { id: 'mongodb', name: 'MongoDB', icon: `/icons/MongoDB.svg` },
  { id: 'Linux', name: 'Linux', icon: `/icons/linux.svg` },
]

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
        </div>

        <div className="flex justify-center animate-on-scroll animation-delay-200">
          <div className="grid grid-cols-3 gap-6 max-w-4xl">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="group relative rounded-2xl p-5 bg-[#16161A] border border-white/5 transition-all duration-300 shadow-[0_0_0_0_rgba(127,90,240,0)] hover:shadow-[0_8px_24px_-8px_rgba(127,90,240,0.35)] hover:-translate-y-0.5 hover:border-[#9D4EDD] flex items-center justify-center"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-[#0E0E10] text-text-primary text-xs px-2 py-1 rounded-md border border-white/10 whitespace-nowrap">
                  {skill.name}
                </div>
                <div className="w-20 h-15 flex items-center justify-center">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    loading="lazy"
                    className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-105 filter saturate-0 brightness-200 group-hover:filter-none"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="sr-only">{skill.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills