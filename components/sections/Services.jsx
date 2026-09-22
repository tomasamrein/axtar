"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Magnet from "@/components/reactbits/Magnet";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Services.module.css";

const SERVICES = [
  {
    id: "web",
    num: "01",
    title: "Sitios web",
    tags: ["INSTITUCIONAL", "LANDING", "PORTFOLIO", "SEO"],
    description: "Presencia digital profesional lista en semanas, no meses. Diseño propio, sin templates de cuarta.",
    price: "Desde $400.000 ARS",
    image: "/servicios/sitios-web.jpg",
  },
  {
    id: "custom",
    num: "02",
    title: "Desarrollo a medida",
    tags: ["SISTEMAS", "PLATAFORMAS", "APIS", "BACKEND"],
    description: "Productos y plataformas construidos desde cero, con arquitectura pensada para crecer con tu negocio. Sin atajos.",
    price: "Desde $900.000 ARS",
    image: "/servicios/desarrollo-medida.jpg",
  },
  {
    id: "commerce",
    num: "03",
    title: "E-commerce",
    tags: ["TIENDA ONLINE", "PAGOS", "ENVÍOS", "MERCADO LIBRE"],
    description: "Tiendas rápidas y seguras, listas para vender desde el primer día. Integración con tus plataformas.",
    price: "Cotización a medida",
    image: "/servicios/ecommerce.jpg",
  },
  {
    id: "automation",
    num: "04",
    title: "Automatizaciones",
    tags: ["N8N", "MAKE", "WHATSAPP", "IA"],
    description: "Flujos a medida que eliminan tareas repetitivas y conectan tus herramientas sin que tengas que tocar nada.",
    price: "Cotización a medida",
    image: "/servicios/automatizaciones.jpg",
  },
];

export function Services() {
  const [active, setActive] = useState(0);
  const rowRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = rowRefs.current.indexOf(entry.target);
            if (idx !== -1) setActive(idx);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    rowRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const current = SERVICES[active];

  return (
    <section id="servicios" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.kicker}>02 — Qué hacemos</p>
          <h2 className={styles.heading}>De tu sitio al sistema completo, en un mismo lugar</h2>
        </div>

        <div className={styles.layout}>
          <div className={styles.panel}>
            <div className={styles.panelImageWrap}>
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="(max-width: 900px) 92vw, 40vw"
                className={styles.panelImage}
              />
              <div className={styles.panelFade} aria-hidden="true" />
              <span className={styles.panelNum}>{current.num} / 04</span>
            </div>
            <div className={styles.panelBody}>
              <h3 className={styles.panelTitle}>{current.title}</h3>
              <p className={styles.panelDesc}>{current.description}</p>
              <div className={styles.panelFooter}>
                <span className={styles.panelPrice}>{current.price}</span>
                <a
                  className={styles.panelCta}
                  href={getWhatsAppUrl(
                    `Hola Tomás, vi Axtar Studio y me interesa el servicio de ${current.title.toLowerCase()}.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultar →
                </a>
              </div>
            </div>
          </div>

          <ul className={styles.list} role="list">
            {SERVICES.map((s, i) => (
              <li
                key={s.id}
                ref={(el) => {
                  rowRefs.current[i] = el;
                }}
                className={`${styles.row} ${i === active ? styles.rowActive : ""}`}
              >
                <div className={styles.rowImageWrap}>
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="92vw"
                    className={styles.rowImage}
                  />
                </div>
                <div className={styles.rowHead}>
                  <span className={styles.num}>{s.num}</span>
                  <h3 className={styles.title}>{s.title}</h3>
                </div>
                <p className={styles.tags}>{s.tags.join(" · ")}</p>
                <p className={styles.description}>{s.description}</p>
                <div className={styles.rowFooter}>
                  <p className={styles.price}>{s.price}</p>
                  <a
                    className={styles.rowCta}
                    href={getWhatsAppUrl(
                      `Hola Tomás, vi Axtar Studio y me interesa el servicio de ${s.title.toLowerCase()}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar →
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

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
