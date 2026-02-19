'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { IdCard, ExternalLink, Github, MessageCircleCode, Newspaper, Gamepad2, Notebook, Fuel } from 'lucide-react'

const projects = [
  {
    title: 'Registration System',
    description: 'A React, Node.js, and MongoDB app for seminar registrations with a responsive form, email confirmations, and a secure admin dashboard for managing events and attendees.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    icon: Newspaper,
    live: 'https://registration-form-event.vercel.app/',
    github: 'https://github.com/dev-harshhh19/Registration_Form-Event',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924378/registration_oq07sa.png',
  },
  {
    title: 'Gamiex',
    description: 'A modern e-commerce platform for gaming enthusiasts. Features include product catalog, shopping cart, secure checkout, and admin panel.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
    icon: Gamepad2,
    github: 'https://github.com/dev-harshhh19/Gamiex',
    live: 'https://gamiex.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924273/gamiex_namr7v.jpg',
  },
  {
    title: 'ProjectFlow',
    description: 'A collaborative project management tool with real-time updates, task tracking, team communication, and progress analytics.',
    tech: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
    icon: Notebook,
    github: 'https://github.com/dev-harshhh19/ProjectFlow',
    live: 'https://project-flow-dev.vercel.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924275/projectflow_ewitq9.png',
  },
  {
    title: 'FuelSim',
    description: 'An interactive gas station pump simulator with realistic physics, fuel management system, and customer interaction scenarios.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    icon: Fuel,
    github: 'https://github.com/dev-harshhh19/FuelSim-Gas-Station-Pump-Simulator/',
    live: 'https://fuelsim.netlify.app/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924273/fuelsim_xzbgac.png',
  },
  {
    title: 'Student Report Card',
    description: 'A web-based dashboard showcasing student grades and performance analytics with interactive charts and filterable report views.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    icon: IdCard,
    github: 'https://github.com/dev-harshhh19/Report-card-Dashboard',
    live: 'https://report-card-dashboard.onrender.com/',
    year: '2025',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/f_auto,q_auto,w_400/v1762924275/reportcard_gtefns.png',
  },
  {
    title: 'Code X',
    description: 'A simple web tool to encode and decode text using custom ciphers. Fast, browser-based, and privacy-friendly.',
    tech: ['TypeScript', 'Tailwind CSS', 'Next.js'],
    icon: MessageCircleCode,
    github: 'https://github.com/dev-harshhh19/Code-X',
    live: 'https://code-x-orian.vercel.app/',
    year: '2026',
    image: 'https://res.cloudinary.com/dtsque0dg/image/upload/v1766657056/Screenshot_2025-12-25_153334_dyubaw.png'
  }

]

const Projects = () => {
  const [dots, setDots] = useState('.')
  const [flippedCards, setFlippedCards] = useState<Set<string>>(new Set())

  const toggleFlip = (title: string) => {
    setFlippedCards(prev => {
      const next = new Set(prev)
      if (next.has(title)) {
        next.delete(title)
      } else {
        next.add(title)
      }
      return next
    })
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '.' : prev + '.')
    }, 500)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Click on a project to explore details
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="relative aspect-[4/3] rounded-2xl cursor-pointer perspective-800 animate-on-scroll"
              style={{ animationDelay: `${idx * 100}ms` }}
              onClick={() => toggleFlip(project.title)}
            >
              <div className={`relative w-full h-full transition-all duration-1000 ease-[cubic-bezier(0.3,0.8,0.2,1.3)] transform-style-3d ${flippedCards.has(project.title) ? 'rotate-y-180' : ''}`}>
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-2xl overflow-hidden border border-white/10 bg-background/50 backdrop-blur-[4px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent flex flex-col justify-end p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                      <span className="text-white/80 text-sm font-medium">{project.year}</span>
                    </div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-2xl overflow-hidden border border-white/10">
                  {/* Background Image for Glass Effect on Back */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    unoptimized
                    className="w-full h-full object-cover opacity-30 blur-[2px]"
                  />
                  {/* Glass Overlay */}
                  <div className="absolute inset-0 bg-[#0E0E10]/80 backdrop-blur-[4px] p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-400/20 to-secondary-500/20 flex items-center justify-center backdrop-blur-md">
                          <project.icon size={20} className="text-primary-400" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white leading-none mb-1">{project.title}</h3>
                          <span className="text-white/50 text-xs">{project.year}</span>
                        </div>
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed mb-4 line-clamp-4 font-medium">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-white/10 border border-white/5 rounded-full text-xs text-white/90 backdrop-blur-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3 mt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white/10 border border-white/10 rounded-full text-white hover:bg-white/20 hover:border-white/30 transition-all duration-300 text-sm font-semibold backdrop-blur-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-300 hover:bg-primary-500/30 hover:border-primary-500/50 transition-all duration-300 text-sm font-semibold backdrop-blur-sm"
                        >
                          <ExternalLink size={16} />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More projects indicator */}
        <div className="text-center mt-12 animate-on-scroll">
          <p className="text-white/50 font-mono text-sm">
            More in Progress<span className="inline-block w-6 text-left">{dots}</span>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Projects

