import { motion } from 'framer-motion'
import { ChevronDown, Download, ExternalLink, Mail, Phone, GraduationCap, Linkedin } from 'lucide-react'
import Profile from './Profile'

const Hero = () => {
  const scrollToCertifications = () => {
    document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0" style={{ backgroundColor: '#0E0E10' }}>
        <div className="absolute top-20 left-20 w-72 h-72 rounded-full blur-3xl animate-pulse-slow" style={{ background: '#9D4EDD22' }}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full blur-3xl animate-pulse-slow delay-1000" style={{ background: '#7F5AF022' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full blur-3xl animate-float" style={{ background: 'linear-gradient(90deg, #9D4EDD33, #7F5AF033)' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div className="order-2 md:order-1 text-center md:text-left space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 glass-effect rounded-full"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Available for internships & opportunities</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Hi, I’m <span className="gradient-text">Harshad</span> — I build web apps with MERN & AI integration
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl sm:text-2xl text-white/80 max-w-2xl leading-relaxed"
            >
              Second Year CS student | Passionate about full‑stack & AI
            </motion.p>

          {/* Contact & Education - Redesigned (moved closer to CTA buttons) */}
          {/* CONTACT/EDUCATION CARDS START */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-wrap md:justify-start justify-center gap-6 pt-4 mb-2"
          >
            <motion.a
              href="mailto:nikamharshadshivaji@gmail.com"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Mail size={16} className="text-primary-400" />
              <span className="text-white/80 text-sm">nikamharshadshivaji@gmail.com</span>
            </motion.a>
            
            <motion.a
              href="tel:9156633238"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Phone size={16} className="text-primary-400" />
              <span className="text-white/80 text-sm">9156633238</span>
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com/in/harshad-nikam-311734281"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin size={16} className="text-primary-400" />
              <span className="text-white/80 text-sm">LinkedIn</span>
            </motion.a>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300"
            >
              <GraduationCap size={16} className="text-primary-400" />
              <span className="text-white/80 text-sm">B.Sc. Computer Science, B.K. Birla College (2024-2027)</span>
            </motion.div>
          </motion.div>
          {/* CONTACT/EDUCATION CARDS END */}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="flex flex-col sm:flex-row gap-8 md:justify-start justify-center pt-2"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>See My Work</span>
              <ExternalLink size={20} />
            </motion.button>
            
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={`${import.meta.env.BASE_URL}/Resume/HarshadNikamResume.pdf`}
              download="HarshadNikamResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Download Resume</span>
              <Download size={20} />
            </motion.a>
          </motion.div>
          </div>

          {/* Globe visual */}
          <div className="order-1 md:order-2">
            <Profile />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={scrollToCertifications}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/60 hover:text-white transition-colors duration-300"
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  )
}

export default Hero 
