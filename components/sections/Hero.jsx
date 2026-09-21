"use client";
import { useEffect, useState } from "react";
import Magnet from "@/components/reactbits/Magnet";
import SplitText from "@/components/reactbits/SplitText";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { toast } from "sonner";
import styles from "./Hero.module.css";

const WORDS = ["negocio", "comercio", "empresa"];
const INTERVAL = 3400;

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % WORDS.length), INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleWhatsApp = () => {
    toast("Te respondemos en menos de 24 h", {
      description: "Abriendo WhatsApp…",
      duration: 3000,
    });
    setTimeout(() => window.open(getWhatsAppUrl(), "_blank", "noopener,noreferrer"), 300);
  };

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={`${styles.blob} ${styles.blobA}`} />
        <span className={`${styles.blob} ${styles.blobB}`} />
        <span className={styles.grid} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <p className={styles.meta}>
            <span className={styles.metaDot} aria-hidden="true" />
            Santo Tomé, Argentina · Desde 2023
          </p>

          <h1 className={styles.headline}>
            <SplitText
              tag="span"
              className={styles.bright}
              text="Software hecho a medida"
              splitType="lines"
              textAlign="left"
              delay={60}
              duration={0.85}
              ease="expo.out"
              from={{ opacity: 0, yPercent: 110 }}
              to={{ opacity: 1, yPercent: 0 }}
              threshold={0.05}
              rootMargin="0px"
            />
            <span className={styles.dim}>
              para tu{" "}
              <span className={styles.rotor}>
                <RotatingWord words={WORDS} index={index} />
              </span>
              .
            </span>
          </h1>

          <p className={styles.subhead}>
            Diseño, desarrollo y automatizo productos digitales de punta a punta. Alcance, tiempos y precio claros antes de arrancar — sin promesas genéricas ni intermediarios.
          </p>

          <div className={styles.actions}>
            <Magnet padding={60} magnetStrength={4} wrapperClassName={styles.magnet}>
              <SpotlightButton onClick={handleWhatsApp} variant="primary">
                Empezar proyecto
              </SpotlightButton>
            </Magnet>
            <Magnet padding={60} magnetStrength={4} wrapperClassName={styles.magnet}>
              <SpotlightButton href="#servicios" variant="secondary">
                Ver qué hacemos
              </SpotlightButton>
            </Magnet>
          </div>
        </div>
      </div>
    </section>
  );
}
