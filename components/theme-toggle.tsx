"use client"

import { useSyncExternalStore } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const subscribe = () => () => {}
const getClientSnapshot = () => true
const getServerSnapshot = () => false

export function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot
  )
  const { resolvedTheme, systemTheme, setTheme } = useTheme()

  const isDark = mounted && resolvedTheme === "dark"
  const actionLabel = mounted
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Toggle color theme"

  function toggleTheme() {
    const next = resolvedTheme === "dark" ? "light" : "dark"

    if (next === systemTheme) {
      setTheme("system")
    } else {
      setTheme(next)
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={actionLabel}
      title={actionLabel}
      className="inline-flex size-10 shrink-0 items-center justify-center border-2 border-ink bg-paper text-ink shadow-[3px_3px_0_0_var(--hard-shadow)] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-mint hover:text-on-mint hover:shadow-[1px_1px_0_0_var(--hard-shadow)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
    >
      {mounted ? (
        isDark ? (
          <Sun aria-hidden="true" className="size-[18px]" />
        ) : (
          <Moon aria-hidden="true" className="size-[18px]" />
        )
      ) : (
        <span aria-hidden="true" className="size-[18px]" />
      )}
    </button>
  )
}
