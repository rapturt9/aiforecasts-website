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
      value: "0.082",
      description: "AI Brier Score (Lower is Better)",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/20"
    },
    {
      icon: Target,
      title: "Yahoo Finance",
      subtitle: "Financial Predictions",
      value: "0.095",
      description: "AI Brier Score vs 0.123 Human",
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
          className="text-center mb-24 sm:mb-28 lg:mb-36 xl:mb-44"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 sm:mb-10 lg:mb-12 xl:mb-16 leading-tight">
            Proven <span className="text-accent">Performance</span>
          </h2>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-secondary max-w-6xl mx-auto leading-relaxed px-6 sm:px-8 lg:px-12">
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </p>
        </motion.div>

        {/* Highlighted Achievement - Moved to top for prominence */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="glass-card p-16 sm:p-20 lg:p-24 xl:p-28 text-center bg-accent/5 border border-accent/20 mb-24 sm:mb-28 lg:mb-36 xl:mb-44 rounded-3xl"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center mb-10 sm:mb-12 lg:mb-16 xl:mb-20">
            <Trophy className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 text-accent mb-6 sm:mb-0 sm:mr-6 lg:mr-8" />
            <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold">🏆 Key Achievement</h3>
          </div>
          <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-12 sm:mb-16 lg:mb-20 xl:mb-24 max-w-6xl mx-auto leading-relaxed px-6 sm:px-8 lg:px-12">
            <span className="text-accent font-semibold">ForecastLabs AI outperforms superforecasters</span> on Manifold Markets 
            with statistical significance, demonstrating superior accuracy in real-world prediction scenarios.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 mb-10 sm:mb-12 lg:mb-16">
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 bg-card/50 rounded-2xl border border-border hover:border-accent/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-accent mb-4 sm:mb-5 lg:mb-6">0.082</div>
              <div className="text-secondary font-medium text-base sm:text-lg lg:text-xl leading-relaxed">AI Brier Score</div>
            </div>
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 bg-card/50 rounded-2xl border border-border hover:border-secondary/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-secondary mb-4 sm:mb-5 lg:mb-6">0.134</div>
              <div className="text-secondary font-medium text-base sm:text-lg lg:text-xl leading-relaxed">Human Brier Score</div>
            </div>
            <div className="p-8 sm:p-10 lg:p-12 xl:p-14 bg-card/50 rounded-2xl border border-border hover:border-green-400/30 transition-all duration-300">
              <div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-green-400 mb-4 sm:mb-5 lg:mb-6">38.8%</div>
              <div className="text-secondary font-medium text-base sm:text-lg lg:text-xl leading-relaxed">Better Performance</div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 mb-24 sm:mb-28 lg:mb-36 xl:mb-44">
          {keyMetrics.map((metric, index) => (
            <motion.div
              key={metric.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
              className={`glass-card p-8 sm:p-10 lg:p-12 xl:p-14 text-center hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10 ${metric.bgColor} ${metric.borderColor} border rounded-2xl`}
            >
              <metric.icon className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 xl:w-18 xl:h-18 mx-auto mb-6 sm:mb-8 lg:mb-10 xl:mb-12 ${metric.color}`} />
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl mb-3 sm:mb-4 lg:mb-5 xl:mb-6 leading-tight">{metric.title}</h3>
              <p className="text-secondary text-sm sm:text-base lg:text-lg xl:text-xl mb-4 sm:mb-5 lg:mb-6 xl:mb-8 leading-relaxed">{metric.subtitle}</p>
              <div className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 lg:mb-5 xl:mb-6 ${metric.color}`}>
                {metric.value}
              </div>
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-muted leading-relaxed">{metric.description}</p>
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
            className="inline-flex items-center px-10 sm:px-12 lg:px-16 xl:px-20 py-5 sm:py-6 lg:py-8 xl:py-10 bg-accent text-accent-foreground rounded-2xl hover:bg-accent/90 transition-all duration-300 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-semibold hover:shadow-lg hover:shadow-accent/20 w-full sm:w-auto"
          >
            📈 View Detailed Performance Analysis
          </a>
          <p className="text-secondary text-base sm:text-lg lg:text-xl xl:text-2xl mt-6 sm:mt-8 lg:mt-10 xl:mt-12 px-6 sm:px-8 lg:px-12 leading-relaxed max-w-4xl mx-auto">
            Explore comprehensive charts, datasets, and statistical analysis
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyResults;