import { LinkedInIcon, GitHubIcon } from "@/components/social-icons"
import { links } from "@/lib/content"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-serif text-lg text-foreground">Humberto Guzmán</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Technical Program Management, AI Products, and Digital Transformation
          </p>
          <p className="mt-4 text-sm text-muted-foreground">© {year} Humberto Guzmán</p>
        </div>

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
    </footer>
  )
}
