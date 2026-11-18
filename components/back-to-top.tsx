"use client"

import { ArrowUp } from "lucide-react"

export function BackToTop() {
  function scrollToTop() {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="inline-flex min-h-10 items-center gap-2 border border-white/30 px-3 py-2 text-[11px] font-bold tracking-wider text-white uppercase transition-colors hover:border-mint hover:text-mint"
    >
      Back to top
      <ArrowUp aria-hidden="true" className="size-3.5" />
    </button>
  )
}
