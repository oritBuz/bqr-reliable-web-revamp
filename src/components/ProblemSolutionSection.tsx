import { Card, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CheckCircle2 } from "lucide-react";

const ProblemSolutionSection = () => {
  const failureData = [
    { percentage: "38%", cause: "No Trouble/Failure Found", type: "NFF/NFT", phase: "Development phase (simulation)" },
    { percentage: "30%", cause: "Electrical Over Stress", type: "EOS", phase: "Development phase (simulation)" },
    { percentage: "2%", cause: "Electro-Static Discharge", type: "ESD", phase: "Development phase (simulation)" },
    { percentage: "20%", cause: "Poor Manufacturing / Inadequate Soldering", type: "FAB", phase: "Qualification & Manufacturing" },
    { percentage: "7%", cause: "Assembly Issues", type: "Assembly", phase: "Qualification & Manufacturing" },
    { percentage: "3%", cause: "Prototype Testing", type: "Testing", phase: "Qualification & Manufacturing" },
  ];

  const benefits = [
    "Reduce electrical stress affecting design performance",
    "Improve PCB life, MTBF, reliability and robustness",
    "Shorten the design cycle significantly",
    "Save substantial time and money",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Problem Statement */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The Hidden Problem in Electronic Design
          </h2>
          <p className="text-lg text-muted-foreground mb-2">
            Studies show that <span className="text-primary font-semibold">70% of field failures</span> can be detected during the development stage.
          </p>
          <p className="text-muted-foreground">
            However, current DRC (Design Rules Check) tools are insufficient in preventing these issues.
          </p>
        </div>

        {/* Failure Analysis Table */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Root Cause Analysis of Field Failures</h3>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Percentage</TableHead>
                      <TableHead>Root Cause</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Phase</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {failureData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-semibold text-primary">{item.percentage}</TableCell>
                        <TableCell>{item.cause}</TableCell>
                        <TableCell className="font-mono text-sm">{item.type}</TableCell>
                        <TableCell className="text-sm text-muted-foreground">{item.phase}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">How BQR Solves This</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-primary/20">
                <CardContent className="p-6 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-foreground">{benefit}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolutionSection;
