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
          className="text-center mb-24 sm:mb-28 lg:mb-36 xl:mb-44 2xl:mb-52"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-extrabold text-foreground mb-8 sm:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 leading-tight">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-secondary max-w-6xl mx-auto leading-relaxed px-6 sm:px-8 lg:px-12 xl:px-16 text-center">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </p>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 xl:gap-24 2xl:gap-28"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="glass-card value-card p-12 sm:p-16 lg:p-20 xl:p-24 2xl:p-28 text-center group rounded-3xl"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 2xl:w-36 2xl:h-36 bg-accent/10 rounded-full mb-8 sm:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="value-icon text-accent transition-all duration-300">
                  <GitBranch className={`${index === 0 ? 'block' : 'hidden'} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18`} />
                  <Zap className={`${index === 1 ? 'block' : 'hidden'} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18`} />
                  <Globe className={`${index === 2 ? 'block' : 'hidden'} w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 2xl:w-18 2xl:h-18`} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-foreground mb-6 sm:mb-8 lg:mb-10 xl:mb-12 2xl:mb-16 leading-tight">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
                {prop.description}
              </p>

              {/* Decorative element */}
              <motion.div
                className="w-16 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-8 sm:mt-10 lg:mt-12 xl:mt-16 2xl:mt-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          className="text-center mt-24 sm:mt-28 lg:mt-36 xl:mt-44 2xl:mt-52"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/methodology" className="btn-tertiary text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-12 sm:px-16 lg:px-20 xl:px-24 2xl:px-28 py-6 sm:py-8 lg:py-10 xl:py-12 2xl:py-16 rounded-2xl">
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