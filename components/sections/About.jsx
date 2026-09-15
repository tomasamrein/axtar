import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./About.module.css";

const FACTS = ["+2 años de experiencia", "Santo Tomé, Santa Fe", "Un solo desarrollador, foco total"];

export function About() {
  return (
    <section id="estudio" className={styles.section}>
      <Reveal as="div" className={`container ${styles.inner}`} stagger>
        <div className={styles.markBox}>
          <span className={styles.mark} role="img" aria-label="Axtar Studio" />
        </div>
        <div className={styles.content}>
          <h2 className={styles.heading}>Sobre Axtar</h2>
          <p className={styles.body}>
            Axtar Studio lo llevo yo, Tomás Amrein, desarrollador de software con más de 2 años de experiencia, con base en Santo Tomé, Santa Fe. No es una agencia grande: es un estudio de un solo desarrollador, y esa es la idea. Cada proyecto recibe atención directa y dedicación real, sin intermediarios ni equipos rotativos.
          </p>
          <div className={styles.facts}>
            {FACTS.map((fact) => (
              <Badge key={fact} tone="outlineInverse">
                {fact}
              </Badge>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
