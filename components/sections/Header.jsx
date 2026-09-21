"use client";
import { useEffect, useState } from "react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Header.module.css";

const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#muestras", label: "Muestras" },
  { href: "#estudio", label: "Estudio" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/logo-mark.png" alt="" className={styles.logo} />
          <span className={styles.wordmark}>AXTAR STUDIO</span>
        </a>

        <nav className={styles.nav} aria-label="Principal">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className={styles.actionsDesktop}>
          <a
            className={styles.ctaLink}
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Hablemos
          </a>
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
          <span />
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${open ? styles.mobileNavOpen : ""}`}
      >
        <nav aria-label="Principal, móvil">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className={styles.ctaLink}
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Hablemos por WhatsApp
        </a>
      </div>
    </header>
  );
}
