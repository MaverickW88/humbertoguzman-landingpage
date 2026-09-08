import { SectionHeading } from "@/components/section-heading"
import { aboutParagraphs } from "@/lib/content"

export function About() {
  return (
    <section id="about" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="About" title="Connecting the dots between teams." />
          <div className="max-w-2xl space-y-5">
            {aboutParagraphs.map((paragraph, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "font-serif text-xl leading-relaxed text-foreground text-pretty"
                    : "leading-relaxed text-muted-foreground text-pretty"
                }
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
