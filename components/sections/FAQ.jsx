"use client";
import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "¿Cuánto tiempo lleva desarrollar un proyecto?",
    a: "Depende del alcance. Una landing o sitio institucional suele estar listo en 1 a 3 semanas. Un sistema a medida o una tienda online lleva entre 4 y 8 semanas, según las integraciones que necesite. Antes de arrancar te paso un cronograma concreto, no una fecha aproximada.",
  },
  {
    q: "¿Trabajan con clientes que no son de Argentina?",
    a: "Sí, trabajo con clientes de todo LATAM. Todo el proceso es remoto — nos coordinamos por WhatsApp o videollamada — y adaptamos la forma de pago según el país.",
  },
  {
    q: "¿Cómo se define el presupuesto?",
    a: "Primero entiendo qué necesitás y con qué objetivo. Con eso te armo una propuesta con alcance, tiempos y precio cerrado antes de arrancar — no cobro por hora ni sumo costos ocultos en el camino.",
  },
  {
    q: "¿Qué estrategias usan para que un sitio web atraiga clientes?",
    a: "Un sitio lindo no alcanza si no está pensado para convertir. Trabajo la velocidad de carga, SEO técnico, una estructura de contenido clara y llamados a la acción directos (como WhatsApp) para que quien entra sepa qué hacer. Si el proyecto lo necesita, también sumo analítica para medir qué está funcionando.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "No desaparezco al facturar. Ofrezco soporte y mantenimiento post-entrega, y si en el camino surgen cambios o nuevas necesidades, seguimos trabajando juntos.",
  },
  {
    q: "¿Cómo es la forma de pago?",
    a: "Generalmente un anticipo para arrancar y el resto contra entrega. En proyectos más grandes lo dividimos en etapas. Trabajo con transferencia en pesos o dólares, según lo que le quede más cómodo al cliente.",
  },
  {
    q: "¿Cómo arranco un proyecto con vos?",
    a: "Simple: me escribís por WhatsApp contándome tu idea. Charlamos, entiendo qué necesitás y te paso una propuesta clara. Si te cierra, arrancamos — sin formularios ni reuniones eternas.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className={styles.section}>
      <Reveal as="div" className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.kicker}>Preguntas frecuentes</p>
          <h2 className={styles.heading}>Antes de escribirme, capaz esto ya te lo responde</h2>
        </div>

        <ul className={styles.list} role="list">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={styles.item}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                >
                  <span>{item.q}</span>
                  <Plus className={`${styles.icon} ${isOpen ? styles.iconOpen : ""}`} aria-hidden="true" />
                </button>
                <div id={`faq-panel-${i}`} className={`${styles.panel} ${isOpen ? styles.panelOpen : ""}`}>
                  <p className={styles.answer}>{item.a}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Reveal>
    </section>
  );
}
