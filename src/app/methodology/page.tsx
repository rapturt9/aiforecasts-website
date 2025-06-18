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
      
      <main className="pt-24 sm:pt-32 lg:pt-40 xl:pt-48">
        {/* Hero Section */}
        <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20 sm:mb-24 lg:mb-32 xl:mb-40"
            >
              <Link 
                href="/"
                className="inline-flex items-center text-accent hover:text-accent-hover mb-12 sm:mb-16 lg:mb-20 xl:mb-24 transition-colors text-sm sm:text-base lg:text-lg xl:text-xl"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                Back to Home
              </Link>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 lg:mb-10">
                Our <span className="text-accent">Methodology</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-secondary leading-relaxed max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                ForecastLabs employs rigorous scientific methodology based on ForecastBench, 
                a dynamic benchmark that evaluates AI forecasting capabilities while preventing data leakage.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-24 sm:py-32 md:py-40 lg:py-48 xl:py-56 px-4 sm:px-6 lg:px-8">
          <div className="max-w-8xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center mb-24 sm:mb-32 lg:mb-40"
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 sm:mb-10 lg:mb-12">Core Principles</h2>
              <p className="text-secondary text-xl sm:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed px-4">
                Our approach is built on three fundamental principles that ensure accuracy, reliability, and scientific rigor.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-12 sm:gap-16 lg:gap-20 xl:gap-24">
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
                  className="glass-card p-10 text-center hover:scale-105 transition-transform duration-300"
                >
                  <principle.icon className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-semibold mb-6">{principle.title}</h3>
                  <p className="text-secondary text-lg leading-relaxed">{principle.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Foundation */}
        <section className="py-24 px-6 bg-glass-bg/20">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-4xl font-bold mb-8 flex items-center justify-center">
                <BookOpen className="w-10 h-10 text-accent mr-4" />
                Research Foundation
              </h2>
              
              <div className="glass-card p-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities</h3>
                <p className="text-secondary mb-8 text-lg leading-relaxed max-w-3xl mx-auto">
                  Our methodology is based on the research paper "ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities" 
                  (arXiv:2409.19839), which introduces the first standardized framework for evaluating machine learning systems on forecasting tasks.
                </p>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-8 mb-8">
                  <h4 className="font-semibold mb-6 text-accent text-xl">Key Research Findings:</h4>
                  <ul className="space-y-4 text-secondary">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Expert forecasters currently outperform top-performing LLMs (p-value &lt;0.001)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Dynamic benchmarking prevents data leakage and ensures fair evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-lg">Automated system gathers questions from nine different data sources daily</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://arxiv.org/abs/2409.19839"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary inline-flex items-center text-lg px-8 py-4"
                  >
                    <BookOpen className="w-5 h-5 mr-3" />
                    Read the Full Paper
                  </a>
                </div>
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
                <h3 className="text-xl font-semibold mb-4">Average Brier Score</h3>
                <p className="text-secondary mb-6">
                  We use Average Brier Score as our primary metric, where lower values indicate better performance. 
                  This metric measures the accuracy of probabilistic predictions for binary outcomes.
                </p>
                
                <div className="bg-accent/10 border border-accent/20 rounded-lg p-6">
                  <h4 className="font-semibold mb-3 text-accent">Why Brier Score?</h4>
                  <ul className="space-y-2 text-secondary">
                    <li>• Proper scoring rule: rewards accurate probability estimates</li>
                    <li>• Penalizes both overconfidence and underconfidence appropriately</li>
                    <li>• Standardized across different question types and domains</li>
                    <li>• Enables fair comparison between AI systems and human forecasters</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-24 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8">See Our Methodology in Action</h2>
              <p className="text-secondary text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Explore the live forecasts generated from our models and see how our rigorous methodology translates into superior performance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link href="/performance" className="btn-primary text-lg px-8 py-4">
                  View Performance Data
                </Link>
                <Link href="/" className="btn-secondary text-lg px-8 py-4">
                  Back to Home
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