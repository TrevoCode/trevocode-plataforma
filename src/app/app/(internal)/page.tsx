import { Users, FileText, Wallet, FolderKanban } from "lucide-react"

export const metadata = {
  title: "Painel interno",
}

// Placeholder do dashboard. Cada card vira um módulo da plataforma de gestão.
const modulos = [
  { nome: "Clientes / CRM", desc: "Pipeline, contratos e contatos", icon: Users },
  { nome: "Projetos", desc: "Status, prazos e entregas", icon: FolderKanban },
  { nome: "Propostas", desc: "Geração e acompanhamento", icon: FileText },
  { nome: "Financeiro", desc: "Receitas, custos e repasses", icon: Wallet },
]

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-5xl">
      <h1 className="text-2xl font-semibold">Painel interno</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Base da plataforma de gestão da TrevoCode. Os módulos abaixo são os próximos a construir.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {modulos.map((m) => (
          <div
            key={m.nome}
            className="rounded-xl border border-border bg-card p-5"
          >
            <m.icon className="size-5 text-primary" />
            <h2 className="mt-3 font-medium">{m.nome}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{m.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
