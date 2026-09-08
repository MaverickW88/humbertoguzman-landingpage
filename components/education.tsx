import { SectionHeading } from "@/components/section-heading"
import { education } from "@/lib/content"

export function Education() {
  return (
    <section id="education" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Education" title="A foundation across business and engineering." />
          <ul className="divide-y divide-border">
            {education.map((item) => (
              <li key={item.degree} className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{item.status}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
