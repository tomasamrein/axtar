import { Camera } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./About.module.css";

const FACTS = ["+2 años de experiencia", "Santo Tomé, Santa Fe"];

export function About() {
  return (
    <section id="estudio" className={styles.section}>
      <Reveal as="div" className={`container ${styles.inner}`} stagger>
        <div className={styles.markBox}>
          <Camera className={styles.placeholderIcon} strokeWidth={1.5} aria-hidden="true" />
          <span className={styles.placeholderLabel}>Foto próximamente</span>
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Sobre Axtar</h2>
          <p className={styles.body}>
            Axtar lo manejo yo, Tomás Amrein, desarrollador de software con +2 años de experiencia y futuro Ingeniero en Informática. Soy de Santo Tomé, Santa Fe, pero trabajo con clientes de todo LATAM. Soy una persona muy comprometida con el trabajo, le dedico mucho tiempo a mis clientes para que consigamos un buen resultado.
          </p>
          <div className={styles.facts}>
            {FACTS.map((fact) => (
              <span key={fact} className={styles.fact}>
                {fact}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
