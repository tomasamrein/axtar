"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import MagnetLines from "@/components/reactbits/MagnetLines";
import Magnet from "@/components/reactbits/Magnet";
import SplitText from "@/components/reactbits/SplitText";
import { Button } from "@/components/ui/Button";
import { RotatingWord } from "@/components/ui/RotatingWord";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

// La palabra del titular y el mockup de al lado son la misma rotación: cada
// rubro que se nombra es el que se está mostrando.
const SLIDES = [
  { word: "negocio", src: "/muestras/veterinaria.jpg", label: "Huella Norte · clínica veterinaria" },
  { word: "comercio", src: "/muestras/cafe.jpg", label: "Café Raíz · tienda online" },
  { word: "empresa", src: "/muestras/contable.jpg", label: "Ledesma & Asociados · estudio contable" },
];

const WORDS = SLIDES.map((slide) => slide.word);
const INTERVAL = 3200;

export function Hero() {
  const heroRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % SLIDES.length);
    }, INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleMove = useCallback((event) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const mx = (event.clientX - rect.left) / rect.width - 0.5;
    const my = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.setProperty("--mx", mx.toFixed(3));
    el.style.setProperty("--my", my.toFixed(3));
  }, []);

  const handleLeave = useCallback(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.setProperty("--mx", 0);
    el.style.setProperty("--my", 0);
  }, []);

  return (
    <section
      id="top"
      ref={heroRef}
      className={styles.hero}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <div className={styles.lines} aria-hidden="true">
        <MagnetLines
          rows={14}
          columns={14}
          containerSize="min(92vmin, 900px)"
          lineColor="var(--accent-copper)"
          lineWidth="2px"
          lineHeight="2.2vmin"
          baseAngle={-14}
        />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.text}>
          <h1 className={styles.headline}>
            <SplitText
              tag="span"
              className={styles.headlineStatic}
              text="La tecnología detrás del crecimiento de tu"
              splitType="lines"
              textAlign="left"
              delay={90}
              duration={0.9}
              ease="expo.out"
              from={{ opacity: 0, yPercent: 110 }}
              to={{ opacity: 1, yPercent: 0 }}
              threshold={0.05}
              rootMargin="0px"
            />
            <span className={styles.headlineRotor}>
              <RotatingWord words={WORDS} index={index} />
            </span>
          </h1>
          <p className={styles.subhead}>
            Diseñamos, desarrollamos y automatizamos productos digitales para negocios que necesitan algo que funcione, no una promesa genérica.
          </p>
          <div className={styles.actions}>
            <Magnet padding={70} magnetStrength={5} wrapperClassName={styles.magnet}>
              <Button href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer">
                Empecemos tu proyecto
              </Button>
            </Magnet>
            <Button variant="secondary" href="#servicios">
              Ver qué hacemos
            </Button>
          </div>
        </div>

        <div className={styles.showcase}>
          <div className={styles.frame}>
            {SLIDES.map((slide, i) => (
              <Image
                key={slide.src}
                src={slide.src}
                alt={`Landing de muestra para ${slide.label}`}
                width={1440}
                height={900}
                priority={i === 0}
                sizes="(max-width: 1024px) 92vw, 42vw"
                className={styles.shot}
                style={{ opacity: i === index ? 1 : 0 }}
                aria-hidden={i === index ? undefined : true}
              />
            ))}
          </div>
          <p className={styles.frameNote}>{SLIDES[index].label}</p>
        </div>
      </div>
    </section>
  );
}
