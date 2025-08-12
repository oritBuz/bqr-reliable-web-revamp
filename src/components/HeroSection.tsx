import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center bg-gradient-to-br from-background via-light-gray to-secondary/30">
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      ></div>
      
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-primary font-medium">
                Industry-Leading Reliability Engineering Software
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                Advanced{" "}
                <span className="text-primary">Reliability Engineering</span>{" "}
                Software Solutions
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Comprehensive electronic design automation and MTBF prediction software for 
                PCB reliability analysis and automated design verification. Trusted by engineers worldwide.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6">
                Learn More
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Demo
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
            <Card className="p-8 bg-card/80 backdrop-blur-sm border shadow-strong">
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold text-foreground mb-2">
                    Start Your Analysis Today
                  </h3>
                  <p className="text-muted-foreground">
                    Join thousands of engineers optimizing reliability
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Companies</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">50K+</div>
                    <div className="text-sm text-muted-foreground">PCB Designs</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">99.9%</div>
                    <div className="text-sm text-muted-foreground">Accuracy</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">Support</div>
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