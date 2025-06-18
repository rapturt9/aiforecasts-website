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
    <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8" id="performance">
      <div className="max-w-8xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 sm:mb-24 lg:mb-32 xl:mb-40"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
            Proven <span className="text-accent">Performance</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-5xl mx-auto leading-relaxed px-4 text-center">
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </p>
        </motion.div>

        {/* Highlighted Achievement - Moved to top for prominence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-12 sm:p-16 lg:p-20 xl:p-24 text-center bg-accent/5 border border-accent/20 mb-20 sm:mb-24 lg:mb-32 xl:mb-40"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-8 sm:mb-10 lg:mb-12">
            <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent mb-4 sm:mb-0 sm:mr-4" />
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold">🏆 Key Achievement</h3>
          </div>
          <p className="text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 lg:mb-16 max-w-5xl mx-auto leading-relaxed px-4">
            <span className="text-accent font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mb-8 sm:mb-10 lg:mb-12">
            <div className="p-6 sm:p-8 lg:p-10 bg-card/50 rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-accent mb-3 sm:mb-4">8.2%</div>
              <div className="text-secondary font-medium text-sm sm:text-base lg:text-lg">AI Brier Score</div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10 bg-card/50 rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary mb-3 sm:mb-4">13.4%</div>
              <div className="text-secondary font-medium text-sm sm:text-base lg:text-lg">Human Brier Score</div>
            </div>
            <div className="p-6 sm:p-8 lg:p-10 bg-card/50 rounded-xl border border-border">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-400 mb-3 sm:mb-4">+5.2%</div>
              <div className="text-secondary font-medium text-sm sm:text-base lg:text-lg">Improvement</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-20 sm:mb-24 lg:mb-32 xl:mb-40">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className={`glass-card p-6 sm:p-8 lg:p-10 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${metric.bgColor} ${metric.borderColor} border`}
            >
              <metric.icon className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 mx-auto mb-4 sm:mb-6 lg:mb-8 ${metric.color}`} />
              <h3 className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 lg:mb-4">{metric.title}</h3>
              <p className="text-secondary text-xs sm:text-sm lg:text-base mb-3 sm:mb-4 lg:mb-6">{metric.subtitle}</p>
              <div className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-muted leading-relaxed">{metric.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
          <a 
            href="/performance" 
            className="inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-all duration-300 text-lg sm:text-xl lg:text-2xl font-semibold hover:shadow-lg hover:shadow-accent/20 w-full sm:w-auto"
          >
            📈 View Detailed Performance Analysis
          </a>
          <p className="text-secondary text-sm sm:text-base lg:text-lg mt-4 sm:mt-6 lg:mt-8 px-4">
            Explore comprehensive charts, datasets, and statistical analysis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyResults;