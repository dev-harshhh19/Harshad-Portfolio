import { ChevronDown, Download, ExternalLink, Mail, Phone, GraduationCap, Linkedin } from 'lucide-react'
import Profile from './Profile'

const Hero = () => {
  const scrollToCertifications = () => {
    const element = document.getElementById('certifications')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      aria-label="Hero section with introduction and contact information"
    >
      {/* Background Elements - Using CSS animations */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0E0E10' }}>
        {/* Grid Background with top fade */}
        <div className="absolute inset-0">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.25) 50%, transparent 75%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.5) 25%, rgba(0,0,0,0.25) 50%, transparent 75%, transparent 100%)',
            }}
          />
        </div>

        <div
          className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-blob"
          style={{ background: '#9D4EDD22' }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-blob animation-delay-2000"
          style={{ background: '#7F5AF022' }}
          aria-hidden="true"
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-blob animation-delay-4000"
          style={{ background: 'linear-gradient(90deg, #9D4EDD33, #7F5AF033)' }}
          aria-hidden="true"
        />
      </div>

      {/* Content - Using CSS animations */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center animate-fadeInUp"
        >
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            {/* Badge */}
            <div
              className="inline-flex items-center px-4 py-2 glass-effect rounded-full animate-fadeIn animation-delay-200"
              role="status"
              aria-label="Current availability status"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" aria-hidden="true"></span>
              <span className="text-white/90 text-sm font-medium">Available for internships & opportunities</span>
            </div>

            {/* Main Heading */}
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-snug"
              aria-label="Hi, I'm Harshad. I build web apps with MERN and AI integration"
            >
              <span className="sr-only">Hi, I&apos;m Harshad. I build web apps with MERN and AI integration</span>
              <span aria-hidden="true" className="block">
                <span className="inline-block animate-slideUp animation-delay-400">
                  Hi, I&apos;m <span className="gradient-text">Harshad</span>
                </span>
                <br />
                <span className="inline-block animate-slideUp animation-delay-600">
                  I build web apps with MERN & AI integration
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed animate-fadeInUp animation-delay-600">
              CS student | Passionate about full‑stack & AI
            </p>

            {/* Contact & Education Cards */}
            <div
              className="flex flex-wrap md:justify-start justify-center gap-6 pt-4 mb-2 animate-fadeInUp animation-delay-700"
              role="group"
              aria-label="Contact information and education details"
            >
              <a
                href="mailto:nikamharshadshivaji@gmail.com"
                className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Send email to nikamharshadshivaji@gmail.com"
              >
                <Mail size={16} className="text-primary-400" aria-hidden="true" />
                <span className="text-white/80 text-sm">nikamharshadshivaji@gmail.com</span>
              </a>

              <a
                href="tel:9156633238"
                className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Call phone number 9156633238"
              >
                <Phone size={16} className="text-primary-400" aria-hidden="true" />
                <span className="text-white/80 text-sm">9156633238</span>
              </a>

              <a
                href="https://www.linkedin.com/in/harshad-nikam06"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                aria-label="Visit LinkedIn profile (opens in new tab)"
              >
                <Linkedin size={16} className="text-primary-400" aria-hidden="true" />
                <span className="text-white/80 text-sm">LinkedIn</span>
              </a>

              <div
                className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
                role="text"
                aria-label="Education: B.Sc. Computer Science, B.K. Birla College, 2024 to 2027"
              >
                <GraduationCap size={16} className="text-primary-400" aria-hidden="true" />
                <span className="text-white/80 text-sm">B.Sc. Computer Science, B.K. Birla College (2024-2027)</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center pt-2 animate-fadeInUp animation-delay-1000"
              role="group"
              aria-label="Primary action buttons"
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/30 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Navigate to projects section"
              >
                <span>See My Work</span>
                <ExternalLink size={18} aria-hidden="true" />
              </button>

              <a
                href={`/Resume/HarshadNikamResume.pdf`}
                download="HarshadNikamResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-white/30 rounded-full text-white font-medium hover:bg-white/10 hover:border-white/50 hover:scale-105 active:scale-95 transition-all duration-300"
                aria-label="Download resume PDF file (opens in new tab)"
              >
                <span>Download Resume</span>
                <Download size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2" role="img" aria-label="Profile photo">
            <Profile />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fadeIn animation-delay-1500">
        <button
          onClick={scrollToCertifications}
          className="text-white/60 hover:text-white transition-colors duration-300 animate-bounce"
          aria-label="Scroll down to certifications section"
        >
          <ChevronDown size={24} aria-hidden="true" />
        </button>
      </div>
    </section>
  )
}

export default Hero
