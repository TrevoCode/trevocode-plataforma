"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/content/site";
import {
  PhoneCall,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
  Check,
  Sparkles,
} from "lucide-react";

const icons: Record<string, typeof Sparkles> = {
  PhoneCall, ClipboardList, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy,
};

/**
 * Timeline do processo que AVANÇA conforme a rolagem:
 * a linha verde preenche proporcional ao scroll e cada etapa acende
 * quando o scroll a alcança. Sem libs, só scroll + requestAnimationFrame.
 */
export function ScrollTimeline() {
  const steps = site.journey.steps;
  const wrapRef = useRef<HTMLDivElement>(null);
  const [p, setP] = useState(0);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setP(1);
      return;
    }
    let ticking = false;
    const update = () => {
      ticking = false;
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // 0 quando o topo da timeline chega a 75% da viewport,
      // 1 quando o fundo passa de ~45% da viewport.
      const startY = vh * 0.75;
      const prog = (startY - r.top) / (r.height - vh * 0.3);
      setP(Math.max(0, Math.min(1, prog)));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapRef} className="relative max-w-3xl mx-auto">
      {/* linha base */}
      <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-neutral-200" aria-hidden="true" />
      {/* linha que preenche com o scroll */}
      <div
        className="absolute left-6 top-4 w-0.5 bg-green-500"
        style={{ height: `calc((100% - 2rem) * ${p})` }}
        aria-hidden="true"
      />

      <div className="space-y-4 lg:space-y-5">
        {steps.map((step, i) => {
          const Icon = icons[step.icon] ?? Sparkles;
          const active = p >= i / steps.length;
          return (
            <div key={step.n} className="relative flex gap-4 lg:gap-5">
              {/* nó */}
              <div className="relative z-10 shrink-0">
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    active
                      ? "bg-green-500 shadow-lg shadow-green-500/30"
                      : "bg-neutral-200"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 transition-colors duration-500 ${active ? "text-white" : "text-neutral-400"}`}
                    strokeWidth={1.75}
                  />
                </div>
              </div>
              {/* conteúdo */}
              <div
                className={`flex-1 rounded-3xl border bg-white p-5 lg:p-7 -mt-1 transition-all duration-500 ${
                  active
                    ? "border-green-500 shadow-xl shadow-green-900/5 opacity-100 translate-y-0"
                    : "border-neutral-200 opacity-50 translate-y-1"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-green-600 tracking-widest">{step.n}</span>
                  <h3 className="text-lg lg:text-xl font-bold tracking-tight">{step.title}</h3>
                </div>
                <p className="text-neutral-600 leading-relaxed text-sm lg:text-[15px]">{step.desc}</p>
                <ul className="mt-4 grid sm:grid-cols-3 gap-2">
                  {step.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-xs text-neutral-700">
                      <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
