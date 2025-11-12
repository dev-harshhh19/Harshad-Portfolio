import { motion } from 'framer-motion'
import { Globe, Zap, Rocket, Database, Shield, Code } from 'lucide-react'

const projects = [
  {
    title: 'Registration System',
    description: 'A React, Node.js, and MongoDB app for seminar registrations with a responsive form, email confirmations, and a secure admin dashboard for managing events and attendees. Includes JWT auth, validation, and scalable design.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT', 'EmailJS'],
    icon: Code,
    live: 'https://registration-form-event.vercel.app/',
    github: 'https://github.com/dev-harshhh19/Registration_Form-Event',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto/v1762924378/registration_oq07sa.png',
  },
  {
    title: 'Gamiex',
    description: 'A modern e-commerce platform for gaming enthusiasts. Features include product catalog, shopping cart, secure checkout, user reviews, and admin panel for inventory management.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    icon: Zap,
    github: 'https://github.com/dev-harshhh19/Gamiex',
    live: 'https://gamiex.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto/v1762924273/gamiex_namr7v.jpg',
  },
  {
    title: 'ProjectFlow',
    description: 'A collaborative project management tool with real-time updates, task tracking, team communication, and progress analytics. Designed for agile development teams.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL', 'Redis'],
    icon: Rocket,
    github: 'https://github.com/dev-harshhh19/ProjectFlow',
    live: 'https://project-flow-dev.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto/v1762924275/projectflow_ewitq9.png',
  },
  {
    title: 'FuelSim',
    description: 'An interactive gas station pump simulator with realistic physics, fuel management system, and customer interaction scenarios. Built for training and educational purposes.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API', 'LocalStorage'],
    icon: Database,
    github: 'https://github.com/dev-harshhh19/FuelSim-Gas-Station-Pump-Simulator/',
    live: 'https://fuelsim.netlify.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto/v1762924273/fuelsim_xzbgac.png',
  },
  {
    title: 'Student Report Card System',
    description: 'An engaging, web-based dashboard showcasing student grades and performance analytics. Built with vanilla HTML, CSS, and JavaScript, it features interactive charts, filterable report views, and responsive design.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Shield,
    github: 'https://github.com/dev-harshhh19/Report-card-Dashboard',
    live: 'https://report-card-dashboard.onrender.com/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto/v1762924275/reportcard_gtefns.png',
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
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/50 rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-primary-400 to-secondary-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              
              {/* Background overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400/5 to-secondary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative">
                <img src={project.image} alt={project.title} className="rounded-t-2xl w-full h-48 object-cover" />
              </div>
              {/* Content */}
              <div className="relative z-10 p-6 flex flex-col h-full">
                {/* Icon and title */}
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-400/20 to-secondary-500/20 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <project.icon size={24} className="text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-white/60 text-sm">{project.year}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-white/80 mb-6 flex-1 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gradient-to-r from-primary-400/20 to-secondary-500/20 rounded-full text-xs text-white/80 border border-primary-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Buttons - positioned at bottom */}
                <div className="mt-auto flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 rounded-lg text-white/90 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <Code size={16} /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-400 to-secondary-500 hover:from-primary-500 hover:to-secondary-600 rounded-lg text-white font-medium transition-all duration-300 text-sm"
                    >
                      <Globe size={16} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              {/* Corner glow effect */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-secondary-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 
