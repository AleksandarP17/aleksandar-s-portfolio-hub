import { Github, Linkedin } from "lucide-react";
import { CONTACT } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8">
        <p className="min-w-0 text-sm text-muted-foreground">
          © 2026 Aleksandar Perošević. All rights reserved.
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <a
            href={CONTACT.github}
            aria-label="GitHub profile"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
          >
            <Github size={16} />
          </a>
          <a
            href={CONTACT.linkedin}
            aria-label="LinkedIn profile"
            className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:text-foreground"
          >
            <Linkedin size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
