"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Check } from "lucide-react";
import DepthCarousel from "@/components/reactbits/DepthCarousel";
import { WEBSITES } from "@/lib/projects";
import styles from "./Websites.module.css";

const ITEMS = WEBSITES.map((w) => ({ image: w.image, alt: `${w.name}, ${w.kind}` }));

export function Websites() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const site = WEBSITES[index];

  return (
    <section id="proyectos" className={styles.section}>
      <div className="container">
        <header className={styles.header}>
          <p className="eyebrow">Proyectos</p>
          <h2 className="display">Sitios que se sienten hechos para cada negocio.</h2>
        </header>

        <div className={styles.layout}>
          <div className={styles.stage}>
            <DepthCarousel
              items={ITEMS}
              cardWidth={600}
              cardHeight={375}
              radius={14}
              tint="#070912"
              depth={150}
              spread={120}
              tilt={14}
              visibleCards={2}
              falloff={0.28}
              blur={0}
              duration={650}
              ease="expo.out"
              showIndicators
              onChange={(i) => setIndex(i)}
              ariaLabel="Sitios web, usá las flechas para recorrerlos"
              className={styles.carousel}
            />
          </div>

          <div className={styles.panel} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.article
                key={site.slug}
                className={styles.detail}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(4px)" }}
                transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
              >
                <div className={styles.meta}>
                  <span className={site.label === "Cliente" ? styles.badgeClient : styles.badge}>{site.label}</span>
                  <span className={styles.kind}>{site.kind}</span>
                </div>

                <h3 className={styles.name}>{site.name}</h3>
                <p className={styles.summary}>{site.summary}</p>

                <ul className={styles.highlights}>
                  {site.highlights.map((h) => (
                    <li key={h}>
                      <Check strokeWidth={2} aria-hidden="true" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className={styles.foot}>
                  <span className={styles.stack}>{site.url ? "Sitio en línea" : "Sistema privado del cliente"}</span>
                  {site.url && (
                    <a className={styles.visit} href={site.url} target="_blank" rel="noopener noreferrer">
                      Ver sitio
                      <ArrowUpRight strokeWidth={1.75} aria-hidden="true" />
                    </a>
                  )}
                </div>
              </motion.article>
            </AnimatePresence>

            <p className={styles.counter} aria-hidden="true">
              <span>{String(index + 1).padStart(2, "0")}</span> / {String(WEBSITES.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
