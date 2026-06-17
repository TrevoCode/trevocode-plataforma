"use client";

import { useRef, type ReactNode } from "react";

/**
 * Tilt 3D com parallax no mouse — técnica do modelo "Glow Features".
 * Atualiza --rx / --ry no .tilt-layer conforme o cursor; volta ao neutro ao sair.
 */
export function TiltVisual({
  children,
  className = "",
  max = 12,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--ry", `${px * max}deg`);
    el.style.setProperty("--rx", `${-py * max}deg`);
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--ry", "0deg");
    el.style.setProperty("--rx", "0deg");
  }

  return (
    <div className={`tilt-scene ${className}`} onMouseMove={onMove} onMouseLeave={reset}>
      <div ref={ref} className="tilt-layer">
        {children}
      </div>
    </div>
  );
}
