import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { site } from "@/content/site";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  PhoneCall,
  ClipboardList,
  PenTool,
  Code2,
  ShieldCheck,
  Rocket,
  LifeBuoy,
} from "lucide-react";

const wa = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
  `Olá! Vim pelo site da ${site.brand.name} e quero marcar uma call de alinhamento.`,
)}`;

const icons: Record<string, typeof Sparkles> = {
  PhoneCall, ClipboardList, PenTool, Code2, ShieldCheck, Rocket, LifeBuoy,
};

export const metadata: Metadata = {
  title: `Como trabalhamos | ${site.brand.name}`,
  description: site.journey.subtitle,
  alternates: { canonical: "/processo" },
};

export default function ProcessoPage() {
  const j = site.journey;
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-neutral-900 antialiased overflow-x-clip">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[420px] w-[720px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.16),transparent_65%)] blur-2xl" />
          <CursorSpotlight />
          <div className="relative z-10 max-w-3xl mx-auto px-4 lg:px-6 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4 animate-fade-up">
              {j.eyebrow}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] animate-fade-up delay-100">
              {j.title}
              <br />
              <span className="italic font-serif text-green-600">{j.titleEmphasis}</span>
            </h1>
            <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed animate-fade-up delay-300">
              {j.subtitle}
            </p>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="pb-8 max-w-3xl mx-auto px-4 lg:px-6">
          <div className="relative">
            {/* linha vertical */}
            <div className="absolute left-6 top-4 bottom-4 w-px bg-neutral-200" aria-hidden="true" />
            <div className="space-y-5">
              {j.steps.map((step, i) => {
                const Icon = icons[step.icon] ?? Sparkles;
                return (
                  <Reveal key={step.n} delay={(i % 3) * 80} dir="up">
                    <div className="relative flex gap-5">
                      {/* nó */}
                      <div className="relative z-10 shrink-0">
                        <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
                          <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                        </div>
                      </div>
                      {/* conteúdo */}
                      <div className="flex-1 rounded-3xl border border-neutral-200 bg-white p-6 lg:p-7 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500 -mt-1">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-bold text-green-600 tracking-widest">{step.n}</span>
                          <h2 className="text-lg lg:text-xl font-bold tracking-tight">{step.title}</h2>
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
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 lg:py-32 mt-8">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(34,197,94,0.22),transparent_70%)] animate-glow" />
          <CursorSpotlight color="rgba(34,197,94,0.35)" size={520} />
          <Reveal className="max-w-2xl mx-auto px-4 lg:px-6 text-center relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Tudo começa com uma conversa.
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Marque sua call de alinhamento. A gente entende a sua ideia e te mostra o caminho, sem compromisso.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-neutral-950 h-16 px-10 text-lg font-bold transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Marcar call de alinhamento
            </a>
          </Reveal>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
