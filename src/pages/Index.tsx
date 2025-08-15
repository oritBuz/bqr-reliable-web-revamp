import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ClientLogosSection from "@/components/ClientLogosSection";
import EngineeringServicesSection from "@/components/EngineeringServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustriesSection from "@/components/IndustriesSection";
import NumbersSection from "@/components/NumbersSection";
import PartnersSection from "@/components/PartnersSection";
import CTABannerSection from "@/components/CTABannerSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <ClientLogosSection />
        <BenefitsSection />
        <EngineeringServicesSection />
        <TestimonialsSection />
        <IndustriesSection />
        <NumbersSection />
        <PartnersSection />
        <CTABannerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
