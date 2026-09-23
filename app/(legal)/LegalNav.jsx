"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LEGAL_LINKS } from "@/lib/legal";
import styles from "./legal.module.css";

export function LegalNav() {
  const pathname = usePathname();

  return (
    <nav className={styles.legalNav} aria-label="Documentos legales">
      {LEGAL_LINKS.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className={styles.legalLink}
          aria-current={pathname === l.href ? "page" : undefined}
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
