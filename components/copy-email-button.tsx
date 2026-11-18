"use client"

import { useState } from "react"
import { Check, Copy } from "lucide-react"

export function CopyEmailButton({ email }: { email: string }) {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <button
      type="button"
      onClick={copyEmail}
      className="inline-flex min-h-11 items-center gap-2 border-2 border-ink bg-paper px-4 py-2.5 text-[12px] font-bold tracking-wide uppercase shadow-[5px_5px_0_0_#1de9a0] transition-all hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[3px_3px_0_0_#1de9a0] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[2px_2px_0_0_#1de9a0]"
    >
      {copied ? (
        <Check aria-hidden="true" className="size-4" />
      ) : (
        <Copy aria-hidden="true" className="size-4" />
      )}
      {copied ? "Copied" : "Copy email"}
      <span aria-live="polite" className="sr-only">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </button>
  )
}
