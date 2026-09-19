import { Bricolage_Grotesque, Archivo, JetBrains_Mono } from "next/font/google";
import { NavajaStyleLanding } from "./NavajaStyleLanding";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-bricolage",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-archivo",
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata = {
  title: "Navaja Style — demo de landing por Axtar Studio",
  description:
    "Landing de muestra para una barbería, hecha por Axtar Studio: reserva de turnos, servicios con precios y galería de trabajos.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  const fontClassName = `${bricolage.variable} ${archivo.variable} ${jetBrainsMono.variable}`;
  return <NavajaStyleLanding fontClassName={fontClassName} />;
}
