'use client';

import { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import ErrorBoundary from '@/components/ErrorBoundary';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

// Lazy load below-the-fold components for better performance
const About = dynamic(() => import('@/components/About'), {
  loading: () => <div className="min-h-[400px]" />
});
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-[600px]" />
});
const Skills = dynamic(() => import('@/components/Skills'), {
  loading: () => <div className="min-h-[300px]" />
});
const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-[400px]" />
});

// Only load in development
const PerformanceMonitor = dynamic(() => import('@/components/PerformanceMonitor'), {
  ssr: false
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Faster initial load - skip artificial loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;

    // Initialize smooth scroll after content loads
    interface LenisInstance {
      raf(time: number): void;
      destroy(): void;
    }
    let lenis: LenisInstance | null = null;

    const initLenis = async () => {
      const Lenis = (await import('lenis')).default;
      lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    initLenis();

    return () => {
      lenis?.destroy();
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0E10]"
        role="status"
        aria-label="Loading"
      >
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-white animate-pulse">
            Harshad Nikam
          </h1>
          <p className="text-white/60 mt-2">Portfolio</p>
          <div className="mt-6 flex justify-center">
            <div className="w-8 h-8 rounded-full border-2 border-white/20 border-t-[#7F5AF0] animate-spin" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div className="min-h-screen relative" style={{ backgroundColor: '#0E0E10' }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <main>
            <Hero />
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <About />
            </Suspense>
            <Suspense fallback={<div className="min-h-[600px]" />}>
              <Projects />
            </Suspense>
            <Suspense fallback={<div className="min-h-[300px]" />}>
              <Skills />
            </Suspense>
            <Suspense fallback={<div className="min-h-[400px]" />}>
              <Contact />
            </Suspense>
          </main>
        </motion.div>

        {/* Performance Monitor (development only) */}
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
      </div>
    </ErrorBoundary>
  );
}
