"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type FormEvent,
  type ReactNode,
} from "react";
import { Dialog } from "@base-ui/react/dialog";
import {
  X,
  Check,
  Loader2,
  Send,
  Sunrise,
  Sun,
  Sunset,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";

/* ============================================================
   ContactModal — popup de "Começar um projeto"
   Formulário rápido (visual). O envio ainda NÃO está plugado:
   ver TODO em handleSubmit pra ligar /api/contact (Resend) depois.
   ============================================================ */

type ContactModalContextValue = { open: () => void };
const ContactModalContext = createContext<ContactModalContextValue | null>(null);

/** Hook pra abrir o popup de qualquer botão/lugar do site. */
export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) throw new Error("useContactModal precisa estar dentro de <ContactModalProvider>");
  return ctx;
}

const horarios = [
  { id: "manha", label: "Manhã", Icon: Sunrise },
  { id: "tarde", label: "Tarde", Icon: Sun },
  { id: "final", label: "Final de tarde", Icon: Sunset },
] as const;

const contatos = [
  { id: "whatsapp", label: "WhatsApp", Icon: MessageCircle },
  { id: "ligacao", label: "Ligação", Icon: Phone },
  { id: "email", label: "E-mail", Icon: Mail },
] as const;

/** Grupo de opção única em formato de "pills" (acessível: radiogroup). */
function PillGroup({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: ReadonlyArray<{ id: string; label: string; Icon: typeof Sun }>;
  value: string;
  onChange: (id: string) => void;
}) {
  return (
    <fieldset>
      <legend className="text-sm font-semibold text-neutral-900">{legend}</legend>
      <div role="radiogroup" className="mt-2 flex flex-wrap gap-2">
        {options.map(({ id, label, Icon }) => {
          const active = value === id;
          return (
            <button
              key={id}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(active ? "" : id)}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-3.5 h-10 text-sm font-medium transition-colors ${
                active
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-neutral-200 text-neutral-600 hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              <Icon className="w-4 h-4" strokeWidth={1.75} />
              {label}
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}

const inputBase =
  "mt-1.5 w-full h-12 rounded-xl border border-neutral-200 px-4 text-sm text-neutral-900 placeholder:text-neutral-400 focus:border-green-500 focus:ring-2 focus:ring-green-500/20 outline-none transition";

export function ContactModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [conversar, setConversar] = useState(false);
  const [horario, setHorario] = useState("");
  const [contato, setContato] = useState("");

  const open = useCallback(() => setIsOpen(true), []);

  // reseta o formulário ao fechar (depois da animação de saída)
  function handleOpenChange(next: boolean) {
    setIsOpen(next);
    if (!next) {
      setTimeout(() => {
        setStatus("idle");
        setConversar(false);
        setHorario("");
        setContato("");
      }, 250);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    // TODO(envio): plugar aqui o POST pra /api/contact (Resend) quando o e-mail estiver pronto.
    // const data = Object.fromEntries(new FormData(e.currentTarget));
    // await fetch("/api/contact", { method: "POST", body: JSON.stringify({ ...data, horario, contato, conversar }) });
    await new Promise((r) => setTimeout(r, 650)); // simula envio (visual)

    setStatus("sent");
  }

  return (
    <ContactModalContext.Provider value={{ open }}>
      {children}

      <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-[60] bg-neutral-950/55 backdrop-blur-sm data-[starting-style]:opacity-0 data-[ending-style]:opacity-0 transition-opacity duration-300" />
          <Dialog.Popup className="fixed right-0 top-0 bottom-0 z-[61] w-full max-w-md overflow-y-auto bg-white p-6 sm:p-8 shadow-2xl shadow-black/30 outline-none rounded-l-3xl data-[starting-style]:translate-x-full data-[ending-style]:translate-x-full transition-transform duration-300 ease-out">
            <Dialog.Close
              className="absolute right-4 top-4 grid place-items-center w-9 h-9 rounded-full text-neutral-400 hover:bg-neutral-100 hover:text-neutral-700 transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>

            {status === "sent" ? (
              <div className="py-8 text-center">
                <div className="mx-auto grid place-items-center w-16 h-16 rounded-full bg-green-50">
                  <Check className="w-8 h-8 text-green-600" strokeWidth={2.5} />
                </div>
                <Dialog.Title className="mt-5 text-2xl font-bold tracking-tight text-neutral-900">
                  Recebemos! 🍀
                </Dialog.Title>
                <Dialog.Description className="mt-2 text-neutral-600 leading-relaxed">
                  Obrigado pelo contato. A gente retorna no melhor horário que você escolheu — geralmente
                  em poucas horas.
                </Dialog.Description>
                <Dialog.Close className="mt-7 inline-flex items-center justify-center rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white h-12 px-7 font-semibold transition-colors">
                  Fechar
                </Dialog.Close>
              </div>
            ) : (
              <>
                <Dialog.Title className="text-2xl font-bold tracking-tight text-neutral-900 pr-8">
                  Começar um projeto
                </Dialog.Title>
                <Dialog.Description className="mt-1.5 text-sm text-neutral-600">
                  Preenche rapidinho. A gente te retorna do jeito e na hora que for melhor pra você.
                </Dialog.Description>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="text-sm font-semibold text-neutral-900">Nome</span>
                      <input name="nome" required placeholder="Como te chamamos?" className={inputBase} />
                    </label>
                    <label className="block">
                      <span className="text-sm font-semibold text-neutral-900">WhatsApp / Telefone</span>
                      <input
                        name="telefone"
                        type="tel"
                        required
                        placeholder="(00) 00000-0000"
                        className={inputBase}
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="text-sm font-semibold text-neutral-900">E-mail</span>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="voce@empresa.com"
                      className={inputBase}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-neutral-900">
                      Sua empresa <span className="font-normal text-neutral-400">(opcional)</span>
                    </span>
                    <input
                      name="empresa"
                      placeholder="Nome e ramo do negócio"
                      className={inputBase}
                    />
                  </label>

                  <label className="block">
                    <span className="text-sm font-semibold text-neutral-900">
                      O que você precisa ou sua ideia
                    </span>
                    <textarea
                      name="ideia"
                      rows={3}
                      required={!conversar}
                      disabled={conversar}
                      placeholder="Conta em poucas linhas o que você imagina. Sem precisar detalhar tudo."
                      className={`${inputBase} h-auto py-3 resize-none ${conversar ? "opacity-50" : ""}`}
                    />
                  </label>

                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      name="conversar"
                      checked={conversar}
                      onChange={(e) => setConversar(e.target.checked)}
                      className="mt-0.5 w-5 h-5 rounded-md border-neutral-300 text-green-600 focus:ring-green-500/30 accent-green-600"
                    />
                    <span className="text-sm text-neutral-700 leading-snug">
                      Ainda não sei ao certo — prefiro conversar primeiro.
                    </span>
                  </label>

                  <PillGroup
                    legend="Melhor horário pra te chamar"
                    options={horarios}
                    value={horario}
                    onChange={setHorario}
                  />

                  <PillGroup
                    legend="Melhor forma de contato"
                    options={contatos}
                    value={contato}
                    onChange={setContato}
                  />

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-500 hover:bg-green-400 disabled:opacity-70 text-neutral-950 h-13 py-3.5 font-bold transition-colors"
                  >
                    {status === "sending" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        Enviando…
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center">
                    Resposta rápida e sem compromisso.
                  </p>
                </form>
              </>
            )}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </ContactModalContext.Provider>
  );
}
