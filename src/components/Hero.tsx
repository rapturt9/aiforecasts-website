import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5" />
      
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-32 sm:py-40 lg:py-48 relative z-10">
        <div className="text-center space-y-16 sm:space-y-20 lg:space-y-24">
          {/* Headline */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight">
              Charting a{' '}
              <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
                Safer Future
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-secondary leading-relaxed max-w-5xl mx-auto">
              We use advanced AI and Structural Causal Models to predict the future with unprecedented accuracy, 
              providing open intelligence to help humanity navigate tomorrow's challenges.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-10 justify-center items-center pt-8 sm:pt-12 lg:pt-16">
            <button className="btn-primary flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 w-full sm:w-auto rounded-xl">
              <span>See Our Predictions</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <a 
              href="#performance" 
              className="btn-secondary flex items-center space-x-3 sm:space-x-4 text-base sm:text-lg lg:text-xl px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 w-full sm:w-auto rounded-xl"
            >
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>📊 View Performance</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;