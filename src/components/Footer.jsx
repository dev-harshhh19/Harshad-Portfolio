import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-400 to-secondary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">H</span>
              </div>
              <span className="text-white font-bold text-xl gradient-text">
                Harshad Nikam
              </span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed max-w-md">
              A comprehensive portfolio of my professional achievements, technical expertise, and projects. Demonstrating continuous learning and commitment to excellence in software development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href='https://collection.cloudinary.com/dtsque0dg/99894a8de56f877d1e7304635e638902' target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-200 text-sm">Resume (PDF)</a>
              </li>
              {['Home', 'Certifications', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase())
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="text-white/70 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-white/70">nikamharshadshivaji@gmail.com</li>
              <li className="text-white/70">+91 9156633233</li>
              <li className="text-white/70">Mumbai, India</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="flex items-center space-x-2 text-white/70 text-sm">
            <span>© {currentYear} All rights reserved.</span>
            <span>Made with</span>
            <Heart size={16} className="text-red-400 animate-pulse" />
            <span>by Harshad Nikam</span>
          </div>

          {/* Back to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer 
