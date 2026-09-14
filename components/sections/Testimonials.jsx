import { TestimonialCard } from "@/components/ui/TestimonialCard";
import styles from "./Testimonials.module.css";

export function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Testimonios</h2>
        <div className={styles.cardWrap}>
          <TestimonialCard
            quote="Todavía no tengo testimonios publicados: son proyectos recientes y prefiero pedirte tu opinión real cuando termines, no inventarla antes."
            name="Tomás Amrein"
            role="Fundador"
            company="Axtar Studio"
          />
        </div>
      </div>
    </section>
  );
}
