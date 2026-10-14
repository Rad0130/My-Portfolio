import { useEffect, useRef } from "react";

// Interactive background: glowing dots drift around, connect to each other with lines,
// and react to the cursor (they gather around it and link to it). Aurora glows, grain and
// a vignette add the premium feel. Cards with the "glass" class get a cursor-following shine.
const COLORS = ["139,92,246", "236,72,153", "251,191,36", "56,189,248"];

const Background = () => {
  const root = useRef(null);
  const canvasRef = useRef(null);
  const orbs = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const OFF = -9999;
    const m = { x: OFF, y: OFF, tx: OFF, ty: OFF };
    let w, h, pts = [], raf;

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.min(130, Math.floor((w * h) / 12000));
      pts = Array.from({ length: n }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        r: Math.random() * 1.8 + 1,
        c: COLORS[Math.floor(Math.random() * COLORS.length)],
      }));
    };

    const onMove = (e) => {
      m.tx = e.clientX;
      m.ty = e.clientY;
      const card = e.target.closest?.(".glass");
      if (card) {
        const r = card.getBoundingClientRect();
        card.style.setProperty("--x", `${e.clientX - r.left}px`);
        card.style.setProperty("--y", `${e.clientY - r.top}px`);
      }
    };
    const onLeave = () => { m.tx = OFF; m.ty = OFF; };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      if (m.tx === OFF) { m.x = OFF; m.y = OFF; }
      else if (m.x === OFF) { m.x = m.tx; m.y = m.ty; }
      else { m.x += (m.tx - m.x) * 0.2; m.y += (m.ty - m.y) * 0.2; }

      // aurora parallax + cursor glow
      if (m.x !== OFF) {
        const nx = m.x / w - 0.5, ny = m.y / h - 0.5;
        orbs.current.forEach((o, i) => {
          if (o) o.style.transform = `translate3d(${-nx * (i + 1) * 60}px, ${-ny * (i + 1) * 60}px, 0)`;
        });
        root.current?.style.setProperty("--mx", `${m.x}px`);
        root.current?.style.setProperty("--my", `${m.y}px`);
      }

      for (const p of pts) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w; else if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h; else if (p.y > h) p.y = 0;

        const dx = m.x - p.x, dy = m.y - p.y;
        const d = Math.hypot(dx, dy);
        if (d < 220 && d > 0.1) {
          // dots gather around the cursor but keep a little space, then link to it
          const pull = d > 70 ? (1 - d / 220) * 1.6 : -(1 - d / 70) * 2.5;
          p.x += (dx / d) * pull;
          p.y += (dy / d) * pull;
          ctx.strokeStyle = `rgba(${p.c},${(1 - d / 220) * 0.8})`;
          ctx.lineWidth = 1.1;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(m.x, m.y);
          ctx.stroke();
        }
      }

      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 130) {
            ctx.strokeStyle = `rgba(${a.c},${(1 - d / 130) * 0.4})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
        ctx.fillStyle = `rgba(${a.c},0.95)`;
        ctx.shadowColor = `rgba(${a.c},1)`;
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      if (!reduce) raf = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener("resize", init);
    if (!reduce) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.addEventListener("pointerleave", onLeave);
    }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", init);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  const orb = (i, pos, color, delay) => (
    <div ref={(el) => (orbs.current[i] = el)} className={`absolute w-[34rem] h-[34rem] ${pos}`}>
      <div className={`orb ${color}`} style={{ animationDelay: delay }} />
    </div>
  );

  return (
    <div ref={root} className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#07040f]" style={{ "--mx": "50%", "--my": "40%" }}>
      {orb(0, "-top-48 -left-40", "bg-violet-600", "0s")}
      {orb(1, "top-1/4 -right-48", "bg-fuchsia-600", "-6s")}
      {orb(2, "-bottom-56 left-1/4", "bg-sky-500", "-12s")}
      <div className="absolute inset-0 cursor-glow" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="absolute inset-0 vignette" />
      <div className="absolute inset-0 grain" />
    </div>
  );
};

export default Background;