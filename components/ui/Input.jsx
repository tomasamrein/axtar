"use client";
import React, { useState } from 'react';

export function Input({ label, placeholder, type = 'text', textarea = false, error, required = false, value, onChange }) {
  const [focused, setFocused] = useState(false);
  const Tag = textarea ? 'textarea' : 'input';
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8, fontFamily: 'var(--font-body)', width: '100%' }}>
      {label && (
        <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--ink-700)' }}>
          {label}{required && <span style={{ color: 'var(--accent-copper)' }}> *</span>}
        </span>
      )}
      <Tag
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '14px 16px',
          background: 'var(--surface)',
          color: 'var(--text)',
          border: `var(--border-w) solid ${error ? 'var(--accent-copper)' : 'var(--ink-950)'}`,
          outline: 'none',
          boxShadow: focused ? '4px 4px 0 0 var(--ink-950)' : 'none',
          transform: focused ? 'translate(-4px,-4px)' : 'none',
          transition: 'box-shadow var(--duration-fast) var(--ease), transform var(--duration-fast) var(--ease)',
          resize: textarea ? 'vertical' : 'none',
        }}
      />
      {error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--accent-copper)' }}>{error}</span>}
    </label>
  );
}
