import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { CursorSpotlight } from "@/components/CursorSpotlight";
import { niches, nicheBySlug } from "@/content/niches";
import { site } from "@/content/site";
import {
  ArrowRight,
  Check,
  MessageCircle,
  Sparkles,
  Bot,
  Utensils,
  Dumbbell,
  Car,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Building2,
  GraduationCap,
} from "lucide-react";

const wa = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
  `Olá! Vim pelo site da ${site.brand.name} e quero conversar sobre um projeto.`,
)}`;

const icons: Record<string, typeof Sparkles> = {
  Utensils, Dumbbell, Car, HeartPulse, ShoppingCart, Landmark, Building2, GraduationCap,
};

// App conceito (marca + 3 telas) por nicho — mockups reais gerados
const appByNiche: Record<string, { brand: string; mockups: string[] }> = {
  concessionarias: {
    brand: "AutoPrime",
    mockups: [
      "/mockups/concessionarias-1-catalogo.webp",
      "/mockups/concessionarias-2-detalhe.webp",
      "/mockups/concessionarias-3-testdrive.webp",
    ],
  },
  restaurantes: {
    brand: "Brasa",
    mockups: [
      "/mockups/restaurantes-1-cardapio.webp",
      "/mockups/restaurantes-2-checkout.webp",
      "/mockups/restaurantes-3-rastreio.webp",
    ],
  },
  academias: {
    brand: "PulseFit",
    mockups: [
      "/mockups/academias-1-agenda.webp",
      "/mockups/academias-2-treino.webp",
      "/mockups/academias-3-ranking.webp",
    ],
  },
  clinicas: {
    brand: "VivaMed",
    mockups: [
      "/mockups/clinicas-1-agendamento.webp",
      "/mockups/clinicas-2-teleconsulta.webp",
      "/mockups/clinicas-3-prontuario.webp",
    ],
  },
  ecommerce: {
    brand: "Vendoo",
    mockups: [
      "/mockups/ecommerce-1-vitrine.webp",
      "/mockups/ecommerce-2-produto.webp",
      "/mockups/ecommerce-3-checkout.webp",
    ],
  },
  fintech: {
    brand: "Cofre",
    mockups: [
      "/mockups/fintech-1-home.webp",
      "/mockups/fintech-2-pix.webp",
      "/mockups/fintech-3-extrato.webp",
    ],
  },
  imobiliarias: {
    brand: "Morada",
    mockups: [
      "/mockups/imobiliarias-1-busca.webp",
      "/mockups/imobiliarias-2-imovel.webp",
      "/mockups/imobiliarias-3-visita.webp",
    ],
  },
  educacao: {
    brand: "Saber+",
    mockups: [
      "/mockups/educacao-1-cursos.webp",
      "/mockups/educacao-2-aula.webp",
      "/mockups/educacao-3-certificado.webp",
    ],
  },
};

export function generateStaticParams() {
  return niches.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const n = nicheBySlug(slug);
  if (!n) return {};
  return {
    title: `${n.name} | ${site.brand.name}`,
    description: n.hero.subtitle,
    alternates: { canonical: `/solucoes/${n.slug}` },
    openGraph: {
      type: "website",
      title: `${n.name} | ${site.brand.name}`,
      description: n.hero.subtitle,
      url: `${site.brand.url}/solucoes/${n.slug}`,
      images: ["/og.jpg"],
    },
  };
}

export default async function NichePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const n = nicheBySlug(slug);
  if (!n) notFound();
  const Icon = icons[n.icon] ?? Sparkles;
  const app = appByNiche[n.slug];

  return (
    <>
      <SiteHeader />
      <main className="bg-white text-neutral-900 antialiased overflow-x-clip">
        {/* HERO */}
        <section className="relative isolate overflow-hidden pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]" />
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[420px] w-[720px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.16),transparent_65%)] blur-2xl" />
          <CursorSpotlight />
          <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* texto */}
            <div className="text-center lg:text-left">
              <div className="w-14 h-14 rounded-2xl bg-green-500 flex items-center justify-center mx-auto lg:mx-0 mb-6 animate-fade-up">
                <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
              </div>
              <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4 animate-fade-up delay-100">
                {n.hero.eyebrow}
              </p>
              <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight leading-[1.02] animate-fade-up delay-100">
                {n.hero.title}
              </h1>
              <p className="mt-6 text-base lg:text-lg text-neutral-600 leading-relaxed animate-fade-up delay-300">
                {n.hero.subtitle}
              </p>
              <div className="mt-9 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3 animate-fade-up delay-500">
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-14 px-8 text-base font-bold transition-all hover:-translate-y-0.5 w-full sm:w-auto"
                >
                  Quero pro meu negócio
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="/#solucoes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-300 hover:border-neutral-900 h-14 px-8 text-base font-semibold transition-colors w-full sm:w-auto"
                >
                  Ver outros nichos
                </a>
              </div>
            </div>

            {/* mockup do app do nicho + elementos visuais */}
            <Reveal dir="right" className="relative mx-auto w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.22),transparent_70%)] blur-2xl animate-drift" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={app ? app.mockups[0] : `/niches/${n.slug}.png`}
                alt={`App ${app?.brand ?? n.name}`}
                className="relative w-full drop-shadow-2xl rounded-3xl"
              />
              {/* card flutuante (vida) */}
              <div className="absolute -bottom-3 -left-3 sm:-left-5 bg-white rounded-2xl border border-neutral-200 shadow-xl px-4 py-3 flex items-center gap-3 animate-float">
                <span className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4 text-white" strokeWidth={2} />
                </span>
                <div className="text-left">
                  <p className="text-[11px] font-bold leading-tight">IA embarcada</p>
                  <p className="text-[10px] text-neutral-500 leading-tight">no seu produto</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* PROBLEMA */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <Reveal className="max-w-3xl mx-auto px-4 lg:px-6 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">O problema</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight">{n.problem.title}</h2>
            <p className="mt-5 text-neutral-600 leading-relaxed">{n.problem.body}</p>
          </Reveal>
        </section>

        {/* FUNCIONALIDADES */}
        <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 lg:px-6">
          <Reveal className="text-center mb-10 lg:mb-14">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">A solução</p>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">O que entra no seu projeto</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            {n.features.map((f, i) => (
              <Reveal key={f} delay={(i % 2) * 80}>
                <div className="flex items-start gap-3 rounded-2xl border border-neutral-200 bg-white p-5 hover:border-green-500 transition-colors duration-300">
                  <span className="mt-0.5 w-6 h-6 shrink-0 rounded-full bg-green-50 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-green-600" />
                  </span>
                  <span className="text-sm font-medium text-neutral-800">{f}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VEJA O APP POR DENTRO (3 telas) */}
        {app && (
          <section className="py-16 lg:py-24 bg-neutral-50">
            <div className="max-w-6xl mx-auto px-4 lg:px-6">
              <Reveal className="text-center mb-10 lg:mb-14">
                <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4">
                  Exemplo de app
                </p>
                <h2 className="text-2xl md:text-4xl font-bold tracking-tight">Veja o app por dentro</h2>
                <p className="mt-5 text-neutral-600 max-w-2xl mx-auto">
                  Conceito de app{" "}
                  <span className="font-bold text-neutral-900">{app.brand}</span> que construiríamos
                  pro seu negócio: telas reais, do seu jeito e com a sua marca.
                </p>
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {app.mockups.map((m, i) => (
                  <Reveal key={m} delay={i * 120}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={m}
                      alt={`Tela ${i + 1} do app ${app.brand}`}
                      loading="lazy"
                      className="w-full rounded-2xl shadow-xl shadow-neutral-900/10 hover:-translate-y-1 transition-transform duration-500"
                    />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* IA EMBARCADA */}
        <section className="py-16 lg:py-24 max-w-5xl mx-auto px-4 lg:px-6">
          <Reveal>
            <div className="rounded-3xl border border-green-300 bg-green-50/50 p-8 lg:p-12 text-center">
              <div className="w-12 h-12 rounded-2xl bg-green-500 flex items-center justify-center mx-auto mb-5">
                <Bot className="w-6 h-6 text-white" strokeWidth={1.75} />
              </div>
              <span className="inline-flex items-center rounded-full bg-green-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 mb-4">
                Diferencial AI-native
              </span>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-tight max-w-2xl mx-auto">
                {n.ai.title}
              </h2>
              <p className="mt-5 text-neutral-700 leading-relaxed max-w-2xl mx-auto">{n.ai.body}</p>
            </div>
          </Reveal>
        </section>

        {/* CASES */}
        {n.cases && n.cases.length > 0 && (
          <section className="pb-8 max-w-5xl mx-auto px-4 lg:px-6">
            <Reveal className="text-center">
              <p className="text-sm text-neutral-500">
                Já construímos pra esse tipo de negócio:{" "}
                {n.cases.map((c, i) => (
                  <span key={c} className="font-semibold text-neutral-900">
                    {c}
                    {i < n.cases!.length - 1 ? ", " : ""}
                  </span>
                ))}
                .{" "}
                <a href="/#portfolio" className="text-green-700 font-semibold hover:underline">
                  Ver portfólio
                </a>
              </p>
            </Reveal>
          </section>
        )}

        {/* CTA */}
        <section className="relative overflow-hidden py-24 lg:py-32 mt-8">
          <div className="absolute inset-0 bg-neutral-950" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(34,197,94,0.22),transparent_70%)] animate-glow" />
          <CursorSpotlight color="rgba(34,197,94,0.35)" size={520} />
          <Reveal className="max-w-2xl mx-auto px-4 lg:px-6 text-center relative">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white">
              Pronto pra tirar do papel?
            </h2>
            <p className="mt-6 text-lg text-white/70">
              Conte o seu cenário. Você recebe um caminho claro: escopo, prazo e próximos passos.
            </p>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-green-500 hover:bg-green-400 text-neutral-950 h-16 px-10 text-lg font-bold transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="w-5 h-5" />
              Falar com o time
            </a>
          </Reveal>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
