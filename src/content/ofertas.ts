// Redirects 301 das ofertas: trevocode.com/oferta/<slug> → checkout (Kleevo).
// Pra adicionar produto novo: 1 linha aqui + push na main (o Vercel publica).
// Query string (utm_*, etc.) é preservada automaticamente pelo Next.
const KLEEVO = "https://app.kleevopay.com/checkout/aurvel-3e1734";

export const ofertas: Record<string, string> = {
  "eg-primitiva": `${KLEEVO}/e-g-primitiva-es`,
  "e-sabado": `${KLEEVO}/e-sabado-es`,
  "e-primitiva": `${KLEEVO}/e-primitiva-es`,
  "e-navidad": `${KLEEVO}/e-navidad-es`,
  "e-milliones": `${KLEEVO}/e-milliones-es`,
  "e-jueves": `${KLEEVO}/e-jueves-es`,
  "e-especial": `${KLEEVO}/e-especial-es`,
  "e-bonoloto": `${KLEEVO}/e-bonoloto-es`,
};
