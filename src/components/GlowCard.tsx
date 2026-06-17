"use client";

import { useRef, type ReactNode } from "react";

/**
 * Card com glow que segue o mouse — modelo "lumina / glow-features"
 * do PLAYBOOK MotionSites, adaptado pra base clara.
 * O brilho é desenhado via ::after em globals.css (.glow-card),
 * aqui só atualizamos as variáveis --mx/--my.
 */
export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <div ref={ref} onMouseMove={onMove} className={`glow-card ${className}`}>
      {children}
    </div>
  );
}
