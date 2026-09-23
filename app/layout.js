import { Funnel_Display, Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./styles/globals.css";

const funnelDisplay = Funnel_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-funnel-display",
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

// El apex redirige a www en Vercel, así que www es la URL canónica.
const siteUrl = "https://www.axtar.com.ar";
const title = "Axtar Studio: sitios web, software a medida e IA para tu negocio";
const description =
  "Construimos sitios web y software a medida para llevar tu negocio a la era de la IA, y te acompañamos a integrar inteligencia artificial en tu empresa con asesoramiento cercano.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  openGraph: {
    title,
    description,
    url: siteUrl,
    siteName: "Axtar Studio",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${funnelDisplay.variable} ${geist.variable} ${geistMono.variable}`}
    >
      <body>
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--ink-850)",
              color: "var(--ink-000)",
              border: "1px solid var(--line-strong)",
              borderRadius: "var(--radius-surface)",
              fontFamily: "var(--font-body)",
            },
          }}
        />
      </body>
    </html>
  );
}
