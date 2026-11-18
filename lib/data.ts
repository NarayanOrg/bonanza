export const sections = [
  { id: "profile", index: "01", label: "Home" },
  { id: "about", index: "02", label: "About" },
  { id: "services", index: "03", label: "Services" },
  { id: "projects", index: "04", label: "Projects" },
  { id: "contact", index: "05", label: "Contact" },
] as const

export const profile = {
  name: "Bonanza Narayan",
  greeting: "Hi everyone 👋, I'm Bonanza",
  headline: ["Full-Stack Engineer", "Building for the Web."],
  intro:
    "Five-plus years shipping interfaces, APIs and the infrastructure underneath them. React and Next.js up front, PostgreSQL and friends behind, with AI in the loop to move faster without cutting corners.",
  facts: [
    { label: "Experience", value: "5+ years" },
    { label: "Education", value: "UPSA" },
    { label: "Edge", value: "AI-assisted workflow" },
  ],
}

export type TechTag = {
  label: string
  icon: string
  href?: string
}

export const stack: {
  index: string
  title: string
  description: string
  tags: TechTag[]
}[] = [
  {
    index: "01",
    title: "Interface",
    description:
      "Considered front ends that stay fast and usable. Single-page apps, progressive web apps, and the details that make a product feel finished.",
    tags: [
      { label: "React", icon: "react", href: "https://react.dev/" },
      { label: "Next.js", icon: "nextjs", href: "https://nextjs.org/" },
      {
        label: "TypeScript",
        icon: "typescript",
        href: "https://www.typescriptlang.org/",
      },
      {
        label: "PWA",
        icon: "pwa",
        href: "https://web.dev/progressive-web-apps/",
      },
    ],
  },
  {
    index: "02",
    title: "Systems",
    description:
      "The part you don't see but everyone feels. Data modelling, APIs, and background work that keeps running when the request is over.",
    tags: [
      {
        label: "PostgreSQL",
        icon: "postgresql",
        href: "https://www.postgresql.org/",
      },
      {
        label: "Firebase",
        icon: "firebase",
        href: "https://firebase.google.com/",
      },
      { label: "Supabase", icon: "supabase", href: "https://supabase.com/" },
      {
        label: "Express.js",
        icon: "expressjs",
        href: "https://expressjs.com/",
      },
      { label: "Inngest", icon: "inngest", href: "https://inngest.com/" },
    ],
  },
  {
    index: "03",
    title: "Delivery",
    description:
      "From a local build to something people can actually use. SaaS foundations, cloud hosting, and servers that let separate tools talk.",
    tags: [
      { label: "Node.js", icon: "nodejs", href: "https://nodejs.org/" },
      { label: "Hostinger", icon: "cloud", href: "https://www.hostinger.com/" },
      { label: "SaaS", icon: "saas" },
      { label: "API servers", icon: "api" },
      {
        label: "MCP servers",
        icon: "mcp",
        href: "https://modelcontextprotocol.io/",
      },
    ],
  },
]

export const projects = [
  {
    name: "StalkMail.com",
    url: "https://stalkmail.com",
    favicon: "/favicons/stalkmail-com.png",
    ogImage: "/project-og/stalkmail.png",
    summary:
      "Campaigns, subscribers and scheduling in one clean dashboard, plus an API your AI agents can use. Start free with 100 subscribers and 200 emails, then from $10 a month.",
    tags: ["Web app", "API", "SaaS"],
  },
  {
    name: "EarlyTrap.com",
    url: "https://earlytrap.com",
    favicon: "/favicons/earlytrap-com.png",
    ogImage: "/project-og/earlytrap.png",
    summary:
      "EarlyTrap is the easiest way to capture emails from your website or app. Create beautiful signup forms, automate email collection, and send engaging broadcasts—all in one simple tool. Start growing your audience today.",
    tags: ["Full stack", "Product"],
  },
  {
    name: "ManazTech.com",
    url: "https://manaztech.com",
    favicon: "/favicons/manaztech-com.png",
    ogImage: "/project-og/manaztech.png",
    summary:
      "Manaz Technologies & Solutions builds custom software, mobile apps, cloud infrastructure, and digital transformation solutions for startups and enterprises. Innovate. Transform. Deliver.",
    tags: ["Web", "Front end"],
  },
  {
    name: "transitparcels.com",
    url: "https://TransitParcels.com",
    favicon: "/favicons/transitparcels-com.png",
    ogImage: "/project-og/transitparcels.png",
    summary:
      "Fast, secure, and affordable delivery services in Accra & across Ghana. From same-day parcels to scheduled business logistics, Transit Parcels ensures reliable courier solutions with real-time updates.",
    tags: ["Full stack", "Logistics"],
  },
]

export const approach = {
  label: "02 / About",
  quote:
    "AI is a multiplier, not a shortcut. I use it to move faster through builds and debugging — the thinking, the taste, and the responsibility stay mine.",
}

const email = "bonanzakwekunarayan@gmail.com"

export const contact = {
  email,
  formEndpoint: `https://formsubmit.co/${email}`,
  formAjaxEndpoint: `https://formsubmit.co/ajax/${email}`,
  phoneLabel: "+233 20 979 9332",
  tel: "+233209799332",
  whatsapp: "https://wa.me/233209799332",
}

export type Social = {
  label: string
  href: string
  icon: string
  value?: string
  handle?: string
  featured?: boolean
}

export const socials: Social[] = [
  {
    label: "X (Twitter)",
    href: "https://x.com/narayanbona",
    handle: "@narayanbona",
    icon: "x",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bonanzanarayan/",
    handle: "bonanzanarayan",
    icon: "linkedin",
    featured: true,
  },
  {
    label: "Email",
    href: `mailto:${contact.email}`,
    value: contact.email,
    icon: "gmail",
  },
  {
    label: "Call",
    href: `tel:${contact.tel}`,
    value: contact.phoneLabel,
    icon: "phone",
  },
  {
    label: "WhatsApp",
    href: contact.whatsapp,
    value: contact.phoneLabel,
    icon: "whatsapp",
  },
]

export const channels = socials.map(({ label, href, icon, value, handle }) => ({
  label,
  value: value ?? handle ?? href,
  href,
  icon,
}))

export const marqueeItems = [
  "Web Development",
  "Mobile-Ready Interfaces",
  "API & MCP Servers",
  "SaaS Products",
  "Progressive Web Apps",
  "Cloud Deployment",
]
