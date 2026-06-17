"use client";

import { useRef, useState } from "react";
import { GripVertical, Check } from "lucide-react";

/**
 * Slider antes/depois com arraste (reveal estilo TermSkins).
 * A imagem "antes" fica por cima, recortada por clip-path conforme a posição.
 * Notificações flutuantes aparecem só na parte revelada (depois).
 */
export function BeforeAfter({
  before,
  after,
  notifications = [],
}: {
  before: string;
  after: string;
  notifications?: string[];
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(4, Math.min(96, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/10] sm:aspect-[16/9] rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl shadow-neutral-900/10 select-none touch-none cursor-ew-resize"
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
    >
      {/* DEPOIS (camada de baixo) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={after} alt="Depois" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

      {/* notificações subindo do celular (reveladas junto com o depois) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        {notifications.map((n, i) => (
          <div
            key={n}
            className="absolute right-[5%] bottom-[22%] bg-white rounded-xl shadow-xl shadow-black/25 px-3 py-2 flex items-center gap-2 animate-notif max-w-[58%]"
            style={{ animationDelay: `${i * 2}s` }}
          >
            <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center shrink-0">
              <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold text-neutral-800 leading-tight">{n}</span>
          </div>
        ))}
      </div>

      {/* ANTES (camada de cima, recortada) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={before}
        alt="Antes"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        draggable={false}
      />

      {/* rótulos */}
      <span className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-neutral-900/80 backdrop-blur text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
        Antes
      </span>
      <span className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-green-500 text-neutral-950 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
        Depois
      </span>

      {/* divisória + handle */}
      <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.1)]" style={{ left: `${pos}%` }}>
        <button
          type="button"
          role="slider"
          aria-label="Comparar antes e depois"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pos)}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") { e.preventDefault(); setPos((p) => Math.max(4, p - 4)); }
            if (e.key === "ArrowRight") { e.preventDefault(); setPos((p) => Math.min(96, p + 4)); }
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white shadow-lg flex items-center justify-center cursor-ew-resize focus:outline-none focus-visible:ring-4 focus-visible:ring-green-500/60"
        >
          <GripVertical className="w-5 h-5 text-neutral-700" />
        </button>
      </div>
    </div>
  );
}
