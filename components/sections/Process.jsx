"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Process.module.css";

const STEPS = [
  {
    title: "Contacto inicial",
    description: "Nos escribís y contamos con qué contás: la idea, el problema, el contexto del negocio.",
  },
  {
    title: "Evaluación",
    description: "Estudio tu negocio y evalúo qué servicio tiene sentido para vos, sin ofrecerte algo que no necesitás.",
  },
  {
    title: "Propuesta a medida",
    description: "Armo una propuesta 100% personalizada: alcance, tiempos y precio claros antes de arrancar.",
  },
  {
    title: "Desarrollo",
    description: "Construyo el producto con foco y comunicación constante. Sabés en qué etapa está tu proyecto.",
  },
  {
    title: "Entrega, soporte y mantenimiento",
    description: "Entrego, y sigo disponible después: soporte y mantenimiento continuo, no un adiós al facturar.",
  },
];

const LAST = STEPS.length - 1;

export function Process() {
  const wrapRef = useRef(null);
  const [pos, setPos] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let frame = null;

    const measure = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const travel = rect.height - window.innerHeight;
      const raw = travel > 0 ? -rect.top / travel : 0;
      setPos(Math.min(1, Math.max(0, raw)) * LAST);
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const active = Math.round(pos);

  return (
    <section id="proceso" ref={wrapRef} className={styles.section}>
      <div className={styles.sticky}>
        <div className={`container ${styles.inner}`}>
          <div className={styles.top}>
            <h2 className={styles.heading}>Cómo trabajamos</h2>
            <p className={styles.counter}>
              <span className={styles.counterNow}>{String(active + 1).padStart(2, "0")}</span>
              <span className={styles.counterTotal}>/ {String(STEPS.length).padStart(2, "0")}</span>
            </p>
          </div>

          <ol className={styles.stack} style={{ "--pos": pos }}>
            {STEPS.map((step, i) => {
              const distance = Math.abs(i - pos);
              const near = Math.max(0, 1 - distance);
              return (
                <li
                  key={step.title}
                  className={styles.step}
                  aria-current={i === active ? "step" : undefined}
                  style={{
                    opacity: 0.18 + near * 0.82,
                    "--near": near,
                  }}
                >
                  <h3 className={styles.title}>{step.title}</h3>
                  <p className={styles.description} style={{ opacity: Math.max(0, near * 2 - 1) }}>
                    {step.description}
                  </p>
                </li>
              );
            })}
          </ol>

          <div className={styles.rail} aria-hidden="true">
            <span className={styles.railFill} style={{ scale: `${pos / LAST} 1` }} />
          </div>
        </div>
      </div>
    </section>
  );
}
