"use client";

import { useEffect, useRef } from "react";

/**
 * Spotlight verde que segue o cursor DENTRO da seção pai (que deve ser relative).
 * Só ativa em dispositivos com cursor fino (hover) — no mobile fica neutro/estático.
 */
export function CursorSpotlight({
  color = "rgba(34,197,94,0.20)",
  size = 460,
  className = "",
}: {
  color?: string;
  size?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia && !window.matchMedia("(hover: hover)").matches) return;
    const el = ref.current;
    const parent = el?.parentElement;
    if (!el || !parent) return;

    const onMove = (e: MouseEvent) => {
      const r = parent.getBoundingClientRect();
      el.style.setProperty("--x", `${e.clientX - r.left}px`);
      el.style.setProperty("--y", `${e.clientY - r.top}px`);
      el.style.opacity = "1";
    };
    const onLeave = () => {
      el.style.opacity = "0";
    };
    parent.addEventListener("mousemove", onMove);
    parent.addEventListener("mouseleave", onLeave);
    return () => {
      parent.removeEventListener("mousemove", onMove);
      parent.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--x, 50%) var(--y, 50%), ${color}, transparent 70%)`,
      }}
    />
  );
}
