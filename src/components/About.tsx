import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Smartphone, Wallet, Zap } from "lucide-react";

export function About() {
  const specialties = [
    {
      title: "Mobile Development",
      description: "Building cross-platform mobile applications using React Native and native iOS development.",
      icon: <Smartphone className="h-5 w-5" />
    },{
      title: "Agronomy",
      description: "Supports agronomists and farmers in monitoring crop health, field conditions, scouting, sampling, and agricultural field activities.",
      icon: <Smartphone className="h-5 w-5" />
    },
    {
      title: "FinTech Solutions",
      description: "Specialized in financial technology applications with secure payment processing and transactions.",
      icon: <Wallet className="h-5 w-5" />
    },
    {
      title: "Performance Optimization",
      description: "Creating fast, responsive applications with optimized code and efficient resource usage.",
      icon: <Zap className="h-5 w-5" />
    },
    {
      title: "Clean Architecture",
      description: "Implementing maintainable code structures with modern design patterns and best practices.",
      icon: <Code className="h-5 w-5" />
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-heading font-bold tracking-tight">
          About Me
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          Application Development Module Lead and Mobile Application Developer with 6+ years of experience in maintaining, enhancing, and supporting cross-platform mobile applications for Android and iOS.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border border-border/50 bg-card/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-xl font-heading">Professional Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Strong hands-on experience with React Native, JavaScript, Expo, React Context, REST APIs, Axios, Google Maps, GPS-based functionality, and mobile UI development, with experience across agriculture/agronomy and financial technology domains.
            </p>
            <p>
              Experienced in working on existing production applications through enhancements, bug fixing, debugging, code review, pull-request review, refactoring, and quality improvements. Comfortable working within layered application architectures, collaborating with development, management, and client/customer stakeholders, and using AI-assisted development for coding, debugging, refactoring, test cases, documentation, and code review.
            </p>
            <p>
              Adept at working with Git-based version control systems such as GitHub, GitLab, and Bitbucket, and known for delivering high-quality, scalable solutions within deadlines. A quick learner and result-driven professional, committed to continuous growth and leveraging modern technologies to enhance mobile app experiences.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              <Badge variant="secondary">React Native</Badge>
               <Badge variant="secondary">Agronomy</Badge>
              <Badge variant="secondary">FinTech</Badge>
              <Badge variant="secondary">Cross-Platform</Badge>
              <Badge variant="secondary">Mobile UI/UX</Badge>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          {specialties.map((specialty, index) => (
            <Card key={index} className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    {specialty.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-medium mb-1">{specialty.title}</h3>
                    <p className="text-sm text-muted-foreground">{specialty.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
