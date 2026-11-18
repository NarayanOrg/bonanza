import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Marquee } from "@/components/marquee"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="overflow-x-clip">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>
    </>
  )
}
