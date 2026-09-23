"use client";
import Image from "next/image";
import { ArrowUpRight, ShoppingBag, Workflow } from "lucide-react";
import SpotlightCard from "@/components/reactbits/SpotlightCard";
import { Reveal } from "@/components/ui/Reveal";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Services.module.css";

const SERVICES = [
  {
    id: "web",
    title: "Sitios web",
    description: "Presencia profesional lista en semanas, no meses. Diseño propio, rápida y pensada para que te escriban.",
    tags: ["Institucional", "Landing", "Aparecer en Google"],
    price: "Desde $400.000 ARS",
    image: "/servicios/sitios-web.jpg",
  },
  {
    id: "custom",
    title: "Sistemas a medida",
    description: "Gestión, turnos, stock o facturación: software construido para cómo trabaja tu negocio, no al revés.",
    tags: ["Gestión", "Turnos", "Facturación"],
    price: "Desde $900.000 ARS",
    image: "/servicios/desarrollo-medida.jpg",
  },
  {
    id: "commerce",
    title: "E-commerce",
    description: "Tiendas rápidas y seguras, con pagos y envíos integrados, listas para vender desde el primer día.",
    tags: ["Tienda online", "Mercado Pago", "Envíos"],
    price: "Cotización a medida",
    Icon: ShoppingBag,
  },
  {
    id: "automation",
    title: "IA y automatizaciones",
    description: "Agentes de IA y flujos automáticos que atienden, responden y hacen las tareas repetitivas por vos, WhatsApp incluido.",
    tags: ["Agentes de IA", "WhatsApp", "Asesoramiento"],
    price: "Cotización a medida",
    Icon: Workflow,
  },
];

export function Services() {
  return (
    <section id="servicios" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <h2 className="display">De tu sitio al sistema completo, en un mismo lugar.</h2>
          <p className="lead">Un solo responsable de punta a punta: diseño, desarrollo y el soporte que viene después.</p>
        </header>

        <Reveal as="ul" className={styles.grid} stagger>
          {SERVICES.map((s) => (
            <li key={s.id} className={`${styles.cell} ${styles[s.id]}`}>
              <SpotlightCard className={styles.card} spotlightColor="oklch(62% 0.22 266 / 0.22)">
                {s.image ? (
                  <div className={styles.media}>
                    <Image src={s.image} alt="" fill sizes="(max-width: 900px) 92vw, 45vw" className={styles.img} />
                  </div>
                ) : (
                  <span className={styles.iconWrap} aria-hidden="true">
                    <s.Icon strokeWidth={1.5} />
                  </span>
                )}

                <div className={styles.body}>
                  <h3 className={styles.title}>{s.title}</h3>
                  <p className={styles.desc}>{s.description}</p>
                  <ul className={styles.tags} aria-label="Incluye">
                    {s.tags.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <div className={styles.foot}>
                    <span className={styles.price}>{s.price}</span>
                    <a
                      className={styles.link}
                      href={getWhatsAppUrl(`Hola Tomás, vi Axtar Studio y me interesa el servicio de ${s.title.toLowerCase()}.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Consultar por ${s.title}`}
                    >
                      Consultar
                      <ArrowUpRight strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </SpotlightCard>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
