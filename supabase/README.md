# Supabase — schema da plataforma interna

Projeto: **TrevoCode Gestao** (`xptfgdahjbnxlmlowsne`, região sa-east-1).

## Migrations

- `migrations/20260701210000_baseline_schema.sql` — baseline do schema `public`
  (22 tabelas: CRM, financeiro, prospecção) capturado via `pg_dump --schema-only`
  em 01/jul/2026. **Já inclui o estado corrigido do RLS** (ver abaixo).

Até 01/jul o schema vivia só no banco, sem versionamento. Este baseline passa a
ser a fonte de verdade. Mudanças novas devem entrar como migrations incrementais.

## Segurança do RLS (corrigido em 01/jul)

Todas as tabelas têm RLS habilitado. O acesso da equipe é gateado por
`public.is_membro()` (SECURITY DEFINER), que confere se o e-mail do JWT está em
`usuarios_autorizados`.

**Bug corrigido:** cada tabela interna tinha DUAS policies permissivas — uma
`*_authenticated` com `USING (true)` e outra `membros_only` com `is_membro()`.
Como policies permissivas se combinam com OR no Postgres, o efetivo era
`true OR is_membro() = true`, anulando o gate. Qualquer usuário autenticado
poderia ler/escrever todo o CRM/financeiro pela REST API, furando a allowlist
do Next.js. As policies `USING (true)` foram removidas; sobrou só o gate por
membro. As tabelas `prospect_*` (que só tinham a policy aberta de leitura)
ganharam policy de SELECT gated por `is_membro()`. Escrita da máquina de
prospecção segue via `service_role` (bypassa RLS).

## Regenerar o baseline

```bash
# via pooler (não precisa de Docker)
pg_dump "$SUPABASE_DB_URL" --schema-only --schema=public \
  --no-owner --no-privileges --no-comments \
  > supabase/migrations/<timestamp>_baseline_schema.sql
```
