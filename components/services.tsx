import { ArrowUpRight } from "lucide-react"

import { stack } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Icon } from "./icon"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-20 border-t-2 border-ink px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="03" title="Services" note="What I bring" />

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {stack.map((group, index) => (
            <Reveal key={group.index} delay={index * 0.08}>
              <article className="flex h-full flex-col border-2 border-ink bg-paper p-6 shadow-[7px_7px_0_0_var(--hard-shadow)] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 sm:p-7">
                <span className="grid size-9 place-items-center border-2 border-ink bg-mint text-[11px] font-bold text-on-mint">
                  {group.index}
                </span>
                <h3 className="mt-6 text-xl font-bold tracking-tight">
                  {group.title}
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-body">
                  {group.description}
                </p>
                <ul className="mt-7 flex flex-wrap gap-2 border-t-2 border-ink pt-5">
                  {group.tags.map((tag) => {
                    const content = (
                      <>
                        <Icon
                          name={tag.icon}
                          className={cn(
                            "size-4",
                            tag.icon === "inngest" && "w-6"
                          )}
                        />
                        <span>{tag.label}</span>
                        {tag.href ? (
                          <ArrowUpRight
                            aria-hidden="true"
                            className="size-3 text-body opacity-0 transition-opacity group-hover/tag:opacity-100"
                          />
                        ) : null}
                      </>
                    )

                    return (
                      <li key={tag.label}>
                        {tag.href ? (
                          <a
                            href={tag.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group/tag inline-flex min-h-8 items-center gap-1.5 border border-ink bg-paper px-2.5 py-1 text-[11px] font-semibold transition-colors hover:bg-mint hover:text-on-mint"
                          >
                            {content}
                            <span className="sr-only">Opens in a new tab</span>
                          </a>
                        ) : (
                          <span className="inline-flex min-h-8 items-center gap-1.5 border border-line bg-paper px-2.5 py-1 text-[11px] font-semibold text-body">
                            {content}
                          </span>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
