import { Badge } from "@/components/ui/badge";

const PartnersSection = () => {
  const partners = [
    "Altair",
    "Altium", 
    "Digi-Key",
    "Mentor",
    "OrCad"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Strategic Partnerships
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Proud Partner with <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-gradient-to-br from-card to-light-gray border border-border rounded-lg hover:shadow-medium hover:scale-110 transition-all duration-300 min-w-[140px]"
            >
              <span className="text-xl font-bold text-muted-foreground group-hover:text-primary transition-colors">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;