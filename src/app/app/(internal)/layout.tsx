import Link from "next/link"
import { redirect } from "next/navigation"
import { createClient } from "@/lib/supabase/server"
import { isAllowed } from "@/lib/auth/allowlist"
import { LogoutButton } from "@/components/internal/LogoutButton"
import { LayoutDashboard } from "lucide-react"

// Shell da área interna. O middleware já gateia, mas revalidamos aqui
// no servidor como segunda camada (defesa em profundidade).
export default async function InternalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!isAllowed(user?.email)) {
    redirect("/app/login")
  }

  return (
    <div className="flex min-h-svh flex-col bg-background">
      <header className="flex items-center justify-between border-b border-border px-6 py-3">
        <Link href="/app" className="flex items-center gap-2 font-semibold">
          <LayoutDashboard className="size-5 text-primary" />
          TrevoCode · Interno
        </Link>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">{user?.email}</span>
          <LogoutButton />
        </div>
      </header>
      <main className="flex-1 px-6 py-8">{children}</main>
    </div>
  )
}
