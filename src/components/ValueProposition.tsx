'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Zap, Globe } from 'lucide-react';

interface ValuePropItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ValueProposition: React.FC = () => {
  const valueProps: ValuePropItem[] = [
    {
      icon: <GitBranch className="w-8 h-8" />,
      title: 'Understand Causality',
      description: 'We model the "why," not just the "what," using Structural Causal Models to reveal the true levers of change that drive future outcomes.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Simulate Future Paths',
      description: 'Run sophisticated "what if" scenarios for policies and research investments, enabling evidence-based decision making for complex global challenges.'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Provide Open Intelligence',
      description: 'As a non-profit organization, we provide actionable data and insights for the public good, ensuring our research benefits all of humanity.'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1] as const
      }
    }
  };

  return (
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 relative overflow-hidden px-4 sm:px-6 lg:px-8" id="our-mission">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="max-w-8xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20 sm:mb-24 lg:mb-32 xl:mb-40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-6 sm:mb-8 lg:mb-10">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-5xl mx-auto leading-relaxed px-4 text-center">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </p>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 xl:gap-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="glass-card value-card p-10 sm:p-12 lg:p-16 xl:p-20 text-center group"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent/10 rounded-full mb-6 sm:mb-8 lg:mb-10 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="value-icon text-accent transition-all duration-300">
                  <GitBranch className={`${index === 0 ? 'block' : 'hidden'} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12`} />
                  <Zap className={`${index === 1 ? 'block' : 'hidden'} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12`} />
                  <Globe className={`${index === 2 ? 'block' : 'hidden'} w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed text-sm sm:text-base lg:text-lg">
                {prop.description}
              </p>

              {/* Decorative element */}
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-6 sm:mt-8 lg:mt-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 sm:mt-24 lg:mt-32 xl:mt-40"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/methodology" className="btn-tertiary text-lg sm:text-xl lg:text-2xl xl:text-3xl px-10 sm:px-12 lg:px-16 xl:px-20 py-5 sm:py-6 lg:py-8 xl:py-10">
            🔬 Explore Our Scientific Methodology
          </a>
        </motion.div>
      </div>

      {/* Floating background elements */}
      <motion.div
        className="absolute top-1/4 left-10 w-3 h-3 bg-accent/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut'
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-2 h-2 bg-purple-500/40 rounded-full"
        animate={{
          y: [0, -15, 0],
          opacity: [0.4, 0.7, 0.4]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2
        }}
      />
    </section>
  );
};

export default ValueProposition;