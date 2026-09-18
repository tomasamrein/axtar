"use client";
import React, { useState } from "react";

const SIZES = {
  md: { padY: 14, padX: 26, font: "var(--text-base)" },
  sm: { padY: 10, padX: 20, font: "var(--text-sm)" },
};

const BASE = {
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  letterSpacing: "var(--tracking-tight)",
  border: "1.5px solid transparent",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  textDecoration: "none",
  borderRadius: "9999px",
  cursor: "none",
  transition:
    "background 180ms, color 180ms, border-color 180ms, transform 140ms cubic-bezier(0.16,1,0.3,1), box-shadow 180ms",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  icon = null,
  onClick,
  type = "button",
  href,
  target,
  rel,
}) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;

  const padding = { padding: `${s.padY}px ${s.padX}px`, fontSize: s.font };
  const opacity = { opacity: disabled ? 0.4 : 1 };

  const variants = {
    primary: {
      background: hover ? "var(--accent-copper-hover)" : "var(--accent-copper)",
      color: "var(--ink-950)",
      borderColor: "var(--accent-copper)",
      boxShadow: hover ? "0 0 24px 3px oklch(64% 0.15 45 / 0.35)" : "none",
      transform: active ? "scale(0.97)" : hover ? "scale(1.04)" : "scale(1)",
    },
    dark: {
      background: hover ? "oklch(20% 0.007 55)" : "var(--ink-950)",
      color: "var(--ink-000)",
      borderColor: "var(--ink-950)",
      transform: active ? "scale(0.97)" : hover ? "scale(1.04)" : "scale(1)",
    },
    secondary: {
      background: "transparent",
      color: hover ? "var(--accent-copper)" : "var(--ink-000)",
      borderColor: hover ? "var(--accent-copper)" : "oklch(38% 0.006 55)",
      transform: active ? "scale(0.97)" : hover ? "scale(1.03)" : "scale(1)",
    },
    ghost: {
      background: "transparent",
      color: hover ? "var(--accent-copper)" : "var(--ink-300)",
      border: "none",
      textDecoration: hover ? "underline" : "none",
      textUnderlineOffset: "4px",
    },
    inverse: {
      background: hover ? "var(--ink-000)" : "var(--accent-copper)",
      color: "var(--ink-950)",
      borderColor: hover ? "var(--ink-000)" : "var(--accent-copper)",
      transform: active ? "scale(0.97)" : hover ? "scale(1.04)" : "scale(1)",
    },
  };

  const style = {
    ...BASE,
    ...padding,
    ...opacity,
    ...(variants[variant] || variants.primary),
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  if (href && !disabled) {
    return (
      <a href={href} target={target} rel={rel} onClick={onClick} style={style} {...handlers}>
        {icon}
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} style={style} {...handlers}>
      {icon}
      {children}
    </button>
  );
}
