import { Button } from "@/components/ui/Button";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="casos" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Casos de éxito</h2>
        <div className={styles.panel}>
          <p className={styles.panelTitle}>Los primeros casos de éxito están en construcción.</p>
          <p className={styles.panelBody}>
            Estoy trabajando en los primeros proyectos que voy a poder mostrar acá, con resultados reales. Mientras tanto, contame tu proyecto y sé uno de los primeros casos.
          </p>
          <Button href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
            Hablemos de tu proyecto
          </Button>
        </div>
      </div>
    </section>
  );
}
