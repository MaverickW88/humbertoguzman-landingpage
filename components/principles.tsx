import Image from "next/image"
import { SectionHeading } from "@/components/section-heading"
import { principles } from "@/lib/content"

export function Principles() {
  return (
    <section id="principles" className="border-b border-border/70 bg-secondary/40">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.15fr_0.85fr] md:items-start">
          <div>
            <SectionHeading eyebrow="How I work" title="A simple way of operating." />

            <dl className="mt-10 space-y-8">
              {principles.map((principle) => (
                <div key={principle.title} className="border-l-2 border-primary pl-5">
                  <dt className="font-serif text-xl text-foreground">{principle.title}</dt>
                  <dd className="mt-1 leading-relaxed text-muted-foreground text-pretty">
                    {principle.body}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-10 max-w-xl font-serif text-lg italic leading-relaxed text-foreground text-pretty">
              At its core, my job is helping engineers shine by giving them the structure and support
              they need to do their best work.
            </p>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="/images/ford-headquarters.jpg"
              alt="Humberto Guzmán standing in front of a corporate headquarters building"
              fill
              sizes="(max-width: 768px) 90vw, 32rem"
              className="object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
