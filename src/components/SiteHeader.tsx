"use client";

import { useEffect, useState } from "react";
import { site } from "@/content/site";
import { niches } from "@/content/niches";
import { posts } from "@/content/posts";
import { Logo } from "@/components/Logo";
import {
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Sparkles,
  Utensils,
  Dumbbell,
  Car,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
} from "lucide-react";

const nIcons: Record<string, typeof Sparkles> = {
  Utensils, Dumbbell, Car, HeartPulse, ShoppingCart, Landmark, Building2, GraduationCap,
};

const solucoes = niches.map((n) => ({
  label: n.name,
  href: `/solucoes/${n.slug}`,
  exclusive: !!n.exclusive,
  icon: n.icon,
  desc: n.tileDesc,
}));

// painel full-width que desce abaixo do header (estilo Nubank)
// abre no hover E no foco por teclado (acessibilidade)
const panelWrap =
  "fixed left-0 right-0 top-16 z-40 opacity-0 invisible -translate-y-3 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 transition-all duration-300 ease-out";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 bg-white/90 backdrop-blur-xl border-b border-neutral-200/70 transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Logo className="w-7 h-7" />
          <span className="text-xl font-bold tracking-tight text-neutral-900">
            Trevo<span className="text-green-600">Code</span>
          </span>
        </a>

        {/* ===== NAV DESKTOP com mega-menus full-width ===== */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-600">
          <a href="/#servicos" className="hover:text-neutral-900 transition-colors">
            O que fazemos
          </a>

          {/* Soluções (mega-menu full-width) */}
          <div className="group">
            <button aria-haspopup="true" className="flex items-center gap-1 hover:text-neutral-900 transition-colors h-16">
              Soluções
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className={panelWrap}>
              <div className="bg-white border-b border-neutral-200 shadow-2xl shadow-neutral-900/10">
                <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_1.7fr] gap-12">
                  {/* destaque à esquerda */}
                  <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fotos/megamenu-solucoes.webp"
                      alt="Soluções TrevoCode para todo tipo de negócio"
                      className="w-full aspect-[16/10] object-cover rounded-2xl mb-5"
                    />
                    <h3 className="text-2xl font-bold tracking-tight text-neutral-900">
                      Soluções pro seu negócio
                    </h3>
                    <p className="mt-3 text-neutral-600 leading-relaxed max-w-sm">
                      Do delivery à fintech, da clínica ao e-commerce. A gente cria a solução certa pro
                      seu setor.
                    </p>
                    <a
                      href="/#solucoes"
                      className="mt-5 inline-flex items-center gap-2 text-green-700 font-semibold hover:text-green-800 transition-colors"
                    >
                      Ver todas as soluções <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  {/* colunas de links à direita */}
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1 self-center">
                    {solucoes.map((s) => {
                      const Icon = nIcons[s.icon] ?? Sparkles;
                      return (
                        <a
                          key={s.href}
                          href={s.href}
                          className="flex items-start gap-3 rounded-xl p-3 hover:bg-green-50 transition-colors group/item"
                        >
                          <span className="w-10 h-10 rounded-xl bg-green-50 group-hover/item:bg-green-500 flex items-center justify-center shrink-0 transition-colors">
                            <Icon
                              className="w-5 h-5 text-green-600 group-hover/item:text-white transition-colors"
                              strokeWidth={1.75}
                            />
                          </span>
                          <span className="min-w-0">
                            <span className="text-[15px] font-semibold text-neutral-900">{s.label}</span>
                            <span className="block text-xs text-neutral-500 leading-snug mt-0.5">
                              {s.desc}
                            </span>
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="/processo" className="hover:text-neutral-900 transition-colors">
            Processo
          </a>
          <a href="/#portfolio" className="hover:text-neutral-900 transition-colors">
            Portfólio
          </a>

          {/* Blog (mega-menu full-width) */}
          <div className="group">
            <button aria-haspopup="true" className="flex items-center gap-1 hover:text-neutral-900 transition-colors h-16">
              Blog
              <ChevronDown className="w-3.5 h-3.5 group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className={panelWrap}>
              <div className="bg-white border-b border-neutral-200 shadow-2xl shadow-neutral-900/10">
                <div className="max-w-7xl mx-auto px-6 py-10 grid lg:grid-cols-[1fr_1.7fr] gap-12">
                  {/* post em destaque */}
                  <a href={`/blog/${posts[0].slug}`} className="group/feat block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/fotos/megamenu-blog.webp"
                      alt="Blog TrevoCode"
                      className="w-full aspect-[16/10] object-cover rounded-2xl mb-4"
                    />
                    <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 mb-2">
                      Em destaque
                    </span>
                    <h3 className="text-lg font-bold tracking-tight text-neutral-900 leading-snug group-hover/feat:text-green-700 transition-colors">
                      {posts[0].title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{posts[0].excerpt}</p>
                  </a>
                  {/* lista de posts à direita */}
                  <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 self-center">
                    {posts.slice(1, 5).map((p) => (
                      <a
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="rounded-xl p-3 hover:bg-green-50 transition-colors"
                      >
                        <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-600 text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 mb-1.5">
                          {p.category}
                        </span>
                        <span className="block text-sm font-medium text-neutral-800 leading-snug">
                          {p.title}
                        </span>
                      </a>
                    ))}
                    <a
                      href="/blog"
                      className="sm:col-span-2 mt-2 flex items-center justify-center gap-2 rounded-xl px-3 py-3 bg-neutral-900 text-white text-sm font-semibold hover:bg-neutral-800 transition-colors"
                    >
                      Ver todos os posts <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden md:block">
          <a
            href="/#contato"
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-10 px-5 text-sm font-semibold transition-colors"
          >
            Começar um projeto
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2 text-neutral-900"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ===== MENU MOBILE ===== */}
      {open && (
        <div className="md:hidden bg-white border-b border-neutral-200 px-4 pb-6 pt-2 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col">
            <a href="/#servicos" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-neutral-800 border-b border-neutral-100">
              O que fazemos
            </a>

            <p className="pt-4 pb-1 text-[11px] tracking-[0.2em] uppercase text-green-600 font-bold">Soluções</p>
            <div className="grid grid-cols-2 gap-x-3">
              {solucoes.map((s) => {
                const Icon = nIcons[s.icon] ?? Sparkles;
                return (
                  <a key={s.href} href={s.href} onClick={() => setOpen(false)} className="py-2.5 text-sm text-neutral-700 flex items-center gap-2">
                    <Icon className="w-4 h-4 text-green-600 shrink-0" strokeWidth={1.75} />
                    {s.label}
                  </a>
                );
              })}
            </div>
            <a href="/#solucoes" onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-green-700">
              Ver todas →
            </a>

            <a href="/processo" onClick={() => setOpen(false)} className="py-3 mt-2 text-base font-medium text-neutral-800 border-t border-neutral-100">
              Processo
            </a>
            <a href="/#portfolio" onClick={() => setOpen(false)} className="py-3 text-base font-medium text-neutral-800 border-y border-neutral-100">
              Portfólio
            </a>

            <p className="pt-4 pb-1 text-[11px] tracking-[0.2em] uppercase text-green-600 font-bold">Blog</p>
            {posts.slice(0, 4).map((p) => (
              <a key={p.slug} href={`/blog/${p.slug}`} onClick={() => setOpen(false)} className="py-2.5 text-sm text-neutral-700 leading-snug border-b border-neutral-50">
                {p.title}
              </a>
            ))}
            <a href="/blog" onClick={() => setOpen(false)} className="py-2 text-sm font-semibold text-green-700">
              Ver todos os posts →
            </a>

            <a
              href="/#contato"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 text-white h-12 text-base font-semibold"
            >
              Começar um projeto
              <ArrowRight className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
