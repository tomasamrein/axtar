import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./AiPartner.module.css";

const STEPS = [
  {
    n: "01",
    title: "Diagnóstico",
    text: "Recorremos cómo trabaja tu equipo y detectamos qué tareas conviene delegar en la IA, y cuáles no.",
  },
  {
    n: "02",
    title: "Implementación",
    text: "Agentes que atienden tu WhatsApp, asistentes internos y automatizaciones conectadas a lo que ya usás.",
  },
  {
    n: "03",
    title: "Acompañamiento",
    text: "Capacitamos a tu equipo, medimos resultados y ajustamos. No te dejamos solo con una herramienta nueva.",
  },
];

export function AiPartner() {
  return (
    <section id="ia" className={styles.section}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.header}>
          <p className="eyebrow">Inteligencia artificial</p>
          <h2 className={`display ${styles.headline}`}>
            Te acompañamos a integrar IA en tu empresa, <span className={styles.accent}>con criterio y sin humo.</span>
          </h2>
          <p className="lead">
            Asesoramiento cercano para descubrir dónde la inteligencia artificial te ahorra horas o te trae ventas, y la implementamos con vos, paso a paso.
          </p>
        </div>

        <Reveal as="ol" className={styles.steps} stagger>
          {STEPS.map((s) => (
            <li key={s.n} className={styles.step}>
              <span className={styles.num}>{s.n}</span>
              <h3 className={styles.title}>{s.title}</h3>
              <p className={styles.text}>{s.text}</p>
            </li>
          ))}
        </Reveal>

        <div className={styles.cta}>
          <SpotlightButton
            href={getWhatsAppUrl("Hola Tomás, quiero saber cómo sumar inteligencia artificial en mi negocio.")}
            target="_blank"
            rel="noopener noreferrer"
            arrow
          >
            Quiero sumar IA a mi negocio
          </SpotlightButton>
          <p className={styles.note}>Contanos a qué se dedica tu empresa y te respondemos al instante.</p>
        </div>
      </div>
    </section>
  );
}
