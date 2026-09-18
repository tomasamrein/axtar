"use client";
import { useRef, useState } from "react";
import styles from "./SpotlightButton.module.css";

export function SpotlightButton({
  children,
  href,
  variant = "primary",
  size = "md",
  target,
  rel,
  onClick,
  type = "button",
  disabled = false,
}) {
  const ref = useRef(null);
  const [spot, setSpot] = useState(null);

  const onMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const onMouseLeave = () => setSpot(null);

  const cssVars = spot ? { "--sx": `${spot.x}%`, "--sy": `${spot.y}%` } : {};
  const cls = [styles.btn, styles[variant], styles[size], spot ? styles.lit : ""].filter(Boolean).join(" ");
  const shared = { ref, className: cls, style: cssVars, onMouseMove, onMouseLeave, onClick };

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} {...shared}>
        <span className={styles.text}>{children}</span>
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} {...shared}>
      <span className={styles.text}>{children}</span>
    </button>
  );
}
