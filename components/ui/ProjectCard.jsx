"use client";
import React, { useState } from 'react';

export function ProjectCard({ title, client, tags = [], year, imageSlotId }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: 'var(--surface)',
        border: 'var(--border-w-thick) solid var(--ink-950)',
        boxShadow: hover ? '10px 10px 0 0 var(--ink-950)' : 'var(--shadow-hard)',
        transform: hover ? 'translate(-2px,-2px)' : 'none',
        transition: 'box-shadow var(--duration) var(--ease), transform var(--duration) var(--ease)',
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, var(--cut-md) 100%, 0 calc(100% - var(--cut-md)))',
        display: 'flex', flexDirection: 'column',
        fontFamily: 'var(--font-body)',
        overflow: 'hidden',
      }}
    >
      <div style={{ aspectRatio: '16/10', background: 'var(--ink-100)', borderBottom: 'var(--border-w) solid var(--ink-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-500)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}>
        {imageSlotId ? `imagen: ${imageSlotId}` : 'captura del proyecto'}
      </div>
      <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <span style={{ fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--ink-700)' }}>{client}</span>
          <span style={{ fontSize: 'var(--text-xs)', color: 'var(--ink-500)' }}>{year}</span>
        </div>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', fontWeight: 600, letterSpacing: 'var(--tracking-tight)', lineHeight: 'var(--leading-snug)' }}>{title}</h3>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 4 }}>
          {tags.map((t, i) => (
            <span key={i} style={{ fontSize: 'var(--text-xs)', fontWeight: 600, padding: '4px 10px', border: 'var(--border-w) solid var(--ink-150)', color: 'var(--ink-700)' }}>{t}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
