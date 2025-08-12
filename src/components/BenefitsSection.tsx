import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const BenefitsSection = () => {
  const benefits = [
    {
      title: "Reduced Time-to-Market",
      description: "Accelerate your design cycles with automated verification and predictive analysis tools.",
      metric: "60%",
      metricLabel: "Faster Development"
    },
    {
      title: "Improved Reliability",
      description: "Achieve higher product reliability with comprehensive MTBF prediction and analysis.",
      metric: "99.9%",
      metricLabel: "Accuracy Rate"
    },
    {
      title: "Cost Optimization",
      description: "Reduce development costs and minimize field failures with early-stage reliability testing.",
      metric: "40%",
      metricLabel: "Cost Reduction"
    },
    {
      title: "Compliance Assurance",
      description: "Meet industry standards and regulatory requirements with automated compliance checking.",
      metric: "100%",
      metricLabel: "Compliance Rate"
    }
  ];

  const features = [
    "Real-time collaboration tools",
    "Advanced statistical modeling",
    "Comprehensive reporting suite",
    "Integration with popular EDA tools",
    "Cloud-based deployment options",
    "24/7 technical support"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="text-primary font-medium">
                Why Choose BQR
              </Badge>
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
                Drive Innovation with 
                <span className="text-primary"> Reliable Engineering</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Our comprehensive platform combines cutting-edge technology with proven methodologies 
                to deliver unmatched reliability engineering solutions for the modern electronics industry.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Platform Features:</h3>
              <div className="grid grid-cols-1 gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="bg-gradient-to-br from-card to-light-gray border-border hover:shadow-medium transition-all duration-300">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-4xl font-bold text-primary">{benefit.metric}</div>
                    <div className="text-sm text-muted-foreground font-medium">{benefit.metricLabel}</div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-foreground">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;