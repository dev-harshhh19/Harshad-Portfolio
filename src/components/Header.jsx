import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  // Simple scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Simple section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact']
      
      // ADJUST THIS VALUE: Controls when section becomes "active"
      // Higher value = section activates earlier, Lower value = section activates later
      const scrollOffset = 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= window.scrollY + scrollOffset) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Custom smooth scroll with full control - NO JUMPING
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      // CUSTOMIZE THESE VALUES:
      const navbarHeight = 100        // Height of your navbar
      const extraSpacing = -75      // Extra space below navbar (increase/decrease as needed)
      const scrollDuration = 800     // Scroll duration in milliseconds

      const startPosition = window.pageYOffset
      const targetPosition = element.offsetTop - navbarHeight - extraSpacing
      const distance = targetPosition - startPosition
      
      let startTime = null
      
      const animateScroll = (currentTime) => {
        if (startTime === null) startTime = currentTime
        const timeElapsed = currentTime - startTime
        const progress = Math.min(timeElapsed / scrollDuration, 1)
        
        // Smooth easing function
        const ease = 1 - Math.pow(1 - progress, 3)
        const currentPosition = startPosition + (distance * ease)
        
        window.scrollTo(0, currentPosition)
        
        if (progress < 1) {
          requestAnimationFrame(animateScroll)
        }
      }
      
      requestAnimationFrame(animateScroll)
      setIsMobileMenuOpen(false)
    }
  }

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'top-2' : 'top-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center rounded-2xl px-6 py-3 transition-all duration-300 ${
            isScrolled 
              ? 'bg-black/20 backdrop-blur-md border border-white/10 shadow-lg' 
              : 'bg-transparent'
          }`}>
            <nav className="flex space-x-8">
              {navItems.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      isActive 
                        ? 'text-white' 
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4"
            >
              <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                <nav className="space-y-2">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.id
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                          isActive 
                            ? 'bg-white/10 text-white' 
                            : 'text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        {item.name}
                      </button>
                    )
                  })}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}

export default Header  