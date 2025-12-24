import Image from 'next/image'
import { Zap, Rocket, Database, Shield, Code, ExternalLink, Github } from 'lucide-react'

const projects = [
  {
    title: 'Registration System',
    description: 'A React, Node.js, and MongoDB app for seminar registrations with a responsive form, email confirmations, and a secure admin dashboard for managing events and attendees.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    icon: Code,
    live: 'https://registration-form-event.vercel.app/',
    github: 'https://github.com/dev-harshhh19/Registration_Form-Event',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924378/registration_oq07sa.png',
  },
  {
    title: 'Gamiex',
    description: 'A modern e-commerce platform for gaming enthusiasts. Features include product catalog, shopping cart, secure checkout, and admin panel.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    icon: Zap,
    github: 'https://github.com/dev-harshhh19/Gamiex',
    live: 'https://gamiex.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924273/gamiex_namr7v.jpg',
  },
  {
    title: 'ProjectFlow',
    description: 'A collaborative project management tool with real-time updates, task tracking, team communication, and progress analytics.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    icon: Rocket,
    github: 'https://github.com/dev-harshhh19/ProjectFlow',
    live: 'https://project-flow-dev.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924275/projectflow_ewitq9.png',
  },
  {
    title: 'FuelSim',
    description: 'An interactive gas station pump simulator with realistic physics, fuel management system, and customer interaction scenarios.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    icon: Database,
    github: 'https://github.com/dev-harshhh19/FuelSim-Gas-Station-Pump-Simulator/',
    live: 'https://fuelsim.netlify.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924273/fuelsim_xzbgac.png',
  },
  {
    title: 'Student Report Card',
    description: 'A web-based dashboard showcasing student grades and performance analytics with interactive charts and filterable report views.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: Shield,
    github: 'https://github.com/dev-harshhh19/Report-card-Dashboard',
    live: 'https://report-card-dashboard.onrender.com/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924275/reportcard_gtefns.png',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Hover over projects to explore details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#7F5AF0]/50 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Default overlay with title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className="text-white/60 text-sm">{project.year}</span>
                </div>
              </div>

              {/* Hover overlay with full info */}
              <div className="absolute inset-0 bg-[#0E0E10]/95 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                {/* Header */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400/20 to-secondary-500/20 flex items-center justify-center">
                      <project.icon size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{project.title}</h3>
                      <span className="text-white/50 text-xs">{project.year}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 bg-white/10 rounded-full text-xs text-white/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex gap-3 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-white/30 rounded-full text-white/90 hover:bg-white/10 hover:border-white/50 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent border border-white/30 rounded-full text-white hover:bg-white/10 hover:border-white/50 font-medium transition-all duration-300 text-sm"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects indicator */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-white/50 font-mono text-sm">More in Progress...</p>
        </div>
      </div>
    </section>
  )
}

export default Projects

