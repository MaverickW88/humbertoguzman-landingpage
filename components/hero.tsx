import Image from "next/image"
import { ArrowRight, Download, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { LinkedInIcon, GitHubIcon } from "@/components/social-icons"
import { profile, links } from "@/lib/content"

export function Hero() {
  return (
    <section id="top" className="border-b border-border/70">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-[1.15fr_0.85fr] md:py-28">
        <div>
          <p className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-primary">
            <MapPin className="size-3.5" />
            {profile.location}
          </p>

          <h1 className="mt-6 font-serif text-4xl leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
            {profile.heroMessage}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
            {profile.heroSupport}
          </p>

          <p className="mt-6 text-sm font-medium text-foreground">{profile.descriptor}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button size="lg" render={<a href="#projects" />}>
              View my work
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button size="lg" variant="outline" render={<a href={profile.cvPath} download />}>
              <Download data-icon="inline-start" />
              Download CV
            </Button>
            <div className="flex items-center gap-1">
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Humberto Guzmán on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <LinkedInIcon className="size-[18px]" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Humberto Guzmán on GitHub"
                className="inline-flex size-9 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <GitHubIcon className="size-[18px]" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-border bg-muted">
            <Image
              src="/images/humberto-portrait.jpg"
              alt="Black and white portrait of Humberto Guzmán with arms crossed"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 40vw"
              className="object-cover object-top grayscale"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
