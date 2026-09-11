import { Braces, Palette, Wrench, Plug } from "lucide-react";
import { SKILL_GROUPS } from "@/data/portfolio";
import { Section } from "./Section";

const GROUP_ICONS: Record<string, typeof Braces> = {
  Frontend: Braces,
  Styling: Palette,
  Tools: Wrench,
  Other: Plug,
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Technologies I work with"
      description="Tools and technologies I use while building projects and continuing to learn frontend development."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {SKILL_GROUPS.map((group) => {
          const Icon = GROUP_ICONS[group.title] ?? Braces;
          return (
            <div
              key={group.title}
              className="rounded-2xl border border-border bg-card/60 p-6 shadow-card transition-colors duration-300 hover:border-primary/60"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-secondary text-accent">
                  <Icon size={16} />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li key={skill}>
                    <span className="inline-block cursor-default rounded-full border border-border bg-secondary/70 px-4 py-2 text-sm font-medium text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/15 hover:text-foreground">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
