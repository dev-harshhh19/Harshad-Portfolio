import { useEffect, useState } from 'react'

// Performance monitoring hook
export const usePerformanceMonitor = () => {
  const [metrics, setMetrics] = useState({
    fcp: null, // First Contentful Paint
    lcp: null, // Largest Contentful Paint
    fid: null, // First Input Delay
    cls: null, // Cumulative Layout Shift
    ttfb: null // Time to First Byte
  })

  useEffect(() => {
    // Check if Performance Observer is supported
    if (typeof window === 'undefined' || !window.PerformanceObserver) {
      return
    }

    const observer = new PerformanceObserver((list) => {
      list.getEntries().forEach((entry) => {
        if (entry.entryType === 'paint') {
          if (entry.name === 'first-contentful-paint') {
            setMetrics(prev => ({ ...prev, fcp: Math.round(entry.startTime) }))
          }
        }
        
        if (entry.entryType === 'largest-contentful-paint') {
          setMetrics(prev => ({ ...prev, lcp: Math.round(entry.startTime) }))
        }
        
        if (entry.entryType === 'first-input') {
          setMetrics(prev => ({ ...prev, fid: Math.round(entry.processingStart - entry.startTime) }))
        }
        
        if (entry.entryType === 'layout-shift' && !entry.hadRecentInput) {
          setMetrics(prev => ({ ...prev, cls: (prev.cls || 0) + entry.value }))
        }
        
        if (entry.entryType === 'navigation') {
          setMetrics(prev => ({ ...prev, ttfb: Math.round(entry.responseStart - entry.fetchStart) }))
        }
      })
    })

    // Observe different entry types
    try {
      observer.observe({ entryTypes: ['paint', 'largest-contentful-paint', 'first-input', 'layout-shift', 'navigation'] })
    } catch (error) {
      console.warn('Performance Observer error:', error)
    }

    // Web Vitals reporting (if available)
    if (typeof window.gtag === 'function') {
      const reportWebVitals = (metric) => {
        window.gtag('event', metric.name, {
          event_category: 'Web Vitals',
          event_label: metric.id,
          value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }

      // Listen for performance metrics
      window.addEventListener('load', () => {
        setTimeout(() => {
          if (metrics.fcp) reportWebVitals({ name: 'FCP', value: metrics.fcp, id: 'fcp' })
          if (metrics.lcp) reportWebVitals({ name: 'LCP', value: metrics.lcp, id: 'lcp' })
          if (metrics.fid) reportWebVitals({ name: 'FID', value: metrics.fid, id: 'fid' })
          if (metrics.cls) reportWebVitals({ name: 'CLS', value: metrics.cls, id: 'cls' })
          if (metrics.ttfb) reportWebVitals({ name: 'TTFB', value: metrics.ttfb, id: 'ttfb' })
        }, 1000)
      })
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return metrics
}

// Performance Monitor Component (for development)
const PerformanceMonitor = () => {
  const metrics = usePerformanceMonitor()
  const [isVisible, setIsVisible] = useState(false)

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null
  }

  const getScoreColor = (metric, value) => {
    if (!value) return 'text-gray-400'
    
    const thresholds = {
      fcp: { good: 1800, poor: 3000 },
      lcp: { good: 2500, poor: 4000 },
      fid: { good: 100, poor: 300 },
      cls: { good: 0.1, poor: 0.25 },
      ttfb: { good: 800, poor: 1800 }
    }
    
    const threshold = thresholds[metric]
    if (!threshold) return 'text-gray-400'
    
    if (value <= threshold.good) return 'text-green-400'
    if (value <= threshold.poor) return 'text-yellow-400'
    return 'text-red-400'
  }

  const formatValue = (metric, value) => {
    if (!value) return 'N/A'
    if (metric === 'cls') return value.toFixed(3)
    return `${value}ms`
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="bg-black/80 text-white p-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-black/90 transition-colors"
        title="Toggle Performance Monitor"
        aria-label="Toggle performance metrics display"
      >
        📊
      </button>
      
      {isVisible && (
        <div className="absolute bottom-12 right-0 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-[250px] shadow-xl">
          <h3 className="text-white font-semibold mb-3 text-sm">Performance Metrics</h3>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-white/70">First Contentful Paint:</span>
              <span className={getScoreColor('fcp', metrics.fcp)}>
                {formatValue('fcp', metrics.fcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Largest Contentful Paint:</span>
              <span className={getScoreColor('lcp', metrics.lcp)}>
                {formatValue('lcp', metrics.lcp)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">First Input Delay:</span>
              <span className={getScoreColor('fid', metrics.fid)}>
                {formatValue('fid', metrics.fid)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Cumulative Layout Shift:</span>
              <span className={getScoreColor('cls', metrics.cls)}>
                {formatValue('cls', metrics.cls)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-white/70">Time to First Byte:</span>
              <span className={getScoreColor('ttfb', metrics.ttfb)}>
                {formatValue('ttfb', metrics.ttfb)}
              </span>
            </div>
          </div>
          <div className="mt-3 pt-2 border-t border-white/20">
            <div className="text-xs text-white/50">
              <span className="text-green-400">●</span> Good
              <span className="text-yellow-400 ml-2">●</span> Needs Improvement
              <span className="text-red-400 ml-2">●</span> Poor
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default PerformanceMonitor