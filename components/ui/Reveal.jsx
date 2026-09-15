"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./Reveal.module.css";

export function Reveal({ children, className = "", as: Tag = "div", stagger = false, ...rest }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const classes = [
    styles.reveal,
    stagger ? styles.stagger : "",
    visible ? styles.visible : "",
    className,
  ].filter(Boolean).join(" ");

  return (
    <Tag ref={ref} className={classes} {...rest}>
      {children}
    </Tag>
  );
}
