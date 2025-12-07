import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="bg-[#001d3d] pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-white">
                <span className="text-white text-sm font-medium text-accent">Specialist UK Insurance Broker
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                
                <span className="text-white bg-clip-text text-transparent"> Tailored Insurance Solutions for Property Owners</span>
              </h1>
              
              <p className=" text-white text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Our specialists work with landlords, portfolio holders and property managers to help arrange suitable cover for residential and mixed-use properties.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <Button 
                size="lg" 
                className="hero-gradient text-primary-foreground hover:shadow-lg hover:scale-105 transition-all group"
              >
                Get Your Quote
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button> */}
              <a href="#contact">
              <button className="bg-accent hero-gradient text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
              Get Your Quote
            </button>
            </a>
              
              
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-8">
              
              <div className="text-white text-sm text-muted-foreground">
                ✓ FCA-authorised broker • ✓ UK specialist support • ✓ 10+ years experience
              </div>
            </div>
          </div>
          
          <div className="lg:pl-8 animate-fade-in animate-delay-200">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20">
                <img 
                  src="src/assets/propertyown.png"
                  alt="Team collaboration dashboard showing project management interface"
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]"
                  loading="lazy"
                />
               
              </div>
              
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;