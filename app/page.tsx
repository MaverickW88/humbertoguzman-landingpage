import { SiteNav } from "@/components/site-nav"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Capabilities } from "@/components/capabilities"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Principles } from "@/components/principles"
import { Contact } from "@/components/contact"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <Experience />
        <Projects />
        <Principles />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
