import Image from "next/image";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

const LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ia", label: "IA" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#productos", label: "Sistemas" },
  { href: "#caso", label: "Caso de éxito" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <Image src="/logo-mark.png" alt="" className={styles.logo} width={28} height={22} />
          <span className={styles.wordmark}>Axtar Studio</span>
        </div>

        <nav className={styles.nav} aria-label="Pie de página">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
          <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </nav>

        <p className={styles.meta}>
          Santo Tomé, Santa Fe, Argentina
          <span>© {new Date().getFullYear()} Axtar Studio</span>
        </p>
      </div>
    </footer>
  );
}
