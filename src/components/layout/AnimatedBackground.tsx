import { useEffect, useRef, useState } from "react";

/** Fondo animado: blobs con degradado, rejilla y partículas interactivas ligeras. */
export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (window.innerWidth < 768) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const count = Math.min(70, Math.floor(width / 22));
    const mouse = { x: -999, y: -999 };
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      r: Math.random() * 1.6 + 0.6,
    }));

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMove, { passive: true });

    let raf = 0;
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < 140) {
          p.x += (dx / dist) * 0.6;
          p.y += (dy / dist) * 0.6;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = dist < 160 ? "rgba(56,189,248,0.55)" : "rgba(120,150,220,0.28)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(80,140,255,${(1 - d / 120) * 0.16})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(render);
    };
    render();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMove);
    };
  }, [enabled]);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <div className="bg-grid absolute inset-0 opacity-70" />
      <div className="animate-blob absolute -top-40 -left-32 size-[38rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--electric)_38%,transparent),transparent_65%)] blur-3xl" />
      <div
        className="animate-blob absolute -top-24 right-[-10rem] size-[34rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--cyan)_32%,transparent),transparent_65%)] blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="animate-blob absolute bottom-[-14rem] left-1/3 size-[40rem] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--violet)_26%,transparent),transparent_65%)] blur-3xl"
        style={{ animationDelay: "-12s" }}
      />
      {enabled && <canvas ref={canvasRef} className="absolute inset-0 size-full opacity-80" />}
    </div>
  );
}
