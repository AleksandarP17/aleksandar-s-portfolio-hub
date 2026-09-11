import type { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
};

/** Reusable section wrapper with a consistent heading style. */
export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  const reveal = useReveal<HTMLDivElement>();

  return (
    <section id={id} className="scroll-mt-24 border-t border-border/60 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div ref={reveal.ref} className={reveal.className}>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          {description ? (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {description}
            </p>
          ) : null}
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </section>
  );
}
