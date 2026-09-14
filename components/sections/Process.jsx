import { Reveal } from "@/components/ui/Reveal";
import styles from "./Process.module.css";

const STEPS = [
  {
    title: "Contacto inicial",
    description: "Nos escribís y contamos con qué contás: la idea, el problema, el contexto del negocio.",
  },
  {
    title: "Evaluación",
    description: "Estudio tu negocio y evalúo qué servicio tiene sentido para vos, sin ofrecerte algo que no necesitás.",
  },
  {
    title: "Propuesta a medida",
    description: "Armo una propuesta 100% personalizada: alcance, tiempos y precio claros antes de arrancar.",
  },
  {
    title: "Desarrollo",
    description: "Construyo el producto con foco y comunicación constante. Sabés en qué etapa está tu proyecto.",
  },
  {
    title: "Entrega, soporte y mantenimiento",
    description: "Entrego, y sigo disponible después: soporte y mantenimiento continuo, no un adiós al facturar.",
  },
];

export function Process() {
  return (
    <section id="proceso" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <Reveal as="div">
          <h2 className={styles.heading}>Cómo trabajamos</h2>
          <p className={styles.subheading}>
            Un proceso claro, de punta a punta, sin sorpresas en el medio.
          </p>
        </Reveal>
        <div className={styles.timelineWrap}>
          <div className={styles.line} aria-hidden="true" />
          <Reveal as="div" className={styles.timeline} stagger>
            {STEPS.map((step, i) => (
              <div key={step.title} className={styles.step}>
                <span className={styles.node}>0{i + 1}</span>
                <h3 className={styles.title}>{step.title}</h3>
                <p className={styles.description}>{step.description}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
