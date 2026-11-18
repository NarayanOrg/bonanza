"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { profile, sections } from "@/lib/data"
import { ThemeToggle } from "./theme-toggle"

export function SiteHeader() {
  const [active, setActive] = useState<string>(sections[0].id)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: [0, 0.25, 0.5, 1] }
    )

    for (const section of sections) {
      const element = document.getElementById(section.id)
      if (element) observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-3.5 sm:px-8">
        <a href="#profile" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full bg-mint text-on-mint">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-5 fill-none"
            >
              <path
                d="M8 4 5 20M16 4l-3 16"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </span>
          <span className="text-base font-bold tracking-tight">
            {profile.name.split(" ")[0]}
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={active === section.id ? "location" : undefined}
                  className={cn(
                    "flex items-center gap-2 text-[13px] font-medium transition-colors",
                    active === section.id
                      ? "text-ink"
                      : "text-body hover:text-ink"
                  )}
                >
                  {active === section.id ? (
                    <span
                      aria-hidden="true"
                      className="size-1.5 rounded-full bg-mint ring-1 ring-ink"
                    />
                  ) : null}
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href="#contact"
            className="border-2 border-ink bg-paper px-3 py-2 text-[12px] font-bold shadow-[3px_3px_0_0_var(--hard-shadow)] md:hidden"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
