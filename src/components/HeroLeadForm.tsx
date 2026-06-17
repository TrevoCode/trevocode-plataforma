"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { site } from "@/content/site";

/** Card branco de CTA do hero (estilo Nubank): contato + botão pro WhatsApp. */
export function HeroLeadForm() {
  const [v, setV] = useState("");
  const link = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
    `Olá! Quero uma solução pra minha empresa.${v ? ` Meu contato: ${v}` : ""}`,
  )}`;
  return (
    <div className="bg-white rounded-3xl shadow-2xl shadow-black/25 p-6 sm:p-7 w-full max-w-sm">
      <h2 className="text-xl font-bold tracking-tight text-neutral-900">Tire sua ideia do papel</h2>
      <p className="mt-1.5 text-sm text-neutral-600">
        Conte o que a sua empresa precisa. A gente desenvolve sob medida.
      </p>
      <input
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder="Seu WhatsApp ou e-mail"
        className="mt-4 w-full h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition"
      />
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-400 text-neutral-950 h-12 font-bold transition-colors"
      >
        Quero uma solução
        <ArrowRight className="w-4 h-4" />
      </a>
      <p className="mt-3 text-[11px] text-neutral-400 text-center">Resposta rápida. Sem compromisso.</p>
    </div>
  );
}
