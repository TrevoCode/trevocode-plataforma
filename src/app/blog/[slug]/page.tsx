import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { posts, postBySlug } from "@/content/posts";
import { site } from "@/content/site";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

const wa = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
  `Olá! Vim pelo blog da ${site.brand.name} e quero conversar sobre um projeto.`,
)}`;

function fmt(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) return {};
  return {
    title: `${p.title} | ${site.brand.name}`,
    description: p.excerpt,
    alternates: { canonical: `/blog/${p.slug}` },
    openGraph: {
      type: "article",
      title: p.title,
      description: p.excerpt,
      url: `${site.brand.url}/blog/${p.slug}`,
      publishedTime: p.date,
      images: ["/og.jpg"],
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const p = postBySlug(slug);
  if (!p) notFound();
  const related = posts.filter((x) => x.slug !== p.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: p.title,
    description: p.excerpt,
    datePublished: p.date,
    dateModified: p.date,
    articleSection: p.category,
    image: `${site.brand.url}/og.jpg`,
    mainEntityOfPage: `${site.brand.url}/blog/${p.slug}`,
    author: { "@type": "Organization", name: site.brand.name },
    publisher: {
      "@type": "Organization",
      name: site.brand.name,
      logo: { "@type": "ImageObject", url: `${site.brand.url}/icon.svg` },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />
      <main className="bg-white text-neutral-900 antialiased overflow-x-clip">
        <article className="pt-28 lg:pt-36 pb-16">
          <div className="max-w-2xl mx-auto px-4 lg:px-6">
            <a href="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" /> Voltar ao blog
            </a>
            <div className="flex items-center gap-3 text-xs text-neutral-500 mb-5">
              <span className="inline-flex items-center rounded-full bg-green-50 text-green-700 font-bold uppercase tracking-wider px-3 py-1">
                {p.category}
              </span>
              <span>{fmt(p.date)}</span>
              <span>· {p.readMin} min de leitura</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">{p.title}</h1>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">{p.excerpt}</p>

            <div className="mt-10 space-y-5">
              {p.body.map((para, i) =>
                para.startsWith("## ") ? (
                  <h2 key={i} className="text-xl md:text-2xl font-bold tracking-tight pt-4">
                    {para.replace("## ", "")}
                  </h2>
                ) : (
                  <p key={i} className="text-neutral-700 leading-[1.75]">
                    {para}
                  </p>
                ),
              )}
            </div>

            {/* CTA inline */}
            <div className="mt-12 rounded-3xl border border-green-300 bg-green-50/50 p-8 text-center">
              <h3 className="text-xl font-bold tracking-tight">Quer aplicar isso no seu negócio?</h3>
              <p className="mt-3 text-neutral-600">A gente constrói rápido, com IA, e entrega no ar.</p>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white h-13 px-7 text-base font-bold transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-5 h-5" /> Falar com o time
              </a>
            </div>
          </div>
        </article>

        {/* relacionados */}
        <section className="bg-neutral-50 py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-6">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Continue lendo</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col h-full rounded-3xl border border-neutral-200 bg-white p-7 hover:border-green-500 hover:-translate-y-1 transition-all duration-500"
                >
                  <span className="inline-flex self-start items-center rounded-full bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-wider px-3 py-1 mb-4">
                    {r.category}
                  </span>
                  <h3 className="text-base font-bold tracking-tight leading-snug group-hover:text-green-700 transition-colors flex-1">
                    {r.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm text-green-700 font-semibold">
                    Ler <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </main>
    </>
  );
}
