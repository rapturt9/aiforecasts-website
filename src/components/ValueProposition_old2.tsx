import React from 'react';
import { Brain, Zap, Globe } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const valueProps = [
    {
      icon: <Brain className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: 'Understand Causality',
      description: 'We model the "why," not just the "what," using Structural Causal Models to reveal the true levers of change that drive future outcomes.'
    },
    {
      icon: <Zap className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: 'Simulate Future Paths',
      description: 'Run sophisticated "what if" scenarios for policies and research investments, enabling evidence-based decision making for complex global challenges.'
    },
    {
      icon: <Globe className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" />,
      title: 'Provide Open Intelligence',
      description: 'As a non-profit organization, we provide actionable data and insights for the public good, ensuring our research benefits all of humanity.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 via-indigo-900/20 to-gray-900" id="our-mission">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 sm:mb-8 lg:mb-12">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto leading-relaxed">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-2xl lg:rounded-3xl p-8 sm:p-12 lg:p-16 text-center hover:border-indigo-400/50 transition-all duration-300 hover:scale-105 hover:bg-gray-800/50"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-indigo-500/10 rounded-full mb-6 sm:mb-8 lg:mb-12 hover:bg-indigo-500/20 transition-colors duration-300">
                <div className="text-indigo-400 transition-all duration-300">
                  {prop.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
                {prop.title}
              </h3>
              <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 sm:mt-20 lg:mt-24">
          <a 
            href="/methodology" 
            className="inline-flex items-center px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 border-2 border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white rounded-xl transition-all duration-300 text-lg sm:text-xl font-semibold"
          >
            🔬 Explore Our Scientific Methodology
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;