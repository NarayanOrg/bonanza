import type { CSSProperties } from "react"
import {
  Boxes,
  Cloud,
  LayoutTemplate,
  Network,
  Phone,
  Server,
  Smartphone,
  type LucideIcon,
} from "lucide-react"

import { cn } from "@/lib/utils"

const brandIcons: Record<string, string> = {
  x: "x.svg",
  linkedin: "linkedin.svg",
  gmail: "gmail.svg",
  whatsapp: "whatsapp-icon.svg",
  react: "react_light.svg",
  nextjs: "nextjs_icon_dark.svg",
  postgresql: "postgresql.svg",
  firebase: "firebase.svg",
  supabase: "supabase.svg",
  expressjs: "expressjs.svg",
  inngest: "inngest-light.svg",
  typescript: "typescript.svg",
  nodejs: "nodejs.svg",
}

const uiIcons: Record<string, LucideIcon> = {
  phone: Phone,
  pwa: Smartphone,
  frontend: LayoutTemplate,
  cloud: Cloud,
  saas: Boxes,
  api: Server,
  mcp: Network,
}

type IconProps = {
  name: string
  className?: string
}

export function Icon({ name, className }: IconProps) {
  const brandFile = brandIcons[name]

  if (brandFile) {
    return (
      <span
        aria-hidden="true"
        data-icon={name}
        className={cn("brand-icon", className)}
        style={{ "--icon": `url(/icons/${brandFile})` } as CSSProperties}
      />
    )
  }

  const UiIcon = uiIcons[name]
  if (UiIcon) return <UiIcon aria-hidden="true" className={className} />

  return null
}
