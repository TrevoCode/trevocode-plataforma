import { site } from "@/content/site";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="max-w-sm">
            <a href="/" className="flex items-center gap-2">
              <Logo className="w-7 h-7" />
              <span className="text-2xl font-bold tracking-tight text-white">
                Trevo<span className="text-green-500">Code</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">{site.footer.tagline}</p>
          </div>
          <div className="grid grid-cols-2 gap-10 text-sm">
            {site.footer.columns.map((col) => (
              <div key={col.title}>
                <p className="font-semibold mb-3 text-white">{col.title}</p>
                <ul className="space-y-2 text-white/60">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a href={l.href} className="hover:text-white transition-colors">
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/10 text-xs text-white/40">
          © {new Date().getFullYear()} {site.brand.name}. Construído com IA, entregue com rigor.
        </div>
      </div>
    </footer>
  );
}
