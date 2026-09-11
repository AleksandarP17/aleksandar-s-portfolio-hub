import { PROJECTS } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I have built"
      description="Practice projects I built while learning frontend development. Links are placeholders for now."
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </Section>
  );
}
