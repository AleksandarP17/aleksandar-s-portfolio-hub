import { BookOpen, Layers, Smartphone } from "lucide-react";
import { Section } from "./Section";

const highlights = [
  {
    icon: BookOpen,
    title: "Always learning",
    text: "Improving my JavaScript fundamentals and learning React through practical projects.",
  },
  {
    icon: Layers,
    title: "Clean interfaces",
    text: "I care about readable code, reusable components and consistent visual structure.",
  },
  {
    icon: Smartphone,
    title: "Responsive first",
    text: "Building layouts that stay clear and usable from small phones to large screens.",
  },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-border bg-card/70 p-7 shadow-card sm:p-9">
          <p className="text-base leading-relaxed text-muted-foreground">
            I am a beginner frontend developer who enjoys learning how modern web applications are
            built. I am currently improving my JavaScript skills and learning React while building
            practical projects that help me understand real-world frontend development.
          </p>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            My goal is to keep improving my skills, learn modern frontend technologies and create
            responsive, intuitive and visually clean user experiences.
          </p>
        </div>

        <ul className="grid gap-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group flex gap-4 rounded-2xl border border-border bg-card/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/70 hover:bg-card"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-secondary text-accent transition-colors group-hover:bg-primary/15">
                <Icon size={18} />
              </span>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold">{title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
