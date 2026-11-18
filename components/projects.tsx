import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { projects } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-subtle px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="04" title="Projects" note="Selected work" />

        <div className="mt-12 grid gap-8">
          {projects.map((project, index) => {
            const imageOnRight = index % 2 === 1

            return (
              <Reveal key={project.name} delay={index * 0.06}>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "group grid overflow-hidden border-2 border-ink bg-paper shadow-[7px_7px_0_0_#1de9a0] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0_0_#1de9a0] md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]",
                    imageOnRight &&
                      "md:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
                  )}
                >
                  <div
                    className={cn(
                      "relative aspect-[16/9] overflow-hidden border-b-2 border-ink bg-paper md:aspect-auto md:min-h-[320px] md:border-b-0",
                      imageOnRight
                        ? "md:order-2 md:border-l-2"
                        : "md:order-1 md:border-r-2"
                    )}
                  >
                    <Image
                      src={project.ogImage}
                      alt={`${project.name} preview`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div
                    className={cn(
                      "flex flex-col p-6 sm:p-8",
                      imageOnRight ? "md:order-1" : "md:order-2"
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Image
                          src={project.favicon}
                          alt=""
                          width={32}
                          height={32}
                          className="size-8 shrink-0 object-contain"
                        />
                        <span className="text-[11px] font-bold tracking-widest text-body uppercase">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-5 text-ink transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <h3 className="mt-6 text-2xl font-bold tracking-tight">
                      {project.name}
                    </h3>
                    <p className="mt-3 flex-1 text-[14px] leading-relaxed text-body">
                      {project.summary}
                    </p>

                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="border border-line px-2.5 py-1 text-[11px] font-semibold text-body"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <span className="mt-5 inline-flex items-center gap-2 text-[11px] font-bold tracking-wider text-body uppercase transition-colors group-hover:text-ink">
                      Visit site
                      <ArrowUpRight aria-hidden="true" className="size-3.5" />
                    </span>
                    <span className="sr-only">Opens in a new tab</span>
                  </div>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
