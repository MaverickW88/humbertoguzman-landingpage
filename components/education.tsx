import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { education } from "@/lib/content"

export function Education() {
  return (
    <section id="education" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Education" title="A foundation across business and engineering." />
          <div>
          <ul className="divide-y divide-border">
            {education.map((item) => (
              <li key={item.degree} className="flex flex-col gap-2 py-5 first:pt-0 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
                <div>
                  <h3 className="text-foreground">{item.degree}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.school}</p>
                  {/* Optional note, e.g. completed microcertificate */}
                  {item.note && <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>}
                </div>
                <span className="shrink-0 text-sm text-muted-foreground">{item.status}</span>
              </li>
            ))}
          </ul>

          {/* MBA photos: diploma and graduation day (UPM) */}
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            MBA, Universidad Politécnica de Madrid
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/mba-diploma.jpg"
                  alt="Humberto Guzmán holding his International MBA diploma from Universidad Politécnica de Madrid"
                  fill
                  sizes="(max-width: 640px) 90vw, 28rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                Receiving the International MBA diploma, Universidad Politécnica de Madrid.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-[3/2] w-full">
                <Image
                  src="/images/mba-graduation-group.jpg"
                  alt="MBA graduates wearing blue sashes posing together in front of historic machinery"
                  fill
                  sizes="(max-width: 640px) 90vw, 28rem"
                  className="object-cover"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                MBA graduation day with classmates.
              </figcaption>
            </figure>
          </div>

          {/* Mechatronics Engineering photos (Tecnológico de Monterrey) */}
          <p className="mt-10 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
            Mechatronics Engineering, Tecnológico de Monterrey
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <figure className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/tec-mechatronics-graduation-group.jpg"
                  alt="Four Mechatronics Engineering graduates holding their diplomas in front of the Tecnológico de Monterrey campus"
                  fill
                  sizes="(max-width: 640px) 90vw, 18rem"
                  className="object-cover object-center"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                Graduation day with classmates.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/tec-mechatronics-degree.jpg"
                  alt="Humberto Guzmán in a blue suit and bow tie pointing at his degree folder"
                  fill
                  sizes="(max-width: 640px) 90vw, 18rem"
                  className="object-cover object-top"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                With my degree folder.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-lg border border-border bg-muted">
              <div className="relative aspect-square w-full">
                <Image
                  src="/images/tec-mechatronics-signing.jpg"
                  alt="Humberto Guzmán signing graduation documents in front of a Tecnológico de Monterrey backdrop"
                  fill
                  sizes="(max-width: 640px) 90vw, 18rem"
                  className="object-cover object-[55%_50%]"
                />
              </div>
              <figcaption className="border-t border-border px-4 py-2.5 text-sm text-muted-foreground">
                Signing graduation paperwork.
              </figcaption>
            </figure>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
