import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const products = [
    {
      title: "Synthelyzer™",
      subtitle: "ECAD Plugin",
      description: "Component De-rating & MTBF Prediction Plugin for Single PCB Design",
      details: "Stress De-rating Automation, Realistic MTBF Prediction, and Streamlining of Design Cycles for More Robust PCB Design.",
      icon: "🔧"
    },
    {
      title: "fiXtress®",
      subtitle: "AI-Powered Analysis",
      description: "Automated Derating, Advanced Thermal Analysis, and Accurate MTBF Prediction",
      details: "For Single and Multi-PCB Designs Powered by Patented AI Technology. Optimize PCB Design & Predict Component Lifespan with AI-powered De-rating, MTBF, Thermal & Stress Analysis.",
      icon: "🤖"
    },
    {
      title: "CircuitHawk™",
      subtitle: "Schematic Analysis",
      description: "Automated, AI-Powered Schematic Design Error-Detection for Multi-PCB Systems",
      details: "Precise Electrical Stress Simulation for Design Optimization, Detection of Errors in Schematic Designs, and Identification of Over-Stressed Components.",
      icon: "🦅"
    },
    {
      title: "CARE®",
      subtitle: "System Reliability",
      description: "Integrated Reliability, Availability, Maintainability & Safety Analyses",
      details: "For Early-Stage Design of Electronic Systems. Identify & Mitigate Design Risks with FMEA, Fault Trees, RBDs & Testability Analysis.",
      icon: "🛡️"
    },
    {
      title: "apmOptimizer®",
      subtitle: "Maintenance Optimization",
      description: "Maintenance & Logistics Optimization for Intricate Systems",
      details: "Optimize Maintenance & Costs with Life Cycle, Repair, Parts, Scheduling, P4M & Performance Analysis.",
      icon: "⚙️"
    }
  ];

  return (
    <section className="py-20 bg-light-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Our Product Suite
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Our <span className="text-primary">Product Suite</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Comprehensive suite of AI-powered software solutions for electronic design optimization, 
            reliability prediction, and automated verification. Streamline your design process with our innovative tools.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border shadow-medium hover:shadow-strong transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{product.icon}</div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="text-sm font-medium text-accent">
                      {product.subtitle}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 text-center">
                  <p className="text-lg font-medium text-foreground leading-relaxed">
                    {product.description}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.details}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <button className="px-6 py-2 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg hover:shadow-medium transition-all duration-300 font-medium">
                    Learn More
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;