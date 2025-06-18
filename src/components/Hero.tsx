'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      <div className="max-w-8xl mx-auto py-40 sm:py-48 lg:py-56 xl:py-64 2xl:py-72 relative z-10 text-center">
        <motion.div
          className="space-y-20 sm:space-y-24 lg:space-y-32 xl:space-y-40 2xl:space-y-48"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Headline */}
          <div className="space-y-12 sm:space-y-16 lg:space-y-20 xl:space-y-24 2xl:space-y-28">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem] font-extrabold leading-[0.9] tracking-tight"
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
              className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-secondary leading-relaxed max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 text-center"
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
            className="flex flex-col sm:flex-row gap-10 sm:gap-12 lg:gap-16 xl:gap-20 justify-center items-center pt-16 sm:pt-20 lg:pt-24 xl:pt-28"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn-primary flex items-center space-x-5 sm:space-x-6 lg:space-x-7 text-xl sm:text-2xl lg:text-3xl xl:text-4xl px-12 sm:px-14 lg:px-16 xl:px-20 py-6 sm:py-7 lg:py-8 xl:py-10 w-full sm:w-auto rounded-2xl">
              <span>See Our Predictions</span>
              <ArrowRight className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
            </button>
            
            <a 
              href="#performance" 
              className="btn-secondary flex items-center space-x-5 sm:space-x-6 lg:space-x-7 text-xl sm:text-2xl lg:text-3xl xl:text-4xl px-12 sm:px-14 lg:px-16 xl:px-20 py-6 sm:py-7 lg:py-8 xl:py-10 w-full sm:w-auto rounded-2xl"
            >
              <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" />
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