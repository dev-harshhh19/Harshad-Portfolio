import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lenis from 'lenis'
import ErrorBoundary from './components/ErrorBoundary'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Education from './components/Education'
import LoadingPage from './components/LoadingPage'
import Spotlight from './components/Spotlight'
import PerformanceMonitor from './components/PerformanceMonitor'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [showSpotlight, setShowSpotlight] = useState(false)

  const handleLoadingComplete = () => {
    setIsLoading(false)
    // Show spotlight once after content appears
    setTimeout(() => {
      setShowSpotlight(true)
      setTimeout(() => setShowSpotlight(false), 1800)
    }, 600)
  }

  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      // You can add other Lenis options here if needed
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      // Cleanup if needed
    }
  }, [])

  if (isLoading) {
    return (
      <ErrorBoundary>
        <LoadingPage onLoadingComplete={handleLoadingComplete} />
      </ErrorBoundary>
    )
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative" style={{ backgroundColor: '#0E0E10' }}>
        {/* Spotlight Effect (fade in once) */}
        {showSpotlight && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 pointer-events-none z-10"
          >
            <ErrorBoundary>
              <Spotlight className="top-20 left-10 md:left-32" fill="#7F5AF0" />
            </ErrorBoundary>
          </motion.div>
        )}

        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <ErrorBoundary>
              <Header />
            </ErrorBoundary>
            <ErrorBoundary>
              <Hero />
            </ErrorBoundary>
            <ErrorBoundary>
              <About />
            </ErrorBoundary>
            <ErrorBoundary>
              <Projects />
            </ErrorBoundary>
            <ErrorBoundary>
              <Skills />
            </ErrorBoundary>
            <ErrorBoundary>
              <Contact />
            </ErrorBoundary>
            <ErrorBoundary>
              <Footer />
            </ErrorBoundary>
          </motion.div>
        </AnimatePresence>
        
        {/* Performance Monitor (development only) */}
        <PerformanceMonitor />
      </div>
    </ErrorBoundary>
  )
}

export default App
