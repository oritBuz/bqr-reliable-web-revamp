import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const NumbersSection = () => {
  const metrics = [
    {
      number: "90%",
      label: "Faster Design Errors",
      description: "Accelerated error detection"
    },
    {
      number: "1:100",
      label: "ROI",
      description: "Return on investment"
    },
    {
      number: "5",
      label: "Patented Software Solutions",
      description: "Innovative technologies"
    },
    {
      number: "30+",
      label: "Years of Experience",
      description: "Industry expertise"
    },
    {
      number: "4500",
      label: "Projects",
      description: "Successful implementations"
    }
  ];

  return (
    <section className="py-20 bg-tech-gray">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium border-primary/30">
            Our Track Record
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            BQR in <span className="text-primary">Numbers</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card border border-border/30 shadow-medium shadow-green/10 hover:shadow-strong hover:shadow-green/20 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-4xl lg:text-5xl font-bold text-primary drop-shadow-lg">
                  {metric.number}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">
                    {metric.label}
                  </div>
                  <div className="text-xs text-white/70 mt-1">
                    {metric.description}
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

export default NumbersSection;