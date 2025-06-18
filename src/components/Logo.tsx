import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <svg
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with subtle gradient */}
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
        </defs>
        
        {/* Main F shape constructed from geometric elements */}
        <path
          d="M8 8 L8 32 L12 32 L12 22 L24 22 L24 18 L12 18 L12 12 L28 12 L28 8 Z"
          fill="url(#logoGradient)"
        />
        
        {/* Forward arrow/data curve element */}
        <path
          d="M30 16 L34 20 L30 24 L32 24 L36 20 L32 16 Z"
          fill="url(#logoGradient)"
          opacity="0.8"
        />
        
        {/* Data points suggesting analysis/forecasting */}
        <circle cx="14" cy="26" r="1.5" fill="#6366F1" opacity="0.6" />
        <circle cx="18" cy="24" r="1.5" fill="#6366F1" opacity="0.7" />
        <circle cx="22" cy="26" r="1.5" fill="#6366F1" opacity="0.8" />
        <circle cx="26" cy="22" r="1.5" fill="#6366F1" opacity="0.9" />
      </svg>
    </div>
  );
};

export default Logo;