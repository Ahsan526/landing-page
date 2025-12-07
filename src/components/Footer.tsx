import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001d3d] border-t border-card-border py-16 px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              
              <span className="text-white font-bold text-xl">Focus Insurance Services</span>
            </div>
            
            <p className="text-white leading-relaxed">
            Focus Insurance Services Ltd is authorised and regulated by the Financial Conduct Authority.  
FCA Firm Reference Number: 09620500.  
Registered in England & Wales.  
Registered Office: Peterborough,UK.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5 text-accent group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-accent group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-accent group-hover:text-accent transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-card border border-card-border flex items-center justify-center hover:border-primary hover:bg-primary/5 transition-all group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-accent group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 underline underline-offset-8">Commercial Insurance</h3>
            <ul className="space-y-4">
              <li>
                <a href="#features" className="text-white hover:text-accent transition-colors ">
                  Public liability
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-white hover:text-accent transition-colors ">
                  Employers liability
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors ">
                  Cyber insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors ">
                  Commercial Property
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors ">
                  Professional indemnity
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-6 underline underline-offset-8">Personal Insurance</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors  ">
                  Home insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors  ">
                  Travel insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors  ">
                  Caravan insurance
                </a>
              </li>
              
              
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white underline underline-offset-8 mb-6">Specialist Insurance</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  Charity insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  Taxi insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-accent transition-colors">
                  Faith Organizations
                </a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-card-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <p className="text-white text-sm">
                © {currentYear} Focus Insurance. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-white hover:text-accent transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
            
            <div className="text-sm text-white">
            
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;