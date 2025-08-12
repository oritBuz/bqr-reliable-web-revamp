import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ServicesSection = () => {
  const services = [
    {
      title: "Electronic Design Automation",
      description: "Advanced EDA tools for comprehensive electronic system design and optimization with integrated reliability analysis.",
      features: ["Circuit Simulation", "Design Rule Checking", "Automated Routing", "Component Libraries"],
      badge: "Core Platform"
    },
    {
      title: "MTBF Prediction Software",
      description: "Industry-leading mean time between failures analysis using advanced statistical models and real-world data.",
      features: ["Statistical Analysis", "Failure Rate Models", "Reliability Prediction", "Risk Assessment"],
      badge: "Predictive Analytics"
    },
    {
      title: "PCB Reliability Analysis",
      description: "Comprehensive printed circuit board reliability testing and validation with thermal and stress analysis.",
      features: ["Thermal Analysis", "Stress Testing", "Component Aging", "Environmental Factors"],
      badge: "Hardware Validation"
    },
    {
      title: "Automated Design Verification",
      description: "Intelligent automation for design verification workflows, reducing manual testing and improving accuracy.",
      features: ["Automated Testing", "Design Rules", "Compliance Checking", "Report Generation"],
      badge: "Automation"
    }
  ];

  return (
    <section className="py-20 bg-light-gray/50">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Our Solutions
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Comprehensive Reliability Engineering
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From concept to production, our integrated suite of tools ensures your electronic designs 
            meet the highest reliability standards in the industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 bg-card border-border">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge variant="secondary" className="text-primary font-medium">
                        {service.badge}
                      </Badge>
                      <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <div className="w-12 h-12 bg-gradient-to-br from-tech-blue to-tech-blue-dark rounded-lg flex items-center justify-center">
                      <div className="w-6 h-6 bg-background rounded"></div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-medium text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
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