"use client";
import { useRef, useEffect } from 'react';
import './MagnetLines.css';

export default function MagnetLines({
  rows = 9,
  columns = 9,
  containerSize = '80vmin',
  lineColor = '#efefef',
  lineWidth = '1vmin',
  lineHeight = '6vmin',
  baseAngle = -10,
  className = '',
  style = {}
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const items = Array.from(container.querySelectorAll('span'));
    let centers = [];
    let frame = null;
    let pointer = null;

    // Rects are measured once per layout change rather than once per item per
    // pointer event; 81 getBoundingClientRect calls per mousemove thrash layout.
    const measure = () => {
      centers = items.map(item => {
        const rect = item.getBoundingClientRect();
        return { x: rect.x + rect.width / 2, y: rect.y + rect.height / 2 };
      });
    };

    const apply = () => {
      frame = null;
      if (!pointer) return;
      for (let i = 0; i < items.length; i++) {
        const center = centers[i];
        if (!center) continue;
        const b = pointer.x - center.x;
        const a = pointer.y - center.y;
        const c = Math.sqrt(a * a + b * b) || 1;
        const r = ((Math.acos(b / c) * 180) / Math.PI) * (pointer.y > center.y ? 1 : -1);
        items[i].style.setProperty('--rotate', `${r.toFixed(1)}deg`);
      }
    };

    const onPointerMove = event => {
      pointer = { x: event.clientX, y: event.clientY };
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    const onLayoutChange = () => {
      measure();
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    measure();
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onLayoutChange, { passive: true });
    window.addEventListener('resize', onLayoutChange);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onLayoutChange);
      window.removeEventListener('resize', onLayoutChange);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [rows, columns]);

  const total = rows * columns;
  const spans = Array.from({ length: total }, (_, i) => (
    <span
      key={i}
      style={{
        '--rotate': `${baseAngle}deg`,
        backgroundColor: lineColor,
        width: lineWidth,
        height: lineHeight
      }}
    />
  ));

  return (
    <div
      ref={containerRef}
      className={`magnetLines-container ${className}`}
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: containerSize,
        height: containerSize,
        ...style
      }}
    >
      {spans}
    </div>
  );
}
