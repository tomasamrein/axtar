"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/shadcn/accordion";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./FAQ.module.css";

const FAQS = [
  {
    q: "¿Cuánto tiempo lleva desarrollar un proyecto?",
    a: "Depende del alcance. Una landing o sitio institucional suele estar listo en 1 a 3 semanas. Un sistema a medida o una tienda online lleva entre 4 y 8 semanas, según las integraciones que necesite. Antes de arrancar te paso un cronograma concreto, no una fecha aproximada.",
  },
  {
    q: "¿Trabajás con clientes que no son de Argentina?",
    a: "Sí, trabajo con clientes de todo LATAM. Todo el proceso es remoto: nos coordinamos por WhatsApp o videollamada y adaptamos la forma de pago según el país.",
  },
  {
    q: "¿Cómo se define el presupuesto?",
    a: "Primero entiendo qué necesitás y con qué objetivo. Con eso te armo una propuesta con alcance, tiempos y precio cerrado antes de arrancar. No cobro por hora ni sumo costos ocultos en el camino.",
  },
  {
    q: "¿Cómo hacés para que un sitio atraiga clientes?",
    a: "Un sitio lindo no alcanza si no está pensado para vender. Lo hago rápido, preparado para aparecer en Google, con textos que responden lo que tu cliente quiere saber y un botón directo a WhatsApp para que quien entra sepa qué hacer. Si el proyecto lo necesita, sumo mediciones para ver qué funciona.",
  },
  {
    q: "¿Cómo me ayudan a sumar inteligencia artificial?",
    a: "Primero vemos cómo trabaja tu equipo y dónde la IA te ahorra tiempo o te trae ventas de verdad. Después la implementamos (por ejemplo, un agente que atiende tu WhatsApp o automatizaciones entre tus herramientas) y te acompañamos hasta que tu equipo la usa con confianza.",
  },
  {
    q: "¿Qué pasa después de la entrega?",
    a: "No desaparezco al facturar. Tenés soporte personalizado conmigo, sin tickets ni intermediarios: me escribís por WhatsApp y te respondo al instante. Si surgen cambios o nuevas necesidades, seguimos trabajando juntos.",
  },
  {
    q: "¿Cómo es la forma de pago?",
    a: "Generalmente un anticipo para arrancar y el resto contra entrega. En proyectos más grandes lo dividimos en etapas. Trabajo con transferencia en pesos o dólares, según te quede más cómodo.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.aside}>
          <h2 className="display">Preguntas frecuentes</h2>
          <p className={styles.note}>¿No encontrás la tuya? Escribime y te respondo yo, al instante.</p>
          <SpotlightButton href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" variant="ghost" arrow>
            Hablemos por WhatsApp
          </SpotlightButton>
        </div>

        <Accordion type="single" collapsible className={styles.list}>
          {FAQS.map((item, i) => (
            <AccordionItem key={item.q} value={`item-${i}`} className={styles.item}>
              <AccordionTrigger className={styles.trigger}>{item.q}</AccordionTrigger>
              <AccordionContent className={styles.answer}>{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
