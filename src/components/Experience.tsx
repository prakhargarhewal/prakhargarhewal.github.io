import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      title: "Application Development Module Lead",
      company: "Telus Digital",
      period: "Nov 2025 – Present",
      location: "Bengaluru, India",
      responsibilities: [
        "Maintain and enhance an existing React Native/Expo mobile application for Android and iOS.",
        "Investigate, debug, and resolve defects across UI, API integration, data flow, GPS/location, maps, and performance-related areas.",
        "Perform code reviews and pull-request reviews with focus on code quality, maintainability, consistency, and development standards.",
        "Refactor existing code where required to improve readability, maintainability, and application stability.",
        "Provide technical guidance and training to team members when required and support knowledge sharing.",
        "Collaborate with management and client/customer stakeholders on requirements, technical discussions, progress, and issue resolution.",
        "Prepare monthly development reports and participate in working-hours and timesheet coordination.",
        "Leverage AI-assisted development for coding, debugging, refactoring, test-case creation, documentation, and code-review support.",
      ]
    },
    {
      title: "Software Engineer",
      company: "Bankai InfoTech Pvt Ltd",
      period: "May 2023 – Nov 2025",
      location: "Bengaluru, India",
      responsibilities: [
        "Designed and developed analytical user interface for financial technology application for iOS and android application.",
        "Provided technical guidance to junior developers, fostering a positive team environment and promoting professional growth.",
        "Enhanced user experience with intuitive interface design and responsive Mobile applications used content management system.",
        "Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.",
        "Maintained existing software systems by identifying and correcting software defects.",
        "Developed reusable components that significantly reduced development effort on multiple projects in iOS and android Applications."
      ]
    },
    {
      title: "Executive Mobile Developer",
      company: "Econote Technology Pvt Ltd",
      period: "Sept 2022 – May 2023",
      location: "Bengaluru, India",
      responsibilities: [
        "Involved in implementation of iPhone and Android app using React Native.",
        "Presented final app to product management.",
        "Provide support and implement for bugs and known issues reported by QA.",
        "Developed, designed application and created E-book store with reading, writing and sketching features.",
        "Used Visual Studio, React-Native(JavaScript) to develop cross platform mobile applications for Android and iOS smartphones."
      ]
    },
    {
      title: "Software Engineer",
      company: "Data Template InfoTech Pvt Ltd",
      period: "Jan 2020 – Sept 2022",
      location: "Bengaluru, India",
      responsibilities: [
        "Performed technical design and implementation of complex Apps.",
        "Reviewed client requirements and designs for technical feasibility.",
        "Collaborated with the team to translate client requirements into implementable user stories.",
        "Improved product quality through code reviews and collaboration with QA.",
        "Developed and launched apps on the App Store."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="space-y-4 mb-10">
        <h2 className="text-3xl font-heading font-bold tracking-tight">
          Professional Experience
        </h2>
        <p className="text-muted-foreground max-w-3xl">
          Over 6+ years of experience building cross-platform mobile applications with a focus on financial technology and Agronomy.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="overflow-hidden border border-border/50 bg-card/50 backdrop-blur-sm">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <CardTitle className="text-xl font-heading flex items-center gap-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    {exp.title}
                  </CardTitle>
                  <div className="text-lg font-medium text-muted-foreground">
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                  <Badge variant="outline" className="ml-2">
                    {exp.location}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-muted-foreground">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="mr-2 mt-1 text-primary">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
