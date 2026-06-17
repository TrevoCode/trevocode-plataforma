/**
 * Posts do blog. Cada post = um objeto aqui.
 * body = array de parágrafos (renderizados como <p>). Headings com prefixo "## ".
 * Para publicar um post novo: adicione um objeto no topo do array.
 */

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO
  readMin: number;
  body: string[];
};

export const posts: Post[] = [
  {
    slug: "academia-precisa-de-app-proprio",
    title: "Por que sua academia precisa de um app próprio (e não de mais um sistema)",
    excerpt:
      "Sistema genérico controla; app próprio retém. A diferença entre só gerir e realmente crescer a sua academia.",
    category: "Academias",
    date: "2026-06-16",
    readMin: 5,
    body: [
      "A maioria das academias já tem algum sistema de gestão. Mesmo assim, perde aluno todo mês. O motivo é simples: gerir não é reter.",
      "## Gestão resolve o ontem. App resolve o amanhã",
      "Um sistema registra contrato, presença e pagamento. Útil, mas reativo. Um app próprio coloca a academia no bolso do aluno: ele marca aula, acompanha evolução, recebe aviso e sente que pertence a algo.",
      "## O que muda na prática",
      "Com app próprio, você tem marcação de aula, feed, ranking e share-card que o aluno posta no story (marketing grátis). O professor vê os alunos do dia e a presença. O dono vê tudo em tempo real.",
      "## Onde a IA entra",
      "A parte que ninguém faz: IA que aponta quem está em risco de evasão antes do cancelamento e dispara reativação automática. Reter é mais barato que captar, e a IA reativa antes de você perder.",
      "Já construímos exatamente isso para uma rede real, em uso diário. Se a sua academia ainda depende de planilha e WhatsApp solto, está deixando aluno (e dinheiro) na mesa.",
    ],
  },
  {
    slug: "concessionaria-parar-de-perder-lead",
    title: "Concessionária: como parar de perder lead de carro no WhatsApp",
    excerpt:
      "O lead de veículo esfria em horas. Sem funil digital próprio, ele pesquisa, some e compra em outro lugar.",
    category: "Concessionárias",
    date: "2026-06-15",
    readMin: 4,
    body: [
      "Quem vende carro sabe: o cliente pesquisa muito antes de decidir. Se o seu atendimento depende de WhatsApp manual e planilha, o lead esfria entre uma resposta e outra.",
      "## O problema não é o time, é a operação",
      "Vendedor bom perde venda quando não tem ferramenta. Sem um funil que captura, qualifica e acompanha, o interesse vira esquecimento.",
      "## Um canal próprio muda o jogo",
      "Catálogo com estoque em tempo real, agendamento de test-drive, simulação de financiamento e um funil que registra cada lead. Nada se perde.",
      "## IA que atende 24h e qualifica",
      "Atendimento por IA no WhatsApp responde na hora, qualifica o lead e sugere o veículo ideal pelo perfil. O vendedor recebe o lead já quente. E o pós-venda lembra da revisão sozinho.",
      "É um nicho que a maioria das software houses ignora. A gente não.",
    ],
  },
  {
    slug: "app-proprio-delivery-vale-a-pena",
    title: "App próprio de delivery: quando vale a pena largar o marketplace",
    excerpt:
      "Marketplace dá pedido, mas leva 30% da margem e o seu cliente. A conta vira quando recorrência e marca importam.",
    category: "Restaurantes",
    date: "2026-06-13",
    readMin: 5,
    body: [
      "O marketplace é ótimo pra ser descoberto. Ruim pra construir negócio. Você paga comissão alta e nunca sabe quem é o seu cliente.",
      "## A conta da comissão",
      "Trinta por cento de cada pedido, todo dia, todo mês. Em volume, isso é o seu lucro indo embora, e sem nenhum dado do cliente em troca.",
      "## Quando o app próprio compensa",
      "Quando você já tem recorrência e marca. Aí o canal próprio devolve a margem, traz os dados e cria relacionamento direto: fidelidade, cashback e push de promoção.",
      "## IA que vende mais",
      "Recomendação personalizada, recuperação de carrinho e respostas automáticas no WhatsApp. O app não só economiza comissão, ele vende.",
      "O marketplace continua útil pra descoberta. Mas o seu crescimento precisa de canal próprio.",
    ],
  },
  {
    slug: "loja-fisica-para-ecommerce",
    title: "Loja física para e-commerce: o passo a passo sem dor",
    excerpt:
      "Vender só no balcão limita o teto. Veja como transformar sua loja em e-commerce de verdade, com gestão completa.",
    category: "E-commerce",
    date: "2026-06-10",
    readMin: 4,
    body: [
      "Sua loja física tem produto, cliente e reputação. Falta vender 24h. O e-commerce não substitui o balcão, soma.",
      "## Comece pelo que importa",
      "Catálogo com estoque, checkout que converte e pagamentos (Pix, cartão, boleto). Sem isso, o resto é enfeite.",
      "## Gestão é metade do jogo",
      "Painel com pedidos, lucro, despesas e relatórios. Você precisa enxergar o negócio, não só montar a vitrine.",
      "## IA que aumenta o ticket",
      "Recomendação de produtos e busca inteligente fazem o cliente levar mais. A loja trabalha pela conversão mesmo quando você dorme.",
      "Já fizemos isso com catálogos de centenas de produtos. Dá pra começar enxuto e crescer.",
    ],
  },
  {
    slug: "ia-no-produto-alem-do-hype",
    title: "IA no seu produto: além do hype, o que realmente gera resultado",
    excerpt:
      "IA não é selo de marketing. É recomendação, automação e decisão dentro do produto, onde gera receita.",
    category: "Tecnologia",
    date: "2026-06-06",
    readMin: 5,
    body: [
      "Todo mundo diz que usa IA. Poucos colocam IA onde dá resultado: dentro do produto, resolvendo um problema real do usuário.",
      "## Onde a IA gera dinheiro",
      "Recomendação que aumenta ticket, automação que corta custo, triagem que economiza tempo e previsão que evita perda (evasão, fraude, no-show). Isso é IA com ROI.",
      "## Onde a IA é só enfeite",
      "Chatbot que não resolve, 'powered by AI' no rodapé e relatório que ninguém lê. Bonito no pitch, zero no caixa.",
      "## Como a gente faz",
      "IA entra no fluxo de construção (entregamos mais rápido) e dentro do produto (gera resultado pro cliente). As duas coisas, auditadas por gente que já botou software grande no ar.",
      "Velocidade da máquina, julgamento de quem entende. É isso que separa hype de resultado.",
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);
