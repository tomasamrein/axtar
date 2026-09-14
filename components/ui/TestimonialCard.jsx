import React from 'react';

export function TestimonialCard({ quote, name, role, company }) {
  return (
    <figure style={{
      margin: 0,
      background: 'var(--surface-inverse)',
      color: 'var(--text-inverse)',
      border: 'var(--border-w-thick) solid var(--ink-950)',
      boxShadow: 'var(--shadow-hard-inverse)',
      clipPath: 'polygon(var(--cut-md) 0, 100% 0, 100% 100%, 0 100%, 0 var(--cut-md))',
      padding: '32px 28px',
      display: 'flex', flexDirection: 'column', gap: 20,
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 1, color: 'var(--accent-copper)' }}>&#8221;</div>
      <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-lg)', fontWeight: 500, lineHeight: 'var(--leading-snug)', letterSpacing: 'var(--tracking-tight)' }}>
        {quote}
      </blockquote>
      <figcaption style={{ display: 'flex', flexDirection: 'column', gap: 2, paddingTop: 8, borderTop: 'var(--border-w) solid var(--ink-700)' }}>
        <span style={{ fontWeight: 700, fontSize: 'var(--text-sm)' }}>{name}</span>
        <span style={{ fontSize: 'var(--text-xs)', color: 'var(--text-muted-inverse)' }}>{role} · {company}</span>
      </figcaption>
    </figure>
  );
}
