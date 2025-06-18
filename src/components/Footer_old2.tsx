import React from 'react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 sm:py-20 lg:py-24 border-t border-gray-700 bg-gradient-to-t from-indigo-900/20 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3 sm:space-x-4">
            <Logo size="lg" />
            <div className="text-2xl sm:text-3xl font-bold text-white">
              Forecast<span className="text-indigo-400">Labs</span>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-gray-300 max-w-3xl sm:max-w-4xl mx-auto leading-relaxed text-lg sm:text-xl">
            Dedicated to securing a beneficial future for humanity in the age of artificial intelligence through rigorous research and open intelligence.
          </p>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            {/* Add social media links here when available */}
          </div>

          {/* Copyright */}
          <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-gray-700">
            <p className="text-gray-500 text-sm sm:text-base">
              © 2025 ForecastLabs. A non-profit organization dedicated to a safer future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;