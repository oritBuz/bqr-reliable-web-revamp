import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Our civil aircraft department demands more apmOptimizer-MSG3 licenses for a major modification on the SAAB 340 and SAAB 2000 aircraft programs. The apmOptimizer-MSG3 will provide valuable assistance concerning the updates and establishment of new MSG3 analysis.",
      author: "S.V",
      role: "Component Engineer",
      company: "SAAB"
    },
    {
      quote: "FiXtress® helps us accelerate our efforts to perform automated design reviews, electrical stress analysis, and reliability prediction before PCB layout and manufacturing. It is both a time-saver and a productivity enhancer.",
      author: "Dr. L. J.",
      role: "Principal Reliability Engineer", 
      company: "AWS"
    }
  ];

  return (
    <section className="py-20 bg-tech-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="outline" className="text-primary font-medium border-primary/30">
            Client Testimonials
          </Badge>
          <h2 className="text-3xl lg:text-5xl font-bold text-white">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gradient-card border border-border/30 shadow-medium shadow-green/10 hover:shadow-strong hover:shadow-green/20 transition-all duration-300">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <blockquote className="text-lg text-white/80 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-bright-green-dark rounded-full flex items-center justify-center shadow-green">
                      <span className="text-primary-foreground font-semibold text-lg">
                        {testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.author}</div>
                      <div className="text-sm text-white/70">{testimonial.role}</div>
                      <div className="text-sm font-medium text-primary">{testimonial.company}</div>
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

export default TestimonialsSection;