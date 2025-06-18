"use client";

import React from 'react';
import {
  Typography,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { Trophy, TrendingUp, Target, Award } from 'lucide-react';

export const KeyResults: React.FC = () => {
  const keyMetrics = [
    {
      icon: Trophy,
      title: "Manifold Markets",
      subtitle: "Outperforms Superforecasters",
      value: "0.082",
      description: "AI Brier Score (Lower is Better)",
      color: "text-green-500",
    },
    {
      icon: Target,
      title: "Yahoo Finance",
      subtitle: "Financial Predictions",
      value: "0.095",
      description: "AI Brier Score vs 0.123 Human",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      title: "1,000+",
      subtitle: "Questions Evaluated",
      value: "7 Datasets",
      description: "Comprehensive benchmarking",
      color: "text-purple-500",
    },
    {
      icon: Award,
      title: "Scientific Rigor",
      subtitle: "Data Leakage Prevention",
      value: "100%",
      description: "Methodology compliance",
      color: "text-blue-400",
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-900" id="performance">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight"
          >
            Proven <span className="text-blue-500">Performance</span>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our AI consistently outperforms expert human forecasters across multiple domains, 
            delivering superior accuracy with rigorous scientific methodology.
          </Typography>
        </div>

        {/* Key Achievement Card */}
        <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 mb-12 sm:mb-16 lg:mb-20">
          <CardBody className="text-center p-6 sm:p-8 lg:p-12">
            <div className="flex flex-col sm:flex-row items-center justify-center mb-6 sm:mb-8 lg:mb-10">
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-yellow-500 mb-4 sm:mb-0 sm:mr-4" />
              <Typography
                variant="h3"
                color="white"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold"
              >
                🏆 BREAKTHROUGH: AI Outperforms Superforecasters
              </Typography>
            </div>
            <Typography
              variant="lead"
              color="white"
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 lg:mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              Our AI achieves <span className="text-green-400 font-bold">0.082 Brier Score</span> vs 
              human experts' <span className="text-red-400 font-bold">0.134</span> on Manifold Markets — 
              a <span className="text-green-400 font-bold">38.8% improvement</span> in forecasting accuracy with statistical significance.
            </Typography>
            
            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
              <Card className="bg-gray-800/50 border border-blue-500/30">
                <CardBody className="text-center p-4 sm:p-6 lg:p-8">
                  <Typography variant="h2" color="blue" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                    0.082
                  </Typography>
                  <Typography variant="small" color="gray" className="text-sm sm:text-base font-medium">
                    AI Brier Score
                  </Typography>
                </CardBody>
              </Card>
              <Card className="bg-gray-800/50 border border-gray-600">
                <CardBody className="text-center p-4 sm:p-6 lg:p-8">
                  <Typography variant="h2" color="gray" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                    0.134
                  </Typography>
                  <Typography variant="small" color="gray" className="text-sm sm:text-base font-medium">
                    Human Brier Score
                  </Typography>
                </CardBody>
              </Card>
              <Card className="bg-gray-800/50 border border-green-500/30">
                <CardBody className="text-center p-4 sm:p-6 lg:p-8">
                  <Typography variant="h2" color="green" className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">
                    38.8%
                  </Typography>
                  <Typography variant="small" color="gray" className="text-sm sm:text-base font-medium">
                    Better Performance
                  </Typography>
                </CardBody>
              </Card>
            </div>
          </CardBody>
        </Card>

        {/* Detailed Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {keyMetrics.map((metric, index) => (
            <Card key={metric.title} className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardBody className="text-center p-6 sm:p-8">
                <metric.icon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto mb-4 sm:mb-6 ${metric.color}`} />
                <Typography variant="h5" color="white" className="font-bold text-lg sm:text-xl lg:text-2xl mb-2 sm:mb-3 leading-tight">
                  {metric.title}
                </Typography>
                <Typography variant="small" color="gray" className="text-sm sm:text-base mb-3 sm:mb-4">
                  {metric.subtitle}
                </Typography>
                <Typography variant="h4" color="blue" className={`text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-3 ${metric.color}`}>
                  {metric.value}
                </Typography>
                <Typography variant="small" color="gray" className="text-xs sm:text-sm">
                  {metric.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white mb-4"
            variant="gradient"
            onClick={() => window.location.href = '/performance'}
          >
            📈 View Detailed Performance Analysis
          </Button>
          <Typography variant="small" color="gray" className="text-sm sm:text-base max-w-2xl mx-auto">
            Explore comprehensive charts, datasets, and statistical analysis
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default KeyResults;