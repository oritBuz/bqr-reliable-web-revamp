import { Badge } from "@/components/ui/badge";

const ClientLogosSection = () => {
  const clients = [
    "Philips",
    "NASA", 
    "AWS",
    "NVIDIA",
    "Intel",
    "Boeing",
    "Siemens",
    "Lockheed Martin",
    "Samsung",
    "IBM",
    "Tesla",
    "General Electric"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium">
            Our Clients
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-foreground">
            Trusted by <span className="text-primary">Leading Innovators</span> Worldwide
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div 
              key={index}
              className="group flex items-center justify-center p-6 bg-card/60 backdrop-blur-sm border border-border/50 rounded-lg hover:shadow-medium hover:scale-105 transition-all duration-300 min-h-[80px]"
            >
              <span className="text-lg font-semibold text-muted-foreground group-hover:text-primary transition-colors text-center">
                {client}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;