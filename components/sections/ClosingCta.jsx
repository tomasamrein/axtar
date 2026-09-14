import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./ClosingCta.module.css";

export function ClosingCta() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>¿Hablamos de tu proyecto?</h2>
        <p className={styles.body}>
          Contame en qué estás pensando y te respondo directamente, sin formularios ni intermediarios.
        </p>
        <Button href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
          Empecemos por WhatsApp
        </Button>
      </div>
    </section>
  );
}
