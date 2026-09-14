"use client";
import React, { useState } from 'react';

const SIZES = {
  md: { padY: 14, padX: 24, font: 'var(--text-base)' },
  sm: { padY: 10, padX: 18, font: 'var(--text-sm)' },
};

export function Button({ children, variant = 'primary', size = 'md', disabled = false, icon = null, onClick, type = 'button', href, target, rel }) {
  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);
  const s = SIZES[size] || SIZES.md;

  const base = {
    fontFamily: 'var(--font-display)',
    fontWeight: 600,
    fontSize: s.font,
    letterSpacing: 'var(--tracking-tight)',
    padding: `${s.padY}px ${s.padX}px`,
    border: 'var(--border-w-thick) solid var(--ink-950)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 10,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    textDecoration: 'none',
    transition: 'transform var(--duration-fast) var(--ease), box-shadow var(--duration-fast) var(--ease), background var(--duration) var(--ease)',
    clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - var(--cut-sm)), calc(100% - var(--cut-sm)) 100%, 0 100%)',
  };

  const variants = {
    primary: { background: hover ? 'var(--accent-copper)' : 'var(--ink-950)', color: 'var(--ink-000)', borderColor: 'var(--ink-950)' },
    secondary: { background: hover ? 'var(--ink-950)' : 'var(--ink-000)', color: hover ? 'var(--ink-000)' : 'var(--ink-950)', borderColor: 'var(--ink-950)' },
    ghost: { background: 'transparent', color: 'var(--ink-950)', border: 'none', clipPath: 'none', textDecoration: hover ? 'underline' : 'none', textUnderlineOffset: 4 },
  };

  const shadow = variant === 'ghost' ? {} : { boxShadow: active ? '2px 2px 0 0 var(--ink-950)' : hover ? '4px 4px 0 0 var(--ink-950)' : 'var(--shadow-hard-sm)', transform: active ? 'translate(2px,2px)' : hover ? 'translate(0,0)' : 'translate(-4px,-4px)', marginRight: variant === 'ghost' ? 0 : 4, marginBottom: variant === 'ghost' ? 0 : 4 };

  const style = { ...base, ...variants[variant], ...shadow };

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
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...handlers}
    >
      {icon}
      {children}
    </button>
  );
}
