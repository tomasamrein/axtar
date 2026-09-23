import StarBorder from "@/components/reactbits/StarBorder";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./ClosingCta.module.css";

export function ClosingCta() {
  return (
    <section className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>
          ¿Tenés una idea?
          <span className={styles.accent}>Hagámosla real.</span>
        </h2>
        <p className={styles.body}>Contame qué necesitás: te respondo al instante y te paso una propuesta clara, con alcance, tiempos y precio.</p>
        <StarBorder
          as="a"
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          color="oklch(78% 0.13 266)"
          speed="5s"
          thickness={1}
          backgroundColor="oklch(62% 0.22 266)"
          borderColor="transparent"
          textColor="oklch(97.5% 0.005 268)"
          className={styles.cta}
        >
          Hablemos por WhatsApp
        </StarBorder>
      </div>
    </section>
  );
}
