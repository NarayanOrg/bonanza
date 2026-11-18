import { createOgImage, ogImageSize } from "@/components/og-image"

export const alt = "Bonanza Narayan — Full-stack engineer"
export const size = ogImageSize
export const contentType = "image/png"

export default function Image() {
  return createOgImage()
}
