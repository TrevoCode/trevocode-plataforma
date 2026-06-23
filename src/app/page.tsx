import { Reveal } from "@/components/Reveal";
import { SiteHeader } from "@/components/SiteHeader";
import { HeroLeadForm } from "@/components/HeroLeadForm";
import { BeforeAfter } from "@/components/BeforeAfter";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { StartProjectButton } from "@/components/StartProjectButton";
import { ScrollTimeline } from "@/components/ScrollTimeline";
import { SiteFooter } from "@/components/SiteFooter";
import { site } from "@/content/site";
import {
  ArrowRight,
  Sparkles,
  Code2,
  Smartphone,
  Layers,
  Plug,
  Cloud,
  Cpu,
  Quote,
  Plus,
  MessageCircle,
  Check,
  Zap,
  ShieldCheck,
  GitBranch,
  Gauge,
  LayoutGrid,
  ShoppingCart,
  Truck,
  Landmark,
  HeartPulse,
  Database,
  Globe,
  Bot,
  Rocket,
  Utensils,
  Dumbbell,
  Car,
  Building2,
  GraduationCap,
  Lightbulb,
  TrendingUp,
  X,
} from "lucide-react";
import { niches } from "@/content/niches";

const wa = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
  `Olá! Vim pelo site da ${site.brand.name} e quero conversar sobre um projeto.`,
)}`;

const expertiseIcons = [Code2, Smartphone, Layers, Plug, Cloud, Cpu];
// glows em família verde (cor secundária da marca)
const lumGradients = [
  "linear-gradient(137deg,#86EFAC,#22C55E,#16A34A)",
  "linear-gradient(137deg,#6EE7B7,#10B981,#047857)",
  "linear-gradient(137deg,#BBF7D0,#4ADE80,#15803D)",
  "linear-gradient(137deg,#86EFAC,#2DD4BF,#0D9488)",
  "linear-gradient(137deg,#D9F99D,#84CC16,#65A30D)",
  "linear-gradient(137deg,#A7F3D0,#34D399,#059669)",
];
const diffIcons = [Zap, ShieldCheck, GitBranch, Gauge];
const pillarIcons: Record<string, typeof Sparkles> = { Lightbulb, Sparkles, TrendingUp };
const solIcons: Record<string, typeof Zap> = {
  Smartphone, LayoutGrid, ShoppingCart, Truck, Landmark, HeartPulse,
  Database, Plug, MessageCircle, Globe, Bot, Rocket,
  Utensils, Dumbbell, Car, Building2, GraduationCap,
};

type PortfolioItem = {
  name: string;
  category: string;
  desc: string;
  image: string;
};
const portfolioItems = site.portfolio.items as readonly PortfolioItem[];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="bg-white text-neutral-900 antialiased overflow-x-clip">
        {/* ============== HERO (full-bleed estilo Nubank) ============== */}
        <section className="relative min-h-[92vh] flex items-end overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/fotos/hero-bg.webp"
            alt="Dona de negócio usando um app feito pela TrevoCode"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* gradientes pra legibilidade */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 lg:px-6 pt-28 pb-14 lg:pb-20 grid lg:grid-cols-2 gap-8 items-end">
            {/* texto */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium text-white animate-fade-up">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                {site.hero.badge}
              </div>
              <h1 className="mt-5 text-5xl sm:text-6xl lg:text-7xl font-bold leading-[0.98] tracking-tight drop-shadow-2xl animate-fade-up delay-100">
                {site.hero.titleLines[0]}
                <br />
                <span className="text-green-400">{site.hero.titleEmphasis}</span>
              </h1>
              <p className="mt-5 text-base lg:text-lg text-white/85 max-w-md leading-relaxed drop-shadow-lg animate-fade-up delay-300">
                {site.hero.subtitle}
              </p>
            </div>

            {/* card branco de CTA (estilo Nubank) */}
            <div className="w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end animate-fade-up delay-300">
              <HeroLeadForm />
            </div>
          </div>
        </section>

        {/* ============== MARQUEE STACK (ferramentas) ============== */}
        <section className="py-8 border-y border-neutral-100 bg-neutral-50/60">
          <p className="text-center text-xs tracking-[0.2em] uppercase text-neutral-400 font-semibold mb-6 px-4">
            {site.stack.title}
          </p>
          <div className="marquee-mask overflow-hidden">
            <div className="flex w-max animate-marquee gap-3">
              {[...site.stack.items, ...site.stack.items].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-5 py-2 text-sm font-medium text-neutral-700 whitespace-nowrap"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============== 3 PILARES (você imagina / desenvolve / cresce) ============== */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.pillars.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              {site.pillars.title}
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.pillars.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5">
            {site.pillars.items.map((p, i) => {
              const Icon = pillarIcons[p.icon] ?? Sparkles;
              return (
                <Reveal key={p.tag} delay={i * 150}>
                  <article
                    className={`group h-full rounded-3xl overflow-hidden border transition-all duration-500 hover:-translate-y-2 ${
                      p.dark
                        ? "bg-neutral-950 border-neutral-800 text-white md:-translate-y-4 hover:shadow-2xl hover:shadow-green-500/20"
                        : "bg-white border-neutral-200 hover:border-neutral-900 hover:shadow-2xl hover:shadow-neutral-900/10"
                    }`}
                  >
                    <div className="relative aspect-[3/2] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.image}
                        alt={p.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <span
                        className={`absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
                          p.dark ? "bg-green-400 text-neutral-900" : "bg-white/90 backdrop-blur text-neutral-900"
                        }`}
                      >
                        <Icon className="w-3 h-3" /> {p.tag}
                      </span>
                    </div>
                    <div className="p-8">
                      <h3 className="text-2xl font-bold mb-3 leading-tight">{p.title}</h3>
                      <p className={`leading-relaxed ${p.dark ? "text-neutral-300" : "text-neutral-600"}`}>
                        {p.body}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-12">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-14 px-8 text-base font-bold transition-all hover:-translate-y-0.5"
            >
              {site.pillars.cta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </section>

        {/* ============== ESPECIALISTAS (Lumina glow cards, verde) ============== */}
        <section id="servicos" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.expertise.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {site.expertise.title}
              <br />
              <span className="text-neutral-400">{site.expertise.titleMuted}</span>
            </h2>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {site.expertise.areas.map((area, i) => {
              const Icon = expertiseIcons[i % expertiseIcons.length];
              const grad = lumGradients[i % lumGradients.length];
              return (
                <Reveal key={area.title} delay={(i % 3) * 80} dir={i % 2 === 0 ? "left" : "right"}>
                  <div className="lumina-card h-full">
                    <div className="lumina-glow" style={{ background: grad }} />
                    <div
                      className="lumina-face h-full p-7"
                      style={{
                        background: `linear-gradient(#ffffff,#ffffff) padding-box, ${grad} border-box`,
                      }}
                    >
                      <div className="w-11 h-11 rounded-2xl bg-green-50 flex items-center justify-center mb-6">
                        <Icon className="w-5 h-5 text-green-600" strokeWidth={1.75} />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{area.title}</h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">{area.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="text-center mt-12">
            <p className="text-lg text-neutral-600 mb-6">
              <span className="font-bold text-neutral-900">E muito mais.</span> Se cabe em software, a gente faz.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-14 px-8 text-base font-bold transition-all hover:-translate-y-0.5"
            >
              Quero falar sobre o meu projeto
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </section>

        {/* ============== SERVIÇOS ============== */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <Reveal className="text-center mb-12 lg:mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
                {site.services.eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
                {site.services.title}
              </h2>
              <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.services.subtitle}</p>
            </Reveal>

            <div className="grid md:grid-cols-3 gap-5">
              {site.services.items.map((s, i) => (
                <Reveal key={s.title} delay={(i % 3) * 120} dir="scale">
                  <div className="h-full flex flex-col rounded-3xl border border-neutral-200 bg-white p-8 hover:border-green-500 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
                    <span className="inline-flex self-start items-center rounded-full bg-neutral-900 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 mb-6">
                      {s.tag}
                    </span>
                    <h3 className="text-xl font-bold mb-3 leading-tight">{s.title}</h3>
                    <p className="text-neutral-600 leading-relaxed text-sm mb-6">{s.desc}</p>
                    <ul className="mt-auto space-y-2">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-sm text-neutral-700">
                          <Check className="w-4 h-4 text-green-600 shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============== PRATELEIRA VS SOB MEDIDA ============== */}
        <section className="py-20 lg:py-28 max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.comparison.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-tight">
              {site.comparison.title}
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.comparison.subtitle}</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <Reveal dir="left">
              <div className="h-full rounded-3xl border border-neutral-200 bg-neutral-50 p-8">
                <span className="inline-flex items-center rounded-full bg-neutral-200 text-neutral-600 text-[10px] font-bold tracking-wider uppercase px-3 py-1 mb-6">
                  {site.comparison.shelf.label}
                </span>
                <ul className="space-y-4">
                  {site.comparison.shelf.items.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-neutral-500">
                      <X className="w-5 h-5 text-neutral-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal dir="right" delay={120}>
              <div className="h-full rounded-3xl border-2 border-green-500 bg-white p-8 shadow-xl shadow-green-900/5">
                <span className="inline-flex items-center rounded-full bg-green-600 text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 mb-6">
                  {site.comparison.custom.label}
                </span>
                <ul className="space-y-4">
                  {site.comparison.custom.items.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-neutral-800 font-medium">
                      <Check className="w-5 h-5 text-green-600 shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============== MOSAICO DE SOLUÇÕES POR NICHO ============== */}
        <section id="solucoes" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.solutions.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {site.solutions.title}
              <br />
              <span className="text-neutral-400">{site.solutions.titleMuted}</span>
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.solutions.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {niches.map((s, i) => {
              const Icon = solIcons[s.icon] ?? Sparkles;
              return (
                <Reveal key={s.slug} delay={(i % 4) * 70} dir="scale">
                  <a
                    href={`/solucoes/${s.slug}`}
                    className="group block h-full rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6 transition-all duration-500 hover:-translate-y-1 hover:border-green-500"
                  >
                    <div className="w-10 h-10 rounded-xl bg-green-50 group-hover:bg-green-500 flex items-center justify-center mb-4 transition-colors">
                      <Icon
                        className="w-5 h-5 text-green-600 group-hover:text-white transition-colors"
                        strokeWidth={1.75}
                      />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold tracking-tight mb-1.5 flex items-center gap-1">
                      {s.name}
                      <ArrowRight className="w-3.5 h-3.5 text-neutral-300 group-hover:text-green-600 group-hover:translate-x-0.5 transition-all" />
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">{s.tileDesc}</p>
                  </a>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-10 text-center">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
            >
              Não achou seu nicho? Fala com a gente
              <ArrowRight className="w-4 h-4" />
            </a>
          </Reveal>
        </section>

        {/* ============== ANTES E DEPOIS (slider de arraste) ============== */}
        <section className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            {/* título do lado */}
            <Reveal>
              <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
                Antes e depois
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Do caos ao controle.
              </h2>
              <p className="mt-5 text-neutral-600 leading-relaxed max-w-md">
                Arraste e veja a virada: de afogado em papel pra empresa organizada, vendendo no automático.
              </p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-13 px-7 text-base font-bold transition-all hover:-translate-y-0.5"
              >
                Quero essa virada na minha empresa
                <ArrowRight className="w-4 h-4" />
              </a>
            </Reveal>
            {/* quadro antes/depois (menor, na coluna) */}
            <Reveal delay={150}>
              <BeforeAfter before="/fotos/antes6.webp" after="/fotos/depois6.webp" />
            </Reveal>
          </div>
        </section>

        {/* ============== MANIFESTO ============== */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.08),transparent_55%)]" />
          <Reveal className="max-w-4xl mx-auto px-4 lg:px-6 text-center relative">
            <Quote className="w-9 h-9 text-green-500 mx-auto mb-8" />
            <p className="text-2xl md:text-4xl font-bold leading-snug tracking-tight">
              {site.manifesto.quote.map((part, i) => (
                <span
                  key={i}
                  className={
                    part.accent
                      ? "text-green-600"
                      : part.muted
                        ? "text-neutral-400"
                        : ""
                  }
                >
                  {part.text}
                </span>
              ))}
            </p>
            <div className="mt-12 inline-block">
              <div className="h-px w-24 bg-green-500 mx-auto mb-4" />
              <p className="text-xs tracking-[0.3em] text-neutral-400 uppercase">
                {site.manifesto.signature}
              </p>
            </div>
          </Reveal>
        </section>

        {/* ============== PORTFÓLIO (bento) ============== */}
        <section id="portfolio" className="py-20 lg:py-32 max-w-7xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.portfolio.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              {site.portfolio.title}
              <br />
              <span className="text-neutral-400">{site.portfolio.titleMuted}</span>
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.portfolio.subtitle}</p>
          </Reveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
            {portfolioItems.map((p) => {
              const { name, category, desc, image } = p;
              return (
                <div
                  key={name}
                  className="group relative rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image}
                    alt={`${name} · ${category}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4 lg:p-5">
                    <p className="text-[10px] tracking-[0.15em] uppercase text-green-300 font-semibold mb-1">
                      {category}
                    </p>
                    <h3 className="text-lg font-bold tracking-tight text-white">{name}</h3>
                    <p className="mt-2 text-sm text-white/80 leading-relaxed overflow-hidden max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-500">
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============== MÉTRICAS ============== */}
        <section className="py-16 lg:py-20 bg-neutral-50 border-y border-neutral-100">
          <div className="max-w-6xl mx-auto px-4 lg:px-6">
            <Reveal className="text-center mb-10 lg:mb-12 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {site.metricsBand.title}
              </h2>
              <p className="mt-5 text-neutral-600">{site.metricsBand.subtitle}</p>
            </Reveal>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {site.metricsBand.stats.map((s, i) => (
                <Reveal key={s.label} delay={(i % 4) * 80} className="text-center">
                  <p className="text-4xl lg:text-6xl font-light tracking-tight text-neutral-900">{s.value}</p>
                  <p className="mt-2 text-sm text-neutral-500 leading-snug">{s.label}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============== DIFERENCIAL ============== */}
        <section className="py-20 lg:py-32 max-w-6xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-16">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.differentiator.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight max-w-3xl mx-auto">
              {site.differentiator.title}
            </h2>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.differentiator.subtitle}</p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {site.differentiator.items.map((it, i) => {
              const Icon = diffIcons[i % diffIcons.length];
              return (
                <Reveal key={it.title} delay={(i % 2) * 100} dir={i % 2 === 0 ? "left" : "right"}>
                  <div className="flex gap-5 rounded-3xl border border-neutral-200 p-8 h-full hover:border-green-500 transition-colors duration-500">
                    <div className="w-11 h-11 shrink-0 rounded-2xl bg-green-50 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-green-600" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2">{it.title}</h3>
                      <p className="text-neutral-600 leading-relaxed text-sm">{it.desc}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* ============== PROCESSO (timeline que avança no scroll) ============== */}
        <section id="processo" className="py-20 lg:py-28 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <Reveal className="text-center mb-12 lg:mb-16">
              <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
                {site.journey.eyebrow}
              </p>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                {site.journey.title}{" "}
                <span className="italic font-serif text-green-600">{site.journey.titleEmphasis}</span>
              </h2>
              <p className="mt-5 text-neutral-600 max-w-xl mx-auto">{site.journey.subtitle}</p>
            </Reveal>
            <ScrollTimeline />
            <div className="text-center mt-12">
              <a
                href="/processo"
                className="inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
              >
                Ver o processo completo
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ============== OBJEÇÕES ============== */}
        <section className="py-20 lg:py-28 max-w-4xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-12 lg:mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
              {site.objections.eyebrow}
            </p>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{site.objections.title}</h2>
          </Reveal>
          <Reveal className="space-y-3">
            {site.objections.items.map((o, i) => (
              <details key={i} className="group rounded-2xl border border-neutral-200 bg-white hover:border-green-500 transition-colors overflow-hidden">
                <summary className="cursor-pointer list-none p-5 sm:p-6 flex items-center justify-between gap-4">
                  <span className="text-base md:text-lg font-semibold pr-2">{o.t}</span>
                  <span className="flex-shrink-0 w-9 h-9 rounded-full border border-neutral-300 group-hover:bg-green-500 group-hover:border-green-500 flex items-center justify-center transition-all">
                    <Plus className="w-4 h-4 text-neutral-500 group-hover:text-white group-open:rotate-45 transition-transform duration-300" />
                  </span>
                </summary>
                <div className="px-5 sm:px-6 pb-6 -mt-2">
                  <p className="text-neutral-600 leading-relaxed">{o.d}</p>
                </div>
              </details>
            ))}
          </Reveal>
        </section>

        {/* ============== CTA FINAL (vídeo de fundo — interação) ============== */}
        <section id="contato" className="relative overflow-hidden py-28 lg:py-40">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster=""
          >
            <source src="/video/cta-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-neutral-950/75" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(34,197,94,0.25),transparent_70%)]" />
          {/* background reagindo ao cursor (mais forte no escuro) */}
          <CursorSpotlight color="rgba(34,197,94,0.35)" size={520} />
          <Reveal className="max-w-3xl mx-auto px-4 lg:px-6 text-center relative">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight leading-[0.98] text-white">
              {site.finalCta.title}
              <br />
              <span className="italic font-serif text-green-400">{site.finalCta.titleEmphasis}</span>
            </h2>
            <p className="mt-7 text-lg text-white/70 max-w-xl mx-auto">{site.finalCta.subtitle}</p>
            <div className="mt-10">
              <StartProjectButton className="inline-flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-neutral-950 h-16 px-10 text-lg font-bold transition-all hover:-translate-y-0.5">
                <MessageCircle className="w-5 h-5" />
                {site.finalCta.cta}
              </StartProjectButton>
              <p className="mt-4 text-xs text-white/50 tracking-wide">{site.finalCta.note}</p>
            </div>
          </Reveal>
        </section>

        {/* ============== FOOTER ============== */}
        <SiteFooter />
      </main>
    </>
  );
}
