import { ImageResponse } from "next/og"

export const ogImageSize = {
  width: 1200,
  height: 630,
}

export function createOgImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        color: "#0a0a0a",
        padding: "72px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 18,
          fontSize: 26,
          fontWeight: 600,
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: 24,
            backgroundColor: "#1de9a0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#0a0a0a",
            fontSize: 30,
          }}
        >
          B
        </div>
        <span>Bonanza Narayan</span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        <div
          style={{
            display: "flex",
            fontSize: 82,
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: "-0.05em",
          }}
        >
          Full-Stack Engineer
        </div>
        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            backgroundColor: "#1de9a0",
            padding: "10px 22px",
            fontSize: 42,
            fontWeight: 800,
            lineHeight: 1.2,
          }}
        >
          Building for the Web.
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#6b6b6b" }}>
          React · Next.js · APIs · SaaS · PWA
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: 12,
          backgroundColor: "#1de9a0",
        }}
      />
    </div>,
    { ...ogImageSize }
  )
}
