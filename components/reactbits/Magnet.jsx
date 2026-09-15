"use client";
import { useEffect, useRef } from 'react';

const Magnet = ({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.5s ease-in-out',
  wrapperClassName = '',
  innerClassName = '',
  ...props
}) => {
  const magnetRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const inner = innerRef.current;
    if (!inner) return;
    if (disabled || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      inner.style.transform = 'translate3d(0, 0, 0)';
      return;
    }

    let frame = null;
    let event = null;
    let wasActive = false;

    // Written straight to the node: a setState per mousemove re-renders the
    // whole subtree sixty times a second for a purely visual offset.
    const apply = () => {
      frame = null;
      if (!event || !magnetRef.current) return;
      const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const distX = Math.abs(centerX - event.clientX);
      const distY = Math.abs(centerY - event.clientY);
      const active = distX < width / 2 + padding && distY < height / 2 + padding;

      if (active !== wasActive) {
        inner.style.transition = active ? activeTransition : inactiveTransition;
        wasActive = active;
      }

      if (active) {
        const offsetX = (event.clientX - centerX) / magnetStrength;
        const offsetY = (event.clientY - centerY) / magnetStrength;
        inner.style.transform = `translate3d(${offsetX.toFixed(2)}px, ${offsetY.toFixed(2)}px, 0)`;
      } else {
        inner.style.transform = 'translate3d(0, 0, 0)';
      }
    };

    const handleMouseMove = e => {
      event = e;
      if (frame) return;
      frame = requestAnimationFrame(apply);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [padding, disabled, magnetStrength, activeTransition, inactiveTransition]);

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div
        ref={innerRef}
        className={innerClassName}
        style={{ transform: 'translate3d(0, 0, 0)', willChange: 'transform' }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
