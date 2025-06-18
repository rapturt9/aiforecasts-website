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
    <section className="py-20 relative overflow-hidden" id="our-mission">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-accent/5 to-background" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology to create unprecedented insights into humanity&apos;s future.
          </p>
        </motion.div>

        {/* Value Proposition Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              className="glass-card value-card p-8 text-center group"
              variants={itemVariants}
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="value-icon text-accent transition-all duration-300">
                  {prop.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-4">
                {prop.title}
              </h3>

              {/* Description */}
              <p className="text-secondary leading-relaxed">
                {prop.description}
              </p>

              {/* Decorative element */}
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-accent to-purple-500 mx-auto mt-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a href="/methodology" className="btn-tertiary">
            Learn More About Our Methodology
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