'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Shield, Target, TrendingUp, Database, Brain, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-accent hover:text-accent-hover mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
              
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Our <span className="text-accent">Methodology</span>
              </h1>
              
              <p className="text-xl text-secondary leading-relaxed max-w-3xl mx-auto">
                ForecastLabs employs rigorous scientific methodology based on ForecastBench, 
                a dynamic benchmark that evaluates AI forecasting capabilities while preventing data leakage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 px-6 bg-glass-bg/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold mb-4">Core Principles</h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                Our approach is built on three fundamental principles that ensure accuracy, reliability, and scientific rigor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Shield,
                  title: "Prevent Data Leakage",
                  description: "We use models with training cutoffs before forecast dates and only allow searches for articles last updated before the forecast date."
                },
                {
                  icon: Target,
                  title: "Dynamic Benchmarking",
                  description: "Our benchmark consists of 1,000 standardized forecasting questions about future events with no known answers at submission time."
                },
                {
                  icon: Brain,
                  title: "Rigorous Evaluation",
                  description: "We compare AI performance against expert human forecasters using standardized metrics and statistical significance testing."
                }
              ].map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="glass-card p-8 text-center hover:scale-105 transition-transform duration-300"
                >
                  <principle.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-4">{principle.title}</h3>
                  <p className="text-secondary">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Foundation */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <BookOpen className="w-8 h-8 text-accent mr-3" />
                Research Foundation
              </h2>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities</h3>
                <p className="text-secondary mb-4">
                  Our methodology is based on the research paper "ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities" 
                  (arXiv:2409.19839), which introduces the first standardized framework for evaluating machine learning systems on forecasting tasks.
                </p>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-3 text-accent">Key Research Findings:</h4>
                  <ul className="space-y-2 text-secondary">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Expert forecasters currently outperform top-performing LLMs (p-value &lt;0.001)
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Dynamic benchmarking prevents data leakage and ensures fair evaluation
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-accent mr-2 mt-0.5 flex-shrink-0" />
                      Automated system gathers questions from nine different data sources daily
                    </li>
                  </ul>
                </div>
                
                <a 
                  href="https://arxiv.org/abs/2409.19839"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read the Full Paper
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-16 px-6 bg-glass-bg/30">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
                <Database className="w-8 h-8 text-accent mr-3" />
                Data Sources & Evaluation
              </h2>
              <p className="text-secondary text-lg max-w-2xl mx-auto">
                We evaluate our AI systems across multiple diverse datasets to ensure robust performance across different domains.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: "Manifold Markets", type: "Prediction Market", samples: "22 questions" },
                { name: "Polymarket", type: "Prediction Market", samples: "22 questions" },
                { name: "ACLED", type: "Conflict Data", samples: "88 questions" },
                { name: "DBnomics", type: "Economic Data", samples: "72 questions" },
                { name: "FRED", type: "Economic Data", samples: "86 questions" },
                { name: "Wikipedia", type: "General Knowledge", samples: "88 questions" },
                { name: "Yahoo Finance", type: "Financial Data", samples: "88 questions" }
              ].map((source, index) => (
                <motion.div
                  key={source.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.05 }}
                  className="glass-card p-6"
                >
                  <h3 className="font-semibold text-lg mb-2">{source.name}</h3>
                  <p className="text-accent text-sm mb-1">{source.type}</p>
                  <p className="text-secondary text-sm">{source.samples}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <TrendingUp className="w-8 h-8 text-accent mr-3" />
                Performance Metrics
              </h2>
              
              <div className="glass-card p-8">
                <h3 className="text-xl font-semibold mb-4">Mean Absolute Error (MAE)</h3>
                <p className="text-secondary mb-6">
                  We use Mean Absolute Error as our primary metric, where lower values indicate better performance. 
                  This metric measures the average absolute difference between predicted and actual outcomes.
                </p>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-accent">Why MAE?</h4>
                  <ul className="space-y-2 text-secondary">
                    <li>• Intuitive interpretation: directly measures prediction accuracy</li>
                    <li>• Robust to outliers compared to squared error metrics</li>
                    <li>• Standardized across different question types and domains</li>
                    <li>• Enables fair comparison between AI systems and human forecasters</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 px-6 bg-glass-bg/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6">Ready to Explore Our Forecasts?</h2>
              <p className="text-secondary text-lg mb-8 max-w-2xl mx-auto">
                See how our rigorous methodology translates into actionable insights for decision-making.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#performance" className="btn-primary">
                  View Performance Data
                </Link>
                <Link href="/" className="btn-secondary">
                  Explore Forecasts
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}