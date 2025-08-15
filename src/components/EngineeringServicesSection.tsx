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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Professional Services
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Engineering <span className="text-primary">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our reliability experts help you meet the toughest standards.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border shadow-medium hover:shadow-strong transition-all duration-300 group hover:scale-105">
              <CardContent className="p-8 space-y-6">
                <div className="text-center space-y-4">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
                
                <div className="flex justify-center">
                  <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
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