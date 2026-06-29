import { createClient } from "@supabase/supabase-js"
import { NextResponse } from "next/server"

export const runtime = "nodejs"

// Recebe o formulário "Começar um projeto" do site e grava como lead no
// Supabase da plataforma de gestão. Usa a service-role (server-only) — a RLS
// da tabela leads exige membro autorizado, e a service-role passa por cima.
export async function POST(req: Request) {
  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null
  const txt = (v: unknown, n: number) =>
    typeof v === "string" && v.trim() ? v.trim().slice(0, n) : null

  const nome = txt(body?.nome, 200)
  if (!nome) {
    return NextResponse.json({ error: "Nome é obrigatório." }, { status: 400 })
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    return NextResponse.json({ error: "Serviço indisponível." }, { status: 503 })
  }

  const supabase = createClient(url, key, { auth: { persistSession: false } })
  const { error } = await supabase.from("leads").insert({
    nome,
    email: txt(body?.email, 200),
    telefone: txt(body?.telefone, 50),
    empresa: txt(body?.empresa, 200),
    mensagem: txt(body?.ideia, 2000),
    prefere_conversar: Boolean(body?.conversar),
    melhor_horario: txt(body?.horario, 30),
    melhor_canal: txt(body?.contato, 30),
    origem: "site",
  })

  if (error) {
    console.error("[api/leads] insert falhou:", error.message)
    return NextResponse.json({ error: "Falha ao salvar." }, { status: 500 })
  }
  return NextResponse.json({ ok: true })
}
