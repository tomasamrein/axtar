"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#ia", label: "IA" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#productos", label: "Sistemas" },
  { href: "#caso", label: "Caso de éxito" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)} aria-label="Axtar Studio, inicio">
          <Image src="/logo-mark.png" alt="" className={styles.logo} width={30} height={24} priority />
          <span className={styles.wordmark}>Axtar</span>
        </a>

        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className={styles.link}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.cta}>
          <SpotlightButton href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" size="sm">
            Hablemos por WhatsApp
          </SpotlightButton>
        </div>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      <div id="mobile-nav" className={`${styles.sheet} ${open ? styles.sheetOpen : ""}`} inert={!open}>
        <nav aria-label="Principal, móvil" className={styles.sheetNav}>
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ "--i": i }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <SpotlightButton
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          arrow
        >
          Hablemos por WhatsApp
        </SpotlightButton>
      </div>
    </header>
  );
}
