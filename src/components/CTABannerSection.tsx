import { Button } from "@/components/ui/button";

const CTABannerSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground">
            Need Help Choosing the Right Tool?
          </h2>
          <h3 className="text-2xl lg:text-3xl font-semibold text-primary-foreground/90">
            Let's Talk.
          </h3>
          <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-3xl mx-auto">
            We'll help you find the best solution for your design and reliability challenges.
          </p>
          
          <div className="flex justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="text-lg px-12 py-6 bg-white text-primary hover:bg-white/90 font-semibold"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABannerSection;