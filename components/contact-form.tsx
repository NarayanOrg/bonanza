"use client"

import { useState, type FormEvent } from "react"
import { LoaderCircle, Mail, Send } from "lucide-react"

import { contact } from "@/lib/data"

type SubmitStatus = "idle" | "sending" | "success" | "error"

export function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const [feedback, setFeedback] = useState("")

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    if (!form.reportValidity()) return

    const data = new FormData(form)
    const name = String(data.get("name") ?? "").trim()
    const email = String(data.get("email") ?? "").trim()
    const message = String(data.get("message") ?? "").trim()

    setStatus("sending")
    setFeedback("")

    try {
      const response = await fetch(contact.formAjaxEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _replyto: email,
          _template: "table",
          _honey: "",
        }),
      })

      const result = (await response.json().catch(() => null)) as {
        message?: string
      } | null

      if (!response.ok) {
        throw new Error(result?.message ?? "Form submission failed")
      }

      form.reset()
      setStatus("success")
      setFeedback(
        "Thanks — your message is on its way. I'll get back to you soon."
      )
    } catch {
      setStatus("error")
      setFeedback(
        "Something went wrong. Please try again or email me directly."
      )
    }
  }

  return (
    <form
      aria-labelledby="contact-form-heading"
      action={contact.formEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      className="border-2 border-ink bg-paper p-6 shadow-[7px_7px_0_0_var(--hard-shadow)] sm:p-8"
    >
      <div className="flex items-center gap-4 border-b-2 border-ink pb-4">
        <span className="grid size-8 shrink-0 place-items-center border-2 border-ink bg-mint text-on-mint">
          <Mail aria-hidden="true" className="size-4" />
        </span>
        <h3
          id="contact-form-heading"
          className="text-xl font-bold tracking-tight uppercase sm:text-2xl"
        >
          Send a message
        </h3>
        <span className="ml-auto text-[11px] font-medium tracking-wider text-body uppercase">
          Quick reply
        </span>
      </div>

      <input type="hidden" name="_subject" value="New portfolio message" />
      <input type="hidden" name="_template" value="table" />
      <input
        autoComplete="off"
        className="hidden"
        name="_honey"
        tabIndex={-1}
        type="text"
      />

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <div>
          <label
            htmlFor="contact-name"
            className="text-[11px] font-bold tracking-widest uppercase"
          >
            Name <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            required
            maxLength={100}
            placeholder="Your name"
            className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm placeholder:text-body/70 focus:border-mint"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-[11px] font-bold tracking-widest uppercase"
          >
            Email <span aria-hidden="true">*</span>
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={150}
            placeholder="you@example.com"
            className="mt-2 w-full border-2 border-ink bg-paper px-4 py-3 text-sm placeholder:text-body/70 focus:border-mint"
          />
        </div>
      </div>

      <div className="mt-5">
        <label
          htmlFor="contact-message"
          className="text-[11px] font-bold tracking-widest uppercase"
        >
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          maxLength={2000}
          placeholder="Tell me what you're building..."
          className="mt-2 w-full resize-y border-2 border-ink bg-paper px-4 py-3 text-sm placeholder:text-body/70 focus:border-mint"
        />
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-4">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-12 items-center gap-2 border-2 border-ink bg-ink px-6 py-3 text-[13px] font-bold text-paper shadow-[5px_5px_0_0_#1de9a0] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[3px_3px_0_0_#1de9a0] active:translate-x-0.75 active:translate-y-0.75 active:shadow-[2px_2px_0_0_#1de9a0] disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? (
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
          ) : (
            <Send aria-hidden="true" className="size-4" />
          )}
          {status === "sending" ? "Sending..." : "Send message"}
        </button>
        <p
          role="status"
          aria-live="polite"
          className="min-h-5 border-l-4 border-mint pl-3 text-[13px] text-body"
        >
          {feedback}
        </p>
      </div>
    </form>
  )
}
