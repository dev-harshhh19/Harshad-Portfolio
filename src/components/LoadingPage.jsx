import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingPage = ({ onLoadingComplete, testMode = false }) => {
  const [loading, setLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Progress simulation for better UX
    const progressInterval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 30;
      });
    }, 100);

    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => onLoadingComplete && onLoadingComplete(), 200);
    }, testMode ? 100 : 1200); // Faster loading in test mode

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete, testMode]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F0F12]"
          data-testid="loading-page"
          role="status"
          aria-live="polite"
          aria-label="Loading portfolio content"
        >
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl font-bold text-white"
              aria-level="1"
            >
              Harshad Nikam
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-white/60 mt-2"
            >
              Portfolio
            </motion.p>
            <div className="mt-8 flex items-center justify-center">
              <span className="sr-only">
                Loading portfolio content, {Math.round(loadingProgress)}% complete
              </span>
              <div 
                className="w-10 h-10 rounded-full border-2 border-white/20 border-t-[#7F5AF0] animate-spin"
                aria-hidden="true"
              ></div>
            </div>
            
            {/* Progress indicator for screen readers */}
            <div className="sr-only" aria-live="polite">
              Loading: {Math.round(loadingProgress)}%
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPage;
