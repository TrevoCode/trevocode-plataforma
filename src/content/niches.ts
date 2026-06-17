/**
 * Soluções por nicho/setor, cada item vira:
 *  - um tile no mosaico da home
 *  - uma página dedicada em /solucoes/[slug]
 *
 * `exclusive: true` = nicho que a concorrência (AlphaCode) não atende.
 * Para adicionar um nicho novo: copie um objeto, troque os campos. Pronto.
 */

export type Niche = {
  slug: string;
  name: string; // curto, pro tile
  icon: string; // nome do ícone lucide
  exclusive?: boolean;
  tileDesc: string; // descrição no mosaico
  hero: { eyebrow: string; title: string; subtitle: string };
  problem: { title: string; body: string };
  features: string[]; // funcionalidades (grid)
  ai: { title: string; body: string }; // como a IA entra (diferencial)
  cases?: string[]; // referências do nosso portfólio
};

export const niches: Niche[] = [
  {
    slug: "restaurantes",
    name: "Restaurantes & Delivery",
    icon: "Utensils",
    tileDesc: "Canal de pedidos próprio, sem comissão de marketplace.",
    hero: {
      eyebrow: "Para food service",
      title: "Seu delivery, no seu app.",
      subtitle:
        "Pare de entregar 30% da margem pro marketplace. Um canal próprio de pedidos com pagamento online, fidelidade e relacionamento direto com o cliente.",
    },
    problem: {
      title: "O marketplace te dá pedido, mas tira sua margem e seu cliente.",
      body: "Quando o canal não é seu, você paga comissão alta, não sabe quem é o cliente e não consegue fidelizar. Um app próprio devolve a margem e o relacionamento pra sua marca.",
    },
    features: [
      "Cardápio digital flexível com fotos e adicionais",
      "Pagamento online (Pix, cartão) e na entrega",
      "Acompanhamento do pedido em tempo real",
      "Cupons, cashback e programa de fidelidade",
      "Push de promoções direto no celular do cliente",
      "Painel de gestão com relatórios de venda",
    ],
    ai: {
      title: "IA que vende mais",
      body: "Recomendação de itens personalizada, recuperação de carrinho abandonado e respostas automáticas no WhatsApp, tudo com IA embarcada.",
    },
    cases: ["SpaceFut", "MyFit"],
  },
  {
    slug: "academias",
    name: "Academias & Estúdios",
    icon: "Dumbbell",
    tileDesc: "Gestão completa, app do aluno e do professor.",
    hero: {
      eyebrow: "Para academias e estúdios",
      title: "A academia inteira na palma da mão.",
      subtitle:
        "Gestão, agenda, marcação de aula, cobrança e app do aluno e do professor. Já construímos isso de verdade, e está em uso diário.",
    },
    problem: {
      title: "Planilha, WhatsApp solto e sistema genérico não escalam academia.",
      body: "Controle de contratos, faltas, marcação de aula e cobrança vira caos sem um sistema feito pro seu fluxo. A gente já resolveu isso pra uma rede real.",
    },
    features: [
      "App do aluno: marcar aula, treino, evolução e avisos",
      "App do professor: agenda, presença e alunos do dia",
      "Gestão de contratos, planos e multi-unidade",
      "Cobrança recorrente com juros/multa automáticos",
      "Feed, ranking, competições e share-card",
      "Dashboard do dono em tempo real",
    ],
    ai: {
      title: "IA que retém aluno",
      body: "Alerta de risco de evasão, sugestão de treino e mensagens automáticas de reativação pra quem sumiu, antes de virar cancelamento.",
    },
    cases: ["MyFit"],
  },
  {
    slug: "concessionarias",
    name: "Concessionárias & Veículos",
    icon: "Car",
    tileDesc: "Estoque, test-drive, financiamento e pós-venda.",
    hero: {
      eyebrow: "Para concessionárias e veículos",
      title: "Da vitrine ao pós-venda, digital.",
      subtitle:
        "Catálogo de veículos com estoque em tempo real, agendamento de test-drive, simulação de financiamento e relacionamento com o cliente, num app com a sua marca.",
    },
    problem: {
      title: "Lead de carro esfria rápido e some entre planilhas e WhatsApp.",
      body: "Sem um funil digital próprio, o cliente pesquisa, some e compra em outro lugar. Um canal próprio captura, qualifica e acompanha o lead até a venda e o retorno pra revisão.",
    },
    features: [
      "Catálogo com estoque, fotos e ficha completa",
      "Agendamento de test-drive e visita",
      "Simulação de financiamento integrada",
      "Funil de leads com qualificação automática",
      "Pós-venda: agendamento de revisão e recall",
      "Painel comercial com performance por vendedor",
    ],
    ai: {
      title: "IA que qualifica e fecha",
      body: "Atendimento por IA no WhatsApp 24h, qualificação automática de leads e sugestão do veículo ideal pelo perfil do cliente.",
    },
  },
  {
    slug: "clinicas",
    name: "Clínicas & Saúde",
    icon: "HeartPulse",
    tileDesc: "Agendamento, telemedicina e prontuário.",
    hero: {
      eyebrow: "Para saúde",
      title: "Atenda mais, com menos fricção.",
      subtitle:
        "Agendamento online, consulta por vídeo, pagamento e comunicação direta entre paciente e profissional, com segurança e privacidade desde o desenho.",
    },
    problem: {
      title: "Agenda no telefone e falta de canal digital travam o crescimento.",
      body: "Clínicas perdem paciente por dificuldade de agendar e por não ter presença digital. Um app próprio amplia a capacidade de atendimento e fideliza.",
    },
    features: [
      "Agendamento online com confirmação automática",
      "Teleconsulta por vídeo segura",
      "Pagamento online da consulta",
      "Prontuário e histórico do paciente",
      "Lembretes por push e WhatsApp (reduz no-show)",
      "Múltiplas especialidades e profissionais",
    ],
    ai: {
      title: "IA que organiza o atendimento",
      body: "Triagem inicial por IA, resposta a dúvidas frequentes e otimização da agenda pra reduzir buracos e faltas.",
    },
  },
  {
    slug: "ecommerce",
    name: "E-commerce & Varejo",
    icon: "ShoppingCart",
    tileDesc: "Loja própria, pagamentos e gestão total.",
    hero: {
      eyebrow: "Para varejo",
      title: "Sua loja física vira e-commerce de verdade.",
      subtitle:
        "Loja online pronta pra vender, no seu domínio, com pagamentos, frete e uma área de gerenciamento completa. Você cuida do produto, a plataforma cuida do resto.",
    },
    problem: {
      title: "Vender só no balcão (ou só no marketplace) limita o seu teto.",
      body: "Sem canal próprio, você depende de terceiros e paga taxa em tudo. Uma loja própria abre vendas 24h e dados do seu cliente na sua mão.",
    },
    features: [
      "Catálogo com variações, estoque e busca",
      "Pagamentos (Pix, cartão, boleto) e frete",
      "Checkout otimizado pra conversão",
      "Cupons, kits e upsell",
      "Painel: pedidos, lucro, despesas e relatórios",
      "Integração com ERP e meios de pagamento",
    ],
    ai: {
      title: "IA que aumenta o ticket",
      body: "Recomendação de produtos, busca inteligente e recuperação de carrinho, com IA trabalhando pela conversão.",
    },
    cases: ["SpaceFut"],
  },
  {
    slug: "fintech",
    name: "Fintechs & Pagamentos",
    icon: "Landmark",
    tileDesc: "Banco digital, PIX, cartões e crédito via BaaS.",
    hero: {
      eyebrow: "Para serviços financeiros",
      title: "Sua marca, seu banco digital.",
      subtitle:
        "Contas, PIX, cartões e crédito sobre BaaS homologado. Construímos o produto e as integrações com segurança e compliance desde o desenho.",
    },
    problem: {
      title: "Lançar produto financeiro sozinho é caro, lento e arriscado.",
      body: "Regulação, integração bancária e segurança travam quem tenta do zero. Com BaaS e arquitetura certa, você opera focado no negócio.",
    },
    features: [
      "Contas digitais (depósito, saque, transferência)",
      "PIX, TED e recebimentos em tempo real",
      "Emissão e gestão de cartões",
      "Crédito e gestão de carteiras",
      "Segurança de nível bancário e antifraude",
      "Internet banking e APIs financeiras",
    ],
    ai: {
      title: "IA que protege e aprova",
      body: "Análise antifraude, score de crédito assistido por IA e atendimento automatizado pros clientes da sua fintech.",
    },
    cases: ["Afinny"],
  },
  {
    slug: "imobiliarias",
    name: "Imobiliárias & Locação",
    icon: "Building2",
    tileDesc: "Vitrine de imóveis, visitas e propostas online.",
    hero: {
      eyebrow: "Para imobiliárias e locação",
      title: "Imóveis que vendem no digital.",
      subtitle:
        "Vitrine com filtros inteligentes, agendamento de visita, proposta e contrato online, um funil digital que não deixa o lead esfriar.",
    },
    problem: {
      title: "Portal de terceiros cobra caro e esconde o seu cliente.",
      body: "Depender de portais significa pagar por lead e não ter relacionamento. Um canal próprio captura, qualifica e acompanha o interessado até a chave na mão.",
    },
    features: [
      "Vitrine com filtros, mapa e tour virtual",
      "Agendamento de visita online",
      "Funil de leads com qualificação automática",
      "Proposta e documentos digitais",
      "Integração com CRM e portais",
      "Painel de performance por corretor",
    ],
    ai: {
      title: "IA que casa cliente e imóvel",
      body: "Recomendação de imóveis pelo perfil, atendimento por IA no WhatsApp e priorização dos leads mais quentes.",
    },
  },
  {
    slug: "educacao",
    name: "Educação & Cursos",
    icon: "GraduationCap",
    tileDesc: "Plataforma de cursos, turmas e pagamentos.",
    hero: {
      eyebrow: "Para educação",
      title: "Seu conhecimento, plataforma própria.",
      subtitle:
        "Área de aluno, conteúdo em vídeo, turmas, certificados e cobrança recorrente, sem depender (e sem pagar taxa) de plataforma de terceiro.",
    },
    problem: {
      title: "Plataforma de terceiro cobra taxa e prende seus alunos.",
      body: "Quem vive de conteúdo precisa de marca e dados próprios. Uma plataforma sua dá controle total da experiência, do preço e do relacionamento.",
    },
    features: [
      "Área do aluno com progresso e certificados",
      "Player de vídeo e materiais",
      "Turmas, trilhas e comunidade",
      "Cobrança recorrente e cupons",
      "App mobile pros alunos",
      "Painel com engajamento e retenção",
    ],
    ai: {
      title: "IA que personaliza o ensino",
      body: "Trilha adaptativa por desempenho, tutor por IA pra tirar dúvidas e alertas de evasão pra agir antes do cancelamento.",
    },
  },
];

export const nicheBySlug = (slug: string) => niches.find((n) => n.slug === slug);
