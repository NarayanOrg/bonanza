import { approach, profile } from "@/lib/data"
import { Reveal } from "./reveal"
import { SectionHeading } from "./section-heading"

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading index="02" title="About" note="A little context" />

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="border-l-4 border-mint pl-6 sm:pl-8">
              <p className="text-xl leading-relaxed font-semibold tracking-tight sm:text-2xl lg:text-3xl">
                {approach.quote}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="border-2 border-ink bg-paper p-6 shadow-[8px_8px_0_0_#1de9a0] sm:p-8">
              <p className="text-[11px] font-bold tracking-widest text-body uppercase">
                At a glance
              </p>
              <dl className="mt-6 space-y-5">
                {profile.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="flex items-baseline justify-between gap-4 border-b border-line pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="text-[13px] text-body">{fact.label}</dt>
                    <dd className="text-sm font-bold">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
