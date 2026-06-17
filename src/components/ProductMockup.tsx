/**
 * Mockup de produto em CSS puro — janela de browser (dashboard) + celular
 * sobreposto, na paleta grafite. Sem imagens externas, 100% responsivo.
 * Equivale ao "hero com mockups de app" da AlphaCode, em versão premium.
 */
export function ProductMockup() {
  return (
    <div className="relative mx-auto w-full max-w-4xl">
      {/* glow sob o mockup */}
      <div className="absolute -inset-x-10 -bottom-10 top-10 -z-10 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(10,10,10,0.10),transparent_70%)]" />

      {/* ===== Janela de browser ===== */}
      <div className="rounded-2xl border border-neutral-200 bg-white shadow-2xl shadow-neutral-900/10 overflow-hidden">
        {/* top bar */}
        <div className="flex items-center gap-2 px-4 h-10 border-b border-neutral-100 bg-neutral-50">
          <span className="w-3 h-3 rounded-full bg-neutral-300" />
          <span className="w-3 h-3 rounded-full bg-neutral-300" />
          <span className="w-3 h-3 rounded-full bg-neutral-300" />
          <div className="mx-auto flex items-center gap-2 rounded-full bg-white border border-neutral-200 px-4 h-6 text-[10px] text-neutral-400">
            app.seuprojeto.com
          </div>
        </div>

        {/* corpo do dashboard */}
        <div className="flex h-[260px] sm:h-[320px]">
          {/* sidebar */}
          <div className="hidden sm:flex w-44 flex-col gap-2 bg-neutral-950 p-4">
            <div className="h-3 w-20 rounded bg-white/80 mb-3" />
            {[60, 80, 50, 70, 45].map((w, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded bg-white/20" />
                <span className="h-2.5 rounded bg-white/15" style={{ width: `${w}%` }} />
              </div>
            ))}
            <div className="mt-auto h-9 rounded-lg bg-white/10" />
          </div>

          {/* main */}
          <div className="flex-1 p-5 sm:p-6">
            {/* header */}
            <div className="flex items-center justify-between mb-5">
              <div className="h-4 w-32 rounded bg-neutral-200" />
              <div className="h-7 w-24 rounded-full bg-neutral-900" />
            </div>
            {/* stat cards */}
            <div className="grid grid-cols-3 gap-3 mb-5">
              {[true, false, false].map((accent, i) => (
                <div key={i} className="rounded-xl border border-neutral-200 p-3">
                  <div className="h-2 w-10 rounded bg-neutral-200 mb-2" />
                  <div className={`h-4 w-14 rounded ${accent ? "bg-neutral-900" : "bg-neutral-300"}`} />
                </div>
              ))}
            </div>
            {/* bar chart */}
            <div className="rounded-xl border border-neutral-200 p-4">
              <div className="h-2 w-16 rounded bg-neutral-200 mb-4" />
              <div className="flex items-end gap-2 h-20 sm:h-24">
                {[40, 65, 50, 80, 55, 90, 70, 100, 60].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t ${i % 3 === 2 ? "bg-neutral-900" : "bg-neutral-200"}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== Celular sobreposto ===== */}
      <div className="hidden md:block absolute -bottom-8 -right-2 lg:-right-8 w-[150px] animate-float">
        <div className="rounded-[2rem] border-[6px] border-neutral-950 bg-neutral-950 shadow-2xl shadow-neutral-900/30 overflow-hidden">
          {/* notch */}
          <div className="relative bg-white h-[300px]">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-4 bg-neutral-950 rounded-b-xl" />
            {/* app header */}
            <div className="bg-neutral-950 px-3 pt-6 pb-3">
              <div className="h-2.5 w-16 rounded bg-white/80 mb-2" />
              <div className="h-2 w-24 rounded bg-white/30" />
            </div>
            {/* app list */}
            <div className="p-3 space-y-2.5">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-center gap-2 rounded-lg border border-neutral-100 p-2">
                  <span className="w-7 h-7 rounded-lg bg-neutral-900 shrink-0" />
                  <div className="flex-1">
                    <div className="h-2 w-3/4 rounded bg-neutral-200 mb-1.5" />
                    <div className="h-2 w-1/2 rounded bg-neutral-100" />
                  </div>
                </div>
              ))}
            </div>
            {/* bottom tab bar */}
            <div className="absolute bottom-0 inset-x-0 flex justify-around items-center h-11 border-t border-neutral-100 bg-white">
              {[0, 1, 2, 3].map((i) => (
                <span key={i} className={`w-5 h-5 rounded-md ${i === 0 ? "bg-neutral-900" : "bg-neutral-200"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
