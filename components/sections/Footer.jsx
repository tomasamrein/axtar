import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <img src="/logo-mark.png" alt="" className={styles.logo} />
          <span className={styles.wordmark}>AXTAR STUDIO</span>
        </div>
        <div className={styles.meta}>
          <a className={styles.whatsapp} href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            Hablar por WhatsApp
          </a>
          <span>Santo Tomé, Santa Fe, Argentina</span>
          <span>© {new Date().getFullYear()} Axtar Studio</span>
        </div>
      </div>
    </footer>
  );
}
