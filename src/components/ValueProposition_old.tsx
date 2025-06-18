import React from 'react';
import { GitBranch, Zap, Globe } from 'lucide-react';

interface ValuePropItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ValueProposition: React.FC = () => {
  const valueProps: ValuePropItem[] = [
    {
      icon: <GitBranch className="w-12 h-12" />,
      title: 'Understand Causality',
      description: 'We model the "why," not just the "what," using Structural Causal Models to reveal the true levers of change that drive future outcomes.'
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: 'Simulate Future Paths',
      description: 'Run sophisticated "what if" scenarios for policies and research investments, enabling evidence-based decision making for complex global challenges.'
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: 'Provide Open Intelligence',
      description: 'As a non-profit organization, we provide actionable data and insights for the public good, ensuring our research benefits all of humanity.'
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background via-accent/5 to-background" id="our-mission">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 lg:mb-8">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-secondary max-w-3xl mx-auto leading-relaxed">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="bg-card border border-border rounded-lg p-6 sm:p-8 lg:p-10 text-center group hover:border-accent/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-accent/10 rounded-full mb-6 sm:mb-8 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="text-accent transition-all duration-300">
                  {React.cloneElement(prop.icon as React.ReactElement, {
                    className: "w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                  })}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
                {prop.title}
              </h3>
              <p className="text-sm sm:text-base text-secondary leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20">
          <a 
            href="/methodology" 
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors text-base sm:text-lg font-semibold w-full sm:w-auto"
          >
            🔬 Explore Our Scientific Methodology
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;