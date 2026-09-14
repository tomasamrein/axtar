import React from 'react';

const TONES = {
  ink: { background: 'var(--ink-950)', color: 'var(--ink-000)', border: 'var(--ink-950)' },
  outline: { background: 'transparent', color: 'var(--ink-950)', border: 'var(--ink-950)' },
  copper: { background: 'var(--accent-copper-dim)', color: 'var(--ink-950)', border: 'var(--accent-copper)' },
  teal: { background: 'var(--accent-teal-dim)', color: 'var(--ink-950)', border: 'var(--accent-teal)' },
};

export function Badge({ children, tone = 'outline' }) {
  const t = TONES[tone] || TONES.outline;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', alignSelf: 'flex-start', flexShrink: 0,
      fontFamily: 'var(--font-display)', fontWeight: 600,
      fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
      padding: '6px 12px', border: `var(--border-w) solid ${t.border}`,
      background: t.background, color: t.color,
      clipPath: 'polygon(0 0, 100% 0, 100% 100%, var(--cut-sm) 100%)',
    }}>{children}</span>
  );
}
