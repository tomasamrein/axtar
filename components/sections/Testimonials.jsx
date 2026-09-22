"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  { quote: "El sitio quedó mejor de lo que me imaginaba, y lo tuve funcionando antes de lo prometido — sin sorpresas en el precio.", name: "Marina Souto", role: "Dueña", company: "Café Raíz" },
  { quote: "Un domingo le mandé un audio contándole la idea. El lunes ya tenía la propuesta lista, con precio y todo.", name: "Nicolás Ferrero", role: "Fundador", company: "Navaja Style" },
  { quote: "Desde que automatizamos los turnos nos liberamos casi dos horas por día que antes se iban en llamados.", name: "Valeria Duarte", role: "Gerente", company: "Huella Norte" },
  { quote: "Cuando escribo, me responde él. No tengo que repetir la misma explicación tres veces a personas distintas.", name: "Ezequiel Rossi", role: "Socio", company: "Ledesma & Asociados" },
  { quote: "Llegamos con la tienda lista justo antes de la temporada alta. Ese timing solo ya valió la inversión.", name: "Camila Ortiz", role: "Fundadora", company: "Estudio Lino" },
  { quote: "Necesitábamos conectar tres sistemas que no se hablaban entre sí. Lo resolvió en menos tiempo del que nos habían cotizado en otro lado.", name: "Julián Prieto", role: "CTO", company: "Ruta Norte" },
];

const RADIUS_X = 320;
const RADIUS_Y = 150;
const CARD_W = 260;
const CARD_H = 180;
const CARD_W_MOBILE = 220;
const CARD_H_MOBILE = 170;

function round(value, decimals) {
  const factor = 10 ** decimals;
  return Math.round(value * factor) / factor;
}

export function Testimonials() {
  const [rotation, setRotation] = useState(0);
  const [radius, setRadius] = useState({ x: RADIUS_X, y: RADIUS_Y });
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const wheelRef = useRef(null);

  useEffect(() => {
    const el = wheelRef.current;
    if (!el) return;

    const measure = () => {
      const { width, height } = el.getBoundingClientRect();
      const isMobile = window.innerWidth <= 640;
      const cardW = isMobile ? CARD_W_MOBILE : CARD_W;
      const cardH = isMobile ? CARD_H_MOBILE : CARD_H;
      // Worst-case scale at max X offset is always 0.845 (depth 0.5) and at
      // max Y offset is 1.07 (depth 1) — see the transform math in render.
      const maxX = width / 2 - (cardW / 2) * 0.845 - 16;
      const maxY = height / 2 - (cardH / 2) * 1.07 - 16;
      setRadius({
        x: Math.max(40, Math.min(RADIUS_X, maxX)),
        y: Math.max(40, Math.min(RADIUS_Y, maxY)),
      });
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = requestAnimationFrame(function step() {
      if (!draggingRef.current) setRotation((r) => r + 0.05);
      raf = requestAnimationFrame(step);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  const onPointerMove = useCallback((e) => {
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    setRotation((r) => r + dx * 0.35);
  }, []);

  const onPointerUp = useCallback(() => {
    draggingRef.current = false;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", onPointerUp);
  }, [onPointerMove]);

  const onPointerDown = useCallback(
    (e) => {
      draggingRef.current = true;
      lastXRef.current = e.clientX;
      window.addEventListener("pointermove", onPointerMove);
      window.addEventListener("pointerup", onPointerUp);
    },
    [onPointerMove, onPointerUp]
  );

  useEffect(
    () => () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
    },
    [onPointerMove, onPointerUp]
  );

  const n = TESTIMONIALS.length;

  return (
    <section id="testimonios" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <p className={styles.kicker}>Lo que dicen</p>
          <h2 className={styles.heading}>Clientes que ya trabajaron conmigo</h2>
          <p className={styles.note}>Arrastrá para ver todas las reseñas.</p>
        </div>

        <div
          ref={wheelRef}
          className={styles.wheel}
          onPointerDown={onPointerDown}
          role="group"
          aria-label="Reseñas de clientes, arrastrá para girar"
        >
          {TESTIMONIALS.map((t, i) => {
            const angleDeg = (360 / n) * i + rotation;
            const rad = (angleDeg * Math.PI) / 180;
            // Rounded to a few decimals so the server-rendered attribute string
            // matches what the browser reflects back — long float precision
            // gets reformatted on parse and trips a hydration mismatch otherwise.
            const x = round(Math.cos(rad) * radius.x, 2);
            const y = round(Math.sin(rad) * radius.y, 2);
            const depth = (Math.sin(rad) + 1) / 2;
            const scale = round(0.62 + depth * 0.45, 4);
            const opacity = round(0.3 + depth * 0.7, 4);
            const z = Math.round(depth * 100);

            return (
              <figure
                key={t.name}
                className={styles.card}
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${scale})`,
                  opacity,
                  zIndex: z,
                }}
              >
                <div className={styles.mark} aria-hidden="true">”</div>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <figcaption className={styles.caption}>
                  <span className={styles.name}>{t.name}</span>
                  <span className={styles.role}>
                    {t.role} · {t.company}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
