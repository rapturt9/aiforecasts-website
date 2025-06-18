import React from 'react';
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-16 border-t border-border bg-gradient-to-t from-accent/5 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-3">
            <Logo size="lg" />
            <div className="text-2xl font-bold text-foreground">
              Forecast<span className="text-accent">Labs</span>
            </div>
          </div>

          {/* Mission Statement */}
          <p className="text-secondary max-w-3xl mx-auto leading-relaxed text-lg">
            Dedicated to securing a beneficial future for humanity in the age of artificial intelligence through rigorous research and open intelligence.
          </p>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6">
            {/* Add social media links here when available */}
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-border">
            <p className="text-muted text-sm">
              © 2025 ForecastLabs. A non-profit organization dedicated to a safer future.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;