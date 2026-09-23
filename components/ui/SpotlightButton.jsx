"use client";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import styles from "./SpotlightButton.module.css";

export function SpotlightButton({
  children,
  href,
  variant = "primary",
  size = "md",
  arrow = false,
  target,
  rel,
  onClick,
  type = "button",
  className = "",
}) {
  const ref = useRef(null);

  // Written straight to the element: pointer position never goes through React state.
  const onPointerMove = (e) => {
    const el = ref.current;
    if (!el || e.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--sx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--sy", `${e.clientY - rect.top}px`);
  };

  const cls = [styles.btn, styles[variant], styles[size], className].filter(Boolean).join(" ");
  const content = (
    <>
      <span className={styles.text}>{children}</span>
      {arrow && <ArrowUpRight className={styles.icon} strokeWidth={1.75} aria-hidden="true" />}
    </>
  );

  if (href) {
    return (
      <a ref={ref} href={href} target={target} rel={rel} className={cls} onPointerMove={onPointerMove} onClick={onClick}>
        {content}
      </a>
    );
  }

  return (
    <button ref={ref} type={type} className={cls} onPointerMove={onPointerMove} onClick={onClick}>
      {content}
    </button>
  );
}
