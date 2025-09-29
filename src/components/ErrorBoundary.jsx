import React from 'react'
import { AlertTriangle, RefreshCw } from 'lucide-react'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // Log error details for debugging
    console.error('ErrorBoundary caught an error:', error, errorInfo)
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    })

    // You can also log the error to an error reporting service here
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'exception', {
        description: error.toString(),
        fatal: false
      })
    }
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
  }

  render() {
    if (this.state.hasError) {
      // Custom error UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0E0E10] px-4">
          <div className="text-center max-w-md">
            <div className="mb-6">
              <AlertTriangle 
                size={64} 
                className="text-red-400 mx-auto mb-4" 
                aria-hidden="true"
              />
              <h1 className="text-2xl font-bold text-white mb-2">
                Oops! Something went wrong
              </h1>
              <p className="text-white/60 text-sm mb-6">
                Don't worry, this happens sometimes. Please try refreshing the page.
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={this.handleRetry}
                className="w-full px-6 py-3 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-300 flex items-center justify-center space-x-2"
                aria-label="Retry loading the page"
              >
                <RefreshCw size={18} />
                <span>Try Again</span>
              </button>

              <button
                onClick={() => window.location.reload()}
                className="w-full px-6 py-3 glass-effect text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Refresh the entire page"
              >
                Refresh Page
              </button>
            </div>

            {/* Development error details (only show in development) */}
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="mt-8 text-left">
                <summary className="text-white/80 cursor-pointer hover:text-white transition-colors">
                  Error Details (Development)
                </summary>
                <div className="mt-4 p-4 bg-red-900/20 rounded-lg text-xs text-red-200 overflow-auto">
                  <h3 className="font-semibold mb-2">Error:</h3>
                  <pre className="whitespace-pre-wrap mb-4">{this.state.error.toString()}</pre>
                  
                  <h3 className="font-semibold mb-2">Component Stack:</h3>
                  <pre className="whitespace-pre-wrap text-xs">
                    {this.state.errorInfo?.componentStack}
                  </pre>
                </div>
              </details>
            )}
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary