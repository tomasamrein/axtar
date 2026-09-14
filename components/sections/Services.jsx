import { Badge } from "@/components/ui/Badge";
import styles from "./Services.module.css";

const SERVICES = [
  {
    title: "Desarrollo a medida",
    description: "Productos y plataformas construidos desde cero, con arquitectura pensada para crecer con tu negocio.",
    price: "Desde $900.000 ARS",
  },
  {
    title: "Sitios web",
    description: "Presencia digital profesional para tu negocio o marca personal, lista en semanas, no meses.",
    price: "Desde $450.000 ARS",
  },
  {
    title: "E-commerce",
    description: "Tiendas online rápidas y seguras, listas para vender desde el primer día.",
    price: "Cotización a medida",
  },
  {
    title: "Automatizaciones",
    description: "Flujos a medida que eliminan tareas manuales repetitivas y conectan tus herramientas.",
    price: "Cotización a medida",
  },
  {
    title: "Auditoría y consultoría técnica",
    description: "Diagnóstico honesto de tu stack o proyecto actual, con un plan de acción concreto.",
    price: "Desde $250.000 ARS",
  },
];

export function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.heading}>Lo que hacemos</h2>
        <div className={styles.grid}>
          {SERVICES.map((service, i) => (
            <div key={service.title} className={styles.card}>
              <span className={styles.watermark} aria-hidden="true">
                0{i + 1}
              </span>
              <div className={styles.cardBody}>
                <span className={styles.index}>0{i + 1}</span>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <div className={styles.priceRow}>
                  <Badge tone="copper">{service.price}</Badge>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
