import { Zap, Shield, Users, BarChart3, Clock, MessageSquare, House, UserSquare, Building2, Building, User, Building2Icon, Check } from 'lucide-react';

const features = [
  {
    icon: Check,
    title: 'Single-let Landlords',
    description: 'Cover options for landlords renting out a single residential property, helping protect against insured damage or liability claims.',
    color: 'text-accent'
  },
  {
    icon: Check,
    title: 'HMOs (House in Multiple Occupation)',
    description: 'Insurance considerations for properties with multiple tenants, where risks and insurer requirements may differ from standard lets.',
    color: 'text-accent'
  },
  {
    icon: Check,
    title: 'Flats & Apartment Blocks',
    description: 'Policies that may include building cover, communal areas and property owners’ liability, depending on the insurer’s terms.',
    color: 'text-accent'
  },
  {
    icon: Check,
    title: 'Mixed-use & Commercial-Residential Buildings',
    description: 'Suitable for properties combining residential and commercial units, where insurers assess risk types separately.',
    color: 'text-accent'
  },
  {
    icon: Check,
    title: 'Portfolio Owners & Property Investors',
    description: 'Options for landlords with multiple properties who may benefit from policies that consolidate cover under one arrangement.',
    color: 'text-accent'
  },
  {
    icon: Check,
    title: 'Letting Agents with Managed Properties',
    description: 'Insurance options that may support agents responsible for tenant management, depending on their role and responsibilities.',
    color: 'text-accent'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#001d3d] py-20 px-4 lg:px-8">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          
          
         
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Who Needs Property Owners 
            <span className="accent-gradient bg-clip-text text-transparent"> Insurance?</span>
          </h2>
          
          <p className="text-white text-xl text-muted-foreground max-w-3xl mx-auto">
          Property Owners Insurance may be suitable for individuals or businesses responsible for renting out or managing residential or mixed-use properties.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="feature-card animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="space-y-4">
                  {/* Icon */}
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Learn More Link */}
                  <div className="pt-2">
                    <button className="text-primary hover:text-primary-glow font-medium text-sm animated-underline group-hover:translate-x-1 transition-transform">
                      Learn more →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-surface rounded-2xl p-8 border border-card-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to discuss property Owners insurance needs?</h3>
            <p className="text-muted-foreground mb-6">
            Our team can help you explore suitable Property Owners Insurance options based on your circumstances. Quotes are free, come with no obligation, and include full details of any terms, conditions and exclusions before you choose to proceed.
            </p>
            <a href="#contact">
            <button className="bg-accent hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Contact Us
            </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;