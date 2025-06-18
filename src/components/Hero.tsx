import React from 'react';
import { ArrowRight, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-900/20" />
      
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32 lg:py-40 relative z-10">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Headline */}
          <div className="space-y-6 sm:space-y-8 lg:space-y-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-tight tracking-tight text-white">
              Charting a{' '}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
                Safer Future
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-300 leading-relaxed max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
              We use advanced AI and Structural Causal Models to predict the future with unprecedented accuracy, 
              providing open intelligence to help humanity navigate tomorrow's challenges.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 justify-center items-center pt-8 sm:pt-12 lg:pt-16">
            <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 w-full sm:w-auto rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-3">
              <span>See Our Predictions</span>
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
            
            <a 
              href="#performance" 
              className="border-2 border-white/30 text-white hover:bg-white/10 font-medium text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 w-full sm:w-auto rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
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