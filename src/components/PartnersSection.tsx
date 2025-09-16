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
    <section className="py-20 bg-tech-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium border-primary/30">
            Strategic Partnerships
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            Proud Partner with <span className="text-primary">Industry Leaders</span>
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16 max-w-4xl mx-auto">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-gradient-card border border-border/30 rounded-lg hover:shadow-medium hover:shadow-green/20 hover:scale-110 transition-all duration-300 min-w-[140px]"
            >
              <span className="text-xl font-bold text-white/80 group-hover:text-primary transition-colors">
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