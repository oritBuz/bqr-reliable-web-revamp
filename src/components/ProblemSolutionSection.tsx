import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react";

const ProblemSolutionSection = () => {
  const comparisons = [
    {
      problem: "Electrical Overstress (EOS) missed by DRC",
      solution: "Real-time stress analysis during schematic design"
    },
    {
      problem: "No Failure Found (NFF) due to under-the-hood design flaws",
      solution: "Synthelyzer pinpoints hidden design errors"
    },
    {
      problem: "Component derating not calculated accurately",
      solution: "Automated derating and optimal sizing suggestions"
    },
    {
      problem: "Expensive rework after prototype stage",
      solution: "Early detection = fewer iterations, faster design"
    },
    {
      problem: "Compliance challenges in critical industries",
      solution: "Built-in reports for MTBF, FMECA, safety standards"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        {/* Headline + Hook */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            70% of Failures Are Preventable — If You Catch Them Early
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Field failures often begin with undetected stress or design flaws. Standard DRC tools can't see the full picture. 
            BQR's tools do—right from your schematic.
          </p>
        </div>

        {/* Unified Comparison Table */}
        <div className="max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="p-4 text-left bg-destructive/10 border-r">
                        <div className="flex items-center gap-2">
                          <AlertCircle className="w-5 h-5 text-destructive" />
                          <span className="font-bold text-base">The Hidden Problems</span>
                        </div>
                      </th>
                      <th className="p-4 text-left bg-primary/10">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary" />
                          <span className="font-bold text-base">BQR's Solution</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisons.map((item, index) => (
                      <tr key={index} className="border-b last:border-b-0 hover:bg-muted/20 transition-colors">
                        <td className="p-4 border-r bg-destructive/5">
                          <div className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-sm">{item.problem}</p>
                          </div>
                        </td>
                        <td className="p-4 bg-primary/5">
                          <div className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <p className="text-sm">{item.solution}</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Visual Statistic Callout */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="border-2 border-primary bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <TrendingUp className="w-10 h-10 text-primary" />
                <h3 className="text-4xl md:text-5xl font-bold text-primary">70%</h3>
              </div>
              <p className="text-xl font-semibold mb-2">
                of electronic failures can be detected early — but most teams catch them too late.
              </p>
              <p className="text-muted-foreground">
                Start validating during design, not after production.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Start with smarter validation.</h3>
          <p className="text-lg text-muted-foreground mb-6">
            BQR's ECAD-integrated tools let you design with confidence—run schematic-level stress simulations, 
            select the right components, and reduce costly surprises down the road.
          </p>
          <Button size="lg" className="font-semibold">
            Explore BQR Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
