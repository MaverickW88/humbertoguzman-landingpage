import { Mail, MapPin, ArrowUpRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { LinkedInIcon, GitHubIcon } from "@/components/social-icons"
import { profile, links } from "@/lib/content"

export function Contact() {
  return (
    <section id="contact" className="border-b border-border/70">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Contact" title="Let us talk about the problem you are solving." />

          <div>
            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              I am open to roles and collaborations across AI product management, transformation,
              product operations, and strategic technical program management.
            </p>

            <div className="mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex w-fit items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <Mail className="size-5 text-primary" />
                {profile.email}
              </a>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <LinkedInIcon className="size-5 text-primary" />
                LinkedIn
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </a>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-3 text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
              >
                <GitHubIcon className="size-5 text-primary" />
                GitHub
                <ArrowUpRight className="size-4 text-muted-foreground" />
              </a>
              <p className="inline-flex items-center gap-3 text-muted-foreground">
                <MapPin className="size-5 text-primary" />
                {profile.location}
              </p>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">{profile.availability}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
