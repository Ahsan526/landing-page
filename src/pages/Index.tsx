import ContactSection from '@/components/ContactSection';
import FeaturesSection from '@/components/FeaturesSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import WhatIsSection from "@/components/WhatIsSection";

// import PartnersSection from '@/components/PartnersSection';

import CoverSection from '@/components/CoverSection';
import ReviewsSection from '@/components/ReviewsSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <FeaturesSection />
        <CoverSection/>
        <ReviewsSection />
        
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;