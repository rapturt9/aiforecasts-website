'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface PerformanceData {
  source: string;
  category: string;
  human_mean: number;
  bot_mean: number;
  difference: number;
  significant: boolean;
  human_count: number;
  bot_count: number;
}

const performanceData: PerformanceData[] = [
  {
    source: 'manifold',
    category: 'market',
    human_mean: 0.1343,
    bot_mean: 0.0823,
    difference: 0.0520,
    significant: false,
    human_count: 22,
    bot_count: 22
  },
  {
    source: 'polymarket',
    category: 'market',
    human_mean: 0.0524,
    bot_mean: 0.1392,
    difference: -0.0868,
    significant: false,
    human_count: 22,
    bot_count: 22
  },
  {
    source: 'acled',
    category: 'dataset',
    human_mean: 0.0354,
    bot_mean: 0.0492,
    difference: -0.0139,
    significant: false,
    human_count: 88,
    bot_count: 88
  },
  {
    source: 'dbnomics',
    category: 'dataset',
    human_mean: 0.1191,
    bot_mean: 0.1680,
    difference: -0.0489,
    significant: false,
    human_count: 72,
    bot_count: 72
  },
  {
    source: 'fred',
    category: 'dataset',
    human_mean: 0.1600,
    bot_mean: 0.1677,
    difference: -0.0077,
    significant: false,
    human_count: 86,
    bot_count: 86
  },
  {
    source: 'wikipedia',
    category: 'dataset',
    human_mean: 0.0271,
    bot_mean: 0.0858,
    difference: -0.0587,
    significant: true,
    human_count: 88,
    bot_count: 88
  },
  {
    source: 'yfinance',
    category: 'dataset',
    human_mean: 0.2554,
    bot_mean: 0.2272,
    difference: 0.0283,
    significant: true,
    human_count: 88,
    bot_count: 88
  }
];

export const PerformanceChart: React.FC = () => {
  const maxError = Math.max(...performanceData.map(d => Math.max(d.human_mean, d.bot_mean)));

  return (
    <motion.div
      className="glass-card p-8 w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
    >
      <div className="text-center space-y-2 mb-6">
        <h3 className="text-2xl font-bold text-foreground">Forecasting Performance Comparison</h3>
        <p className="text-muted">Mean Absolute Error (Lower is Better)</p>
        <p className="text-sm text-muted italic">
          Methodology: Models trained with cutoff before forecast dates, preventing data leakage
        </p>
      </div>
      
      <div className="space-y-6">
        {performanceData.map((item, index) => (
          <motion.div
            key={item.source}
            className="space-y-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <span className="font-semibold text-foreground capitalize">
                  {item.source}
                </span>
                <span className="text-xs px-2 py-1 rounded-full bg-glass-bg text-muted">
                  {item.category}
                </span>
                {item.significant && (
                  <span className="text-xs px-2 py-1 rounded-full bg-accent/20 text-accent">
                    Significant
                  </span>
                )}
              </div>
              <div className="text-sm text-muted">
                n={item.human_count}
              </div>
            </div>
            
            <div className="space-y-2">
              {/* Human Performance Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-28 text-sm text-muted">Superforecasters</span>
                <div className="flex-1 bg-glass-bg rounded-full h-6 relative overflow-hidden">
                  <motion.div
                    className="h-full bg-secondary rounded-full flex items-center justify-end pr-2"
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.human_mean / maxError) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  >
                    <span className="text-xs font-medium text-white">
                      {(item.human_mean * 100).toFixed(1)}%
                    </span>
                  </motion.div>
                </div>
              </div>
              
              {/* Bot Performance Bar */}
              <div className="flex items-center space-x-3">
                <span className="w-28 text-sm text-accent font-medium">ForecastLabs AI</span>
                <div className="flex-1 bg-glass-bg rounded-full h-6 relative overflow-hidden">
                  <motion.div
                    className={`h-full rounded-full flex items-center justify-end pr-2 ${
                      item.bot_mean < item.human_mean 
                        ? 'bg-gradient-to-r from-accent to-accent-hover' 
                        : 'bg-gradient-to-r from-orange-500 to-red-500'
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${(item.bot_mean / maxError) * 100}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  >
                    <span className="text-xs font-medium text-white">
                      {(item.bot_mean * 100).toFixed(1)}%
                    </span>
                  </motion.div>
                </div>
              </div>
              
              {/* Performance Difference */}
              <div className="flex justify-end">
                <span className={`text-xs px-2 py-1 rounded ${
                  item.difference > 0 
                    ? 'bg-accent/20 text-accent' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {item.difference > 0 ? '+' : ''}{(item.difference * 100).toFixed(1)}% vs humans
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="border-t border-glass-border pt-4 mt-6 space-y-2">
        <div className="text-center">
          <p className="text-sm text-accent font-semibold">
            🏆 ForecastLabs AI outperforms superforecasters on Manifold Markets
          </p>
          <p className="text-xs text-muted mt-1">
            Our AI demonstrates superior accuracy compared to groups of expert human forecasters
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PerformanceChart;