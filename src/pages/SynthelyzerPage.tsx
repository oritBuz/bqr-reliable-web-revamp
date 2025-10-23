import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  CheckCircle2, 
  TrendingUp, 
  Target, 
  Clock, 
  DollarSign, 
  Shield, 
  Lightbulb,
  Activity,
  Database,
  Cpu,
  Gauge,
  FileText,
  Link2,
  Layers,
  BarChart3,
  Settings,
  Maximize2,
  Weight
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const SynthelyzerPage = () => {
  const keyFeatures = [
    { text: "Performs detailed electrical stress derating analysis for components", icon: Activity },
    { text: "Utilizes cutting-edge AI technology for robust design solutions", icon: Cpu },
    { text: "Seamless integration with Altium, OrCAD, and Siemens EDA", icon: Link2 },
    { text: "Automated circuit stress calculators to accelerate design", icon: Gauge },
    { text: "Provides thermal resistance data for 3D thermal simulations", icon: BarChart3 },
    { text: "Identifies EOS violations with Pareto analysis and detailed reports", icon: FileText },
    { text: "Recommends design adjustments to resolve overstress issues", icon: Lightbulb },
    { text: "Implements derating guidelines for optimal performance", icon: Settings },
    { text: "Automates FMEA analysis to assess PCB-level impacts", icon: Database },
    { text: "Predicts MTBF based on Telcordia 3 and Mil-217-F2 standards", icon: TrendingUp },
    { text: "Features AI-driven PCB components library", icon: Cpu },
    { text: "Integrates reliability data across all RAMS analyses", icon: Layers }
  ];

  const mainBenefits = [
    { 
      title: "Generates MTBF Reports",
      description: "Generates MTBF reports based on real stress, improving MTBF outcomes.",
      icon: FileText
    },
    { 
      title: "Identifies Overstressed Components",
      description: "Identifies overstressed components, providing actionable recommendations for adjustments.",
      icon: Target
    },
    { 
      title: "Ensures Robust Products",
      description: "Ensures more robust products by pinpointing and resolving potential failure points, enhancing PCB quality.",
      icon: Shield
    },
    { 
      title: "Utilizes Central Design Data",
      description: "Utilizes design data as a central repository for reliable information.",
      icon: Database
    },
    { 
      title: "Real-Time Synchronization",
      description: "Ensures real-time synchronization between electronic design modifications and BQR's automated analysis solutions.",
      icon: Activity
    },
    { 
      title: "Comprehensive Traceability",
      description: "Achieves comprehensive traceability by linking analyses to the latest schematic version.",
      icon: Link2
    }
  ];

  const additionalBenefits = [
    {
      title: "Control PCB Weight",
      description: "Offers comprehensive component stress analysis, helping identify components that contribute to excess weight. Make informed decisions about alternatives that maintain performance while reducing overall PCB weight.",
      icon: Weight
    },
    {
      title: "Maximize Space Efficiency",
      description: "Conducts thorough analyses to identify components that may take up more space than necessary. Optimize component selection early for better space utilization and more compact designs.",
      icon: Maximize2
    },
    {
      title: "Tackle PCB Density Challenges",
      description: "Addresses PCB density challenges by identifying over-designed components. Design change recommendations ensure your PCB is both compact and functional.",
      icon: Layers
    },
    {
      title: "Reduce Component Costs",
      description: "Identifies overstressed components while providing insights into cost-effective alternatives. Lead to significant savings while maintaining quality and reliability.",
      icon: DollarSign
    }
  ];

  const howItWorks = [
    {
      title: "PCB-Focused Analysis",
      description: "Specializes in PCB analysis—focuses on analyzing individual components within the PCB rather than traditional system-level tools.",
      icon: Cpu
    },
    {
      title: "Seamless Integration",
      description: "Works effortlessly with leading ECAD software to facilitate in-workflow analysis and real-time updates.",
      icon: Link2
    },
    {
      title: "Detailed Insights",
      description: "Enables thorough analysis of potential failure points, ensuring precise predictions for PCB reliability.",
      icon: Lightbulb
    }
  ];

  const additionalFeatures = [
    {
      category: "Data Collection & Analysis",
      items: [
        "Collects detailed PCB components data for CircuitHawk™ and fiXtress®",
        "Performs PCB component derating lite",
        "Calculates PCB MTBF based on MIL HDBK 217F2 and Telcordia 3",
        "Generates Net name and Interface Control Document (ICD)",
        "Assigns components to functions for FMEA/FMECA"
      ]
    },
    {
      category: "Traceability",
      items: [
        "Integrated Analysis Alignment: Seamlessly aligns analysis with design updates",
        "Efficient Decision Support: Direct connection between analyses and real-time ECAD modifications"
      ]
    },
    {
      category: "Enhanced Reliability",
      items: [
        "Seamless integration ensures modifications are reflected accurately",
        "Clear traceability streamlines decision-making processes",
        "Provides more realistic MTBF estimations based on real component stress",
        "Identifies potential failure points for robust and reliable products"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-background via-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Synthelyzer™ ECAD Plugin:{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Automate Electrical Stress Analysis & MTBF Prediction
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Real-time analysis during board design within Altium, OrCAD, and Siemens EDA
              </p>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive tools for electrical stress analysis and reliability prediction
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {keyFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-2 hover:shadow-lg transition-all duration-300 hover-scale"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <p className="text-sm leading-relaxed pt-2">{feature.text}</p>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Core Benefits
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Streamline design, save time, and enhance product reliability
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {mainBenefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover-scale bg-gradient-to-br from-background to-primary/5"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                          <h3 className="text-lg font-bold">{benefit.title}</h3>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {benefit.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Additional Benefits Grid */}
              <Card className="border-2 border-primary/30 bg-gradient-to-br from-background to-accent/5 hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">Additional Benefits</h3>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                      Optimize every aspect of your PCB design process
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {additionalBenefits.map((benefit, index) => {
                      const Icon = benefit.icon;
                      return (
                        <div 
                          key={index} 
                          className="p-6 rounded-lg bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 transition-all duration-200 hover-scale"
                        >
                          <div className="flex items-start gap-4 mb-3">
                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-primary" />
                            </div>
                            <h4 className="text-xl font-bold pt-2">{benefit.title}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/10">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Seamless integration with your existing workflow
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {howItWorks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-2 hover:shadow-xl transition-all duration-300 hover-scale"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Features Section */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Features</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive capabilities for complete design analysis
                </p>
              </div>

              <div className="space-y-6">
                {additionalFeatures.map((section, index) => (
                  <Card 
                    key={index} 
                    className="border-2 hover:shadow-lg transition-all duration-300"
                  >
                    <CardContent className="p-0">
                      <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-6 border-b">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <CheckCircle2 className="w-6 h-6 text-primary" />
                          {section.category}
                        </h3>
                      </div>
                      <div className="p-6">
                        <ul className="space-y-3">
                          {section.items.map((item, itemIndex) => (
                            <li key={itemIndex} className="flex items-start gap-3 group">
                              <Zap className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                              <span className="text-sm leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-6">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                  <Cpu className="w-6 h-6 text-primary" />
                  <span className="text-2xl md:text-3xl font-bold text-primary">AI-Powered</span>
                  <span className="text-sm text-muted-foreground">design automation</span>
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your PCB Design Process?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Synthelyzer™ integrates directly into your ECAD workflow, providing real-time stress analysis 
                and reliability predictions. Design with confidence and eliminate costly failures before they happen.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-semibold text-base px-8 hover-scale">
                  Get Started with Synthelyzer™
                </Button>
                <Button size="lg" variant="outline" className="font-semibold text-base px-8 hover-scale">
                  Watch Demo Video
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SynthelyzerPage;
