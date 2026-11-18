import Image from "next/image"
import { ArrowDown, ArrowDownRight, ArrowUpRight } from "lucide-react"

import { profile } from "@/lib/data"
import { Reveal } from "./reveal"
import { SocialLinks } from "./social-links"

export function Hero() {
  return (
    <section
      id="profile"
      className="scroll-mt-20 px-5 pt-14 pb-16 sm:px-8 lg:px-12 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
        <div>
          <Reveal>
            <div className="relative inline-flex border border-ink bg-paper px-4 py-2 text-[12px] font-semibold sm:text-[13px]">
              {profile.greeting}
              <span
                aria-hidden="true"
                className="absolute -top-1 -left-1 size-2 bg-mint"
              />
              <span
                aria-hidden="true"
                className="absolute -top-1 -right-1 size-2 bg-mint"
              />
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -left-1 size-2 bg-mint"
              />
              <span
                aria-hidden="true"
                className="absolute -right-1 -bottom-1 size-2 bg-mint"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-9 text-[clamp(2.8rem,6.5vw,4rem)] leading-[1.03] font-bold tracking-[-0.04em]">
              {profile.headline.map((line, index) => (
                <span key={line} className="block">
                  {line}
                  {index < profile.headline.length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 max-w-lg text-[14px] leading-relaxed text-body sm:text-[15px]">
              {profile.intro}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap items-center gap-7">
              <a
                href="#contact"
                className="group inline-flex min-h-12 items-center gap-3 border-2 border-ink bg-ink px-6 py-3 text-[13px] font-bold text-paper shadow-[7px_7px_0_0_#1de9a0] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[4px_4px_0_0_#1de9a0] active:translate-x-[5px] active:translate-y-[5px] active:shadow-[2px_2px_0_0_#1de9a0]"
              >
                Get In Touch
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 text-mint transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#projects"
                className="group inline-flex min-h-12 items-center gap-2 text-[13px] font-bold text-ink transition-colors hover:text-body"
              >
                View projects
                <ArrowDownRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-200 group-hover:translate-y-0.5"
                />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-12 flex flex-wrap items-center gap-3 border-t-2 border-ink pt-6">
              <span className="mr-1 text-[12px] font-medium text-body">
                Find me on:
              </span>
              <SocialLinks />
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.16} className="relative">
          <div className="relative mx-auto w-full max-w-[400px] lg:ml-auto">
            <span
              aria-hidden="true"
              className="absolute -bottom-7 -left-8 z-0 h-20 w-44 -rotate-[18deg] rounded-full border-[14px] border-mint"
            />
            <span
              aria-hidden="true"
              className="absolute -right-8 -bottom-10 z-0 h-28 w-52 rotate-[28deg] rounded-full border-[18px] border-mint"
            />

            <div className="relative z-10 aspect-[4/5] w-full bg-paper shadow-[9px_9px_0_0_var(--hard-shadow)]">
              <Image
                src="/bonanza-hero.png"
                alt="Bonanza Narayan"
                fill
                priority
                sizes="(max-width: 1024px) 85vw, 36vw"
                className="object-cover object-top"
              />
            </div>

            <svg
              aria-hidden="true"
              viewBox="0 0 34 26"
              className="absolute -top-6 -left-5 z-20 size-9 fill-none stroke-ink stroke-[3] sm:size-11"
            >
              <path
                d="M2 23 8 3l7 16 7-16 9 20"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="absolute -bottom-8 -left-8 z-20 size-24 sm:size-28">
              <div className="absolute inset-0 rounded-full border border-ink bg-paper" />
              <div
                className="badge-ring absolute inset-0"
                style={{ transformOrigin: "center" }}
              >
                <svg
                  viewBox="0 0 100 100"
                  className="size-full"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="scroll-badge-path"
                      d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <text className="fill-ink text-[9px] font-bold tracking-[0.14em] uppercase">
                    <textPath href="#scroll-badge-path">
                      Scroll down · explore more about me ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <span className="absolute inset-0 grid place-items-center">
                <ArrowDown aria-hidden="true" className="size-5 text-ink" />
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
