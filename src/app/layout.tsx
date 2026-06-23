import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { site } from "@/content/site";
import { ScrollProgress } from "@/components/ScrollProgress";
import { ContactModalProvider } from "@/components/ContactModal";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.brand.url),
  title: {
    default: `${site.brand.name} | ${site.brand.tagline}`,
    template: `%s | ${site.brand.name}`,
  },
  description: site.brand.description,
  applicationName: site.brand.name,
  keywords: [
    "especialistas em inteligência artificial",
    "desenvolvimento de apps",
    "criação de sites",
    "sistemas sob medida",
    "software com IA",
    "automação para empresas",
    "plataformas SaaS",
    "estúdio de software",
  ],
  authors: [{ name: site.brand.name }],
  creator: site.brand.name,
  publisher: site.brand.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: `${site.brand.name} | ${site.brand.tagline}`,
    description: site.brand.description,
    url: site.brand.url,
    siteName: site.brand.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.brand.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.brand.name} | ${site.brand.tagline}`,
    description: site.brand.description,
    images: ["/og.jpg"],
  },
  icons: { icon: "/icon.svg", apple: "/icon.svg" },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.brand.name,
  url: site.brand.url,
  description: site.brand.description,
  logo: `${site.brand.url}/icon.svg`,
  image: `${site.brand.url}/og.jpg`,
  email: site.brand.email,
  areaServed: "BR",
  slogan: "Você imagina, a gente desenvolve.",
  sameAs: [`https://wa.me/${site.brand.whatsapp}`],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        <ScrollProgress />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-neutral-900 focus:text-white focus:rounded-lg"
        >
          Pular para conteúdo
        </a>
        <ContactModalProvider>{children}</ContactModalProvider>
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
