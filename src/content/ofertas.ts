// Redirects 301 das ofertas: trevocode.com/oferta/<slug> → checkout (Kleevo).
// Pra adicionar produto novo: 1 linha aqui + push na main (o Vercel publica).
// Query string (utm_*, etc.) é preservada automaticamente pelo Next.
export const ofertas: Record<string, string> = {
  // euromilhoes: "https://checkout.kleevo.com/....",
};
