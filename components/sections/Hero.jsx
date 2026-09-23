"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import CardSwap, { Card } from "@/components/reactbits/CardSwap";
import RotatingText from "@/components/reactbits/RotatingText";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Hero.module.css";

// WebGL stays out of the server bundle and off the critical path.
const LightRays = dynamic(() => import("@/components/reactbits/LightRays"), { ssr: false });

const WORDS = ["negocio", "comercio", "PyME", "empresa"];

// Solo landings: el hero muestra el trabajo de diseño web, los sistemas van más abajo.
const VERDE = "estudio-verde-jade.vercel.app";
const FERREYRA = "estudio-ferreyra-seven.vercel.app";
const STACK = [
  { src: "/proyectos/estudio-verde.jpg", host: VERDE, label: "Estudio Verde", alt: "Portada de Estudio Verde, arquitectura y paisajismo" },
  { src: "/proyectos/estudio-ferreyra.jpg", host: FERREYRA, label: "Ferreyra & Asociados", alt: "Portada de Ferreyra & Asociados, estudio contable" },
  { src: "/proyectos/landing-verde-enfoque.jpg", host: `${VERDE}/#enfoque`, label: "Estudio Verde · Enfoque", alt: "Sección de enfoque de Estudio Verde sobre fondo verde oscuro" },
  { src: "/proyectos/landing-ferreyra-confianza.jpg", host: `${FERREYRA}/#confianza`, label: "Ferreyra · Confianza", alt: "Sección de confianza de Ferreyra & Asociados con los 15 años del estudio" },
  { src: "/proyectos/landing-verde-antes-despues.jpg", host: `${VERDE}/#antes-despues`, label: "Estudio Verde · Antes y después", alt: "Comparador de antes y después de una fachada en Estudio Verde" },
  { src: "/proyectos/landing-ferreyra-nosotros.jpg", host: `${FERREYRA}/#nosotros`, label: "Ferreyra · Nosotros", alt: "Sección de socios de Ferreyra & Asociados con sus retratos" },
];

export function Hero() {
  const reduce = useReducedMotion();
  const motionOk = !reduce;
  const swapRef = useRef(null);
  const [front, setFront] = useState(0);
  const next = () => swapRef.current?.next();

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        {motionOk && (
          <LightRays
            raysOrigin="top-center"
            raysColor="#5b7cff"
            raysSpeed={0.7}
            lightSpread={0.9}
            rayLength={1.6}
            fadeDistance={1.1}
            followMouse
            mouseInfluence={0.06}
            className={styles.rays}
          />
        )}
        <span className={styles.glow} />
      </div>

      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1 className={styles.headline}>
            <span className={styles.line}>
              Llevamos tu{" "}
              <RotatingText
                texts={WORDS}
                mainClassName={styles.rotor}
                splitLevelClassName={styles.rotorSplit}
                staggerFrom="first"
                staggerDuration={0.02}
                initial={{ y: "105%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-110%", opacity: 0 }}
                transition={{ type: "spring", damping: 28, stiffness: 320 }}
                rotationInterval={2800}
                auto={motionOk}
              />
            </span>
            <span className={styles.line}>a la era de la IA.</span>
          </h1>

          <p className={styles.sub}>
            Construimos sitios web y software a medida que te ponen un paso adelante, y te acompañamos a sumar inteligencia artificial a tu empresa con asesoramiento cercano.
          </p>

          <div className={styles.actions}>
            <SpotlightButton href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" arrow>
              Hablemos por WhatsApp
            </SpotlightButton>
            <SpotlightButton href="#proyectos" variant="ghost">
              Ver proyectos
            </SpotlightButton>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.stackScale}>
            <CardSwap
              width={520}
              height={360}
              cardDistance={44}
              verticalDistance={50}
              delay={2800}
              skewAmount={4}
              easing="smooth"
              pauseOnHover
              controlRef={swapRef}
              onChange={setFront}
              onCardClick={next}
            >
              {STACK.map((item, i) => (
                <Card key={item.src} customClass={styles.card}>
                  <div className={styles.chrome} aria-hidden="true">
                    <span className={styles.dots}>
                      <i />
                      <i />
                      <i />
                    </span>
                    <span className={styles.url}>{item.host}</span>
                  </div>
                  <div className={styles.shot}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="520px"
                      priority={i === 0}
                      className={styles.shotImg}
                    />
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

          <div className={styles.controls}>
            <p className={styles.nowShowing} aria-live="polite">
              <span className={styles.count}>
                {String(front + 1).padStart(2, "0")} / {String(STACK.length).padStart(2, "0")}
              </span>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={STACK[front].label}
                  className={styles.label}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6, filter: "blur(3px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, y: -6, filter: "blur(3px)" }}
                  transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                >
                  {STACK[front].label}
                </motion.span>
              </AnimatePresence>
            </p>
            <button type="button" className={styles.next} onClick={next} aria-label="Ver el siguiente proyecto">
              <ArrowRight strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
