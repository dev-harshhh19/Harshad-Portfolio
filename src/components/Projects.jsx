import { motion } from 'framer-motion'
import { Code, Zap, Database } from 'lucide-react'

const projects = [
  {
    title: 'Real-time Buzzer System',
    description: 'Developed using React, Node.js, and MongoDB for real-time quiz participation. Enabled multi-user buzz-in functionality with synchronized UI and backend logic, created especially to simplify quiz administration for college tech events.',
    tech: ['React', 'Node.js', 'MongoDB'],
    icon: Zap,
    github: 'https://github.com/dev-harshhh19/Report-card-Dashboard',
    year: '2024',
  },
  {
    title: 'Fuel Station Simulator',
    description: 'A fully responsive, web-based gas pump simulator built with vanilla HTML, CSS, and JavaScript. Features animated gradients, glassmorphism UI, and dynamic theming to simulate a realistic fuel dispensing experience. Designed for desktop and mobile, with no backend or frameworks.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Database,
    github: 'https://github.com/dev-harshhh19/FuelSim-Gas-Station-Pump-Simulator/',
    live: 'https://dev-harshhh19.github.io/FuelSim-Gas-Station-Pump-Simulator/',
    year: '2025',
  },
  {
    title: 'Student Report Card System',
    description: 'An engaging, web-based dashboard showcasing student grades and performance analytics. Built with vanilla HTML, CSS, and JavaScript, it features interactive charts, filterable report views, and responsive design. Ideal for visual learners and educators to explore academic metrics intuitively.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Code,
    github: 'https://github.com/dev-harshhh19/Report-card-Dashboard',
    live: 'https://report-card-dashboard.onrender.com/',
    year: '2025',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Here are some of my main projects, demonstrating my skills in full-stack development and problem-solving.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -16 }}
              // transition={{ duration: 0.8 }}
              className="glass-effect rounded-xl p-6 flex flex-col justify-between card-hover"
            >
              <div>
                <div className="flex items-center mb-4">
                  <project.icon size={32} className="text-primary-500 mr-3" />
                  <h3 className="text-2xl font-bold text-white flex-1">{project.title}</h3>
                  <span className="text-white/60 text-sm">{project.year}</span>
                </div>
                <p className="text-white/80 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-end">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-secondary-400 transition-colors text-sm underline flex items-center"
                >
                  View on GitHub
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-4 text-secondary-400 hover:text-primary-400 transition-colors text-sm underline flex items-center"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
