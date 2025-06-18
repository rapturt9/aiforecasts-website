'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass backdrop-blur-md border-b border-glass-border' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6">
        <div className="flex items-center justify-between">
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center space-x-2 sm:space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="md" />
            <div className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground">
              Forecast<span className="text-accent">Labs</span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4 lg:space-x-6">
            {[
              { name: 'Our Mission', href: '#our-mission' },
              { name: 'Performance', href: '/performance' },
              { name: 'Methodology', href: '/methodology' }
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="nav-link text-foreground font-medium text-sm lg:text-base xl:text-lg"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors duration-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* CTA Button - Desktop */}
          <button className="btn-primary hidden lg:block text-sm lg:text-base xl:text-lg px-4 lg:px-6 xl:px-8 py-2 lg:py-3 xl:py-4">
            Explore the Data
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden glass backdrop-blur-md border-t border-glass-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 sm:px-6 py-6 space-y-6">
              {[
                { name: 'Our Mission', href: '#our-mission' },
                { name: 'Performance', href: '/performance' },
                { name: 'Methodology', href: '/methodology' }
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block nav-link text-foreground font-medium text-lg py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                className="btn-primary w-full mt-6 text-lg py-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Explore the Data
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;