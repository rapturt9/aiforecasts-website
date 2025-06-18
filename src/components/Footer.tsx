'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 lg:py-24 border-t border-glass-border relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8 sm:space-y-10 lg:space-y-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo and Brand */}
          <motion.div 
            className="flex items-center justify-center space-x-3 sm:space-x-4"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Logo size="lg" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              Forecast<span className="text-accent">Labs</span>
            </div>
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            className="text-secondary max-w-3xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg px-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Dedicated to securing a beneficial future for humanity in the age of artificial intelligence through rigorous research and open intelligence.
          </motion.p>

          {/* Social Links Placeholder */}
          <motion.div
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Placeholder for social media links */}
            <div className="flex space-x-4">
              <motion.div
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-glass-bg/80 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-5 h-5 bg-accent/60 rounded-full" />
              </motion.div>
              <motion.div
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-glass-bg/80 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-5 h-5 bg-accent/60 rounded-full" />
              </motion.div>
              <motion.div
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:bg-glass-bg/80 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="w-5 h-5 bg-accent/60 rounded-full" />
              </motion.div>
            </div>
          </motion.div>

          {/* Divider */}
          <motion.div
            className="w-24 h-px bg-gradient-to-r from-transparent via-accent to-transparent mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          {/* Copyright */}
          <motion.p
            className="text-sm text-muted"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            © 2025 ForecastLabs. A non-profit organization dedicated to a safer future.
          </motion.p>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-8 left-1/4 w-1 h-1 bg-accent/40 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-8 right-1/4 w-2 h-2 bg-purple-500/30 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.5
        }}
      />
    </footer>
  );
};

export default Footer;