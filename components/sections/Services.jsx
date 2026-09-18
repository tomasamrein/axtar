"use client";
import { useState } from "react";
import Magnet from "@/components/reactbits/Magnet";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Services.module.css";

const SERVICES = [
  {
    id: "custom",
    num: "01",
    title: "Desarrollo a medida",
    tags: ["SISTEMAS", "PLATAFORMAS", "APIS", "BACKEND", "FRONTEND"],
    description: "Productos y plataformas construidos desde cero, con arquitectura pensada para crecer con tu negocio. Sin atajos.",
    price: "Desde $900.000 ARS",
  },
  {
    id: "web",
    num: "02",
    title: "Sitios web",
    tags: ["INSTITUCIONAL", "LANDING", "PORTFOLIO", "SEO"],
    description: "Presencia digital profesional lista en semanas, no meses. Diseño propio, sin templates de cuarta.",
    price: "Desde $450.000 ARS",
  },
  {
    id: "commerce",
    num: "03",
    title: "E-commerce",
    tags: ["TIENDA ONLINE", "PAGOS", "ENVÍOS", "MERCADO LIBRE"],
    description: "Tiendas rápidas y seguras, listas para vender desde el primer día. Integración con tus plataformas.",
    price: "Cotización a medida",
  },
  {
    id: "automation",
    num: "04",
    title: "Automatizaciones",
    tags: ["N8N", "MAKE", "WHATSAPP", "IA", "INTEGRACIONES"],
    description: "Flujos a medida que eliminan tareas repetitivas y conectan tus herramientas sin que tengas que tocar nada.",
    price: "Cotización a medida",
  },
  {
    id: "audit",
    num: "05",
    title: "Auditoría técnica",
    tags: ["DIAGNÓSTICO", "CONSULTORÍA", "PLAN DE ACCIÓN"],
    description: "Diagnóstico honesto de tu stack o proyecto actual, con un plan concreto para saber qué hacer y en qué orden.",
    price: "Desde $250.000 ARS",
  },
];

export function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="servicios" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.kicker}>02 — Qué hacemos</p>
          <h2 className={styles.heading}>
            Cinco formas de construir<br />tu presencia digital
          </h2>
        </div>

        <ul className={styles.list} role="list">
          {SERVICES.map((s) => (
            <li
              key={s.id}
              className={`${styles.row} ${hovered === s.id ? styles.rowActive : ""} ${hovered && hovered !== s.id ? styles.rowDim : ""}`}
              onMouseEnter={() => setHovered(s.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <span className={styles.num} aria-hidden="true">{s.num}</span>

              <div className={styles.left}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.tags}>{s.tags.join(" · ")}</p>
              </div>

              <div className={styles.right}>
                <p className={styles.description}>{s.description}</p>
                <p className={styles.price}>{s.price}</p>
              </div>

              <a
                className={styles.rowCta}
                href={getWhatsAppUrl(
                  `Hola Tomás, vi Axtar Studio y me interesa el servicio de ${s.title.toLowerCase()}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={hovered === s.id ? 0 : -1}
                aria-label={`Consultar sobre ${s.title}`}
              >
                Consultar →
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.footer}>
          <Magnet padding={60} magnetStrength={4}>
            <SpotlightButton
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Hablemos por WhatsApp
            </SpotlightButton>
          </Magnet>
          <p className={styles.footerNote}>Respuesta en menos de 24 horas</p>
        </div>
      </div>
    </section>
  );
}
