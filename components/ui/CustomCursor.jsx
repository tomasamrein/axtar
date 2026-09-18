"use client";
import { useEffect, useRef } from "react";
import styles from "./CustomCursor.module.css";

export function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = -200, mouseY = -200;
    let ringX = -200, ringY = -200;
    let visible = false;
    let raf;

    const onMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // The dot tracks the pointer 1:1, updated on the event itself so it
      // never trails behind the real cursor. The ring is the only easing.
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      if (!visible) {
        visible = true;
        ringX = mouseX;
        ringY = mouseY;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const onOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      ring.classList.toggle(styles.hover, !!interactive);
    };

    const tick = () => {
      // Snappier follow: a higher factor keeps the ring close to the pointer
      // so it reads as trailing, not lagging.
      ringX += (mouseX - ringX) * 0.3;
      ringY += (mouseY - ringY) * 0.3;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
    </>
  );
}
