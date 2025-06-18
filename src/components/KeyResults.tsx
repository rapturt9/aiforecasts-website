'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, TrendingUp, Target, Award } from 'lucide-react';

export const KeyResults: React.FC = () => {
  const keyMetrics = [
    {
      icon: Trophy,
      title: "Manifold Markets",
      subtitle: "Outperforms Superforecasters",
      value: "+5.2%",
      description: "Better accuracy vs expert humans",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      icon: Target,
      title: "Yahoo Finance",
      subtitle: "Financial Predictions",
      value: "+2.8%",
      description: "Superior market forecasting",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/20"
    },
    {
      icon: TrendingUp,
      title: "1,000+",
      subtitle: "Questions Evaluated",
      value: "7 Datasets",
      description: "Comprehensive benchmarking",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/20"
    },
    {
      icon: Award,
      title: "Scientific Rigor",
      subtitle: "Data Leakage Prevention",
      value: "100%",
      description: "Methodology compliance",
      color: "text-accent",
      bgColor: "bg-accent/10",
      borderColor: "border-accent/20"
    }
  ];

  return (
    <section className="py-16 px-6 bg-glass-bg/20" id="performance">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Proven <span className="text-accent">Performance</span>
          </h2>
          <p className="text-xl text-secondary max-w-3xl mx-auto">
            Our AI demonstrates measurable superiority over expert human forecasters 
            across multiple domains and datasets.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`glass-card p-6 text-center hover:scale-105 transition-transform duration-300 ${metric.bgColor} ${metric.borderColor} border`}
            >
              <metric.icon className={`w-10 h-10 mx-auto mb-4 ${metric.color}`} />
              <h3 className="font-bold text-lg mb-1">{metric.title}</h3>
              <p className="text-secondary text-sm mb-2">{metric.subtitle}</p>
              <div className={`text-2xl font-bold mb-2 ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-xs text-muted">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Highlighted Achievement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="glass-card p-8 text-center bg-accent/5 border border-accent/20"
        >
          <div className="flex items-center justify-center mb-4">
            <Trophy className="w-8 h-8 text-accent mr-3" />
            <h3 className="text-2xl font-bold">Key Achievement</h3>
          </div>
          <p className="text-lg mb-4">
            <span className="text-accent font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">8.2%</div>
              <div className="text-sm text-secondary">AI Error Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">13.4%</div>
              <div className="text-sm text-secondary">Human Error Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">+5.2%</div>
              <div className="text-sm text-secondary">Improvement</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyResults;