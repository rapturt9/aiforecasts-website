"use client";

import React from 'react';
import {
  Typography,
  Card,
  CardBody,
  Button,
} from "@material-tailwind/react";
import { GitBranch, Zap, Globe } from 'lucide-react';

interface ValuePropItem {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export const ValueProposition: React.FC = () => {
  const valueProps: ValuePropItem[] = [
    {
      icon: GitBranch,
      title: 'Understand Causality',
      description: 'We model the "why," not just the "what," using Structural Causal Models to reveal the true levers of change that drive future outcomes.'
    },
    {
      icon: Zap,
      title: 'Simulate Future Paths',
      description: 'Run sophisticated "what if" scenarios for policies and research investments, enabling evidence-based decision making for complex global challenges.'
    },
    {
      icon: Globe,
      title: 'Provide Open Intelligence',
      description: 'As a non-profit organization, we provide actionable data and insights for the public good, ensuring our research benefits all of humanity.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-900 via-blue-900/20 to-gray-900" id="our-mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <Typography
            variant="h2"
            color="white"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8"
          >
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
          >
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </Typography>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <Card
              key={prop.title}
              className="bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:scale-105"
            >
              <CardBody className="text-center p-6 sm:p-8 lg:p-10">
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-blue-500/10 rounded-full mb-6 sm:mb-8 group-hover:bg-blue-500/20 transition-colors duration-300">
                  <prop.icon className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-blue-400" />
                </div>

                {/* Content */}
                <Typography
                  variant="h5"
                  color="white"
                  className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 leading-tight"
                >
                  {prop.title}
                </Typography>
                <Typography
                  variant="paragraph"
                  color="gray"
                  className="text-sm sm:text-base leading-relaxed"
                >
                  {prop.description}
                </Typography>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
            variant="gradient"
            onClick={() => window.location.href = '/methodology'}
          >
            🔬 Explore Our Scientific Methodology
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;