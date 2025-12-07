import primg from "../assets/whatis.png";
const WhatIsSection = () => {
    return (
      <section id="what-is" className="py-28 pt-32 pb-20 px-4 lg:px-8 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
  
            {/* IMAGE ON LEFT */}
            <div className="animate-fade-in">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
                  <img
                    
                    src={primg}
                    alt="Residential and mixed-use property visual"
                    className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[3/4] xl:aspect-[4/3]"
                    loading="lazy"
                  />
                </div>
  
                {/* Floating gradient accents */}
                <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
  
            {/* TEXT ON RIGHT */}
            <div className="space-y-6 animate-fade-in animate-delay-200">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent border border-primary/20">
                <span className="text-white text-sm font-medium text-primary">
                  Understanding Your Cover
                </span>
              </div>
  
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                What is{" "}
                <span className="hero-gradient bg-clip-text text-transparent">
                  Property Owners Insurance?
                </span>
              </h2>
  
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Property Owners Insurance helps protect landlords, investors and
                portfolio holders against financial losses caused by insured events
                such as fire, flood, escape of water, accidental damage and public
                liability claims.
              </p>
  
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                Depending on the policy and insurer, it may include cover for
                buildings, landlord contents, loss of rent, and alternative
                accommodation for tenants following an insured incident.
              </p>
  
              <p className="text-sm text-muted-foreground max-w-2xl pt-2">
                Cover varies by insurer and is always subject to terms, conditions and underwriting criteria.
                Full details will be provided before you decide to proceed.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default WhatIsSection;
  