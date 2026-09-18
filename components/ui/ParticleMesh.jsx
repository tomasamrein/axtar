"use client";
import { useEffect, useRef } from "react";

const COUNT = 48;
const MAX_DIST = 140;
const SPEED = 0.32;
const COPPER = "64% 0.15 45";

class Particle {
  constructor(w, h) {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * SPEED * 2;
    this.vy = (Math.random() - 0.5) * SPEED * 2;
    this.r = Math.random() * 1.4 + 0.8;
  }

  update(w, h) {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0) { this.x = 0; this.vx *= -1; }
    if (this.x > w) { this.x = w; this.vx *= -1; }
    if (this.y < 0) { this.y = 0; this.vy *= -1; }
    if (this.y > h) { this.y = h; this.vy *= -1; }
  }
}

export function ParticleMesh({ className, style }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf;
    let particles = [];
    let W = 0, H = 0;
    const dpr = Math.min(window.devicePixelRatio, 2);

    const FPS = 24;
    const FRAME_MS = 1000 / FPS;
    let lastTime = 0;

    const init = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.scale(dpr, dpr);
      particles = Array.from({ length: COUNT }, () => new Particle(W, H));
    };

    const draw = (ts) => {
      raf = requestAnimationFrame(draw);
      if (ts - lastTime < FRAME_MS) return;
      lastTime = ts;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < COUNT; i++) {
        particles[i].update(W, H);
        const a = particles[i];

        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = `oklch(${COPPER} / 0.6)`;
        ctx.fill();

        for (let j = i + 1; j < COUNT; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `oklch(${COPPER} / ${alpha.toFixed(3)})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
    };

    const onResize = () => {
      cancelAnimationFrame(raf);
      init();
      lastTime = 0;
      if (running) raf = requestAnimationFrame(draw);
    };

    let running = false;
    const start = () => {
      if (running) return;
      running = true;
      lastTime = 0;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    init();

    // Only animate while the canvas is on screen; a full-page mesh burning
    // rAF behind ten viewports of scroll freezes the whole thread.
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0 }
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
    };
    document.addEventListener("visibilitychange", onVisibility);

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className={className} style={{ display: "block", width: "100%", height: "100%", ...style }} />;
}
