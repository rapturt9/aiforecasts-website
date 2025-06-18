"use client";

import React from 'react';
import {
  Typography,
} from "@material-tailwind/react";
import Logo from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 sm:py-16 lg:py-20 border-t border-gray-800 bg-gradient-to-t from-blue-900/20 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 sm:space-y-12 lg:space-y-16">
          {/* Logo and Brand */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-3">
            <Logo size="md" />
            <Typography
              variant="h4"
              color="white"
              className="text-xl sm:text-2xl lg:text-3xl font-bold"
            >
              Forecast<span className="text-blue-500">Labs</span>
            </Typography>
          </div>

          {/* Mission Statement */}
          <Typography
            variant="lead"
            color="gray"
            className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto leading-relaxed text-sm sm:text-base lg:text-lg"
          >
            Dedicated to securing a beneficial future for humanity in the age of artificial intelligence through rigorous research and open intelligence.
          </Typography>

          {/* Social Links Placeholder */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            {/* Add social media links here when available */}
          </div>

          {/* Copyright */}
          <div className="pt-8 sm:pt-12 lg:pt-16 border-t border-gray-800">
            <Typography
              variant="small"
              color="gray"
              className="text-xs sm:text-sm"
            >
              © 2025 ForecastLabs. A non-profit organization dedicated to a safer future.
            </Typography>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;