"use client";
import DecryptedText from "@/components/reactbits/DecryptedText";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Work.module.css";

export function Work() {
  return (
    <section id="casos" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Casos de éxito</h2>
        <Reveal as="div" className={styles.panel}>
          <p className={styles.panelTitle}>
            Los primeros casos de éxito están{" "}
            <DecryptedText
              text="en construcción"
              animateOn="view"
              sequential
              speed={38}
              maxIterations={14}
              revealDirection="start"
              className={styles.decrypted}
              encryptedClassName={styles.encrypted}
            />
            .
          </p>
          <p className={styles.panelBody}>
            Estoy trabajando en los primeros proyectos que voy a poder mostrar acá, con resultados reales. Mientras tanto, mirá las muestras del estudio o contame tu proyecto y sé uno de los primeros casos.
          </p>
          <div className={styles.actions}>
            <Button variant="inverse" href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
              Hablemos de tu proyecto
            </Button>
            <Button variant="secondary" href="#muestras">
              Ver las muestras
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
