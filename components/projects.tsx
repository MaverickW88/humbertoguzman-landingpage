import { ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/content"

export function Projects() {
  return (
    <section id="projects" className="border-b border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading
          eyebrow="Selected projects"
          title="Independent and academic product work."
        />
        <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
          These are independent and academic projects, not employment. They show how I move from
          problem definition to a working product.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="flex flex-col rounded-xl border border-border bg-background p-6"
            >
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-primary">
                  {project.label}
                </span>
                {project.status && (
                  <span className="rounded-full border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    {project.status}
                  </span>
                )}
              </div>

              <h3 className="mt-4 font-serif text-2xl text-foreground">{project.title}</h3>
              <p className="mt-3 leading-relaxed text-muted-foreground text-pretty">
                {project.description}
              </p>

              {project.details && (
                <ul className="mt-4 space-y-2">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              {project.needsReview && (
                // FACTUAL REVIEW: confirm the details of this experiment before publishing.
                <p className="mt-4 text-sm italic text-muted-foreground">
                  Details are being finalized.
                </p>
              )}

              {project.actions.length > 0 && (
                <div className="mt-6 flex flex-col gap-2 pt-2">
                  {project.actions.map((action) => (
                    <a
                      key={action.href}
                      href={action.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      {action.label}
                      <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
