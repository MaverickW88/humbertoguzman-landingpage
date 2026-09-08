import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { experience, earlierExperience } from "@/lib/content"

export function Experience() {
  return (
    <section id="experience" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <SectionHeading eyebrow="Experience" title="Leading complex, cross-functional programs." />

        <figure className="mt-12 overflow-hidden rounded-xl border border-border bg-muted">
          <div className="relative aspect-[16/9] w-full sm:aspect-[2.2/1]">
            <Image
              src="/images/technical-presentation.jpg"
              alt="Humberto Guzmán presenting a product development overview to an audience"
              fill
              sizes="(max-width: 768px) 90vw, 72rem"
              className="object-cover"
            />
          </div>
          <figcaption className="border-t border-border px-5 py-3 text-sm text-muted-foreground">
            Explaining how product development connects engineering, software, and delivery across teams.
          </figcaption>
        </figure>

        <div className="mt-14 space-y-14">
          {experience.map((role) => (
            <article key={role.role + role.period} className="grid gap-4 md:grid-cols-[0.85fr_1.15fr]">
              <div>
                <h3 className="font-serif text-xl text-foreground">{role.role}</h3>
                {role.company && <p className="mt-1 text-foreground">{role.company}</p>}
                <p className="mt-1 text-sm text-muted-foreground">{role.period}</p>
                {role.location && <p className="text-sm text-muted-foreground">{role.location}</p>}
              </div>
              <div>
                <ul className="space-y-3">
                  {role.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 leading-relaxed text-muted-foreground">
                      <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {role.role === "Design & Release Engineer" && (
                  <figure className="mt-6 overflow-hidden rounded-lg border border-border bg-muted">
                    <div className="relative aspect-[16/10] w-full">
                      <Image
                        src="/images/mustang-mach-e.jpg"
                        alt="Humberto Guzmán in a safety vest beside a Ford Mustang Mach-E at a plant"
                        fill
                        sizes="(max-width: 768px) 90vw, 40rem"
                        className="object-cover object-top"
                      />
                    </div>
                    <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                      On site during the Mustang Mach-E component work.
                    </figcaption>
                  </figure>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-border pt-8">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Earlier experience
          </p>
          <ul className="mt-4 flex flex-wrap gap-x-8 gap-y-2">
            {earlierExperience.map((item) => (
              <li key={item.role + item.company} className="text-foreground">
                {item.role}
                <span className="text-muted-foreground">, {item.company}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
