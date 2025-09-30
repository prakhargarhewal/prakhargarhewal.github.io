import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold tracking-tight mb-4">
            <span className="text-primary">Prakhar</span> Garhewal
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-muted-foreground mb-6">
            Mobile App Developer | React Native | iOS | FinTech
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mb-8">
            Organized, collaborative, and detail-oriented Mobile Application
            Developer with 5+ years of experience in building cross-platform and
            financial technology applications.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild>
              <a href="#contact">
                Contact Me <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://linkedin.com/in/prakhar-garhewal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <a
                href="mailto:prakhargarhewal97@gmail.com"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="ghost" className="gap-2" asChild>
              <a href="/resume.pdf" download>
                <Download className="h-4 w-4" /> Resume
              </a>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-full bg-gradient-to-br from-primary/20 to-accent/20 p-2">
            <div className="bg-card rounded-full h-full w-full flex items-center justify-center">
              <div className="text-center p-8">
                <div className="font-mono text-sm text-muted-foreground mb-2">// developer.profile</div>
                <div className="font-heading text-xl font-bold mb-4">Mobile App Developer</div>
                <div className="space-y-2 text-sm">
                  <div className="font-mono"><span className="text-primary">const</span> experience = <span className="text-accent">5+</span>;</div>
                  <div className="font-mono"><span className="text-primary">const</span> specialty = <span className="text-accent">'FinTech'</span>;</div>
                  <div className="font-mono"><span className="text-primary">const</span> location = <span className="text-accent">'Bengaluru'</span>;</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}