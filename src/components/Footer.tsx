import { Button } from "@/components/ui/button";
import { Github, Linkedin, LogOut, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-lg font-heading font-bold text-foreground mb-2">
              <span className="text-primary">Prakhar</span> Garhewal
            </div>
            <p className="text-sm text-muted-foreground max-w-md">
              Mobile App Developer specializing in React Native and iOS development with a focus on financial technology solutions.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
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
                  <LogOut className="h-5 w-5" />
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
            </div>
            <div className="text-sm text-muted-foreground">
              © {currentYear} Prakhar Garhewal. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}