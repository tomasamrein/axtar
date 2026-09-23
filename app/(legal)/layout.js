import Image from "next/image";
import Link from "next/link";
import { Footer } from "@/components/sections/Footer";
import { LegalNav } from "./LegalNav";
import styles from "./legal.module.css";

export default function LegalLayout({ children }) {
  return (
    <>
      <header className={styles.topbar}>
        <div className={`container ${styles.topbarInner}`}>
          <Link href="/" className={styles.brand} aria-label="Axtar Studio, inicio">
            <Image src="/logo-mark.png" alt="" width={28} height={22} className={styles.logo} />
            <span>Axtar Studio</span>
          </Link>
          <Link href="/" className={styles.back}>
            Volver al inicio
          </Link>
        </div>
      </header>
      <main className={`container ${styles.main}`}>
        <LegalNav />
        <article className={styles.prose}>{children}</article>
      </main>
      <Footer />
    </>
  );
}
