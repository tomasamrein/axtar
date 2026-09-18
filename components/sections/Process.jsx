"use client";
import { useEffect, useRef, useState } from "react";
import { SpotlightButton } from "@/components/ui/SpotlightButton";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import styles from "./Process.module.css";

// The whole funnel ends in WhatsApp, so we don't *describe* the process — we
// let a real thread play it out. Each message quietly carries one of the old
// steps: contacto, evaluación, honestidad (no vender de más), propuesta, soporte.
const MESSAGES = [
  { from: "you", text: "Hola 👋 Tengo una idea para mi negocio pero no sé por dónde arrancar.", at: "9:41" },
  { from: "axtar", text: "Contame: ¿qué querés resolver?", at: "9:41" },
  { from: "you", text: "Quiero vender online. ¿Necesito una app?", at: "9:42" },
  { from: "axtar", text: "Con una tienda web te alcanza. Una app sería gastar de más.", at: "9:42" },
  { from: "axtar", text: "Te armo la propuesta: alcance, tiempos y precio cerrados antes de arrancar.", at: "9:43" },
  { from: "you", text: "¿Y después de la entrega?", at: "9:44" },
  { from: "axtar", text: "Seguimos. Soporte y mantenimiento — no desaparezco al facturar.", at: "9:44" },
];

export function Process() {
  const bodyRef = useRef(null);
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = bodyRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCount(MESSAGES.length);
      return;
    }

    const timers = [];
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      let t = 500;
      MESSAGES.forEach((m, i) => {
        if (m.from === "axtar") {
          timers.push(setTimeout(() => setTyping(true), t));
          t += 950;
          timers.push(
            setTimeout(() => {
              setTyping(false);
              setCount(i + 1);
            }, t)
          );
          t += 450;
        } else {
          timers.push(setTimeout(() => setCount(i + 1), t));
          t += 750;
        }
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          run();
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  // Keep the newest message in view as the thread fills.
  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [count, typing]);

  const shown = MESSAGES.slice(0, count);

  return (
    <section id="proceso" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>Cómo trabajamos</p>
          <h2 className={styles.heading}>Todo empieza con un mensaje.</h2>
          <p className={styles.lead}>
            Sin formularios, sin reuniones eternas, sin promesas genéricas. Me escribís, entiendo tu
            negocio y te paso una propuesta clara: alcance, tiempos y precio antes de arrancar. Y
            cuando entrego, sigo estando.
          </p>
          <SpotlightButton
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            variant="primary"
          >
            Escribime ahora
          </SpotlightButton>
        </div>

        <div className={styles.chat} aria-label="Ejemplo de una conversación con Axtar Studio">
          <header className={styles.chatHeader}>
            <span className={styles.avatar} aria-hidden="true">A</span>
            <span className={styles.chatMeta}>
              <span className={styles.chatName}>Axtar Studio</span>
              <span className={styles.chatStatus}>en línea</span>
            </span>
          </header>

          <div className={styles.thread} ref={bodyRef}>
            {shown.map((m, i) => (
              <div
                key={i}
                className={`${styles.bubble} ${m.from === "you" ? styles.you : styles.axtar}`}
              >
                <span className={styles.text}>{m.text}</span>
                <span className={styles.stamp}>
                  {m.at}
                  {m.from === "you" && (
                    <svg className={styles.ticks} viewBox="0 0 18 12" aria-hidden="true">
                      <path d="M1 6.5 4 9.5 9.5 3M7 8l1 1 5.5-6.5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </span>
              </div>
            ))}

            {typing && (
              <div className={`${styles.bubble} ${styles.axtar} ${styles.typing}`} aria-hidden="true">
                <span className={styles.dot} />
                <span className={styles.dot} />
                <span className={styles.dot} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
