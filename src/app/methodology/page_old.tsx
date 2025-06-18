import React from 'react';
import { ArrowLeft, BookOpen, Shield, Target, TrendingUp, Database, Brain, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="pt-20 sm:pt-24 lg:pt-32">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <Link 
                href="/"
                className="inline-flex items-center text-accent hover:text-accent-hover mb-8 sm:mb-10 lg:mb-12 transition-colors text-sm sm:text-base lg:text-lg"
              >
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 mr-2 sm:mr-3" />
                Back to Home
              </Link>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 sm:mb-8 lg:mb-10">
                Our <span className="text-accent">Methodology</span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-secondary leading-relaxed max-w-4xl mx-auto">
                ForecastLabs employs rigorous scientific methodology based on ForecastBench, 
                a dynamic benchmark that evaluates AI forecasting capabilities while preventing data leakage.
              </p>
            </div>
          </div>
        </section>

        {/* Core Principles */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 sm:mb-20 lg:mb-24">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 lg:mb-10">Core Principles</h2>
              <p className="text-secondary text-lg sm:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed">
                Our approach is built on three fundamental principles that ensure accuracy, reliability, and scientific rigor.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
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
                <div
                  key={principle.title}
                  className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-8 sm:p-10 lg:p-12 text-center hover:bg-card/50 transition-colors duration-300"
                >
                  <principle.icon className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-accent mx-auto mb-6 sm:mb-8" />
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">{principle.title}</h3>
                  <p className="text-secondary text-base sm:text-lg leading-relaxed">{principle.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Foundation */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-accent/5">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 flex items-center justify-center">
                <BookOpen className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent mr-4 sm:mr-6" />
                Research Foundation
              </h2>
              
              <div className="bg-card rounded-2xl p-8 sm:p-10 lg:p-12 border border-border">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6 sm:mb-8 text-center">
                  ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities
                </h3>
                <p className="text-secondary mb-8 sm:mb-10 text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
                  Our methodology is based on the research paper "ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities" 
                  (arXiv:2409.19839), which introduces the first standardized framework for evaluating machine learning systems on forecasting tasks.
                </p>
                
                <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 sm:p-8 lg:p-10 mb-8 sm:mb-10">
                  <h4 className="font-semibold mb-4 sm:mb-6 text-accent text-lg sm:text-xl lg:text-2xl">Key Research Findings:</h4>
                  <ul className="space-y-3 sm:space-y-4 text-secondary">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Expert forecasters currently outperform top-performing LLMs (p-value &lt;0.001)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Dynamic benchmarking prevents data leakage and ensures fair evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-base sm:text-lg">Automated system gathers questions from nine different data sources daily</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <a 
                    href="https://arxiv.org/abs/2409.19839"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 sm:px-8 lg:px-10 py-3 sm:py-4 lg:py-5 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors text-base sm:text-lg lg:text-xl font-semibold"
                  >
                    <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
                    Read the Full Paper
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 sm:mb-16 lg:mb-20">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 flex items-center justify-center">
                <Database className="w-8 h-8 sm:w-10 sm:h-10 text-accent mr-3 sm:mr-4" />
                Data Sources & Evaluation
              </h2>
              <p className="text-secondary text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto">
                We evaluate our AI systems across multiple diverse datasets to ensure robust performance across different domains.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: "Manifold Markets", type: "Prediction Market", samples: "22 questions" },
                { name: "Polymarket", type: "Prediction Market", samples: "22 questions" },
                { name: "ACLED", type: "Conflict Data", samples: "88 questions" },
                { name: "DBnomics", type: "Economic Data", samples: "72 questions" },
                { name: "FRED", type: "Economic Data", samples: "86 questions" },
                { name: "Wikipedia", type: "General Knowledge", samples: "88 questions" },
                { name: "Yahoo Finance", type: "Financial Data", samples: "88 questions" }
              ].map((source, index) => (
                <div
                  key={source.name}
                  className="bg-card rounded-xl p-6 sm:p-8 border border-border hover:border-accent/30 transition-colors"
                >
                  <h3 className="font-semibold text-lg sm:text-xl mb-2 sm:mb-3">{source.name}</h3>
                  <p className="text-accent text-sm sm:text-base mb-1 sm:mb-2">{source.type}</p>
                  <p className="text-secondary text-sm sm:text-base">{source.samples}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Metrics */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12 bg-accent/5">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 flex items-center">
              <TrendingUp className="w-8 h-8 sm:w-10 sm:h-10 text-accent mr-3 sm:mr-4" />
              Performance Metrics
            </h2>
            
            <div className="bg-card rounded-2xl p-8 sm:p-10 lg:p-12 border border-border">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6">Average Brier Score</h3>
              <p className="text-secondary mb-6 sm:mb-8 text-base sm:text-lg lg:text-xl">
                We use Average Brier Score as our primary metric, where lower values indicate better performance. 
                This metric measures the accuracy of probabilistic predictions for binary outcomes.
              </p>
              
              <div className="bg-accent/10 border border-accent/20 rounded-xl p-6 sm:p-8">
                <h4 className="font-semibold mb-3 sm:mb-4 text-accent text-lg sm:text-xl">Why Brier Score?</h4>
                <ul className="space-y-2 sm:space-y-3 text-secondary text-base sm:text-lg">
                  <li>• Proper scoring rule: rewards accurate probability estimates</li>
                  <li>• Penalizes both overconfidence and underconfidence appropriately</li>
                  <li>• Standardized across different question types and domains</li>
                  <li>• Enables fair comparison between AI systems and human forecasters</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8">See Our Methodology in Action</h2>
            <p className="text-secondary text-lg sm:text-xl lg:text-2xl mb-10 sm:mb-12 max-w-3xl mx-auto leading-relaxed">
              Explore the live forecasts generated from our models and see how our rigorous methodology translates into superior performance.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link 
                href="/performance" 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors text-lg sm:text-xl font-semibold"
              >
                View Performance Data
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center justify-center px-8 sm:px-10 py-4 sm:py-5 bg-card text-foreground border border-border rounded-xl hover:bg-card/80 transition-colors text-lg sm:text-xl font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}