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
import analysisExample from "@/assets/synthelyzer-analysis-example.jpg";

const SynthelyzerPage = () => {
  const keyFeatures = [
    { text: "Performs automatic electrical stress and derating analysis for every component", icon: Activity },
    { text: "Predicts MTBF using all standards available in the market", icon: TrendingUp },
    { text: "Detects EOS (Electrical Overstress) and provides design recommendations to prevent failures", icon: Shield },
    { text: "Integrates seamlessly with Altium®, OrCAD®, and Siemens-Xpedition for in‑workflow analysis", icon: Link2 },
    { text: "Generates stress and thermal metrics that feed directly into Thermal analysis tools, fiXtress® and CARE RAMS analyses", icon: BarChart3 },
    { text: "Provides an AI‑based component library with automatic parameter completion and components derating curve management", icon: Cpu },
    { text: "Maintains full traceability between schematic revisions and reliability analyses", icon: FileText }
  ];

  const mainBenefits = [
    { 
      title: "Design Efficiency",
      description: "Automates manual stress derating, saving engineering time and reducing human error.",
      icon: Clock
    },
    { 
      title: "Enhanced Reliability",
      description: "Identifies overstressed components early, preventing field failures and design rework.",
      icon: Shield
    },
    { 
      title: "Faster Development",
      description: "Shortens design‑validation loops by embedding analysis within ECAD tools.",
      icon: TrendingUp
    },
    { 
      title: "Cost Optimization",
      description: "Highlights over‑designed or overweight components and suggests cost‑effective alternatives.",
      icon: DollarSign
    },
    { 
      title: "Comprehensive Traceability",
      description: "Ensures every analysis is linked to the latest schematic for verification and validation.",
      icon: Link2
    }
  ];

  const additionalBenefits = [
    {
      title: "Reduces PCB Weight",
      description: "Identifies components contributing to excess mass, enabling informed decisions for lighter alternatives without compromising performance.",
      icon: Weight
    },
    {
      title: "Improves Layout Efficiency",
      description: "Reveals over‑sized or redundant parts before placement, optimizing component selection for better space utilization and more compact designs.",
      icon: Maximize2
    },
    {
      title: "Solves PCB Density Challenges",
      description: "Balances design compactness with thermal safety margins by identifying over-designed components and providing actionable recommendations.",
      icon: Layers
    },
    {
      title: "Supports Cost Reduction",
      description: "Enables intelligent component substitution without compromising reliability, leading to significant cost savings.",
      icon: DollarSign
    }
  ];

  const howItWorks = [
    {
      title: "Data Extraction",
      description: "Synthelyzer® reads schematic and BOM data directly from ECAD tools.",
      icon: Database
    },
    {
      title: "Stress & Thermal Analysis",
      description: "Electrical parameters and thermal profiles are evaluated using fiXtress® models.",
      icon: Activity
    },
    {
      title: "Reliability Evaluation",
      description: "MTBF, derating compliance, and FMECA links are automatically generated.",
      icon: CheckCircle2
    },
    {
      title: "Design Feedback",
      description: "Results and recommendations are synchronized back to ECAD for real‑time design improvement.",
      icon: Lightbulb
    }
  ];

  const integrationTools = [
    {
      name: "Synthelyzer®",
      description: "Extracts schematic and component data from ECAD tools",
      icon: Link2
    },
    {
      name: "fiXtress®",
      description: "Performs detailed electrical and thermal stress analysis",
      icon: Activity
    },
    {
      name: "CARE® Suite",
      description: "Consolidates RAMS results (FMEA, FTA, RBD, MTTR) for system‑level decision support",
      icon: Layers
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
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  Automate PCB Electrical Stress, Components Derating & MTBF Analysis
                </span>
                <br />
                Right Inside Your ECAD
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed mb-4">
                Synthelyzer® ECAD Plug‑In empowers design and reliability engineers to identify overstressed components, hidden design errors, optimize derating, and predict MTBF directly within Altium®, OrCAD® and Siemens-Xpedition.
              </p>
              <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                It connects design data with BQR's fiXtress® analytics engine and CARE RAMS suite, providing real‑time, Shift‑Left reliability insights that shorten design cycles and enhance product robustness.
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

        {/* Video Section */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  A Closer Look at Synthelyzer
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  See how Synthelyzer® transforms PCB design reliability
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Video Placeholder */}
                <Card className="border-2 border-primary/30 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="relative aspect-video bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                    <div className="relative z-10 text-center">
                      <div className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <svg className="w-10 h-10 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                      <p className="text-sm font-semibold text-muted-foreground">Watch Demo Video</p>
                    </div>
                  </div>
                </Card>

                {/* Analysis Example Image */}
                <Card className="border-2 border-primary/30 overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <img 
                      src={analysisExample} 
                      alt="Synthelyzer schematic analysis example showing stress ratings, MTBF predictions, and component recommendations" 
                      className="w-full h-full object-cover"
                    />
                  </CardContent>
                  <CardContent className="p-4 bg-gradient-to-br from-background to-primary/5">
                    <p className="text-sm text-muted-foreground text-center">
                      Real-time analysis with stress ratings, MTBF predictions, and design recommendations
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Main Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/10">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {howItWorks.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-2 hover:shadow-xl transition-all duration-300 hover-scale relative"
                    >
                      <CardContent className="p-6">
                        <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <span className="text-sm font-bold text-primary">{index + 1}</span>
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
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

        {/* Integration with BQR's Toolchain */}
        <section className="py-20 bg-gradient-to-b from-muted/10 to-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Integration with BQR's Toolchain
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                  Synthelyzer® operates as part of BQR's integrated CARE reliability ecosystem, providing a digital‑twin reliability workflow from schematic to maintenance optimization.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {integrationTools.map((tool, index) => {
                  const Icon = tool.icon;
                  return (
                    <Card 
                      key={index} 
                      className="border-2 border-primary/20 hover:shadow-xl transition-all duration-300 hover-scale bg-gradient-to-br from-background to-accent/5"
                    >
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">{tool.name}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Card className="mt-8 border-2 border-primary/30 bg-gradient-to-br from-background to-primary/5">
                <CardContent className="p-8 text-center">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Together, these tools provide a <span className="text-primary font-semibold">digital‑twin reliability workflow</span> from schematic to maintenance optimization.
                  </p>
                </CardContent>
              </Card>
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
                Get Started
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Experience the future of ECAD reliability. Watch the Synthelyzer® demo video or request a live presentation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="font-semibold text-base px-8 hover-scale">
                  Request Live Demo
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
