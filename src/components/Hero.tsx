'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      <div className="max-w-7xl mx-auto py-32 sm:py-40 lg:py-48 xl:py-56 relative z-10 text-center">
        <motion.div
          className="space-y-16 sm:space-y-20 lg:space-y-24 xl:space-y-28"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Headline */}
          <div className="space-y-10 sm:space-y-12 lg:space-y-16 xl:space-y-20">
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Charting a{' '}
              <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                Safer Future
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg sm:text-xl lg:text-2xl text-secondary leading-relaxed max-w-5xl mx-auto px-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We use advanced AI and Structural Causal Models to predict the future with unprecedented accuracy, 
              providing open intelligence to help humanity navigate tomorrow's challenges.
            </motion.p>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-8 sm:gap-10 lg:gap-12 justify-center items-center pt-12 sm:pt-16 lg:pt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary flex items-center space-x-4 text-lg sm:text-xl lg:text-2xl px-10 sm:px-12 lg:px-14 py-5 sm:py-6 lg:py-7 w-full sm:w-auto">
              <span>See Our Predictions</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
            </button>
            
            <a 
              href="#performance" 
              className="btn-secondary flex items-center space-x-4 text-lg sm:text-xl lg:text-2xl px-10 sm:px-12 lg:px-14 py-5 sm:py-6 lg:py-7 w-full sm:w-auto"
            >
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
              <span>📊 View Performance</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements for visual interest */}
      <motion.div
        className="absolute top-20 right-20 w-2 h-2 bg-accent rounded-full opacity-60"
        animate={{
          y: [0, -20, 0],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 w-1 h-1 bg-purple-500 rounded-full opacity-40"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1
        }}
      />
    </section>
  );
};

export default Hero;