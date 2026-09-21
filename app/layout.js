import { Space_Grotesk, Manrope } from "next/font/google";
import { Toaster } from "sonner";
import { CustomCursor } from "@/components/ui/CustomCursor";
import "./styles/globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

const siteUrl = "https://axtar.com.ar";
const title = "Axtar Studio: desarrollo de software a medida";
const description =
  "Diseño, desarrollo y automatizo productos digitales a medida para negocios que necesitan una solución que funcione, no una promesa genérica.";

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
    card: "summary",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${spaceGrotesk.variable} ${manrope.variable}`}
    >
      <body>
        <CustomCursor />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "var(--ink-900)",
              color: "var(--ink-000)",
              border: "1.5px solid var(--ink-700)",
              borderRadius: "8px",
              fontFamily: "var(--font-manrope), sans-serif",
            },
          }}
        />
      </body>
    </html>
  );
}
