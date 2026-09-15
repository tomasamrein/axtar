import React from 'react';

export function TestimonialCard({ quote, name, role, company }) {
  return (
    <figure style={{
      margin: 0,
      background: 'var(--ink-000)',
      color: 'var(--ink-950)',
      border: 'var(--border-w-thick) solid var(--ink-000)',
      boxShadow: '10px 10px 0 0 var(--accent-copper)',
      clipPath: 'polygon(var(--cut-md) 0, 100% 0, 100% 100%, 0 100%, 0 var(--cut-md))',
      padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 20,
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 1, color: 'var(--accent-copper)' }}>&#8221;</div>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)' }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 8, borderTop: 'var(--border-w) solid var(--ink-150)' }}>
        <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{name}</span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{role} · {company}</span>
      </figcaption>
    </figure>
  );
}
