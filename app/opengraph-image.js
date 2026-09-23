import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Axtar Studio: sitios web, software a medida e IA para tu negocio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(join(process.cwd(), "public/logo-mark.png"), "base64");
  const logoSrc = `data:image/png;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 88px",
          background: "linear-gradient(135deg, #04060f 0%, #090d18 55%, #0d1120 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -220,
            right: -160,
            width: 760,
            height: 760,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(122,71,243,0.32) 0%, rgba(71,120,255,0.16) 45%, rgba(4,6,15,0) 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -260,
            left: -180,
            width: 640,
            height: 640,
            borderRadius: "50%",
            display: "flex",
            background:
              "radial-gradient(circle, rgba(71,120,255,0.18) 0%, rgba(4,6,15,0) 70%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={logoSrc} alt="" width={76} height={76} style={{ objectFit: "contain" }} />
          <span style={{ fontSize: 40, fontWeight: 700, color: "#f5f6fb", letterSpacing: -0.5 }}>
            Axtar Studio
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28, maxWidth: 980 }}>
          <span
            style={{
              fontSize: 60,
              fontWeight: 700,
              lineHeight: 1.15,
              color: "#f5f6fb",
              letterSpacing: -1,
            }}
          >
            Sitios web, software a medida e IA para tu negocio
          </span>
          <span style={{ fontSize: 30, fontWeight: 400, lineHeight: 1.4, color: "#aab0c6" }}>
            Construimos y te acompañamos a integrar inteligencia artificial en tu empresa.
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {["Sitios web", "Software a medida", "IA y automatizaciones"].map((tag) => (
            <span
              key={tag}
              style={{
                display: "flex",
                fontSize: 24,
                color: "#cdd3ea",
                padding: "10px 22px",
                borderRadius: 999,
                background: "rgba(71,120,255,0.14)",
                border: "1px solid rgba(71,120,255,0.45)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
