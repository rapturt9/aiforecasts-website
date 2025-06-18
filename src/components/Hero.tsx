'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingUp } from 'lucide-react';
import PerformanceChart from './PerformanceChart';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Headline */}
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl lg:text-6xl font-extrabold leading-tight"
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
                className="text-xl text-secondary leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                ForecastLabs uses Structural Causal Models and advanced AI agents to understand the drivers of tomorrow, providing open intelligence to help build a better world.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <button className="btn-primary flex items-center space-x-2">
                <span>Explore Forecasts</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <a 
                href="#performance" 
                className="btn-secondary flex items-center space-x-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span>View Performance</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Performance Chart */}
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <PerformanceChart />
          </motion.div>
        </div>
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