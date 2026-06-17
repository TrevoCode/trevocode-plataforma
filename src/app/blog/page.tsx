import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reveal } from "@/components/Reveal";
import { posts } from "@/content/posts";
import { site } from "@/content/site";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Blog | ${site.brand.name}`,
  description: "Ideias sobre software, IA e crescimento digital por nicho.",
  alternates: { canonical: "/blog" },
};

function fmt(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

export default function BlogIndex() {
  const [featured, ...rest] = posts;
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-neutral-900 antialiased overflow-x-clip">
        <section className="relative isolate overflow-hidden pt-28 pb-12 lg:pt-36 lg:pb-16">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 -z-10 h-[380px] w-[680px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(34,197,94,0.14),transparent_65%)] blur-2xl" />
          <div className="max-w-7xl mx-auto px-4 lg:px-6 text-center">
            <p className="text-xs tracking-[0.2em] uppercase text-green-600 font-semibold mb-4 animate-fade-up">
              Blog
            </p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.02] animate-fade-up delay-100">
              Ideias que tiram
              <br />
              <span className="italic font-serif text-neutral-400">projetos do papel.</span>
            </h1>
            <p className="mt-5 text-neutral-600 max-w-xl mx-auto animate-fade-up delay-300">
              Software, IA e crescimento digital, direto ao ponto, por nicho.
            </p>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-4 lg:px-6 pb-24">
          {/* destaque */}
          <Reveal>
            <a
              href={`/blog/${featured.slug}`}
              className="group block rounded-3xl border border-neutral-200 bg-white overflow-hidden hover:border-green-500 hover:shadow-xl transition-all duration-500 mb-5"
            >
              <div className="grid md:grid-cols-2">
                <div className="aspect-[16/10] md:aspect-auto bg-gradient-to-br from-neutral-900 to-neutral-700 noise-overlay relative flex items-center justify-center p-10">
                  <span className="text-3xl md:text-5xl font-bold text-white/90 tracking-tight text-center leading-tight">
                    {featured.category}
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 font-bold uppercase tracking-wider px-3 py-1">
                      {featured.category}
                    </span>
                    <span>{fmt(featured.date)}</span>
                    <span>· {featured.readMin} min</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-tight group-hover:text-green-700 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="mt-4 text-neutral-600 leading-relaxed">{featured.excerpt}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-green-700 font-semibold">
                    Ler artigo <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </a>
          </Reveal>

          {/* grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 100}>
                <a
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col h-full rounded-3xl border border-neutral-200 bg-white p-8 hover:border-green-500 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="flex items-center gap-3 text-xs text-neutral-500 mb-4">
                    <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 font-bold uppercase tracking-wider px-3 py-1">
                      {p.category}
                    </span>
                    <span>{p.readMin} min</span>
                  </div>
                  <h3 className="text-lg font-bold tracking-tight leading-snug group-hover:text-green-700 transition-colors">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-neutral-600 leading-relaxed flex-1">{p.excerpt}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-green-700 font-semibold">
                    Ler <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
