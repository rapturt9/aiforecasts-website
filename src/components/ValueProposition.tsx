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
    <section className="py-20 px-6 bg-gradient-to-b from-background via-accent/5 to-background" id="our-mission">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            A New Paradigm for{' '}
            <span className="bg-gradient-to-r from-accent to-purple-500 bg-clip-text text-transparent">
              Global Foresight
            </span>
          </h2>
          <p className="text-xl text-secondary max-w-4xl mx-auto leading-relaxed">
            Our three-pillar approach combines cutting-edge AI with rigorous scientific methodology 
            to create unprecedented insights into humanity's future.
          </p>
        </div>

        {/* Value Proposition Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="bg-card/30 backdrop-blur-sm border border-border/50 rounded-2xl p-12 text-center group hover:bg-card/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/10 rounded-full mb-8 group-hover:bg-accent/20 transition-colors duration-300">
                <div className="text-accent transition-all duration-300">
                  {prop.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-6 leading-tight">
                {prop.title}
              </h3>
              <p className="text-secondary leading-relaxed text-base">
                {prop.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <a 
            href="/methodology" 
            className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground rounded-xl hover:bg-accent/90 transition-colors duration-300 text-lg font-semibold"
          >
            🔬 Explore Our Scientific Methodology
          </a>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;