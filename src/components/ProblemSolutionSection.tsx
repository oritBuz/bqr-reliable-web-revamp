import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, TrendingUp, Zap, Target, DollarSign, Clock, Shield, Lightbulb } from "lucide-react";

const ProblemSolutionSection = () => {
  const failureData = [
    { percentage: "38%", cause: "No Trouble/Failure Found", phase: "Development phase (simulation)" },
    { percentage: "30%", cause: "Electrical Over Stress", phase: "Development phase (simulation)" },
    { percentage: "2%", cause: "Electro-Static Discharge", phase: "Qualification & Manufacturing" },
    { percentage: "20%", cause: "Fabrication", phase: "Qualification & Manufacturing" },
    { percentage: "7%", cause: "Assembly Issues", phase: "Qualification & Manufacturing" },
    { percentage: "3%", cause: "Prototype Testing", phase: "Qualification & Manufacturing" }
  ];

  const insights = [
    { label: "Global MRO spending", value: "$700B+ annually", icon: DollarSign },
    { label: "Unplanned downtime losses", value: "~ $1.41 per year across industries", icon: TrendingUp },
    { label: "Late maintenance planning", value: "Increases OPEX by 20–40%, reduces availability by 5–15%", icon: AlertCircle }
  ];

  const solutions = [
    { text: "Eliminate 70% of field failures by detecting design errors early in the schematic capture", icon: Target },
    { text: "Provide real-time assistance to EE in component spec selection and design improvements", icon: Lightbulb },
    { text: "Comply with the Shift Left RAMS analysis model", icon: CheckCircle2 },
    { text: "Shorten the design cycle", icon: Clock },
    { text: "Save time and Money", icon: DollarSign },
    { text: "Capture design knowledge for AI tools", icon: Shield }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-muted/10 to-background">
      <div className="container mx-auto px-4">
        {/* Main Headline */}
        <div className="max-w-6xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            From Design to Downtime:{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Solving Root-Cause Failures and Improving System Reliability
            </span>
          </h2>
        </div>

        {/* Context Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 mb-16">
          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">The Challenge</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                70% of field failures can be detectable during the development stage. 
                Current DRC (Design Rules Check) tools are insufficient in preventing these issues.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-lg transition-all duration-300 hover-scale">
            <CardContent className="p-6">
              <div className="flex items-start gap-3 mb-3">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <h3 className="text-lg font-bold">The Opportunity</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Late maintenance planning and reactive reliability management are major cost drivers. 
                Proactive RAMS and Shift-Left design deliver measurable gains.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Data Section */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 mb-16">
          {/* Failure Analysis Table */}
          <Card className="border-2 hover:shadow-xl transition-all duration-300">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-destructive/20 to-destructive/10 p-6 border-b">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Zap className="w-6 h-6 text-destructive" />
                  Failure Root Causes
                </h3>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {failureData.map((item, index) => (
                    <div key={index} className="group hover:bg-muted/30 p-3 rounded-lg transition-all duration-200">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="text-3xl font-bold text-destructive min-w-[60px]">{item.percentage}</div>
                        <div className="flex-1">
                          <p className="font-semibold">{item.cause}</p>
                          <p className="text-sm text-muted-foreground">{item.phase}</p>
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-destructive to-destructive/70 h-full transition-all duration-500 group-hover:opacity-100 opacity-80"
                          style={{ width: item.percentage }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Impact & Solution Cards */}
          <div className="space-y-6">
            {/* Impact Metrics */}
            <Card className="border-2 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-0">
                <div className="bg-gradient-to-r from-primary/20 to-accent/10 p-6 border-b">
                  <h3 className="text-xl font-bold flex items-center gap-2">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    Impact & Opportunity
                  </h3>
                </div>
                <div className="p-6 space-y-4">
                  {insights.map((insight, index) => {
                    const Icon = insight.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                        <Icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-sm text-muted-foreground mb-1">{insight.label}</p>
                          <p className="font-bold text-lg">{insight.value}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* BQR Solution */}
            <Card className="border-2 border-primary/30 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  BQR Solution Highlights
                </h3>
                <ul className="space-y-3">
                  {solutions.slice(0, 3).map((solution, index) => {
                    const Icon = solution.icon;
                    return (
                      <li key={index} className="flex items-start gap-3 group">
                        <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                        <span className="text-sm leading-relaxed">{solution.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Complete Solution Overview */}
        <div className="max-w-6xl mx-auto mb-16">
          <Card className="border-2 border-primary/30 bg-gradient-to-br from-background to-primary/5 hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-3">Complete BQR Solution</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to eliminating design failures and improving system reliability
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon;
                  return (
                    <div 
                      key={index} 
                      className="flex items-start gap-3 p-4 rounded-lg bg-background/50 hover:bg-background border border-border/50 hover:border-primary/30 transition-all duration-200 hover-scale"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <p className="text-sm leading-relaxed pt-1">{solution.text}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-2xl md:text-3xl font-bold text-primary">70%</span>
              <span className="text-sm text-muted-foreground">failures preventable</span>
            </div>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Start with smarter validation</h3>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            BQR's ECAD-integrated tools let you design with confidence—run schematic-level stress simulations, 
            select the right components, and reduce costly surprises down the road.
          </p>
          <Button size="lg" className="font-semibold text-base px-8 hover-scale">
            Explore BQR Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
