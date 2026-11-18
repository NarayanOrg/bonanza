import { socials } from "@/lib/data"
import { cn } from "@/lib/utils"
import { Icon } from "./icon"

type SocialLinksProps = {
  variant?: "hero" | "contacts" | "footer"
  className?: string
}

export function SocialLinks({ variant = "hero", className }: SocialLinksProps) {
  const isFooter = variant === "footer"
  const isContacts = variant === "contacts"

  return (
    <ul
      aria-label="Social links"
      className={cn("flex flex-wrap items-center gap-2", className)}
    >
      {socials.map((social) => {
        const isExternal = social.href.startsWith("http")

        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={`${social.label}${social.handle ? ` — ${social.handle}` : ""}`}
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className={cn(
                "inline-flex min-h-11 items-center justify-center gap-2 border font-semibold transition-all",
                isFooter
                  ? "min-h-10 border-white/25 px-3 py-2 text-[12px] text-white hover:border-mint hover:bg-mint/10 hover:text-mint"
                  : isContacts
                    ? "size-12 rounded-full"
                    : "size-11 rounded-full",
                !isFooter &&
                  (social.featured
                    ? "border-ink bg-mint"
                    : "border-line bg-paper hover:border-ink hover:bg-mint"),
                !isFooter && "hover:scale-105 active:scale-95"
              )}
            >
              <Icon
                name={social.icon}
                className={cn(
                  "shrink-0",
                  isFooter ? "size-4" : isContacts ? "size-5" : "size-[18px]"
                )}
              />
              {isFooter ? (
                <span>{social.label}</span>
              ) : (
                <span className="sr-only">{social.label}</span>
              )}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
