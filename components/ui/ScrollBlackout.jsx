"use client";
import { useEffect, useRef, useState } from "react";
import Noise from "@/components/reactbits/Noise";
import styles from "./ScrollBlackout.module.css";

export function ScrollBlackout() {
  const wrapRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;

    let frame = null;

    const measure = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const travel = rect.height - vh;
      const raw = travel > 0 ? -rect.top / travel : 0;
      setProgress(Math.min(1, Math.max(0, raw)));
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

  return (
    <div ref={wrapRef} className={styles.wrap} aria-hidden="true">
      <div className={styles.sticky}>
        <div className={styles.veil} style={{ opacity: progress }}>
          <Noise patternAlpha={12} patternRefreshInterval={3} />
        </div>
        <div
          className={styles.mark}
          style={{
            opacity: Math.max(0, (progress - 0.35) / 0.4),
            transform: `translateY(${(1 - progress) * 18}px) scale(${0.88 + progress * 0.12})`,
          }}
        />
      </div>
    </div>
  );
}
