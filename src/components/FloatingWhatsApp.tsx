import { site } from "@/content/site";

const href = `https://wa.me/${site.brand.whatsapp}?text=${encodeURIComponent(
  `Olá! Vim pelo site da ${site.brand.name} e quero conversar sobre um projeto.`,
)}`;

/** Botão flutuante de WhatsApp, fixo no canto inferior direito (todas as páginas). */
export function FloatingWhatsApp() {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-0 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/25 hover:shadow-xl transition-all hover:-translate-y-0.5"
    >
      <span className="grid place-items-center w-14 h-14 shrink-0">
        <span className="absolute inline-flex h-14 w-14 rounded-full bg-[#25D366] opacity-60 animate-ping [animation-duration:2.5s]" />
        <svg viewBox="0 0 32 32" className="relative w-7 h-7 fill-current" aria-hidden="true">
          <path d="M16.004 0h-.008C7.174 0 .002 7.174.002 16c0 3.5 1.13 6.744 3.052 9.378L1.05 31.43l6.27-2.005A15.9 15.9 0 0 0 16.004 32C24.83 32 32 24.826 32 16S24.83 0 16.004 0Zm9.318 22.594c-.386 1.09-1.92 1.994-3.142 2.258-.836.178-1.928.32-5.604-1.204-4.704-1.95-7.732-6.73-7.968-7.04-.226-.31-1.9-2.53-1.9-4.826 0-2.296 1.166-3.426 1.636-3.906.386-.394.84-.574 1.32-.574.156 0 .296.008.422.014.376.016.566.038.814.632.31.744 1.062 2.59 1.152 2.778.092.188.184.444.058.754-.118.32-.222.46-.444.708-.226.248-.44.438-.664.704-.204.232-.434.48-.176.928.258.44 1.146 1.892 2.46 3.064 1.696 1.512 3.066 1.984 3.564 2.192.37.154.81.118 1.082-.172.346-.37.772-.984 1.206-1.59.308-.434.696-.488 1.106-.334.418.146 2.648 1.248 3.102 1.474.454.226.756.336.868.524.11.188.11 1.09-.276 2.182Z" />
        </svg>
      </span>
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 group-hover:max-w-[12rem] group-hover:opacity-100 group-hover:pr-5 transition-all duration-300">
        Fale com a gente
      </span>
    </a>
  );
}
