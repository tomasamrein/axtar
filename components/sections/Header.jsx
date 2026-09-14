import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#casos", label: "Casos" },
  { href: "#estudio", label: "Estudio" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <Image src="/logo-mark.png" alt="" width={28} height={28} className={styles.logo} priority />
          <span className={styles.wordmark}>AXTAR STUDIO</span>
        </a>
        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <Button size="sm" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          Hablemos
        </Button>
      </div>
    </header>
  );
}
