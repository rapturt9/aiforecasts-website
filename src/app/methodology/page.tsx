'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

import Link from 'next/link';
import {
  Typography,
  Card,
  CardBody,
  Button,
  Alert,
} from "@material-tailwind/react";
import { ArrowLeft, Shield, Database, BarChart3, ExternalLink, Trophy, Target } from 'lucide-react';

export default function MethodologyPage() {
  const corePrinciples = [
    {
      icon: Shield,
      title: "Prevent Data Leakage",
      description: "We use models with training cutoffs before forecast dates and only allow searches for articles last updated before the forecast date to supplement knowledge.",
      color: "text-green-400",
      bgColor: "bg-green-400/10"
    },
    {
      icon: Database,
      title: "Dynamic Benchmarking",
      description: "Our benchmark consists of 1,000 standardized forecasting questions about future events across multiple domains and data sources.",
      color: "text-blue-400",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: BarChart3,
      title: "Rigorous Evaluation",
      description: "We compare AI performance against expert human forecasters using standardized metrics and statistical significance testing.",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10"
    }
  ];

  const dataSources = [
    { name: "Manifold Markets", type: "Prediction Market", questions: "22 questions" },
    { name: "Polymarket", type: "Prediction Market", questions: "22 questions" },
    { name: "ACLED", type: "Conflict Data", questions: "88 questions" },
    { name: "DBnomics", type: "Economic Data", questions: "72 questions" },
    { name: "FRED", type: "Economic Data", questions: "86 questions" },
    { name: "Wikipedia", type: "General Knowledge", questions: "88 questions" },
    { name: "Yahoo Finance", type: "Financial Data", questions: "89 questions" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <main className="pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* Breadcrumb Navigation */}
          <div className="mb-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-indigo-400 hover:text-indigo-300 transition-colors text-base"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
          </div>

          {/* Page Header */}
          <div className="text-center mb-16">
            <Typography
              variant="h1"
              color="white"
              className="text-5xl font-bold mb-6"
            >
              Scientific Methodology
            </Typography>
            <Typography
              variant="lead"
              color="gray"
              className="text-xl max-w-4xl mx-auto leading-relaxed"
            >
              Our rigorous approach to AI forecasting evaluation, designed to prevent data leakage 
              and ensure fair comparison with human expert performance.
            </Typography>
          </div>

          {/* Key Results Highlight */}
          <section className="mb-16">
            <Alert
              color="green"
              className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 mb-8"
            >
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
                <Typography variant="h4" color="white" className="font-bold">
                  🏆 Key Achievement: AI Outperforms Superforecasters
                </Typography>
              </div>
              <Typography variant="paragraph" color="white" className="text-center text-lg">
                Our AI system achieves a <span className="text-green-400 font-bold">0.082 Brier Score</span> vs 
                human superforecasters' <span className="text-red-400 font-bold">0.134 Brier Score</span> on Manifold Markets, 
                representing a <span className="text-green-400 font-bold">38.8% improvement</span> in forecasting accuracy.
              </Typography>
            </Alert>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-gray-800/50 border border-green-500/30">
                <CardBody className="text-center">
                  <Target className="w-12 h-12 text-green-400 mx-auto mb-4" />
                  <Typography variant="h3" color="green" className="font-bold mb-2">
                    0.082
                  </Typography>
                  <Typography variant="small" color="gray">
                    AI Brier Score (Lower is Better)
                  </Typography>
                </CardBody>
              </Card>
              
              <Card className="bg-gray-800/50 border border-red-500/30">
                <CardBody className="text-center">
                  <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
                  <Typography variant="h3" color="red" className="font-bold mb-2">
                    0.134
                  </Typography>
                  <Typography variant="small" color="gray">
                    Human Superforecaster Score
                  </Typography>
                </CardBody>
              </Card>
              
              <Card className="bg-gray-800/50 border border-blue-500/30">
                <CardBody className="text-center">
                  <Trophy className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                  <Typography variant="h3" color="blue" className="font-bold mb-2">
                    38.8%
                  </Typography>
                  <Typography variant="small" color="gray">
                    Performance Improvement
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Core Principles */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Core Principles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {corePrinciples.map((principle) => {
                const IconComponent = principle.icon;
                return (
                  <div
                    key={principle.title}
                    className={`${principle.bgColor} border border-gray-700 rounded-xl p-8 text-center`}
                  >
                    <IconComponent className={`w-12 h-12 mx-auto mb-6 ${principle.color}`} />
                    <h3 className="font-bold text-xl mb-4">{principle.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{principle.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Research Foundation */}
          <section className="mb-16">
            <div className="bg-gray-800/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center mb-8">📚 Research Foundation</h2>
              <div className="text-center space-y-6">
                <h3 className="text-2xl font-semibold">
                  ForecastBench: A Dynamic Benchmark of AI Forecasting Capabilities
                </h3>
                <p className="text-gray-300 max-w-4xl mx-auto leading-relaxed">
                  Our methodology is based on the research paper "ForecastBench: A Dynamic Benchmark 
                  of AI Forecasting Capabilities" (arXiv:2409.19839), which introduces the first standardized 
                  framework for evaluating machine learning systems on forecasting tasks.
                </p>
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-indigo-400">Key Research Findings:</h4>
                  <ul className="text-left max-w-3xl mx-auto space-y-2 text-gray-300">
                    <li>✓ Expert forecasters currently outperform top-performing LLMs (p-value &lt;0.001)</li>
                    <li>✓ Dynamic benchmarking prevents data leakage and ensures fair evaluation</li>
                    <li>✓ Automated system gathers questions from nine different data sources daily</li>
                  </ul>
                </div>
                <a 
                  href="https://arxiv.org/pdf/2409.19839" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors duration-300 font-medium"
                >
                  📄 Read the Full Paper
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Data Sources & Evaluation */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">📊 Data Sources & Evaluation</h2>
            <p className="text-center text-gray-300 mb-8 max-w-4xl mx-auto">
              We evaluate our AI systems across multiple diverse datasets to ensure robust 
              performance across different domains.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataSources.map((source) => (
                <div
                  key={source.name}
                  className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
                >
                  <h3 className="font-bold text-lg mb-2">{source.name}</h3>
                  <p className="text-indigo-400 text-sm mb-2">{source.type}</p>
                  <p className="text-gray-300 text-sm">{source.questions}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Performance Metrics */}
          <section className="mb-16">
            <div className="bg-gray-800/30 rounded-2xl p-12">
              <h2 className="text-3xl font-bold text-center mb-8">📈 Performance Metrics</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Average Brier Score</h3>
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use Average Brier Score as our primary metric, where lower values indicate better performance. 
                    This metric measures the accuracy of probabilistic predictions for binary outcomes.
                  </p>
                  <div className="bg-indigo-500/10 rounded-lg p-4">
                    <h4 className="font-semibold text-indigo-400 mb-2">Why Brier Score?</h4>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• Proper scoring rule: rewards accurate probability estimates</li>
                      <li>• Penalizes both overconfidence and underconfidence appropriately</li>
                      <li>• Standardized across different question types and domains</li>
                      <li>• Enables fair comparison between AI systems and human forecasters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">See Our Methodology in Action</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Explore the live forecasts generated from our models and see how our rigorous 
              methodology translates into superior performance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/performance" 
                className="inline-flex items-center px-8 py-4 bg-indigo-500 text-white rounded-xl hover:bg-indigo-600 transition-colors duration-300 text-lg font-semibold"
              >
                View Performance Data
              </Link>
              <Link 
                href="/" 
                className="inline-flex items-center px-8 py-4 border border-gray-700 rounded-xl hover:bg-gray-800/50 transition-colors duration-300 text-lg font-semibold"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}