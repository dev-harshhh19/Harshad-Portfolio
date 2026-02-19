'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const mobileMenu = document.getElementById('mobile-menu');
      const menuButton = document.getElementById('menu-button');

      if (isMobileMenuOpen &&
        mobileMenu &&
        menuButton &&
        event.target instanceof Node &&
        !mobileMenu.contains(event.target) &&
        !menuButton.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Simple scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Simple section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollOffset = 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= window.scrollY + scrollOffset) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom smooth scroll
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100;
      const extraSpacing = -75;
      const scrollDuration = 500;

      const startPosition = window.pageYOffset;
      const targetPosition = element.offsetTop - navbarHeight - extraSpacing;
      const distance = targetPosition - startPosition;

      let startTime: number | null = null;

      const animateScroll = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / scrollDuration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        const currentPosition = startPosition + (distance * ease);

        window.scrollTo(0, currentPosition);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-500 animate-slideDown ${isScrolled ? 'top-2' : 'top-4'}`}
    >
      {/* SVG Filter Definition for Liquid Glass Refraction */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <filter id="liquid-glass" x="-20%" y="-20%" width="140%" height="140%" colorInterpolationFilters="sRGB">
            {/* Turbulence creates an organic, wavy distortion map */}
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.65 0.35"
              numOctaves="2"
              seed="2"
              result="noise"
            />
            {/* Displacement map uses the noise to shift background pixels — simulating refraction */}
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale="6"
              xChannelSelector="R"
              yChannelSelector="G"
              result="displaced"
            />
            {/* Blend original + displaced for subtle realism */}
            <feBlend in="displaced" in2="SourceGraphic" mode="normal" result="blended" />
            <feComposite in="blended" in2="SourceGraphic" operator="atop" />
          </filter>

          {/* Specular highlight filter — simulates light glinting off a curved glass edge */}
          <filter id="glass-specular">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feSpecularLighting
              in="blur"
              surfaceScale="4"
              specularConstant="1.2"
              specularExponent="80"
              result="specular"
            >
              <fePointLight x="50%" y="-200" z="300" />
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceAlpha" operator="in" result="clipSpecular" />
            <feBlend in="SourceGraphic" in2="clipSpecular" mode="screen" />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-center relative">
          {/* Mobile Menu Button */}
          <button
            id="menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden absolute right-0 top-0 text-white p-2 rounded-lg border border-white/20"
            style={{ background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(20px)' }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation — Liquid Glass */}
          <div
            ref={navRef}
            className="hidden md:block relative rounded-2xl"
            style={{
              /* The outer shell: frosted glass base */
              background: isScrolled
                ? 'linear-gradient(135deg, rgba(255,255,255,0.10) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.08) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.02) 100%)',
              backdropFilter: 'blur(28px) saturate(180%) brightness(1.05)',
              WebkitBackdropFilter: 'blur(28px) saturate(180%) brightness(1.05)',
              boxShadow: isScrolled
                ? `
                                    /* Outer rim shadow — deep shadow like thick glass */
                                    0 8px 32px rgba(0,0,0,0.45),
                                    0 2px 8px rgba(0,0,0,0.3),
                                    /* Inner light edge top-left — simulates light entering the glass */
                                    inset 0 1.5px 0 rgba(255,255,255,0.55),
                                    /* Inner dark edge bottom — simulates refracted shadow beneath glass */
                                    inset 0 -1px 0 rgba(0,0,0,0.35),
                                    /* Side edge highlights — curved glass rim effect */
                                    inset 1px 0 0 rgba(255,255,255,0.20),
                                    inset -1px 0 0 rgba(255,255,255,0.12)
                                `
                : `
                                    0 4px 24px rgba(0,0,0,0.25),
                                    inset 0 1.5px 0 rgba(255,255,255,0.35),
                                    inset 0 -1px 0 rgba(0,0,0,0.2),
                                    inset 1px 0 0 rgba(255,255,255,0.15),
                                    inset -1px 0 0 rgba(255,255,255,0.08)
                                `,
              border: '1px solid rgba(255,255,255,0.18)',
              transition: 'all 0.4s ease',
            }}
          >
            {/* Specular top-edge shine — the bright streak of light across glass top */}
            <div
              className="absolute top-0 left-4 right-4 h-px rounded-full pointer-events-none"
              style={{
                background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 30%, rgba(255,255,255,0.9) 50%, rgba(255,255,255,0.7) 70%, transparent 100%)',
                filter: 'blur(0.5px)',
              }}
            />

            {/* Refraction distortion layer — the actual SVG filter applied on a pseudo element */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none overflow-hidden"
              style={{ filter: 'url(#liquid-glass)', opacity: 0.35, mixBlendMode: 'overlay' }}
            />

            {/* Subtle inner gradient — gives depth like light bending through curved glass */}
            <div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: `
                                    radial-gradient(ellipse 80% 40% at 50% 0%, rgba(255,255,255,0.18) 0%, transparent 60%),
                                    radial-gradient(ellipse 60% 30% at 50% 100%, rgba(0,0,0,0.15) 0%, transparent 60%)
                                `,
              }}
            />

            <nav className="relative flex space-x-1 px-5 py-2.5 z-10">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${isActive
                      ? 'text-white'
                      : 'text-white/65 hover:text-white/90'
                      }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {isActive && (
                      <span
                        className="absolute inset-0 rounded-xl"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.20) 0%, rgba(255,255,255,0.08) 100%)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.4), inset 0 -1px 0 rgba(0,0,0,0.2)',
                          border: '1px solid rgba(255,255,255,0.25)',
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 animate-fadeInUp">
            <div
              id="mobile-menu"
              className="rounded-2xl p-4"
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.05) 100%)',
                backdropFilter: 'blur(28px) saturate(160%)',
                WebkitBackdropFilter: 'blur(28px) saturate(160%)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.4), inset 0 1.5px 0 rgba(255,255,255,0.5), inset 0 -1px 0 rgba(0,0,0,0.3)',
                border: '1px solid rgba(255,255,255,0.18)',
              }}
            >
              <nav className="space-y-1">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-200 text-sm font-medium ${isActive
                        ? 'text-white'
                        : 'text-white/65 hover:text-white/90'
                        }`}
                      style={{
                        animationDelay: `${index * 50}ms`,
                        ...(isActive ? {
                          background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.07) 100%)',
                          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.35), inset 0 -1px 0 rgba(0,0,0,0.15)',
                          border: '1px solid rgba(255,255,255,0.2)',
                        } : {})
                      }}
                    >
                      {item.name}
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

