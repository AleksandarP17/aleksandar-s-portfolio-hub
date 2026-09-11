import { ArrowRight, Mail, Code2 } from "lucide-react";
import { scrollToSection } from "./Navbar";

/** Decorative, code-inspired browser window (purely visual). */
function CodeWindow() {
  const lines = [
    { indent: 0, width: "70%" },
    { indent: 1, width: "55%" },
    { indent: 2, width: "80%" },
    { indent: 2, width: "62%" },
    { indent: 1, width: "40%" },
    { indent: 0, width: "50%" },
  ];

  return (
    <div
      aria-hidden="true"
      className="relative w-full max-w-md rounded-2xl border border-border bg-card/80 p-5 shadow-card backdrop-blur"
    >
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-destructive/70" />
        <span className="h-3 w-3 rounded-full bg-accent/70" />
        <span className="h-3 w-3 rounded-full bg-success/70" />
        <span className="ml-3 text-xs text-muted-foreground">portfolio.jsx</span>
      </div>
      <div className="mt-5 space-y-3">
        {lines.map((line, i) => (
          <div key={i} className="flex items-center gap-3">
            <span className="w-4 text-right text-[10px] text-muted-foreground/60">{i + 1}</span>
            <span
              className="h-2.5 rounded-full bg-gradient-primary opacity-70"
              style={{ width: line.width, marginLeft: `${line.indent * 14}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 rounded-xl border border-border bg-secondary/60 px-4 py-3 text-xs text-muted-foreground">
        <Code2 size={14} className="text-accent" />
        React · JavaScript · HTML · CSS
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <span className="glow-blob left-[-10%] top-[-10%] h-72 w-72 bg-primary" />
      <span className="glow-blob right-[-5%] top-[10%] h-80 w-80 bg-accent" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Open to junior frontend opportunities
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            <span className="text-gradient">Aleksandar Perošević</span>
          </h1>
          <p className="mt-3 text-lg font-semibold text-accent sm:text-xl">
            Junior Frontend Developer
          </p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            I am a junior frontend developer focused on building responsive, user-friendly web
            applications using React, JavaScript, HTML and CSS. I enjoy turning ideas into clean and
            functional interfaces.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => scrollToSection("projects")}
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Projects
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-secondary"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <CodeWindow />
        </div>
      </div>
    </section>
  );
}
