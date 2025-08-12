import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-light-gray to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-tech-blue to-tech-blue-dark text-primary-foreground border-0 shadow-strong">
            <CardContent className="p-12 text-center space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-primary-foreground/20 text-primary-foreground border-primary-foreground/30">
                  Ready to Get Started?
                </Badge>
                <h2 className="text-3xl lg:text-5xl font-bold">
                  Transform Your Design Process Today
                </h2>
                <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
                  Join industry leaders who trust BQR for their reliability engineering needs. 
                  Start your free trial and experience the difference.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                  Schedule Demo
                </Button>
              </div>
              
              <div className="grid sm:grid-cols-3 gap-8 mt-12 pt-8 border-t border-primary-foreground/20">
                <div className="space-y-2">
                  <h4 className="font-semibold">Contact Sales</h4>
                  <p className="text-primary-foreground/80">+1 (555) 123-4567</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Technical Support</h4>
                  <p className="text-primary-foreground/80">support@bqr.com</p>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold">Business Hours</h4>
                  <p className="text-primary-foreground/80">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;