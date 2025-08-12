import { Badge } from "@/components/ui/badge";

const IndustriesSection = () => {
  const industries = [
    "Electronics", "Defense", "Aerospace", "Automotive",
    "Energy", "Telecom", "Semiconductors", "Cyber",
    "Steel", "Medical", "Oil & Gas", "Rail",
    "HLS", "Naval", "Water", "Power"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Industry Expertise
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Cross-Industry <span className="text-primary">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
            We collaborate with a diverse range of industries, offering tailored solutions to meet the unique challenges and requirements of each sector, including:
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index}
                className="group p-4 text-center bg-gradient-to-br from-card to-light-gray border border-border rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300"
              >
                <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;