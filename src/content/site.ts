/**
 * Conteúdo central do site, fonte única de verdade.
 *
 * ⚠️ NOME DA EMPRESA: troque APENAS `brand.name` abaixo quando o sócio
 *    definir o nome final. Ele se propaga pra title, og, header, footer.
 *
 * i18n-ready: pra criar a versão EN, duplique este objeto como `siteEN`
 *    e exporte conforme o locale. A UI só consome `site.*`, nunca texto cru.
 */

export const site = {
  brand: {
    name: "TrevoCode",
    tagline: "Especialistas em Inteligência Artificial",
    description:
      "Você imagina, a gente desenvolve. Especialistas em Inteligência Artificial que criam apps, sites e sistemas sob medida pro seu negócio crescer.",
    url: "https://trevocode.com",
    email: "contato@exemplo.com", // ⚠️ trocar pelo e-mail real
    whatsapp: "5599999999999", // ⚠️ trocar pelo número real (formato internacional)
  },

  nav: [
    { label: "O que fazemos", href: "/#servicos" },
    { label: "Soluções", href: "/#solucoes" },
    { label: "Portfólio", href: "/#portfolio" },
    { label: "Blog", href: "/blog" },
  ],

  hero: {
    badge: "Especialistas em Inteligência Artificial",
    titleLines: ["Você imagina."],
    titleEmphasis: "A gente desenvolve.",
    subtitle:
      "Apps, sites e sistemas feitos sob medida pra sua empresa. Você conta o que precisa, a gente transforma em tecnologia que trabalha por você.",
    ctaPrimary: "Quero uma solução",
    ctaSecondary: "Ver o que já fizemos",
  },

  // Faixa de credibilidade logo abaixo do hero
  trust: {
    eyebrow: "Por que confiar a entrega à gente",
    metrics: [
      { value: "+10", label: "projetos no ar" },
      { value: "100%", label: "feito sob medida" },
      { value: "IA", label: "do nosso lado" },
    ],
  },

  // 3 cards "você imagina / a gente desenvolve / você cresce" (estilo Afinny)
  pillars: {
    eyebrow: "Simples assim",
    title: "Você imagina. A gente faz acontecer.",
    subtitle: "Do seu jeito, pro seu negócio. Sem complicação e sem termo técnico.",
    items: [
      {
        tag: "Você imagina",
        icon: "Lightbulb",
        title: "Conte a sua ideia.",
        body: "Você sabe o que a sua empresa precisa. A gente escuta, entende o seu dia a dia e transforma isso num plano claro, sem termo técnico.",
        image: "/fotos/imagina.webp",
        dark: false,
      },
      {
        tag: "A gente desenvolve",
        icon: "Sparkles",
        title: "A gente põe de pé.",
        body: "Nosso time cria o app, o site ou o sistema sob medida, com inteligência artificial trabalhando a seu favor do início ao fim.",
        image: "/fotos/equipe-escritorio.webp",
        dark: true,
      },
      {
        tag: "Você cresce",
        icon: "TrendingUp",
        title: "Sua empresa decola.",
        body: "Você ganha tempo, vende mais e atende melhor. A tecnologia passa a trabalhar por você, todos os dias.",
        image: "/fotos/cresce.webp",
        dark: false,
      },
    ],
    cta: "Quero uma solução pra minha empresa",
  },

  // Mosaico de soluções por nicho (réplica melhorada da AlphaCode + exclusivos AI)
  solutions: {
    eyebrow: "Soluções por nicho",
    title: "Um mosaico de soluções.",
    titleMuted: "Pra cada tipo de negócio.",
    subtitle:
      "Do delivery à fintech, da clínica ao e-commerce, montamos a solução certa pro seu setor. E o que ninguém mais entrega: IA de verdade embarcada.",
    items: [
      { key: "apps", icon: "Smartphone", title: "Apps iOS & Android", desc: "Apps nativos publicados nas lojas, com backend, push e atualizações.", ai: false },
      { key: "saas", icon: "LayoutGrid", title: "Plataformas SaaS", desc: "Multi-tenant, billing recorrente e painel completo.", ai: false },
      { key: "ecom", icon: "ShoppingCart", title: "E-commerce", desc: "Loja própria, pagamentos, frete e gestão total.", ai: false },
      { key: "delivery", icon: "Truck", title: "Delivery próprio", desc: "Canal próprio de pedidos, sem comissão de marketplace.", ai: false },
      { key: "fintech", icon: "Landmark", title: "Fintech / Banco digital", desc: "Contas, PIX, cartões e crédito via BaaS homologado.", ai: false },
      { key: "saude", icon: "HeartPulse", title: "Saúde / Telemedicina", desc: "Agendamento, consulta por vídeo e pagamento online.", ai: false },
      { key: "erp", icon: "Database", title: "Sistemas / ERP sob medida", desc: "Gestão, estoque, regras e relatórios do seu jeito.", ai: false },
      { key: "integra", icon: "Plug", title: "Integrações & APIs", desc: "Pagamentos, ERPs, PDV e o que o negócio pedir.", ai: false },
      { key: "chatbot", icon: "MessageCircle", title: "Chatbot / WhatsApp", desc: "Atendimento e vendas automatizados no canal nº 1 do Brasil.", ai: false },
      { key: "sites", icon: "Globe", title: "Sites premium", desc: "Institucional rápido, responsivo e otimizado pra busca.", ai: false },
      { key: "ai-agents", icon: "Bot", title: "Agentes de IA & automação", desc: "Copilotos e automações com IA embarcados no produto.", ai: true },
      { key: "ai-mvp", icon: "Rocket", title: "MVP em semanas com IA", desc: "Da ideia ao app no ar em semanas, não meses.", ai: true },
    ],
  },

  // "Nós somos especialistas" (estilo AlphaCode), 6 áreas-chave
  expertise: {
    eyebrow: "Nós somos especialistas",
    title: "Tudo que a sua empresa precisa",
    titleMuted: "pra transformar tarefa em automação e tempo em dinheiro.",
    areas: [
      { title: "Desenvolvimento sob medida", desc: "Sistemas e plataformas construídos do zero pro seu problema." },
      { title: "Apps iOS & Android", desc: "Nativos, publicados nas lojas, com backend e push." },
      { title: "Plataformas SaaS", desc: "Multi-tenant, billing recorrente e painel administrativo." },
      { title: "Integrações & APIs", desc: "Pagamentos, ERPs, gateways e o que mais o negócio pedir." },
      { title: "Cloud & Deploy", desc: "Infra, CI/CD e produção que aguenta crescer." },
      { title: "IA aplicada", desc: "Automação e inteligência embarcadas no produto, não só no marketing." },
    ],
  },

  // Banda de métricas (estilo AlphaCode "entre pro clube")
  metricsBand: {
    title: "Traga seu projeto pra esse time.",
    subtitle: "Software que entra em produção e gera resultado, não protótipo que morre na gaveta.",
    stats: [
      { value: "100%", label: "dos projetos auditados ponta a ponta" },
      { value: "Semanal", label: "ritmo de entrega que você acompanha" },
      { value: "1 dono", label: "do começo ao deploy, sem repasse" },
      { value: "BR + EUA", label: "atendimento local, padrão global" },
    ],
  },

  services: {
    eyebrow: "O que a gente faz",
    title: "Três formas de tirar a sua ideia do papel.",
    subtitle:
      "A gente cuida de tudo, do começo ao fim. Você recebe pronto e funcionando, sem dor de cabeça.",
    items: [
      {
        tag: "Sob medida",
        title: "Sistemas feitos do seu jeito",
        desc: "Você diz o que a sua empresa precisa e a gente cria do zero. A gente assume o projeto inteiro e entrega tudo funcionando.",
        bullets: ["Feito sob medida pra você", "Preço combinado antes", "Pronto e funcionando"],
      },
      {
        tag: "Pra faturar todo mês",
        title: "Plataformas que vendem por assinatura",
        desc: "A gente cria o seu sistema de vendas com a cobrança no automático. Assim o dinheiro entra todo mês sem você correr atrás de cada cliente.",
        bullets: ["Cobrança no automático", "Recebe por Pix e cartão", "Relatórios do seu negócio"],
      },
      {
        tag: "Aplicativo",
        title: "Aplicativos pra celular",
        desc: "A gente cria o aplicativo da sua empresa e coloca nas lojas (a do Android e a do iPhone). Seu cliente baixa, usa e recebe avisos no celular.",
        bullets: ["Android e iPhone", "Publicado nas lojas", "Avisos no celular do cliente"],
      },
    ],
  },

  // Solução em destaque, loja física → e-commerce (estilo "solução" da AlphaCode)
  solution: {
    eyebrow: "Solução pronta",
    title: "Transformamos sua loja física",
    titleAccent: "em e-commerce de verdade.",
    subtitle:
      "Loja online pronta pra vender, no seu domínio, com uma área de gerenciamento completa. Você cuida do produto, a plataforma cuida do resto.",
    bullets: [
      "Loja pronta pra vender, no seu domínio",
      "Painel de gestão completo: produtos, pedidos e estoque",
      "Pagamentos (Pix, cartão, boleto) e frete integrados",
      "Relatórios de vendas, lucro e despesas",
    ],
    cta: "Quero minha loja online",
    image: "/portfolio/spacefut.webp",
    imageCaption: "SpaceFut, e-commerce com 650+ produtos, construído por nós",
  },

  manifesto: {
    quote: [
      { text: "A maioria dos estúdios é ", muted: false, accent: false },
      { text: "rápida e descuidada", muted: true, accent: false },
      { text: ", ou ", muted: false, accent: false },
      { text: "caprichada e lenta", muted: true, accent: false },
      { text: ". Nós usamos IA pra ser as duas coisas ", muted: false, accent: false },
      { text: "ao mesmo tempo", muted: false, accent: true },
      { text: ".", muted: false, accent: false },
    ],
    signature: "O nosso jeito de construir",
  },

  differentiator: {
    eyebrow: "O diferencial",
    title: "IA não é enfeite. É o nosso método.",
    subtitle:
      "Construímos com IA no fluxo de trabalho inteiro, o que antes levava meses, entregamos em semanas, com qualidade de quem revisa cada linha.",
    items: [
      {
        title: "Velocidade real",
        desc: "Ciclos de entrega curtos. Você vê o produto crescer toda semana, não num relatório no fim do trimestre.",
      },
      {
        title: "Qualidade auditada",
        desc: "IA acelera, gente experiente revisa. Cada feature passa por teste ponta a ponta antes de ser declarada pronta.",
      },
      {
        title: "Dono único do projeto",
        desc: "Quem vende é quem entrega. Sem repassar pra terceiro, sem telefone sem fio entre você e quem programa.",
      },
      {
        title: "Segurança desde o dia 1",
        desc: "Arquitetura com camadas de segurança e LGPD pensadas desde o começo, não remendadas depois do vazamento.",
      },
    ],
  },

  process: {
    eyebrow: "Como trabalhamos",
    title: "Sem mistério. Sem surpresa.",
    subtitle: "Do primeiro café ao deploy, você sabe exatamente onde o projeto está.",
    steps: [
      {
        n: "01",
        t: "Escopo e proposta",
        d: "Entendemos o problema de verdade e fechamos um escopo claro com proposta fechada. Você sabe exatamente o que vai receber antes de assinar.",
      },
      {
        n: "02",
        t: "Construção com IA",
        d: "Entramos no código com IA no fluxo inteiro. Entregas semanais, ambiente de homologação pra você acompanhar ao vivo.",
      },
      {
        n: "03",
        t: "Auditoria e deploy",
        d: "Teste ponta a ponta, revisão de segurança, e colocamos no ar. Em produção, funcionando, com você no controle.",
      },
    ],
  },

  cases: {
    eyebrow: "Cases",
    title: "Não é portfólio de slide.",
    titleMuted: "É software no ar.",
    items: [
      {
        brand: "MyFit",
        tag: "Plataforma de gestão",
        title: "Sistema completo de gestão de academia",
        desc: "Web admin + apps (professor e aluno) + tempo real. Contratos, agenda, marcação de aula, cobrança e analytics. Entregue e em uso diário.",
        result: "Em uso diário",
      },
      {
        brand: "Afinny",
        tag: "Marketplace SaaS",
        title: "Marketplace de micro-SaaS e afiliados",
        desc: "Plataforma multi-tenant com checkout, billing recorrente, SSO, KYC e app mobile. Do zero à primeira venda real.",
        result: "Em produção",
      },
      {
        brand: "SpaceFut",
        tag: "E-commerce",
        title: "Loja com catálogo de centenas de produtos",
        desc: "Next.js + pagamentos + painel administrativo completo (lucro, despesas, picks). Pronta pra escalar.",
        result: "650+ produtos",
      },
    ],
  },

  // Catálogo completo, tudo que já foi construído (sem valores de contrato)
  portfolio: {
    eyebrow: "O que já criamos",
    title: "Apps e plataformas",
    titleMuted: "que a gente colocou no ar.",
    subtitle: "Pra cada tipo de negócio, uma solução feita sob medida.",
    items: [
      {
        name: "Academia",
        category: "App + gestão",
        desc: "App do aluno, agenda, marcação de aula e cobrança no automático.",
        image: "/portfolio/cat-academia.webp",
      },
      {
        name: "Restaurante & Delivery",
        category: "Delivery próprio",
        desc: "Pedidos no seu próprio app, sem pagar comissão de marketplace.",
        image: "/portfolio/cat-restaurantes.webp",
      },
      {
        name: "E-commerce",
        category: "Loja online",
        desc: "Loja própria com pagamentos, frete e área de gestão completa.",
        image: "/portfolio/cat-ecommerce.webp",
      },
      {
        name: "Fintech",
        category: "Banco digital",
        desc: "Contas, PIX, cartões e crédito com a cara da sua empresa.",
        image: "/portfolio/cat-fintech.webp",
      },
      {
        name: "Clínica & Saúde",
        category: "Saúde",
        desc: "Agendamento online, consulta por vídeo e prontuário.",
        image: "/portfolio/cat-clinicas.webp",
      },
      {
        name: "Concessionária",
        category: "Veículos",
        desc: "Catálogo de veículos, test-drive e funil de vendas.",
        image: "/portfolio/cat-concessionarias.webp",
      },
      {
        name: "Imobiliária",
        category: "Imóveis",
        desc: "Vitrine de imóveis, agendamento de visita e propostas.",
        image: "/portfolio/cat-imobiliarias.webp",
      },
      {
        name: "Educação",
        category: "Cursos",
        desc: "Plataforma de cursos, turmas, área do aluno e certificados.",
        image: "/portfolio/cat-educacao.webp",
      },
    ],
  },

  stack: {
    eyebrow: "Stack",
    title: "As ferramentas que movem a entrega.",
    items: [
      "Next.js", "React", "React Native", "TypeScript", "Supabase",
      "PostgreSQL", "Stripe", "Pagar.me", "Vercel", "Expo",
      "Tailwind", "Node.js", "Claude / IA",
    ],
  },

  objections: {
    eyebrow: "Sem letra miúda",
    title: "O que você está se perguntando",
    items: [
      {
        t: "IA não entrega código ruim?",
        d: "Entrega, quando ninguém revisa. Aqui IA acelera e gente experiente audita cada entrega. Velocidade da máquina, julgamento de quem já botou software grande no ar.",
      },
      {
        t: "Vocês somem no meio do projeto?",
        d: "Não. Quem vende é quem entrega. Você fala direto com quem constrói, com entregas semanais pra acompanhar o avanço.",
      },
      {
        t: "Como funciona a contratação?",
        d: "Você recebe uma proposta fechada antes de começar, com escopo e prazo definidos. Sem hora aberta, sem conta que cresce sozinha no fim do mês.",
      },
      {
        t: "E depois que entrega, fico sozinho?",
        d: "A gente coloca no ar e fica do seu lado pra evoluir. Manutenção, novas features e suporte fazem parte da relação.",
      },
      {
        t: "Meu projeto é grande demais / pequeno demais?",
        d: "Fazemos contrato grande sob medida, plataforma recorrente e app. Se cabe em software, a gente conversa, e fala a verdade se não for pra gente.",
      },
      {
        t: "É seguro confiar meus dados?",
        d: "Segurança e LGPD entram na arquitetura desde o dia 1, em camadas. Não é remendo depois do problema, é fundação.",
      },
    ],
  },

  team: {
    eyebrow: "Time",
    title: "Pequeno por escolha. Sênior por necessidade.",
    subtitle:
      "Sem camada de gerente entre você e quem resolve. Você fala com quem decide, projeta e entrega.",
    members: [
      { initials: "F", name: "Fabricio", role: "Fundador & Produto", desc: "Dono do método, do histórico e da relação com o cliente." },
      { initials: "N", name: "Nobre", role: "Líder Técnico", desc: "Arquitetura e construção com IA. Garante que a entrega fica de pé." },
      { initials: "L", name: "Luan", role: "Comercial & Projetos", desc: "Primeiro contato, escopo e acompanhamento do começo ao fim." },
    ],
  },

  finalCta: {
    title: "Tem uma ideia parada?",
    titleEmphasis: "Vamos colocar no ar.",
    subtitle:
      "Conte o que você precisa. Você recebe um caminho claro, escopo, prazo e próximos passos, sem enrolação e sem compromisso.",
    cta: "Falar com o time",
    note: "Resposta rápida. Sem compromisso.",
  },

  // Jornada completa do projeto (página /processo)
  journey: {
    eyebrow: "Como trabalhamos",
    title: "Do primeiro café",
    titleEmphasis: "ao seu produto no ar.",
    subtitle:
      "Um processo claro, sem mistério. Você sabe exatamente onde o projeto está em cada etapa, e fala direto com quem constrói.",
    steps: [
      {
        n: "01",
        icon: "PhoneCall",
        title: "Call de alinhamento",
        desc: "Uma conversa pra entender a sua ideia de verdade: o problema, o público, o que já existe e aonde você quer chegar. Sem formulário genérico.",
        points: ["Entendimento do negócio e das dores", "Definição do objetivo do projeto", "Primeiras ideias de solução"],
      },
      {
        n: "02",
        icon: "ClipboardList",
        title: "Escopo e proposta",
        desc: "Transformamos a conversa em um escopo claro: o que entra, o que fica pra depois e o prazo. Você recebe uma proposta fechada antes de qualquer linha de código.",
        points: ["Escopo detalhado e priorizado", "Prazo e etapas definidos", "Proposta fechada, sem surpresa"],
      },
      {
        n: "03",
        icon: "PenTool",
        title: "UX e protótipo",
        desc: "Desenhamos as telas e o fluxo antes de programar. Você vê e aprova a cara do produto cedo, mudar no design é barato, mudar no código é caro.",
        points: ["Fluxo de navegação", "Protótipo das telas principais", "Validação visual com você"],
      },
      {
        n: "04",
        icon: "Code2",
        title: "Construção com IA",
        desc: "Entramos no código com IA no fluxo inteiro, em ciclos semanais. Você acompanha o produto crescer num ambiente de homologação, ao vivo, não num relatório.",
        points: ["Entregas semanais", "Ambiente pra você testar", "Ajuste de rota a cada ciclo"],
      },
      {
        n: "05",
        icon: "ShieldCheck",
        title: "Auditoria e testes",
        desc: "Antes de ir pro ar, cada fluxo passa por teste ponta a ponta e revisão de segurança e LGPD. Nada é declarado pronto sem ser verificado.",
        points: ["Teste ponta a ponta", "Revisão de segurança e LGPD", "Correção antes do lançamento"],
      },
      {
        n: "06",
        icon: "Rocket",
        title: "Deploy e lançamento",
        desc: "Colocamos no ar: web no seu domínio, app publicado nas lojas. Cuidamos da parte chata (configuração, contas, aprovação) pra você focar no lançamento.",
        points: ["Publicação web e nas lojas", "Configuração de domínio e infra", "Acompanhamento do go-live"],
      },
      {
        n: "07",
        icon: "LifeBuoy",
        title: "Evolução e suporte",
        desc: "Software bom não nasce pronto, evolui. A gente fica do seu lado pra manter, melhorar e crescer o produto conforme o seu negócio.",
        points: ["Manutenção e monitoramento", "Novas features sob demanda", "Suporte direto com quem construiu"],
      },
    ],
  },

  footer: {
    tagline: "O estúdio que constrói com IA e entrega com rigor.",
    columns: [
      {
        title: "Estúdio",
        links: [
          { label: "O que fazemos", href: "/#servicos" },
          { label: "Soluções", href: "/#solucoes" },
          { label: "Portfólio", href: "/#portfolio" },
          { label: "Blog", href: "/blog" },
        ],
      },
      {
        title: "Soluções",
        links: [
          { label: "Restaurantes & Delivery", href: "/solucoes/restaurantes" },
          { label: "Academias & Estúdios", href: "/solucoes/academias" },
          { label: "Concessionárias", href: "/solucoes/concessionarias" },
          { label: "Começar um projeto", href: "/#contato" },
        ],
      },
    ],
  },
} as const;

export type Site = typeof site;
