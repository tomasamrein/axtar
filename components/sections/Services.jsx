"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/shadcn/tabs";
import { Button } from "@/components/ui/Button";
import { ServiceSchematic } from "@/components/ui/ServiceSchematic";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Services.module.css";

const SERVICES = [
  {
    id: "custom",
    title: "Desarrollo a medida",
    description:
      "Productos y plataformas construidos desde cero, con arquitectura pensada para crecer con tu negocio.",
    price: "Desde $900.000 ARS",
  },
  {
    id: "web",
    title: "Sitios web",
    description: "Presencia digital profesional para tu negocio o marca personal, lista en semanas, no meses.",
    price: "Desde $450.000 ARS",
  },
  {
    id: "commerce",
    title: "E-commerce",
    description: "Tiendas online rápidas y seguras, listas para vender desde el primer día.",
    price: "Cotización a medida",
  },
  {
    id: "automation",
    title: "Automatizaciones",
    description: "Flujos a medida que eliminan tareas manuales repetitivas y conectan tus herramientas.",
    price: "Cotización a medida",
  },
  {
    id: "audit",
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

        <Tabs defaultValue="custom" orientation="vertical" className={styles.tabs}>
          <TabsList variant="line" className={styles.list}>
            {SERVICES.map((service) => (
              <TabsTrigger key={service.id} value={service.id} className={styles.trigger}>
                <span className={styles.triggerTitle}>{service.title}</span>
                <span className={styles.triggerPrice}>{service.price}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {SERVICES.map((service) => (
            <TabsContent key={service.id} value={service.id} className={styles.panel}>
              <div className={styles.panelText}>
                <h3 className={styles.panelTitle}>{service.title}</h3>
                <p className={styles.panelDescription}>{service.description}</p>
                <p className={styles.panelPrice}>{service.price}</p>
                <Button
                  variant="inverse"
                  href={getWhatsAppUrl(
                    `Hola Tomás, vi la web de Axtar Studio y me interesa el servicio de ${service.title.toLowerCase()}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar por este servicio
                </Button>
              </div>
              <div className={styles.panelArt}>
                <ServiceSchematic variant={service.id} />
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
