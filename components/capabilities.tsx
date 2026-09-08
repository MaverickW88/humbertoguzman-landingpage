import { SectionHeading } from "@/components/section-heading"
import { capabilities, tools } from "@/lib/content"

export function Capabilities() {
  return (
    <section id="capabilities" className="border-b border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Capabilities" title="What I bring to a program." />

        <div className="mt-12 grid gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Tools and concepts
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-background px-3 py-1 text-sm text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
