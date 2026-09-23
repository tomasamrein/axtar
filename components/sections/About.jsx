"use client";
import { BadgeCheck, HeartHandshake, Headset, Zap } from "lucide-react";
import ScrollReveal from "@/components/reactbits/ScrollReveal";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./About.module.css";

// Compromisos concretos que Tomás sostiene con cada cliente: son el argumento de confianza para cerrar.
const PROMISES = [
  {
    Icon: BadgeCheck,
    title: "Software de calidad",
    text: "Rápido, seguro y probado antes de llegar a tus manos. Nada de plantillas recicladas ni parches que fallan al mes.",
  },
  {
    Icon: HeartHandshake,
    title: "Dedicación total",
    text: "Tu proyecto recibe toda mi atención hasta que quedás conforme. Si algo no te convence, lo seguimos puliendo.",
  },
  {
    Icon: Headset,
    title: "Soporte personalizado",
    text: "Hablás siempre conmigo, no con un call center ni con un ticket. Conozco tu proyecto de memoria.",
  },
  {
    Icon: Zap,
    title: "Respuesta al instante",
    text: "Me escribís por WhatsApp y te respondo en el momento. Una duda no tiene por qué frenar tu negocio días.",
  },
];

const FACTS = [
  { value: "+2 años", label: "desarrollando software" },
  { value: "5", label: "sistemas completos construidos" },
  { value: "LATAM", label: "clientes desde Santo Tomé, Santa Fe" },
];

export function About() {
  return (
    <section id="estudio" className={styles.section}>
      <div className="container">
        <ScrollReveal as="h2" containerClassName={styles.manifesto}>
          Tu proyecto no es uno más de la lista. Le dedico todo mi tiempo, te respondo al instante y sigo al lado tuyo después de entregar.
        </ScrollReveal>

        <Reveal as="ul" className={styles.promises} stagger>
          {PROMISES.map(({ Icon, title, text }) => (
            <li key={title} className={styles.promise}>
              <span className={styles.icon} aria-hidden="true">
                <Icon strokeWidth={1.5} />
              </span>
              <h3 className={styles.promiseTitle}>{title}</h3>
              <p className={styles.promiseText}>{text}</p>
            </li>
          ))}
        </Reveal>

        <div className={styles.bottom}>
          <p className={styles.bio}>
            Axtar es el estudio de Tomás Amrein, desarrollador de software y futuro Ingeniero en Informática. De la primera idea al soporte, hablás siempre con la misma persona.
          </p>
          <dl className={styles.facts}>
            {FACTS.map((f) => (
              <div key={f.label} className={styles.fact}>
                <dt className={styles.value}>{f.value}</dt>
                <dd className={styles.label}>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
