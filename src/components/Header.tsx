'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');

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
            className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 animate-slideDown ${isScrolled ? 'top-2' : 'top-4'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-center md:justify-center relative">
                    {/* Mobile Menu Button */}
                    <button
                        id="menu-button"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden absolute right-0 top-0 text-white p-2 rounded-lg bg-black/20 backdrop-blur-md border border-white/10"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    {/* Desktop Navigation */}
                    <div className={`hidden md:flex items-center rounded-2xl px-6 py-3 transition-all duration-300 ${isScrolled
                        ? 'bg-black/20 backdrop-blur-md border border-white/10 shadow-lg'
                        : 'bg-transparent'
                        }`}>
                        <nav className="flex space-x-8">
                            {navItems.map((item, index) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <button
                                        key={item.name}
                                        onClick={() => scrollToSection(item.id)}
                                        className={`relative px-3 py-2 text-sm font-medium transition-all duration-200 ${isActive
                                            ? 'text-white'
                                            : 'text-white/70 hover:text-white'
                                            }`}
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {item.name}
                                        {isActive && (
                                            <div className="absolute inset-0 bg-white/10 rounded-lg -z-10 transition-opacity duration-200" />
                                        )}
                                    </button>
                                );
                            })}
                        </nav>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden mt-4 animate-fadeInUp">
                        <div id="mobile-menu" className="bg-black/20 backdrop-blur-md border border-white/10 rounded-2xl p-4">
                            <nav className="space-y-2">
                                {navItems.map((item, index) => {
                                    const isActive = activeSection === item.id;
                                    return (
                                        <button
                                            key={item.name}
                                            onClick={() => scrollToSection(item.id)}
                                            className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${isActive
                                                ? 'bg-white/10 text-white'
                                                : 'text-white/70 hover:text-white hover:bg-white/5'
                                                }`}
                                            style={{ animationDelay: `${index * 50}ms` }}
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
