import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const EngineeringServicesSection = () => {
  const services = [
    {
      title: "MTBF, Stress, De-rating, and Schematic Review",
      description: "Get expert evaluation for single or multi-board systems.",
      icon: "🔧"
    },
    {
      title: "RAMS Analysis", 
      description: "Analyze system Reliability, Availability, Maintainability, and Safety.",
      icon: "🛡️"
    },
    {
      title: "Lifecycle Cost Optimization",
      description: "Optimize maintenance and cost across your system's lifecycle.",
      icon: "📊"
    },
    {
      title: "Reliability Education & Training",
      description: "Practical training for engineering teams and tool adoption.",
      icon: "🎓"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle-dark">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary font-medium border-primary/30">
            Professional Services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Engineering <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our reliability experts help you meet the toughest standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-tech-blue-medium/40 border border-border/30 shadow-medium shadow-green/10 hover:shadow-strong hover:shadow-green/20 transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline" className="text-white border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringServicesSection;