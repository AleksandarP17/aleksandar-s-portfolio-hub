import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/portfolio";

/** Decorative preview area shown at the top of each project card. */
function PreviewArea({ name }: { name: string }) {
  return (
    <div
      aria-hidden="true"
      className="relative flex h-40 items-end overflow-hidden rounded-xl border border-border bg-secondary/50 p-4"
    >
      <span className="glow-blob left-1/3 top-[-40%] h-40 w-40 bg-primary" />
      <div className="relative w-full space-y-2">
        <span className="block h-2 w-1/3 rounded-full bg-gradient-primary opacity-80" />
        <span className="block h-2 w-2/3 rounded-full bg-border" />
        <span className="block h-2 w-1/2 rounded-full bg-border" />
      </div>
      <span className="absolute left-4 top-4 text-xs font-medium text-muted-foreground">
        {name}
      </span>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-border bg-card/60 p-5 shadow-card transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/70 hover:shadow-glow">
      <PreviewArea name={project.name} />

      <h3 className="mt-6 text-lg font-semibold">{project.name}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <li
            key={tech}
            className="rounded-full border border-border bg-secondary/70 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>

      <a
        href={project.url}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-secondary/50 px-4 py-2.5 text-sm font-semibold transition-all duration-300 hover:border-primary hover:bg-primary/15"
      >
        View Project
        <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5" />
      </a>
    </article>
  );
}
