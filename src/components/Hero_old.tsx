"use client";

import React from 'react';
import {
  Typography,
  Button,
} from "@material-tailwind/react";
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-900 to-blue-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-5xl mx-auto">
          {/* Headline */}
          <div className="mb-8 sm:mb-12 lg:mb-16">
            <Typography
              variant="h1"
              color="white"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6 sm:mb-8"
            >
              Charting a{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Safer Future
              </span>
            </Typography>
            
            <Typography
              variant="lead"
              color="gray"
              className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl mx-auto"
            >
              We use advanced AI and Structural Causal Models to predict the future with unprecedented accuracy, 
              providing open intelligence to help humanity navigate tomorrow's challenges.
            </Typography>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center gap-2"
              variant="gradient"
            >
              <span>See Our Predictions</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outlined" 
              color="white"
              className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-gray-900 flex items-center gap-2"
              onClick={() => document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>📊 View Performance</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;