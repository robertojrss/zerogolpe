"use strict";

// Referências verificadas em fontes públicas. Nenhum link é exibido antes do leitor abrir a seção de fontes.
const FONTES_CONFIAVEIS = {
  "BC_PIX": {
    "titulo": "Banco Central: segurança no Pix",
    "url": "https://www.bcb.gov.br/estabilidadefinanceira/pix-seguranca"
  },
  "BC_GOLPE": {
    "titulo": "Banco Central: o que fazer após um golpe por Pix",
    "url": "https://www.bcb.gov.br/meubc/faqs/p/vitima-fez-um-pix-e-caiu-em-um-golpe"
  },
  "BC_REG": {
    "titulo": "Banco Central: consultar empréstimos no Registrato",
    "url": "https://www.bcb.gov.br/meubc/faqs/s/relatorio-de-emprestimos-e-financiamentos-scr"
  },
  "FEB_MOTO": {
    "titulo": "Febraban: golpe do falso motoboy",
    "url": "https://portal.febraban.org.br/DetalheAntifraude/3/pt-br/"
  },
  "FEB_PHISH": {
    "titulo": "Febraban: golpe do link falso",
    "url": "https://portal.febraban.org.br/DetalheAntifraude/8/pt-br/"
  },
  "INSS_VIDA": {
    "titulo": "INSS: orientações sobre prova de vida",
    "url": "https://www.gov.br/inss/pt-br/assuntos/prova-de-vida-confira-as-perguntas-respostas-sobre-o-procedimento"
  },
  "INSS_ALERTA": {
    "titulo": "INSS: alerta sobre falsa prova de vida",
    "url": "https://www.gov.br/inss/pt-br/assuntos/noticias/inss-alerta-aposentados-sao-vitimas-de-golpe-envolvendo-falsa-prova-de-vida/"
  },
  "INSS_CONSIG": {
    "titulo": "INSS: direitos e cuidados com consignado",
    "url": "https://www.gov.br/inss/pt-br/direitos-e-deveres/pagamento-de-beneficios/consignacao-em-beneficios-do-inss-seus-direitos-e-medidas-de-seguranca"
  },
  "CERT_GOLPES": {
    "titulo": "CERT.br: cartilhas sobre golpes e fraudes",
    "url": "https://cartilha.cert.br/fasciculos/"
  },
  "PF_CARTILHA": {
    "titulo": "Polícia Federal: cartilhas de segurança",
    "url": "https://www.gov.br/pf/pt-br/assuntos/combate-a-crimes-ciberneticos/cartilhas-de-seguranca-da-informacao/cartilhas-de-seguranca"
  },
  "MJ_PREVENCAO": {
    "titulo": "Ministério da Justiça: prevenção de golpes digitais",
    "url": "https://www.gov.br/mj/pt-br/assuntos/noticias/veja-como-se-proteger-de-golpes-na-internet-e-orientar-sua-familia"
  },
  "MJ_ADVOGADO": {
    "titulo": "Ministério da Justiça: investigação do falso advogado",
    "url": "https://www.gov.br/mj/pt-br/assuntos/noticias/operacao-juris-fictio-desarticula-grupo-suspeito-de-aplicar-golpe-do-falso-advogado-contra-idosos"
  },
  "MJ_CLIQUEI": {
    "titulo": "Ministério da Justiça: cliquei em um link suspeito",
    "url": "https://www.gov.br/mj/pt-br/acesso-a-informacao/acoes-e-programas/sofri-um-golpe-e-agora/cliquei-em-links"
  },
  "MDH_ABUSO": {
    "titulo": "Direitos Humanos: violência financeira contra idosos",
    "url": "https://www.gov.br/mdh/pt-br/assuntos/noticias/2026/defeso-eleitoral/setembro/violencia-patrimonial-e-financeira-contra-a-pessoa-idosa-como-identificar-e-denunciar"
  },
  "MDH_DISQUE100": {
    "titulo": "Ministério dos Direitos Humanos: Disque 100",
    "url": "https://www.gov.br/mdh/pt-br/assuntos/noticias/2026/defeso-eleitoral/agosto/voce-sabe-como-denunciar-a-violencia-contra-pessoas-idosas"
  },
  "CORREIOS": {
    "titulo": "Correios: mensagens falsas sobre encomendas",
    "url": "https://www.correios.com.br/central-de-informacoes/boletim-aos-clientes/mensagens-falsas-sobre-encomendas/"
  },
  "RECEITA_GOLPES": {
    "titulo": "Receita Federal: como identificar golpes",
    "url": "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/e-golpe/e-golpe"
  },
  "RECEITA_IR": {
    "titulo": "Receita Federal: fraudes envolvendo restituição",
    "url": "https://www.gov.br/gestao/pt-br/acesso-a-informacao/acoes-e-programas/principais-acoes-na-area-economica/acoes-2022/receita-alerta-contra-novo-golpe-de-restituicao-de-imposto-de-renda"
  },
  "RECEITA_AMOR": {
    "titulo": "Receita Federal: golpe do amor",
    "url": "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/acoes-e-programas/e-golpe/golpe-do-amor/golpe-do-amor"
  },
  "PC_SEQUESTRO": {
    "titulo": "Polícia Civil: orientações contra falso sequestro",
    "url": "https://www.pc.ms.gov.br/dica-da-policia-civil-alerta-sobre-o-golpe-do-falso-sequestro/"
  },
  "PC_AMOR": {
    "titulo": "Polícia Civil do Paraná: golpe amoroso",
    "url": "https://www.policiacivil.pr.gov.br/Noticia/Dia-dos-Namorados-PCPR-alerta-para-golpes-amorosos-e-orienta-sobre-formas-de-prevencao"
  },
  "CVM_ALERTAS": {
    "titulo": "CVM: sinais de fraude em investimentos",
    "url": "https://www.gov.br/investidor/pt-br/investir/cuidados-ao-investir/evitando-problemas/bandeira-vermelha-os-principais-sinais-de-fraude"
  },
  "CVM_CRIPTO": {
    "titulo": "CVM: cuidados com criptoativos e Forex",
    "url": "https://www.gov.br/cvm/pt-br/assuntos/protecao/mercado-forex"
  },
  "CAIXA_GOLPES": {
    "titulo": "Caixa: segurança e golpes conhecidos",
    "url": "https://www.caixa.gov.br/seguranca/Paginas/default.aspx"
  },
  "ANATEL": {
    "titulo": "Anatel: golpes em nome da agência",
    "url": "https://www.gov.br/anatel/pt-br/assuntos/dicas-contra-fraudes/contatos-em-nome-da-anatel"
  },
  "CONSUMIDOR": {
    "titulo": "Ministério da Justiça: como usar Consumidor.gov.br",
    "url": "https://www.gov.br/mj/pt-br/assuntos/noticias/consumidor-gov-br-saiba-como-registrar-uma-reclamacao-pela-plataforma/"
  },
  "DETRAN": {
    "titulo": "Detran-SC: alertas sobre cobrança falsa",
    "url": "https://www.detran.sc.gov.br/detran-sc-alerta-populacao-sobre-golpes/"
  },
  "GOV_WHATS": {
    "titulo": "Governo: perfis falsos em aplicativos de mensagens",
    "url": "https://www.gov.br/cisc/pt-br/alertas-de-golpes-digitais/golpistas-enviam-mensagens-no-whatsapp-se-passando-por-entidades-do-governo"
  },
  "INSS_INTERNET": {
    "titulo": "INSS: principais golpes pela internet",
    "url": "https://www.gov.br/inss/pt-br/noticias/principais-golpes-pela-internet-e-como-evita-los"
  }
};

const REFERENCIAS_POR_GOLPE = {
  "falso-funcionario-banco": [
    "FEB_PHISH",
    "CAIXA_GOLPES"
  ],
  "falso-motoboy-cartao": [
    "FEB_MOTO",
    "CAIXA_GOLPES"
  ],
  "falso-gerente-whatsapp": [
    "CAIXA_GOLPES",
    "CERT_GOLPES"
  ],
  "pix-errado-devolucao": [
    "BC_GOLPE",
    "BC_PIX"
  ],
  "pix-agendado-comprovante-falso": [
    "BC_PIX",
    "CERT_GOLPES"
  ],
  "falso-boleto": [
    "CERT_GOLPES",
    "CAIXA_GOLPES"
  ],
  "maquininha-trocada": [
    "CAIXA_GOLPES",
    "MDH_ABUSO"
  ],
  "consignado-cartao-beneficio": [
    "INSS_CONSIG",
    "BC_REG"
  ],
  "emprestimo-taxa-antecipada": [
    "INSS_CONSIG",
    "CVM_ALERTAS"
  ],
  "chupa-cabra-caixa": [
    "MDH_ABUSO",
    "CAIXA_GOLPES"
  ],
  "falso-parente-whatsapp": [
    "MDH_ABUSO",
    "CERT_GOLPES"
  ],
  "codigo-sms-whatsapp": [
    "CERT_GOLPES",
    "MJ_PREVENCAO"
  ],
  "falso-entregador-codigo": [
    "CERT_GOLPES",
    "CORREIOS"
  ],
  "suporte-whatsapp-falso": [
    "CERT_GOLPES",
    "MJ_PREVENCAO"
  ],
  "falso-emprego-whatsapp": [
    "MJ_PREVENCAO",
    "CERT_GOLPES"
  ],
  "sorteio-premio-whatsapp": [
    "INSS_INTERNET",
    "CERT_GOLPES"
  ],
  "falso-inss-prova-de-vida": [
    "INSS_ALERTA",
    "INSS_VIDA"
  ],
  "consignado-nao-pedido": [
    "INSS_CONSIG",
    "BC_REG"
  ],
  "falsa-revisao-beneficio": [
    "INSS_CONSIG",
    "INSS_ALERTA"
  ],
  "falso-beneficio-governo": [
    "GOV_WHATS",
    "INSS_INTERNET"
  ],
  "restituicao-ir-falsa": [
    "RECEITA_IR",
    "RECEITA_GOLPES"
  ],
  "fgts-abono-falso": [
    "CAIXA_GOLPES",
    "GOV_WHATS"
  ],
  "detran-ipva-falso": [
    "DETRAN",
    "GOV_WHATS"
  ],
  "falso-advogado-processo": [
    "MJ_ADVOGADO",
    "MDH_ABUSO"
  ],
  "falso-agente-saude-censo": [
    "MDH_ABUSO",
    "MDH_DISQUE100"
  ],
  "falsa-entrega-taxa": [
    "CORREIOS",
    "RECEITA_GOLPES"
  ],
  "loja-falsa-instagram": [
    "CERT_GOLPES",
    "MJ_PREVENCAO"
  ],
  "falso-aluguel": [
    "MJ_PREVENCAO",
    "CERT_GOLPES"
  ],
  "falso-leilao": [
    "MJ_PREVENCAO",
    "CVM_ALERTAS"
  ],
  "conserto-tecnico-abusivo": [
    "CONSUMIDOR",
    "MJ_PREVENCAO"
  ],
  "falso-sequestro": [
    "PC_SEQUESTRO",
    "MDH_ABUSO"
  ],
  "golpe-do-abraco": [
    "MDH_ABUSO",
    "MDH_DISQUE100"
  ],
  "falso-vigia-banco": [
    "MDH_ABUSO",
    "CAIXA_GOLPES"
  ],
  "falso-policial": [
    "MDH_ABUSO",
    "MDH_DISQUE100"
  ],
  "golpe-do-emprestimo-na-rua": [
    "INSS_CONSIG",
    "MDH_ABUSO"
  ],
  "renda-extra-falsa": [
    "CVM_ALERTAS",
    "MJ_PREVENCAO"
  ],
  "falso-corretora-cripto": [
    "CVM_CRIPTO",
    "CVM_ALERTAS"
  ],
  "consorcio-falso": [
    "CVM_ALERTAS",
    "CONSUMIDOR"
  ],
  "golpe-do-amor": [
    "RECEITA_AMOR",
    "PC_AMOR"
  ],
  "cuidador-abuso-financeiro": [
    "MDH_ABUSO",
    "MDH_DISQUE100"
  ],
  "falso-suporte-tecnico": [
    "CERT_GOLPES",
    "MJ_CLIQUEI"
  ],
  "deepfake-voz-ia": [
    "CERT_GOLPES",
    "MJ_PREVENCAO"
  ],
  "qr-code-falso": [
    "CERT_GOLPES",
    "BC_PIX"
  ],
  "phishing-site-banco": [
    "FEB_PHISH",
    "CERT_GOLPES"
  ],
  "app-falso-banco": [
    "CERT_GOLPES",
    "CAIXA_GOLPES"
  ]
};
