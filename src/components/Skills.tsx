import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Flame, Layers, Smartphone, Wrench } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      id: "languages",
      label: "Languages",
      icon: <Code className="h-4 w-4" />,
      skills: ["JavaScript", "Swift", "TypeScript"]
    },
    {
      id: "frameworks",
      label: "Frameworks",
      icon: <Layers className="h-4 w-4" />,
      skills: ["React Native", "Redux", "iOS SDK"]
    },
    {
      id: "tools",
      label: "Tools",
      icon: <Wrench className="h-4 w-4" />,
      skills: ["GitHub", "BitBucket", "GitLab", "Jira", "Postman"]
    },
    {
      id: "technologies",
      label: "Technologies",
      icon: <Flame className="h-4 w-4" />,
      skills: ["Firebase", "Push Notifications", "In-App Purchases", "Crashlytics", "Analytics"]
    },
    {
      id: "platforms",
      label: "Platforms",
      icon: <Smartphone className="h-4 w-4" />,
      skills: ["iOS", "Android", "Cross-Platform"]
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-heading font-bold tracking-tight">
          Technical Skills
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          Specialized in mobile application development with expertise in React Native, iOS, and financial technology solutions.
        </p>
      </div>

      <Tabs defaultValue="languages" className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-8 bg-muted/50 p-1">
          {skillCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="flex items-center gap-2 data-[state=active]:bg-background"
            >
              {category.icon}
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Card className="border border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm font-medium bg-secondary hover:bg-secondary/80"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}