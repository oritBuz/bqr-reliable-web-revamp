import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, User, Building, MapPin, Send, Clock, Shield } from "lucide-react";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(20, "Phone must be less than 20 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  city: z.string().trim().min(1, "City & Country is required").max(100, "City & Country must be less than 100 characters"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
  updates: z.boolean().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="relative py-24 bg-gradient-to-br from-light-gray via-background to-secondary/20 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-tech-blue rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-blue-light rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-tech-blue/10 text-tech-blue border-tech-blue/20">
              Get In Touch
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-tech-blue to-tech-blue-dark bg-clip-text text-transparent">
              Hardware Design Improvement
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get the full report - Fill out the form below and our team will contact you
            </p>
          </div>

          {/* Main Card */}
          <Card className="border-0 shadow-strong overflow-hidden animate-scale-in">
            <div className="grid lg:grid-cols-3 gap-0">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 bg-gradient-to-br from-tech-blue to-tech-blue-dark p-8 lg:p-10 text-primary-foreground">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-primary-foreground/80 mb-8">
                  Our experts are ready to help you optimize your electronic designs
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-primary-foreground/80 text-sm">+1 (555) 123-4567</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-primary-foreground/80 text-sm">support@bqr.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="p-3 bg-primary-foreground/10 rounded-lg group-hover:bg-primary-foreground/20 transition-colors">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Business Hours</h4>
                      <p className="text-primary-foreground/80 text-sm">Mon-Fri, 9AM-6PM EST</p>
                    </div>
                  </div>
                </div>

                {/* Trust Indicators */}
                <div className="mt-12 pt-8 border-t border-primary-foreground/20">
                  <div className="flex items-center gap-3 text-sm">
                    <Shield className="w-5 h-5" />
                    <span>Your data is secure with us</span>
                  </div>
                  <p className="text-primary-foreground/70 text-xs mt-3">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>

              {/* Form Section */}
              <CardContent className="lg:col-span-2 p-8 lg:p-10">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-tech-blue" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        {...register("firstName")}
                        className={`transition-all ${errors.firstName ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="John"
                      />
                      {errors.firstName && (
                        <p className="text-sm text-destructive">{errors.firstName.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2">
                        <User className="w-4 h-4 text-tech-blue" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        {...register("lastName")}
                        className={`transition-all ${errors.lastName ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="Doe"
                      />
                      {errors.lastName && (
                        <p className="text-sm text-destructive">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Email and Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-tech-blue" />
                        Email *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        {...register("email")}
                        className={`transition-all ${errors.email ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="john.doe@company.com"
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive">{errors.email.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2">
                        <Phone className="w-4 h-4 text-tech-blue" />
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className={`transition-all ${errors.phone ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="+1 (555) 000-0000"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Company and Location */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="flex items-center gap-2">
                        <Building className="w-4 h-4 text-tech-blue" />
                        Company *
                      </Label>
                      <Input
                        id="company"
                        {...register("company")}
                        className={`transition-all ${errors.company ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="Your Company"
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive">{errors.company.message}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city" className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-tech-blue" />
                        City & Country *
                      </Label>
                      <Input
                        id="city"
                        {...register("city")}
                        className={`transition-all ${errors.city ? 'border-destructive' : 'focus:border-tech-blue'}`}
                        placeholder="New York, USA"
                      />
                      {errors.city && (
                        <p className="text-sm text-destructive">{errors.city.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">
                      What Are Your Electronic Design Needs? *
                    </Label>
                    <Textarea
                      id="message"
                      {...register("message")}
                      className={`min-h-[120px] transition-all ${errors.message ? 'border-destructive' : 'focus:border-tech-blue'}`}
                      placeholder="The types of analyses I'm interested in are... The BQR software solution I am interested in is... The size and complexity of our typical design projects are... We need to comply with industry standards such as...etc."
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Checkbox */}
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="updates"
                      {...register("updates")}
                      className="mt-1 w-4 h-4 rounded border-input"
                    />
                    <Label htmlFor="updates" className="text-sm text-muted-foreground cursor-pointer">
                      Receive Exclusive Industry Updates - Stay informed about the latest in reliability engineering
                    </Label>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-tech-blue to-tech-blue-dark hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;