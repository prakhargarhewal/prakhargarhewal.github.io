import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-heading font-bold tracking-tight">
          Education
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          Academic background and professional certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <GraduationCap className="h-5 w-5 text-primary" />
              <Badge variant="outline">Bachelor's Degree</Badge>
            </div>
            <CardTitle className="text-xl font-heading">
              G. H. Raisoni College Of Engineering
            </CardTitle>
            <div className="text-muted-foreground">
              Bachelor of Engineering in Electronics and Telecommunication Engineering
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              <span>June 2015 – June 2019</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-4 w-4 text-primary" />
              <span className="font-medium">8.07/10 CGPA</span>
            </div>
            <div className="mt-4 text-sm text-muted-foreground">
              <p>Nagpur, Maharashtra, India</p>
            </div>
          </CardContent>
        </Card>

        <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-2 mb-2">
              <Award className="h-5 w-5 text-primary" />
              <Badge variant="outline">Certification</Badge>
            </div>
            <CardTitle className="text-xl font-heading">
              iOS App Development
            </CardTitle>
            <div className="text-muted-foreground">
              Professional Certification
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Comprehensive training in iOS application development, covering Swift programming, 
                UIKit, Core Data, and App Store deployment processes.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Swift</Badge>
                <Badge variant="secondary">UIKit</Badge>
                <Badge variant="secondary">Core Data</Badge>
                <Badge variant="secondary">App Store</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}