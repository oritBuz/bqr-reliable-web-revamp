import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import circuitHeroImage from "@/assets/circuit-hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-hero">
      <div className="absolute inset-0 bg-gradient-to-r from-tech-darker/90 to-tech-dark/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${circuitHeroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-medium border-primary/30">
                Industry-Leading Reliability Engineering Software
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                Design Electronics for{" "}
                <span className="text-primary drop-shadow-lg">Quality, Reliability, and Safety</span>
                {" "}— Right the First Time
              </h1>
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                Stop chasing failures after production. BQR's intelligent design analysis tools catch critical issues early, validate reliability upfront, and help you build robust, error-free electronics from day one.
                Reduce costly redesigns, accelerate time to market, and deliver products your customers can trust — with confidence and peace of mind.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Contact Us
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                Explore Our Solutions
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Industry-Leading Solutions</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span>Expert Support</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <Card className="p-8 bg-gradient-card/90 backdrop-blur-sm border border-border shadow-strong shadow-green/20">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-white mb-2">
                    Start Your Analysis Today
                  </h3>
                  <p className="text-white/80">
                    Join thousands of engineers optimizing reliability
                  </p>
                </div>
                
                 <div className="grid grid-cols-2 gap-4 text-center">
                   <div className="space-y-2">
                     <div className="text-3xl font-bold text-primary drop-shadow-lg shadow-green">500+</div>
                     <div className="text-sm text-white/80">Companies</div>
                   </div>
                   <div className="space-y-2">
                     <div className="text-3xl font-bold text-primary drop-shadow-lg shadow-green">50K+</div>
                     <div className="text-sm text-white/80">PCB Designs</div>
                   </div>
                   <div className="space-y-2">
                     <div className="text-3xl font-bold text-primary drop-shadow-lg shadow-green">99.9%</div>
                     <div className="text-sm text-white/80">Accuracy</div>
                   </div>
                   <div className="space-y-2">
                     <div className="text-3xl font-bold text-primary drop-shadow-lg shadow-green">24/7</div>
                     <div className="text-sm text-white/80">Support</div>
                   </div>
                 </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;