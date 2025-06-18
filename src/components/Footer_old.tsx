import React from 'react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 border-t border-border bg-gradient-to-t from-accent/5 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <Logo size="md" />
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground">
              Forecast<span className="text-accent">Labs</span>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-secondary max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg">
            Dedicated to securing a beneficial future for humanity in the age of artificial intelligence through rigorous research and open intelligence.
          </p>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            {/* Add social media links here when available */}
          </div>

          {/* Copyright */}
          <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-border">
            <p className="text-muted text-xs sm:text-sm">
              © 2025 ForecastLabs. A non-profit organization dedicated to a safer future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;