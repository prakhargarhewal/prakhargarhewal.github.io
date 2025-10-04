import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ExternalLink, Code, Smartphone, Wallet, Book, Home, Utensils } from "lucide-react";

export function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Mobifin Unified",
      description: "A comprehensive mobile E-Wallet application with bill payment services, QR code transactions, and crypto wallet functionality.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      category: "fintech",
      icon: <Wallet className="h-5 w-5" />,
      features: [
        "Bill Payment and Top-up Services",
        "Dynamic QR Code for E-money transfers",
        "Cash-in and Cash-out service",
        "Content Management System integration",
        "Complete crypto wallet system"
      ]
    },
    {
      id: 2,
      title: "Econote Mobile Application",
      description: "An e-book platform with integrated reading, writing, and sketching capabilities.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      category: "education",
      icon: <Book className="h-5 w-5" />,
      features: [
        "PDF and EPUB reader integration",
        "Custom UI controls for reading, writing and sketching",
        "Firebase analytics and crashlytics",
        "Payment gateway using Razor Pay",
        "REST API integration"
      ]
    },
    {
      id: 3,
      title: "MyRoomie for iOS",
      description: "An application for managing student records and providing accommodation services.",
      technologies: ["React Native", "JavaScript", "REST API"],
      category: "lifestyle",
      icon: <Home className="h-5 w-5" />,
      features: [
        "User Interface for student management",
        "REST API integration",
        "OTP-based login system",
        "Apple App Store deployment",
        "Student record management"
      ]
    },
    {
      id: 4,
      title: "Pantry Cook Application",
      description: "A recipe search application that allows users to find recipes based on available ingredients.",
      technologies: ["React Native", "JavaScript", "Firebase"],
      category: "lifestyle",
      icon: <Utensils className="h-5 w-5" />,
      features: [
        "Ingredient-based recipe search",
        "Voice search functionality",
        "Item scanning for related recipes",
        "Custom Push Notifications using Firebase",
        "Cross-platform deployment (iOS and Android)"
      ]
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="h-4 w-4" /> },
    { id: "fintech", label: "FinTech", icon: <Wallet className="h-4 w-4" /> },
    { id: "education", label: "Education", icon: <Book className="h-4 w-4" /> },
    { id: "lifestyle", label: "Lifestyle", icon: <Smartphone className="h-4 w-4" /> }
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-heading font-bold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          A selection of mobile applications I've developed across various industries and technologies.
        </p>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="flex flex-wrap h-auto mb-8 bg-muted/50 p-1">
          {categories.map((category) => (
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

        <TabsContent value={activeTab} className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    {project.icon}
                    <Badge variant="secondary">{project.category}</Badge>
                  </div>
                  <CardTitle className="text-xl font-heading">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <Badge key={idx} variant="outline">{tech}</Badge>
                      ))}
                    </div>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 mt-1 text-primary">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="pt-2">
                  <Button variant="ghost" size="sm" className="gap-1">
                    <ExternalLink className="h-4 w-4" /> View Details
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
