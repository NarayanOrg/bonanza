import { ArrowUpRight } from "lucide-react"

import { channels, contact } from "@/lib/data"
import { BackToTop } from "./back-to-top"
import { ContactForm } from "./contact-form"
import { CopyEmailButton } from "./copy-email-button"
import { Icon } from "./icon"
import { Reveal } from "./reveal"
import { SocialLinks } from "./social-links"

export function Contact() {
  return (
    <section
      id="contact"
      className="scroll-mt-0 border-t-2 border-ink bg-paper"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <Reveal>
          <div className="flex items-center gap-4 border-b-2 border-ink pb-4">
            <span className="grid size-8 shrink-0 place-items-center border-2 border-ink bg-mint text-[11px] font-bold text-on-mint">
              05
            </span>
            <h2 className="text-xl font-bold tracking-tight uppercase sm:text-2xl">
              Contact
            </h2>
            <span className="ml-auto text-[11px] font-medium tracking-wider text-body uppercase">
              Let&apos;s talk
            </span>
          </div>

          <h3 className="mt-12 max-w-3xl text-[clamp(2.6rem,6vw,4.25rem)] leading-[1.02] font-bold tracking-[-0.04em]">
            Have something in mind?{" "}
            <span className="bg-mint px-2 text-on-mint">
              Let&apos;s build it.
            </span>
          </h3>
          <p className="mt-6 max-w-xl text-[14px] leading-relaxed text-body sm:text-[15px]">
            A product, a system to untangle, or just an idea worth talking
            through — my inbox is open.
          </p>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14 xl:gap-20">
          <Reveal>
            <p className="text-[11px] font-bold tracking-widest text-body uppercase">
              Or reach me directly
            </p>
            <address className="mt-6 grid gap-4 not-italic sm:grid-cols-2 lg:grid-cols-1">
              {channels.map((channel) => {
                const isExternal = channel.href.startsWith("http")

                return (
                  <a
                    key={channel.label}
                    href={channel.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex min-h-40 flex-col justify-between gap-6 border-2 border-ink bg-paper p-6 shadow-[7px_7px_0_0_var(--hard-shadow)] transition-all hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-[4px_4px_0_0_var(--hard-shadow)]"
                  >
                    <span className="flex items-center justify-between gap-3 text-[12px] font-bold tracking-widest uppercase">
                      {channel.label}
                      <span className="grid size-12 shrink-0 place-items-center border-2 border-ink text-on-mint transition-transform duration-200 group-hover:-rotate-6">
                        <Icon name={channel.icon} className="size-7" />
                      </span>
                    </span>
                    <span className="flex items-end justify-between gap-3">
                      <span className="text-sm font-semibold break-all sm:text-base">
                        {channel.value}
                      </span>
                      <ArrowUpRight
                        aria-hidden="true"
                        className="size-4 shrink-0 text-body transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </a>
                )
              })}
            </address>

            <div className="mt-8 flex flex-wrap items-center gap-5">
              <CopyEmailButton email={contact.email} />
            </div>

            {/* <div className="mt-8 border-t-2 border-ink pt-6">
              <p className="mb-4 text-[11px] font-bold tracking-widest text-body uppercase">
                Find me online
              </p>
              <SocialLinks variant="contacts" />
            </div> */}
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </div>

      <footer className="on-dark border-t-2 border-[#0a0a0a] bg-[#0a0a0a] text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-5 py-8 sm:px-8 lg:px-12">
          <p className="text-[11px] font-semibold tracking-wider uppercase">
            © 2026 Bonanza Narayan
          </p>
          <SocialLinks variant="footer" />
          <BackToTop />
        </div>
      </footer>
    </section>
  )
}
