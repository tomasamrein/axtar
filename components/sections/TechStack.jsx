"use client";
import {
  SiWhatsapp,
  SiInstagram,
  SiMessenger,
  SiMercadopago,
  SiGooglecalendar,
  SiGmail,
  SiGooglesheets,
  SiClaude,
  SiGooglegemini,
  SiMeta,
  SiShopify,
  SiGoogle,
} from "react-icons/si";
import LogoLoop from "@/components/reactbits/LogoLoop";
import styles from "./TechStack.module.css";

// Lo que ve el cliente son las herramientas que ya usa y la IA que se conecta a ellas, no el stack de desarrollo.
const LOGOS = [
  { node: <SiWhatsapp />, title: "WhatsApp" },
  { node: <SiClaude />, title: "Claude" },
  { node: <SiInstagram />, title: "Instagram" },
  { node: <SiMercadopago />, title: "Mercado Pago" },
  { node: <SiGooglegemini />, title: "Gemini" },
  { node: <SiGooglecalendar />, title: "Google Calendar" },
  { node: <SiMessenger />, title: "Messenger" },
  { node: <SiGmail />, title: "Gmail" },
  { node: <SiMeta />, title: "Meta" },
  { node: <SiGooglesheets />, title: "Google Sheets" },
  { node: <SiShopify />, title: "Shopify" },
  { node: <SiGoogle />, title: "Google" },
];

export function TechStack() {
  return (
    <section className={styles.strip} aria-labelledby="stack-title">
      <p id="stack-title" className={styles.caption}>
        Conectamos tu negocio con las herramientas que ya usás y con la IA más avanzada
      </p>
      <LogoLoop
        logos={LOGOS}
        speed={40}
        logoHeight={26}
        gap={56}
        pauseOnHover
        fadeOut
        fadeOutColor="oklch(12.5% 0.022 268)"
        ariaLabel="Herramientas e inteligencias artificiales que integramos"
        className={styles.loop}
      />
    </section>
  );
}
