import type { Metadata, Viewport } from "next"
import { Outfit } from "next/font/google"

import "./globals.css"
import { MotionProvider } from "@/components/motion-provider"
import { ThemeProvider } from "@/components/theme-provider"
import { contact, profile, socials, stack } from "@/lib/data"
import { siteName, siteUrl } from "@/lib/site"

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
})

const description =
  "Portfolio of Bonanza Narayan, a full-stack engineer with 5+ years building web products, APIs, PWA and SaaS — from first pixel to final deploy."

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${siteUrl}/#person`,
  name: profile.name,
  url: siteUrl,
  image: `${siteUrl}/bonanza-hero.png`,
  jobTitle: "Full-Stack Engineer",
  description,
  email: `mailto:${contact.email}`,
  telephone: contact.tel,
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "UPSA",
  },
  knowsAbout: stack.flatMap((group) => group.tags.map((tag) => tag.label)),
  sameAs: socials
    .filter((social) => social.href.startsWith("http"))
    .map((social) => social.href),
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — Full-stack engineer`,
    template: `%s | ${profile.name}`,
  },
  description,
  applicationName: siteName,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  keywords: [
    "Bonanza Narayan",
    "Web developer",
    "Business websites",
    "full-stack engineer",
    "React developer",
    "Next.js developer",
    "PostgreSQL",
    "Firebase",
    "Supabase",
    "Express.js",
    "Inngest",
    "PWA",
    "SaaS",
    "API development",
    "MCP servers",
    "portfolio",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: `${profile.name} — Full-stack engineer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — Full-stack engineer`,
    description,
    creator: "@narayanbona",
  },
  category: "Technology",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1311" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={outfit.variable} suppressHydrationWarning>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ThemeProvider>
          <MotionProvider>{children}</MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
