"use client";

import { useEffect, useRef, type ReactNode } from "react";

type Dir = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article";
  dir?: Dir;
}

const dirClass: Record<Dir, string> = {
  up: "",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

/**
 * Anima os filhos ao entrar na viewport (fade + movimento na direção `dir`).
 * IntersectionObserver nativo, sem dependências.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  dir = "up",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("is-visible"), delay);
            io.unobserve(el);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    // @ts-expect-error — dynamic tag ref typing
    <Tag ref={ref} className={`reveal ${dirClass[dir]} ${className}`}>
      {children}
    </Tag>
  );
}
