"use strict";


/* ============================================================
   PORTAS DE ENTRADA, eixo `resposta`
   ============================================================ */
var ENTRADAS = [
  { chave:"afetivo",      titulo:"Foi alguém fingindo ser da minha família", nota:"filho, neto, sobrinho com número novo" },
  { chave:"banco",        titulo:"Ligaram do banco ou usaram meu cartão",    nota:"falso funcionário, falso motoboy" },
  { chave:"pix",          titulo:"Fiz um PIX ou uma transferência",          nota:"inclusive PIX “errado” e comprovante falso" },
  { chave:"conta",        titulo:"Invadiram minha conta ou meu WhatsApp",    nota:"perdi o acesso, pediram meu código" },
  { chave:"inss",         titulo:"Mexeram com meu INSS ou meu benefício",    nota:"prova de vida, revisão, consignado" },
  { chave:"compra",       titulo:"Paguei por algo que não chegou",           nota:"entrega, boleto, loja falsa, leilão" },
  { chave:"dispositivo",  titulo:"Instalaram algo no meu celular",           nota:"aplicativo, acesso remoto, suporte falso" },
  { chave:"ameaca",       titulo:"Estão me ameaçando ou me pressionando",    nota:"falso sequestro, falso advogado, falso policial" },
  { chave:"investimento", titulo:"Prometeram dinheiro fácil",                nota:"renda extra, cripto, consórcio, prêmio" },
  { chave:"abuso",        titulo:"Usaram meus documentos ou meus dados",     nota:"cadastro, empréstimo no meu nome" }
];

/* ============================================================
   GOLPES, 45 entradas
   Campos: slug, titulo, resumo, categoria, resposta[], destaque,
   como[], sinais[], exemplo, protecao[], vitima[], fontes[]
   ============================================================ */
var GOLPES = [

/* ---------- BANCOS ---------- */
{
  slug:"falso-funcionario-banco",
  titulo:"Ligação do “setor de fraudes” do banco",
  resumo:"Dizem que houve uma compra suspeita e pedem para você confirmar dados ou o código do SMS.",
  categoria:"Bancos",
  resposta:["banco","conta"],
  destaque:true,
  como:[
    "A ligação chega de um número que parece do banco, às vezes com o nome da instituição na tela.",
    "Dizem que há uma compra ou um PIX suspeito e que precisam “cancelar” com você.",
    "Pedem senha, número do cartão ou o código de 6 dígitos que acabou de chegar por SMS, e com isso assumem sua conta."
  ],
  sinais:[
    "Quem ligou já sabe parte dos seus dados. Isso é fácil de obter e não prova nada.",
    "Pedem o código do SMS. Esse código nunca deve ser dito a ninguém.",
    "Pedem para instalar aplicativo de “segurança” ou de acesso remoto.",
    "Pressão: “se não confirmar agora, o valor sai”."
  ],
  exemplo:"“Aqui é o setor de fraudes. Identificamos um PIX de R$ 3.490 na sua conta. Para cancelar, preciso que o senhor confirme o código que acabou de receber por SMS.”",
  protecao:[
    "Desligue. Ligue você mesmo para o banco usando o número que está no verso do seu cartão.",
    "Nunca dite código de SMS, senha ou número de cartão por telefone.",
    "Banco nenhum pede para instalar aplicativo de acesso remoto.",
    "Se tiver dúvida, vá até a agência ou abra o aplicativo oficial você mesmo."
  ],
  vitima:[
    "Ligue para o banco pelo número do cartão e peça bloqueio de conta, cartão e PIX.",
    "Anote o número que te ligou, horário e o que foi pedido.",
    "Registre boletim de ocorrência.",
    "Se a instituição financeira não resolver, registre reclamação no Banco Central ou no Consumidor.gov.br, quando cabível."
  ],
  fontes:["Banco Central (145)","Febraban","consumidor.gov.br"]
},

{
  slug:"falso-motoboy-cartao",
  titulo:"O motoboy que veio buscar seu cartão",
  resumo:"Ligam dizendo que seu cartão foi clonado e mandam alguém recolher o cartão em casa.",
  categoria:"Bancos",
  resposta:["banco","abuso"],
  destaque:true,
  como:[
    "A ligação é de um falso funcionário do banco, avisando de uma clonagem.",
    "Ele orienta você a cortar o cartão ao meio e entregar para um motoboy que “vai passar aí”.",
    "Com o cartão e a senha obtida na conversa, fazem saques e compras."
  ],
  sinais:[
    "O banco nunca manda motoboy buscar cartão na casa do cliente.",
    "Pedem para você quebrar ou cortar o cartão, isso não é procedimento de banco.",
    "Pedem a senha por telefone.",
    "Apressam você a resolver “antes que o prejuízo aumente”."
  ],
  exemplo:"“Seu cartão foi clonado. Corte ele ao meio e entregue para o motoboy que chegará em 20 minutos com o protocolo. Preciso confirmar sua senha para bloquear.”",
  protecao:[
    "Não entregue cartão a ninguém na porta de casa.",
    "Cartão com problema se resolve na agência ou no aplicativo oficial.",
    "Desligue e ligue para o banco pelo número do verso do cartão.",
    "Se alguém aparecer, não abra para estranhos e avise um vizinho ou familiar."
  ],
  vitima:[
    "Ligue imediatamente para o banco e bloqueie o cartão.",
    "Registre boletim de ocorrência.",
    "Avise vizinhos idosos: o golpe costuma ser aplicado em série no mesmo bairro.",
    "Desconfie de qualquer nova ligação “do banco” nos próximos dias."
  ],
  fontes:["Banco Central (145)","Febraban","Polícias Civis estaduais"]
},

{
  slug:"falso-gerente-whatsapp",
  titulo:"O “gerente do banco” no WhatsApp",
  resumo:"Mensagem de um número novo com a foto do gerente, pedindo um PIX urgente para “liberar” algo.",
  categoria:"Bancos",
  resposta:["banco","pix"],
  destaque:false,
  como:[
    "O golpista usa a foto e o nome de um gerente real, copiados do site ou do LinkedIn do banco.",
    "Diz que a conta está com problema, que há uma operação travada ou uma oportunidade de aplicação.",
    "Pede um PIX para uma conta de terceiro ou pede seus dados com urgência."
  ],
  sinais:[
    "Gerente não atende por WhatsApp de número desconhecido.",
    "Banco não pede PIX para conta de pessoa física.",
    "Foto e nome iguais aos do site não provam nada, são copiados.",
    "Pedido sempre urgente e fora do horário comercial."
  ],
  exemplo:"“Bom dia, aqui é o gerente da sua conta. Estou com uma operação travada no seu nome e preciso que o senhor faça um PIX de R$ 1.980 para regularizar hoje.”",
  protecao:[
    "Ligue para a agência pelo número que você já conhece.",
    "Vá até a agência ou use o aplicativo oficial.",
    "Nenhuma operação bancária exige PIX para terceiro.",
    "Confirme com um familiar antes de qualquer transferência."
  ],
  vitima:[
    "Avise o banco imediatamente pelo canal oficial.",
    "Registre boletim de ocorrência com os prints.",
    "Denuncie o número no WhatsApp.",
    "Se o banco não resolver, registre reclamação no Consumidor.gov.br ou no Banco Central."
  ],
  fontes:["Febraban","Banco Central (145)"]
},

{
  slug:"pix-errado-devolucao",
  titulo:"“Fiz um PIX errado, devolve por favor”",
  resumo:"Dizem que transferiram por engano e pedem a devolução para outra conta.",
  categoria:"Bancos",
  resposta:["pix","banco"],
  destaque:true,
  como:[
    "Você recebe um PIX de um desconhecido e, logo depois, uma mensagem pedindo a devolução.",
    "O pedido vem com outro nome e outra chave PIX, de um cúmplice.",
    "Depois o PIX original é contestado e estornado, e você fica com o prejuízo das duas saídas."
  ],
  sinais:[
    "PIX de desconhecido seguido de pedido imediato de devolução.",
    "A chave para devolver é diferente de quem enviou.",
    "Insistência e apelo emocional: “é o dinheiro do meu remédio”.",
    "Oferecem “deixar uma parte” para você devolver mais rápido."
  ],
  exemplo:"“Oi, transferi R$ 850 por engano pra sua conta. É o dinheiro do aluguel. Devolve no meu outro PIX, porque esse é da empresa.”",
  protecao:[
    "Não devolva por conta própria. Use a opção de devolução do próprio aplicativo.",
    "Se a chave de devolução for diferente da de origem, é golpe.",
    "Avise seu banco e peça orientação antes de qualquer coisa.",
    "Nunca devolva valor maior do que o recebido."
  ],
  vitima:[
    "Comunique o banco imediatamente e informe que devolveu por outra chave.",
    "Guarde prints e comprovantes.",
    "Registre boletim de ocorrência.",
    "Se necessário, registre reclamação no Banco Central após procurar a instituição financeira."
  ],
  fontes:["Banco Central (145)","Febraban"]
},

{
  slug:"pix-agendado-comprovante-falso",
  titulo:"Comprovante de PIX que não caiu na conta",
  resumo:"Mostram um comprovante bonito, mas o dinheiro não está lá: é PIX agendado ou imagem editada.",
  categoria:"Bancos",
  resposta:["pix","compra"],
  destaque:true,
  como:[
    "Alguém compra algo seu e mostra o comprovante na tela do celular, dizendo que já pagou.",
    "O comprovante é de PIX agendado, o valor só sairia na data marcada, ou é uma imagem editada.",
    "O agendamento é cancelado antes da execução, ou nunca existiu. Quem vendeu entrega a mercadoria e fica sem o dinheiro."
  ],
  sinais:[
    "Comprovante na tela de outro celular, nunca no seu extrato.",
    "Apressa para você entregar antes de conferir.",
    "Comprovante com data futura ou campo de agendamento.",
    "Valor “cai depois” e a pessoa já quer levar o produto."
  ],
  exemplo:"“Já fiz o PIX, olha o comprovante aqui. Pode liberar que cai na hora.”",
  protecao:[
    "Só entregue depois de ver o valor no seu próprio aplicativo ou extrato.",
    "PIX agendado gera comprovante, mas o dinheiro só sai na data marcada.",
    "Desconfie de comprovante mostrado na tela de outro celular.",
    "Se possível, receba na hora e confirme você mesmo."
  ],
  vitima:[
    "Registre boletim de ocorrência imediatamente.",
    "Comunique o banco e informe o horário e o nome informado pelo golpista.",
    "Guarde o comprovante falso: é prova.",
    "Se foi venda em loja, acione o seguro e a polícia."
  ],
  fontes:["Banco Central, pix-agendado","Febraban"]
},

{
  slug:"falso-boleto",
  titulo:"Boleto que parece certo, mas o dinheiro vai para outra conta",
  resumo:"O boleto chega com seu nome, valor correto e um código diferente.",
  categoria:"Bancos",
  resposta:["compra","banco"],
  destaque:false,
  como:[
    "O boleto é enviado por e-mail, WhatsApp ou entregue em mãos, com aparência legítima.",
    "Ao pagar, o valor vai para a conta de um golpista, e a dívida original continua em aberto.",
    "Versões comuns: condomínio, IPTU, plano de saúde, energia, escola, advogado."
  ],
  sinais:[
    "Beneficiário é pessoa física ou empresa que você não conhece.",
    "O valor está certo, mas o beneficiário mudou em relação às faturas anteriores.",
    "Chegou por WhatsApp de número novo.",
    "Desconto que expira hoje."
  ],
  exemplo:"“Segue o boleto atualizado do seu plano, com 30% de desconto se pagar hoje.”, tem seu nome, mas o beneficiário é uma loja desconhecida.",
  protecao:[
    "Pague boletos pelo aplicativo do banco, com o código que você mesmo digita da fatura original.",
    "Confira o nome do beneficiário na tela antes de confirmar.",
    "Use o DDA do banco para boletos registrados no seu CPF.",
    "Guarde as faturas anteriores para comparar."
  ],
  vitima:[
    "Avise o banco imediatamente e peça bloqueio/estorno.",
    "Registre boletim de ocorrência com o boleto e o comprovante.",
    "Comunique a empresa real para não ficar em débito.",
    "Registre reclamação em consumidor.gov.br."
  ],
  fontes:["Banco Central (145)","Febraban","Procon"]
},

{
  slug:"maquininha-trocada",
  titulo:"A maquininha que “não está funcionando”",
  resumo:"Trocam o cartão, digitam outro valor ou passam a compra duas vezes.",
  categoria:"Bancos",
  resposta:["banco","compra"],
  destaque:false,
  como:[
    "Na hora de pagar, o atendente diz que a maquininha não funciona e pega seu cartão para “passar atrás”.",
    "Aproveita para trocar o cartão por outro, ou digita um valor maior sem você ver.",
    "Também acontece com maquininha de outra pessoa, emprestada ao atendente."
  ],
  sinais:[
    "Levam seu cartão para longe da sua vista.",
    "Digitam o valor sem mostrar a tela.",
    "Pedem a senha em aparelho que não é o da loja.",
    "Dizem que a primeira compra “não passou” e passam de novo."
  ],
  exemplo:"“A máquina travou, deixa eu passar na minha aqui atrás.”, e o cartão não volta igual.",
  protecao:[
    "Não entregue o cartão na mão de ninguém: você mesmo passa na maquininha.",
    "Confira o valor na tela antes de digitar a senha.",
    "Digite a senha sempre no aparelho que está na sua frente.",
    "Confira o cartão devolvido: nome e numeração têm que ser os seus."
  ],
  vitima:[
    "Ligue para o banco e bloqueie o cartão.",
    "Peça contestação das compras que não reconhece.",
    "Registre boletim de ocorrência.",
    "Registre reclamação em consumidor.gov.br."
  ],
  fontes:["Febraban","Procon"]
},

{
  slug:"consignado-cartao-beneficio",
  titulo:"Empréstimo no cartão benefício do INSS",
  resumo:"Oferecem dinheiro fácil e o que assinam é um cartão consignado com juros altos.",
  categoria:"INSS",
  resposta:["inss","banco","abuso"],
  destaque:true,
  como:[
    "Abordagem por telefone, WhatsApp ou na porta de casa oferecendo “dinheiro na hora” para aposentado.",
    "Fazem você assinar ou gravar um vídeo autorizando um cartão de crédito consignado, não um empréstimo.",
    "O valor aparece como saque, mas os juros e a reserva de margem passam a pesar todo mês."
  ],
  sinais:[
    "Oferecem dinheiro sem você ter procurado.",
    "Pedem selfie com documento e vídeo de autorização.",
    "Não mostram contrato ou mostram contrato ilegível na tela do celular.",
    "Falam em “cartão” quando você pediu “empréstimo”."
  ],
  exemplo:"“A senhora tem R$ 3.800 liberados no cartão benefício. Só precisa gravar um vídeo autorizando e o dinheiro cai hoje.”",
  protecao:[
    "Nunca grave vídeo de autorização para desconhecido.",
    "Não assine nada sem ler, e nunca na tela de um celular alheio.",
    "Procure o banco onde recebe o benefício, presencialmente.",
    "Desconfie de quem chega até você oferecendo crédito."
  ],
  vitima:[
    "Consulte o Meu INSS ou ligue 135 para obter informações sobre descontos e contratos vinculados ao benefício.",
    "Peça o cancelamento e a devolução no banco emissor.",
    "Procure a Defensoria Pública: contrato não solicitado costuma ser anulável.",
    "Registre boletim de ocorrência e reclamação em consumidor.gov.br."
  ],
  fontes:["INSS (135)","Banco Central (145)","Defensoria Pública"]
},

{
  slug:"emprestimo-taxa-antecipada",
  titulo:"Empréstimo aprovado que exige taxa antes",
  resumo:"Prometem crédito, mas pedem um pagamento adiantado para “liberar” o dinheiro.",
  categoria:"Investimentos",
  resposta:["investimento","pix"],
  destaque:false,
  como:[
    "Anúncio ou mensagem promete empréstimo fácil, mesmo para negativado ou aposentado.",
    "Aprovam um valor alto e pedem uma taxa de “seguro”, “cadastro” ou “liberação” antes.",
    "Depois do pagamento, o empréstimo nunca sai e o contato desaparece."
  ],
  sinais:[
    "Cobrança de qualquer valor antes de receber o empréstimo.",
    "Empresa sem CNPJ verificável ou sem endereço.",
    "Só se comunicam por WhatsApp.",
    "Prometem aprovação garantida mesmo com nome sujo."
  ],
  exemplo:"“Seu empréstimo de R$ 8.000 foi aprovado! Só falta pagar R$ 240 de taxa de liberação e o valor cai em 30 minutos.”",
  protecao:[
    "Instituição séria não cobra nada antes de liberar crédito.",
    "Consulte se a empresa é autorizada no Banco Central.",
    "Nunca pague taxa por PIX para liberar empréstimo.",
    "Prefira bancos que você conhece ou o correspondente da sua cidade."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Se necessário, registre reclamação no Banco Central após procurar a instituição financeira.",
    "Registre reclamação em consumidor.gov.br.",
    "Avise o banco de onde saiu o PIX."
  ],
  fontes:["Banco Central (145)","Procon","consumidor.gov.br"]
},

{
  slug:"chupa-cabra-caixa",
  titulo:"O caixa eletrônico que engole o cartão",
  resumo:"Aparelho adulterado, ou alguém oferecendo “ajuda” no caixa do banco.",
  categoria:"Presenciais",
  resposta:["banco","presencial"],
  destaque:false,
  como:[
    "Instalam uma peça no caixa eletrônico que retém o cartão ou copia a tarja magnética.",
    "Um “bom samaritano” aparece oferecendo ajuda e pede sua senha para “tentar de novo”.",
    "Depois usam o cartão ou fazem saques em sua conta."
  ],
  sinais:[
    "Estranho oferecendo ajuda no caixa sem ser funcionário identificado.",
    "Cartão preso no aparelho.",
    "Teclado folgado ou peça solta no caixa.",
    "Alguém muito próximo olhando por cima do seu ombro."
  ],
  exemplo:"“Deixa que eu te ajudo, o caixa aqui é ruim. Digita a senha de novo que eu seguro aqui.”",
  protecao:[
    "Nunca aceite ajuda de estranho em caixa eletrônico.",
    "Cubra o teclado com a mão ao digitar a senha.",
    "Se o cartão ficar preso, não saia: chame o segurança ou o funcionário do banco.",
    "Prefira caixas dentro da agência, com movimento."
  ],
  vitima:[
    "Ligue para o banco na hora e bloqueie o cartão.",
    "Registre boletim de ocorrência.",
    "Peça imagens das câmeras ao banco.",
    "Avise o gerente da agência sobre o aparelho."
  ],
  fontes:["Febraban","Polícias Civis estaduais"]
},

/* ---------- WHATSAPP ---------- */
{
  slug:"falso-parente-whatsapp",
  titulo:"Alguém dizendo ser seu filho com um número novo",
  resumo:"Uma mensagem de número desconhecido: “mãe, troquei de número, salva esse”.",
  categoria:"WhatsApp",
  resposta:["afetivo","pix"],
  destaque:true,
  como:[
    "O golpista manda mensagem de um número novo dizendo ser filho, neto ou sobrinho.",
    "Pede para salvar o contato e, no mesmo dia, surge uma urgência: pagar uma conta, quitar uma dívida, ajudar um amigo.",
    "O dinheiro vai para uma conta de terceiro, e o número some."
  ],
  sinais:[
    "Número novo + pedido de dinheiro no mesmo dia.",
    "Recusa ligação de voz e só quer texto.",
    "Pede para você não contar para ninguém da família.",
    "Conta que é para pagar algo para “um amigo” ou “um rapaz da loja”."
  ],
  exemplo:"“Oi mãe, esse é meu número novo. Não consigo falar agora. Preciso que você faça um PIX de R$ 1.200 pra um amigo meu, amanhã te devolvo. Não liga que estou em reunião.”",
  protecao:[
    "Ligue para o número antigo, que você já tem salvo.",
    "Faça uma pergunta que só seu filho saberia responder.",
    "Nunca pague para conta de pessoa que você não conhece.",
    "Combine na família uma palavra-código para pedidos de dinheiro."
  ],
  vitima:[
    "Avise o banco imediatamente e peça bloqueio da transferência.",
    "Registre boletim de ocorrência com o número e as mensagens.",
    "Avise a família e o grupo em que o golpista possa estar agindo.",
    "Denuncie o número no WhatsApp."
  ],
  fontes:["Febraban","Polícias Civis estaduais"]
},

{
  slug:"codigo-sms-whatsapp",
  titulo:"Pedem o código do SMS para “não perder sua conta”",
  resumo:"Alguém liga ou escreve pedindo o código de 6 dígitos. Com ele, toma seu WhatsApp.",
  categoria:"WhatsApp",
  resposta:["conta","dispositivo"],
  destaque:true,
  como:[
    "O golpista tenta entrar no seu WhatsApp e o aplicativo envia um código por SMS para você.",
    "Em seguida, liga ou escreve dizendo ser do suporte, de uma loja ou um conhecido, pedindo esse código.",
    "Com o código, ele assume seu número e passa a pedir dinheiro para todos os seus contatos."
  ],
  sinais:[
    "Você recebeu um SMS com código que não pediu.",
    "Alguém pede o código por telefone, mensagem ou “confirmação de cadastro”.",
    "Dizem que sua conta será excluída se você não informar.",
    "Pedido com urgência e ameaça de perda."
  ],
  exemplo:"“Boa tarde, aqui é do suporte. Estamos atualizando o sistema e sua conta será desativada. Me informe o código de 6 números que chegou por SMS.”",
  protecao:[
    "Código de verificação é como senha: não se fala e não se digita em site.",
    "Ative a confirmação em duas etapas no WhatsApp (Ajustes → Conta).",
    "Quem te manda código é porque está tentando entrar na sua conta.",
    "Nunca informe código para quem te ligou."
  ],
  vitima:[
    "Tente entrar no WhatsApp novamente pelo SMS.",
    "Se não conseguir, avise todos os contatos por outro meio.",
    "Avise o banco: o golpista pode ter acesso a conversas com dados.",
    "Registre boletim de ocorrência e denuncie a conta ao WhatsApp."
  ],
  fontes:["WhatsApp (Central de Ajuda)","CERT.br"]
},

{
  slug:"falso-entregador-codigo",
  titulo:"O entregador que pede o código de confirmação",
  resumo:"Chega uma entrega que você não pediu e o entregador pede o código que chegou no seu celular.",
  categoria:"WhatsApp",
  resposta:["conta","compra"],
  destaque:false,
  como:[
    "Você recebe uma notificação de entrega de um pedido que não fez.",
    "O entregador liga pedindo o código de confirmação para “liberar” a entrega.",
    "Com o código, o golpista confirma um pedido feito com seus dados ou assume sua conta em aplicativo de compras."
  ],
  sinais:[
    "Pedido que você não fez.",
    "Entregador insiste no código antes de deixar a encomenda.",
    "Pedem o código por telefone, e não pelo aplicativo.",
    "Nome do pedido não confere com o seu."
  ],
  exemplo:"“Boa tarde, é da entrega. Preciso do código de 4 dígitos que chegou no seu celular para liberar o pedido aqui.”",
  protecao:[
    "Só informe código de entrega pelo aplicativo oficial.",
    "Não aceite encomenda que você não pediu.",
    "Confira o nome no pacote antes de assinar.",
    "Se tem dúvida, cancele na hora com o aplicativo."
  ],
  vitima:[
    "Cancele o pedido no aplicativo e avise a plataforma.",
    "Registre boletim de ocorrência.",
    "Avise o banco se houver cobrança no cartão.",
    "Troque a senha do aplicativo de compras."
  ],
  fontes:["Procon","CERT.br"]
},

{
  slug:"suporte-whatsapp-falso",
  titulo:"“Sua conta do WhatsApp será banida”",
  resumo:"Falso suporte avisa de bloqueio e pede dados ou pagamento para “manter” o número.",
  categoria:"WhatsApp",
  resposta:["conta","dispositivo"],
  destaque:false,
  como:[
    "Mensagem avisa que sua conta será excluída por “atividade suspeita”.",
    "Oferecem um link ou número de “suporte” para resolver.",
    "No atendimento, pedem código, dados pessoais ou pagamento de uma taxa."
  ],
  sinais:[
    "O WhatsApp não avisa bloqueio por mensagem de número desconhecido.",
    "Pedem pagamento para manter a conta.",
    "Link que não é whatsapp.com.",
    "Pedem o código de verificação."
  ],
  exemplo:"“Sua conta foi marcada para exclusão em 24h por uso indevido. Fale com o suporte oficial neste link para evitar o bloqueio.”",
  protecao:[
    "Em caso de dúvida, acesse as opções de Ajuda do aplicativo ou o site oficial do WhatsApp por conta própria.",
    "Não existe taxa para manter conta.",
    "Nunca clique no link recebido.",
    "Desconfie de qualquer mensagem que ameace exclusão."
  ],
  vitima:[
    "Ative a confirmação em duas etapas imediatamente.",
    "Troque a senha e avise seus contatos.",
    "Registre boletim de ocorrência.",
    "Denuncie a mensagem no próprio WhatsApp."
  ],
  fontes:["WhatsApp (Central de Ajuda)","CERT.br"]
},

{
  slug:"falso-emprego-whatsapp",
  titulo:"Vaga de emprego que pede pagamento de “kit”",
  resumo:"Oferecem trabalho fácil pelo celular e cobram material, cadastro ou treinamento.",
  categoria:"Digital",
  resposta:["investimento","pix"],
  destaque:false,
  como:[
    "Você é adicionado a um grupo com “vagas” de meio período, bem pagas e sem experiência.",
    "Para começar, é preciso pagar um kit, um cadastro ou um treinamento.",
    "Depois do pagamento, pedem mais taxas ou simplesmente desaparecem."
  ],
  sinais:[
    "Contratação por WhatsApp, sem entrevista nem empresa identificada.",
    "Qualquer cobrança para começar a trabalhar.",
    "Salário alto para tarefa simples.",
    "Pedem dados bancários antes de qualquer contrato."
  ],
  exemplo:"“Vaga home office R$ 200/dia, só curtir vídeos. Para liberar as tarefas, pague R$ 49 do kit de acesso.”",
  protecao:[
    "Trabalho sério não cobra para começar.",
    "Pesquise o CNPJ da empresa.",
    "Nunca pague por PIX para garantir vaga.",
    "Desconfie de vaga oferecida sem você ter se candidatado."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Denuncie o grupo e o número no WhatsApp.",
    "Registre reclamação em consumidor.gov.br.",
    "Avise o banco de onde saiu o PIX."
  ],
  fontes:["Procon","Ministério Público do Trabalho (canais de denúncia)"]
},

{
  slug:"sorteio-premio-whatsapp",
  titulo:"“Você foi sorteado” no WhatsApp",
  resumo:"Prêmio de loja famosa que exige taxa, cadastro ou código para ser liberado.",
  categoria:"WhatsApp",
  resposta:["investimento","conta"],
  destaque:false,
  como:[
    "Mensagem informa que seu número foi sorteado em uma promoção de loja conhecida.",
    "Para receber, é preciso pagar frete, taxa ou preencher cadastro com dados.",
    "O prêmio não existe; os dados e o dinheiro, sim."
  ],
  sinais:[
    "Você não se inscreveu em sorteio nenhum.",
    "Pedem taxa para liberar prêmio.",
    "Link com nome da loja, mas endereço estranho.",
    "Pedem código de verificação para “confirmar” o número."
  ],
  exemplo:"“Parabéns! Seu número foi sorteado e você ganhou um celular. Pague só o frete de R$ 29,90 neste link para receber.”",
  protecao:[
    "Desconfie de cobrança inesperada para liberar um prêmio; confirme as regras nos canais oficiais do organizador.",
    "Confira a promoção no site oficial da loja, digitando o endereço você mesmo.",
    "Nunca informe código de verificação.",
    "Desconfie de prêmio que você não disputou."
  ],
  vitima:[
    "Bloqueie o contato e denuncie no WhatsApp.",
    "Se pagou, avise o banco e peça contestação.",
    "Registre boletim de ocorrência.",
    "Registre reclamação em consumidor.gov.br."
  ],
  fontes:["Procon","CERT.br"]
},

/* ---------- INSS ---------- */
{
  slug:"falso-inss-prova-de-vida",
  titulo:"Ligação do INSS pedindo prova de vida ou dados",
  resumo:"Dizem que seu benefício será bloqueado se você não confirmar dados agora.",
  categoria:"INSS",
  resposta:["inss","abuso"],
  destaque:true,
  como:[
    "A ligação ou SMS diz ser do INSS e informa um problema: prova de vida pendente, revisão, pagamento atrasado.",
    "Para “resolver”, pedem CPF, número do benefício, senha do Meu INSS ou uma taxa.",
    "Às vezes pedem para ir até o caixa eletrônico ou fazer um PIX para “liberar” o valor."
  ],
  sinais:[
    "O INSS não cobra taxa para liberar benefício nem pede PIX.",
    "O INSS não pede sua senha do Meu INSS por telefone.",
    "Ameaça de bloqueio imediato e prazo curto.",
    "Pedem para você ir ao caixa eletrônico com o cartão na mão."
  ],
  exemplo:"“Aqui é do INSS. Sua prova de vida está pendente e o benefício será suspenso amanhã. Preciso confirmar seus dados e o senhor faz um PIX de R$ 89,90 da taxa.”",
  protecao:[
    "Desligue. Consulte seu benefício só no Meu INSS (gov.br) ou pelo telefone 135.",
    "A prova de vida costuma ser verificada automaticamente. Consulte sua situação no Meu INSS ou pelo 135.",
    "Nunca pague taxa para receber benefício.",
    "Não clique em link de SMS que fala do seu benefício."
  ],
  vitima:[
    "Ligue para o 135 e informe o ocorrido.",
    "Verifique no Meu INSS se há empréstimo que você não contratou.",
    "Registre boletim de ocorrência.",
    "Procure o Procon ou a Defensoria se houver desconto indevido."
  ],
  fontes:["INSS, gov.br/inss (alerta de falsa prova de vida)","Meu INSS (135)"]
},

{
  slug:"consignado-nao-pedido",
  titulo:"Empréstimo que aparece no benefício sem você ter pedido",
  resumo:"Desconto novo na aposentadoria e um contrato que você nunca assinou.",
  categoria:"INSS",
  resposta:["inss","abuso","banco"],
  destaque:true,
  como:[
    "Usam seus dados, obtidos em vazamentos ou em cadastros de terceiros, para contratar consignado no seu nome.",
    "O valor cai numa conta e desaparece, e o desconto passa a vir todo mês.",
    "Muitas vezes há um correspondente bancário ou um “facilitador” na origem."
  ],
  sinais:[
    "Desconto novo no extrato do benefício.",
    "Ligação oferecendo “revisão” ou “empréstimo já aprovado”.",
    "Pedem senha do Meu INSS ou selfie com documento por WhatsApp.",
    "Condições boas demais para ser verdade."
  ],
  exemplo:"“O senhor tem R$ 4.300 liberados no consignado. Só preciso da sua selfie segurando o documento e da senha do Meu INSS.”",
  protecao:[
    "Confira o extrato de descontos todo mês.",
    "Nunca mande selfie com documento nem senha do Meu INSS.",
    "Não assine contrato que você não leu inteiro.",
    "Desconfie de crédito que você não pediu."
  ],
  vitima:[
    "Ligue para o 135 e peça informação sobre o contrato e o banco pagador.",
    "Reclame primeiro ao banco. Se necessário, utilize o Consumidor.gov.br ou o Banco Central.",
    "Procure a Defensoria Pública: empréstimo não contratado costuma ser anulável.",
    "Registre boletim de ocorrência com os números do contrato."
  ],
  fontes:["INSS (135)","Banco Central (145)","Defensoria Pública"]
},

{
  slug:"falsa-revisao-beneficio",
  titulo:"“Você tem valores atrasados do INSS para receber”",
  resumo:"Falso escritório promete revisão de benefício e cobra adiantado para liberar.",
  categoria:"INSS",
  resposta:["inss","abuso"],
  destaque:false,
  como:[
    "Ligam oferecendo revisão da aposentadoria com valores atrasados altos.",
    "Pedem procuração, documentos e uma taxa de honorários adiantada.",
    "O processo não existe, e os documentos ficam com o golpista."
  ],
  sinais:[
    "Valor exato e alto já na primeira conversa.",
    "Cobrança de honorários antes de qualquer ação.",
    "Não informam número de processo.",
    "Pedem sua senha do gov.br."
  ],
  exemplo:"“A senhora tem R$ 32 mil de atrasados na revisão da vida toda. Pagando R$ 990 de honorários, a gente entra com o pedido essa semana.”",
  protecao:[
    "Revisão de benefício se pede no INSS ou com advogado que você procurou.",
    "Não pague honorários adiantados para quem te ligou.",
    "Confira o advogado na OAB.",
    "Nunca entregue senha do gov.br."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Comunique a OAB sobre o falso advogado.",
    "Avise o INSS pelo 135.",
    "Procure a Defensoria Pública."
  ],
  fontes:["INSS (135)","OAB","Defensoria Pública"]
},

/* ---------- GOVERNO ---------- */
{
  slug:"falso-beneficio-governo",
  titulo:"“Você tem um benefício a receber do governo”",
  resumo:"Site ou mensagem imitando o gov.br pedindo dados para liberar um auxílio.",
  categoria:"Governo",
  resposta:["abuso","inss"],
  destaque:false,
  como:[
    "Mensagem com link de um falso site do governo, oferecendo auxílio, prêmio ou restituição.",
    "A página pede CPF, data de nascimento, foto do documento e, às vezes, dados bancários.",
    "Com isso, abrem contas, pedem crédito e aplicam golpes em seu nome."
  ],
  sinais:[
    "Endereço do site não é gov.br.",
    "Oferecem valor que você nunca pediu.",
    "Pedem foto do documento e selfie.",
    "Pedem senha do gov.br."
  ],
  exemplo:"“Parabéns! Você tem direito ao Auxílio Extraordinário de R$ 1.412. Cadastre-se em gov-brasil-beneficio.com e receba em 48h.”",
  protecao:[
    "Digite gov.br você mesmo no navegador; não clique em link recebido.",
    "Nenhum benefício é liberado por link de WhatsApp.",
    "Nunca mande foto de documento por mensagem.",
    "Senha do gov.br é pessoal."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Consulte no gov.br se há contas ou benefícios abertos em seu nome.",
    "Avise o banco e monitore o CPF no Serasa/SPC.",
    "Registre denúncia na ouvidoria do órgão imitado."
  ],
  fontes:["gov.br","INSS (135)","Procon"]
},

{
  slug:"restituicao-ir-falsa",
  titulo:"Restituição do Imposto de Renda com link falso",
  resumo:"Avisam de restituição a receber e mandam link ou pedem dados bancários.",
  categoria:"Governo",
  resposta:["abuso","pix"],
  destaque:false,
  como:[
    "Na época do Imposto de Renda, chegam mensagens sobre restituição liberada.",
    "O link imita o site da Receita e pede CPF, senha e dados bancários.",
    "Ou pedem um PIX para “liberar” o valor."
  ],
  sinais:[
    "Link que não é gov.br.",
    "Pedem senha do gov.br ou do e-CAC.",
    "Avisam de restituição para quem nem declarou.",
    "Pedem pagamento de taxa."
  ],
  exemplo:"“Sua restituição de R$ 2.340 foi liberada. Acesse e informe os dados bancários para receber: receita-restituicao.net”",
  protecao:[
    "Consulte só no site oficial da Receita ou no aplicativo Meu Imposto de Renda.",
    "Restituição é depositada automaticamente na conta informada na declaração.",
    "Nunca pague taxa para receber restituição.",
    "Não clique no link."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Avise o banco imediatamente.",
    "Altere as senhas do gov.br em outro aparelho.",
    "Comunique a Receita Federal."
  ],
  fontes:["Receita Federal","gov.br","CERT.br"]
},

{
  slug:"fgts-abono-falso",
  titulo:"“Saque do FGTS ou abono salarial liberado”",
  resumo:"Falso site ou atendente cobrando para liberar valores que já são seus.",
  categoria:"Governo",
  resposta:["abuso","pix"],
  destaque:false,
  como:[
    "Ligam ou mandam mensagem avisando que há FGTS ou abono disponível para saque.",
    "Pedem dados, senha do aplicativo ou pagamento de taxa de “liberação”.",
    "Também usam sites falsos que imitam a Caixa."
  ],
  sinais:[
    "Cobrança para liberar valor que é seu.",
    "Pedem senha do FGTS ou do Caixa Tem.",
    "Link que não é caixa.gov.br.",
    "Oferecem “antecipação” do saque."
  ],
  exemplo:"“Você tem R$ 1.870 de FGTS esquecido. Pague R$ 79 de taxa e o valor cai hoje na sua conta.”",
  protecao:[
    "Consulte só no aplicativo FGTS ou Caixa Tem.",
    "Não existe taxa para sacar FGTS.",
    "Nunca compartilhe senha do Caixa Tem.",
    "Desconfie de antecipação oferecida por desconhecido."
  ],
  vitima:[
    "Avise a Caixa e bloqueie o acesso.",
    "Registre boletim de ocorrência.",
    "Troque as senhas em outro aparelho.",
    "Registre reclamação no Banco Central (145)."
  ],
  fontes:["Caixa (canais oficiais)","Banco Central (145)"]
},

{
  slug:"detran-ipva-falso",
  titulo:"Multa, IPVA ou licenciamento com link falso",
  resumo:"Aviso de dívida do veículo com desconto e link para pagar na hora.",
  categoria:"Governo",
  resposta:["compra","abuso"],
  destaque:false,
  como:[
    "SMS ou e-mail avisa de multa, IPVA atrasado ou licenciamento vencendo.",
    "Oferecem desconto grande se o pagamento for hoje.",
    "O link leva a boleto falso ou página que rouba dados do cartão."
  ],
  sinais:[
    "Link que não é do Detran do seu estado.",
    "Desconto alto com prazo curto.",
    "Você não tem veículo ou está em dia.",
    "Boleto com beneficiário estranho."
  ],
  exemplo:"“IPVA 2026 com 40% de desconto só hoje. Pague aqui: detran-ipva-br.com”",
  protecao:[
    "Consulte sempre no site ou aplicativo do Detran do seu estado.",
    "Digite o endereço você mesmo.",
    "Confira o beneficiário do boleto antes de pagar.",
    "Não pague com prazo de horas."
  ],
  vitima:[
    "Avise o banco e peça contestação.",
    "Registre boletim de ocorrência.",
    "Comunique o Detran do seu estado.",
    "Registre reclamação em consumidor.gov.br."
  ],
  fontes:["Detrans estaduais","Procon"]
},

{
  slug:"falso-advogado-processo",
  titulo:"O “advogado” que usa dados do seu processo",
  resumo:"Perfil falso de advogado, com número de processo real, pedindo PIX para liberar valores.",
  categoria:"Governo",
  resposta:["ameaca","investimento","abuso"],
  destaque:true,
  como:[
    "O golpista cria perfil falso de um advogado inscrito na OAB, usando nome e foto reais.",
    "Cita o número do seu processo, que é público, para parecer legítimo.",
    "Pede PIX para custas, honorários ou “liberação” de valores judiciais."
  ],
  sinais:[
    "Contato por número desconhecido, dizendo ser seu advogado.",
    "Usa dados reais do processo, isso não prova que é ele.",
    "Pede pagamento por PIX para pessoa física.",
    "Número de telefone diferente do que você já tem do escritório."
  ],
  exemplo:"“Dra. aqui é o advogado do seu processo. Saiu a liberação de R$ 18 mil, mas preciso que a senhora faça um PIX de R$ 1.200 de custas para liberar hoje.”",
  protecao:[
    "Ligue para o advogado no número que você já tem salvo.",
    "Confira a inscrição na OAB pelo nome completo.",
    "Tribunal não cobra taxa por PIX para liberar valor.",
    "Nunca assine procuração que chegou por mensagem."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Comunique a OAB e o seu advogado verdadeiro.",
    "Avise o banco imediatamente.",
    "Guarde prints do perfil falso."
  ],
  fontes:["Febraban (alerta do falso advogado)","OAB","Tribunais de Justiça"]
},

{
  slug:"falso-agente-saude-censo",
  titulo:"Falso agente de saúde ou recenseador na porta",
  resumo:"Pessoa com crachá pedindo dados ou entrando em casa para “cadastro”.",
  categoria:"Presenciais",
  resposta:["abuso","presencial"],
  destaque:false,
  como:[
    "Alguém com crachá se apresenta como agente de saúde, do censo ou da prefeitura.",
    "Pede CPF, documentos, dados do benefício ou para entrar na casa “verificar” algo.",
    "Em alguns casos, aproveita para furtar objetos ou observar a casa."
  ],
  sinais:[
    "Crachá que qualquer um imprime.",
    "Pede para entrar sem agendamento.",
    "Pede dados bancários ou senha.",
    "Chega fora do horário ou em dupla."
  ],
  exemplo:"“Sou do posto de saúde, vim atualizar seu cadastro. Preciso do seu CPF, do cartão do banco e do número do benefício.”",
  protecao:[
    "Peça o nome completo e confirme na UBS ou na prefeitura antes de dar qualquer dado.",
    "Nunca deixe estranho entrar sozinho na casa.",
    "Não entregue documentos na mão de quem está na porta.",
    "Combine com vizinhos: agente conhecido avisa antes."
  ],
  vitima:[
    "Ligue para a UBS ou prefeitura e denuncie.",
    "Registre boletim de ocorrência.",
    "Se entregou dados, avise o banco e monitore o CPF.",
    "Avise o Conselho do Idoso da sua cidade."
  ],
  fontes:["Prefeituras","Disque 100","Polícias Civis estaduais"]
},

/* ---------- COMPRAS ---------- */
{
  slug:"falsa-entrega-taxa",
  titulo:"“Sua encomenda está retida, pague a taxa”",
  resumo:"SMS ou mensagem com link pedindo alguns reais para liberar uma entrega.",
  categoria:"Compras",
  resposta:["compra","dispositivo"],
  destaque:true,
  como:[
    "Chega um SMS ou WhatsApp avisando de uma encomenda retida e uma taxa pequena (R$ 3 a R$ 10).",
    "O link leva a uma página que imita os Correios e pede dados do cartão.",
    "Além da taxa, o cartão é usado em compras maiores, ou o link instala aplicativo que rouba dados."
  ],
  sinais:[
    "Link encurtado ou endereço com erros no nome.",
    "Taxa muito pequena para parecer inofensiva.",
    "Você não comprou nada recentemente.",
    "Pedem o código de segurança do cartão e a senha."
  ],
  exemplo:"“Correios: sua encomenda está retida no centro de distribuição. Pague a taxa de R$ 4,90 em até 24h: bit.ly/entregabr”",
  protecao:[
    "Rastreie a encomenda só no site ou aplicativo oficial, digitando o endereço.",
    "Correios não cobram taxa de liberação por SMS.",
    "Nunca digite dados do cartão em página que chegou por link.",
    "Se não comprou, ignore."
  ],
  vitima:[
    "Ligue para o banco e bloqueie o cartão; peça contestação.",
    "Registre boletim de ocorrência com o link e os prints.",
    "Registre reclamação em consumidor.gov.br.",
    "Se instalou aplicativo, desinstale e troque senhas em outro aparelho."
  ],
  fontes:["Correios (canais oficiais)","Procon"]
},

{
  slug:"loja-falsa-instagram",
  titulo:"Loja bonita na rede social que não existe",
  resumo:"Perfil com muitos seguidores, preço baixo e nenhum CNPJ.",
  categoria:"Compras",
  resposta:["compra","pix"],
  destaque:false,
  como:[
    "Anúncio de produto barato em rede social leva a um perfil ou site recém-criado.",
    "Pedem pagamento por PIX para “garantir o desconto”.",
    "Depois do pagamento, o perfil para de responder ou desaparece."
  ],
  sinais:[
    "Preço muito abaixo do mercado.",
    "Só aceitam PIX para pessoa física.",
    "Perfil criado há pouco tempo, sem endereço nem CNPJ.",
    "Comentários desativados ou cheios de reclamações apagadas."
  ],
  exemplo:"“Últimas 3 unidades! Faça o PIX de R$ 189 e enviamos hoje pelos Correios.”",
  protecao:[
    "Compre em site com CNPJ visível e endereço.",
    "Confira reputação em consumidor.gov.br e no Procon.",
    "Prefira pagar com cartão, que permite contestação.",
    "Desconfie de PIX para pessoa física em compra de loja."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Registre reclamação em consumidor.gov.br.",
    "Avise o banco de onde saiu o PIX.",
    "Denuncie o perfil na rede social."
  ],
  fontes:["Procon","consumidor.gov.br"]
},

{
  slug:"falso-aluguel",
  titulo:"Casa para alugar que não é de quem anuncia",
  resumo:"Fotos bonitas, aluguel barato e pedido de depósito antes da visita.",
  categoria:"Compras",
  resposta:["compra","pix"],
  destaque:false,
  como:[
    "O anúncio usa fotos de imóveis reais, copiadas de outros sites.",
    "O “proprietário” diz estar fora da cidade e pede reserva ou caução por PIX antes da visita.",
    "Depois do depósito, desaparece."
  ],
  sinais:[
    "Aluguel bem abaixo do mercado.",
    "Não permitem visita antes do pagamento.",
    "Proprietário “viajando” e só por WhatsApp.",
    "Pedem PIX para pessoa física com nome diferente do anunciante."
  ],
  exemplo:"“Estou morando em Portugal, não consigo te mostrar. Faz o PIX da reserva de R$ 900 que eu guardo a chave com o vizinho.”",
  protecao:[
    "Nunca pague antes de visitar o imóvel.",
    "Confira a matrícula do imóvel no registro.",
    "Fale com o síndico ou com vizinhos.",
    "Desconfie de pressa e de preço muito baixo."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Avise o banco de onde saiu o PIX.",
    "Denuncie o anúncio na plataforma.",
    "Registre reclamação em consumidor.gov.br."
  ],
  fontes:["Procon","Polícias Civis estaduais"]
},

{
  slug:"falso-leilao",
  titulo:"Leilão de carro ou imóvel com preço irresistível",
  resumo:"Site de leilão falso pede caução ou lance por PIX e nunca entrega o bem.",
  categoria:"Compras",
  resposta:["compra","investimento"],
  destaque:false,
  como:[
    "Site ou anúncio oferece veículo ou imóvel de leilão com desconto enorme.",
    "Pedem cadastro com documentos e pagamento de caução, taxa ou lance por PIX.",
    "O bem não existe, ou o leilão é de outra empresa."
  ],
  sinais:[
    "Site sem CNPJ, sem endereço e sem leiloeiro identificado.",
    "Preço muito abaixo do mercado.",
    "Pedem PIX para pessoa física.",
    "Pressão de prazo: “o leilão encerra hoje”."
  ],
  exemplo:"“Honda Civic 2021, leilão do Detran, lance mínimo R$ 21 mil. Pague a caução de R$ 1.500 por PIX para participar.”",
  protecao:[
    "Confira o leiloeiro no registro oficial e o edital do leilão.",
    "Leilão oficial não pede PIX para pessoa física.",
    "Desconfie de site que você não conhece.",
    "Verifique o bem antes de qualquer pagamento."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Avise o banco e peça bloqueio.",
    "Denuncie ao Procon e ao Ministério Público.",
    "Guarde prints do site e dos comprovantes."
  ],
  fontes:["Procon","Ministério Público","Polícias Civis estaduais"]
},

{
  slug:"conserto-tecnico-abusivo",
  titulo:"Conserto em casa com orçamento que cresce",
  resumo:"Técnico de geladeira, fogão ou telhado que começa barato e termina caro.",
  categoria:"Compras",
  resposta:["compra","presencial"],
  destaque:false,
  como:[
    "O profissional aparece por indicação em panfleto ou grupo, sem empresa identificada.",
    "Começa com orçamento baixo e, no meio do serviço, diz que “achou outro problema”.",
    "Cobra valores altos, às vezes leva o aparelho e não devolve."
  ],
  sinais:[
    "Não tem CNPJ nem endereço fixo.",
    "Só aceita dinheiro ou PIX na hora.",
    "Orçamento verbal, sem papel.",
    "Apressa para começar o serviço imediatamente."
  ],
  exemplo:"“Achei aqui o compressor queimado também. Fica mais R$ 1.800, mas se pagar agora no PIX eu faço desconto.”",
  protecao:[
    "Peça orçamento por escrito antes.",
    "Prefira empresas com CNPJ e nota fiscal.",
    "Não pague tudo antes do serviço terminar.",
    "Combine por mensagem, para ter registro."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Registre reclamação em consumidor.gov.br.",
    "Se o aparelho foi levado, informe o número de série.",
    "Procure o Procon da sua cidade."
  ],
  fontes:["Procon","consumidor.gov.br"]
},

/* ---------- PRESENCIAIS ---------- */
{
  slug:"falso-sequestro",
  titulo:"Ligação dizendo que sequestraram alguém da sua família",
  resumo:"Voz de choro ao fundo, alguém gritando, e um pedido de dinheiro urgente.",
  categoria:"Ameaça",
  resposta:["ameaca","pix"],
  destaque:true,
  como:[
    "A ligação começa com choro, gritos e uma voz pedindo socorro.",
    "O golpista assume o telefone e exige dinheiro rápido, ameaçando machucar a pessoa.",
    "Não deixam você desligar nem falar com mais ninguém."
  ],
  sinais:[
    "Pedem para você não desligar o telefone em nenhum momento.",
    "Exigem PIX, depósito ou entrega de dinheiro para alguém que vai buscar.",
    "Não sabem o nome completo ou detalhes da pessoa.",
    "Usam áudio genérico de choro e gritos."
  ],
  exemplo:"“Mãe, me ajuda, eles estão me batendo!”, em seguida outra voz: “Se chamar polícia ela morre. Faz um PIX de 5 mil agora e não desliga.”",
  protecao:[
    "Desligue. Não existe regra que proíba desligar.",
    "Ligue imediatamente para a pessoa por outro número.",
    "Se não conseguir contato, chame a polícia (190).",
    "Nunca pague sem falar com a pessoa ou vê-la."
  ],
  vitima:[
    "Chame a polícia pelo 190 imediatamente.",
    "Avise o banco para tentar bloquear o valor.",
    "Registre boletim de ocorrência.",
    "Guarde o número que ligou e o horário exato."
  ],
  fontes:["Polícias Civis estaduais","Banco Central (145)"]
},

{
  slug:"golpe-do-abraco",
  titulo:"O abraço, o tropeço e a carteira que some",
  resumo:"Distração na rua, no mercado ou na fila do banco.",
  categoria:"Presenciais",
  resposta:["presencial","abuso"],
  destaque:false,
  como:[
    "Alguém esbarra, abraça ou derrama algo em você, criando confusão.",
    "Enquanto você se distrai, um comparsa pega carteira, celular ou cartão.",
    "Às vezes já usam o cartão antes de você perceber."
  ],
  sinais:[
    "Contato físico inesperado de estranho.",
    "Grupo de pessoas ao redor ao mesmo tempo.",
    "Alguém insistindo em “ajudar” com sua bolsa.",
    "Movimento estranho perto do seu bolso."
  ],
  exemplo:"“Desculpa, desculpa! Deixa eu te ajudar a limpar isso.”, dois segundos depois, a carteira não está mais lá.",
  protecao:[
    "Mantenha bolsa fechada e à frente do corpo.",
    "Não deixe celular no bolso de trás.",
    "Desconfie de contato físico repentino em aglomeração.",
    "Leve só o cartão que vai usar."
  ],
  vitima:[
    "Ligue para o banco imediatamente e bloqueie cartões.",
    "Registre boletim de ocorrência.",
    "Avise o INSS se levaram documentos.",
    "Peça imagens das câmeras do local."
  ],
  fontes:["Polícias Civis estaduais","Febraban"]
},

{
  slug:"falso-vigia-banco",
  titulo:"O “segurança” que oferece ajuda na saída do banco",
  resumo:"Falso vigia avisa que você foi seguido e se oferece para “guardar” seu dinheiro.",
  categoria:"Presenciais",
  resposta:["presencial","banco"],
  destaque:false,
  como:[
    "Depois de um saque, alguém se apresenta como segurança e diz que você está sendo seguido.",
    "Oferece levar o dinheiro para casa, guardar na agência ou “fazer uma aplicação segura”.",
    "Some com o dinheiro."
  ],
  sinais:[
    "Abordagem na porta do banco por quem não está fardado.",
    "História de que você está sendo seguido.",
    "Oferta de guardar seu dinheiro.",
    "Pedem para você ir a outro caixa “por segurança”."
  ],
  exemplo:"“O senhor foi seguido, eu vi. Deixa que eu levo esse dinheiro com você até em casa, sou segurança aqui da agência.”",
  protecao:[
    "Segurança de banco fica dentro da agência e não leva dinheiro de cliente.",
    "Se alguém avisar que você está sendo seguido, volte para dentro do banco e chame a polícia.",
    "Evite saques altos; prefira transferência ou acompanhante de confiança.",
    "Não entregue dinheiro a ninguém."
  ],
  vitima:[
    "Chame a polícia pelo 190 imediatamente.",
    "Avise o gerente da agência.",
    "Registre boletim de ocorrência.",
    "Peça as câmeras da agência e da rua."
  ],
  fontes:["Polícias Civis estaduais","Febraban"]
},

{
  slug:"falso-policial",
  titulo:"“Sou policial, seu dinheiro é fruto de crime”",
  resumo:"Falso agente pede para conferir notas ou “prender” seu cartão.",
  categoria:"Presenciais",
  resposta:["ameaca","presencial","abuso"],
  destaque:false,
  como:[
    "Abordagem por pessoa que se diz policial, à paisana ou com crachá falso.",
    "Alega que o dinheiro sacado é falso ou fruto de crime e pede para conferir.",
    "Troca as notas ou some com o envelope, e às vezes pede o cartão e a senha."
  ],
  sinais:[
    "Abordagem na porta do banco ou logo após o saque.",
    "Pedem seu dinheiro ou cartão para “vistoria”.",
    "Não chamam viatura nem levam você a uma delegacia.",
    "Insistem em resolver ali mesmo."
  ],
  exemplo:"“Polícia Civil. Essas notas podem ser falsas, preciso apreender. Coloca tudo nesse envelope que eu levo para perícia.”",
  protecao:[
    "Peça a identificação e o número do registro funcional.",
    "Nenhum policial pede seu dinheiro, cartão ou senha.",
    "Proponha ir até uma delegacia, quem é polícia aceita.",
    "Chame o 190 você mesmo."
  ],
  vitima:[
    "Ligue 190 imediatamente e informe a ocorrência.",
    "Registre boletim de ocorrência.",
    "Anote características e placa se houver veículo.",
    "Comunique a corregedoria da polícia."
  ],
  fontes:["Polícias Civis estaduais","Corregedorias"]
},

{
  slug:"golpe-do-emprestimo-na-rua",
  titulo:"Abordagem na rua com “crédito liberado”",
  resumo:"Promotores em feiras, portas de banco e grupos oferecendo dinheiro com documento na mão.",
  categoria:"Presenciais",
  resposta:["abuso","banco"],
  destaque:false,
  como:[
    "Abordagem em fila de banco, feira ou porta de lotérica oferecendo crédito rápido.",
    "Pedem documentos, selfie e assinatura em tablet.",
    "O que sai é um empréstimo com juros altos, ou um cadastro usado para fraude."
  ],
  sinais:[
    "Oferta de dinheiro sem você procurar.",
    "Pedem selfie segurando documento na hora.",
    "Tablet com contrato que você não consegue ler.",
    "Insistem para resolver ali mesmo."
  ],
  exemplo:"“Dona, a senhora tem R$ 2 mil liberados agora, só assinar aqui no tablet e tirar uma foto com o documento.”",
  protecao:[
    "Não assine nada na rua.",
    "Nunca tire selfie com documento para desconhecido.",
    "Procure o banco ou a agência do INSS.",
    "Leve o contrato para ler em casa antes de assinar."
  ],
  vitima:[
    "Ligue para o 135 se o desconto aparecer no benefício.",
    "Registre boletim de ocorrência.",
    "Procure a Defensoria Pública.",
    "Registre reclamação no Banco Central (145)."
  ],
  fontes:["INSS (135)","Banco Central (145)","Defensoria Pública"]
},

/* ---------- INVESTIMENTOS ---------- */
{
  slug:"renda-extra-falsa",
  titulo:"“Renda extra”: grupos e robôs com lucro garantido",
  resumo:"Prometem dinheiro fácil com tarefas, robôs de investimento ou criptomoedas.",
  categoria:"Investimentos",
  resposta:["investimento","pix"],
  destaque:false,
  como:[
    "Você é adicionado a um grupo com prints de pessoas “lucrando” todo dia.",
    "Começa com um depósito pequeno que rende de verdade, para ganhar confiança.",
    "Depois pedem valores maiores, e o saque nunca é liberado."
  ],
  sinais:[
    "Lucro garantido e percentual fixo por dia.",
    "Prints de comprovantes e depoimentos de desconhecidos.",
    "Precisa indicar amigos para “subir de nível”.",
    "Cobram taxa para liberar saque."
  ],
  exemplo:"“Grupo VIP! Deposita R$ 200 e recebe R$ 260 em 24h. Só hoje, últimas vagas.”",
  protecao:[
    "Ninguém garante lucro. Rentabilidade garantida é sinal de fraude.",
    "Só invista por instituição autorizada pelo Banco Central.",
    "Desconfie de grupo de WhatsApp como ambiente de investimento.",
    "Se o contato chegou até você, é venda, e provavelmente golpe."
  ],
  vitima:[
    "Pare os depósitos e guarde comprovantes e conversas.",
    "Registre boletim de ocorrência.",
    "Denuncie ao Banco Central e à CVM.",
    "Avise o banco e registre reclamação em consumidor.gov.br."
  ],
  fontes:["Banco Central (145)","CVM","Procon"]
},

{
  slug:"falso-corretora-cripto",
  titulo:"Corretora de criptomoedas que só existe no site",
  resumo:"Plataforma bonita, saldo crescendo e saque que nunca libera.",
  categoria:"Investimentos",
  resposta:["investimento","pix"],
  destaque:false,
  como:[
    "Anúncio com especialista famoso, vídeo deepfake ou grupo de WhatsApp leva a uma plataforma nova.",
    "Você deposita e o saldo na tela cresce rápido.",
    "Na hora de sacar, pedem imposto, taxa ou “validação” e o dinheiro nunca sai."
  ],
  sinais:[
    "Plataforma que não aparece na lista de instituições autorizadas do Banco Central.",
    "Saldo cresce muito acima do mercado.",
    "Cobram taxa para liberar saque.",
    "Especialista famoso “recomendando” a plataforma em vídeo."
  ],
  exemplo:"“Sua carteira está em R$ 27 mil. Para sacar, precisa pagar 12% de imposto antecipado no PIX.”",
  protecao:[
    "Confira se a corretora é autorizada pelo Banco Central e pela CVM.",
    "Desconfie de saldo que só existe na tela.",
    "Nunca pague taxa para liberar saque.",
    "Desconfie de vídeo de famoso recomendando investimento."
  ],
  vitima:[
    "Pare de enviar dinheiro imediatamente.",
    "Registre boletim de ocorrência com prints de tudo.",
    "Denuncie à CVM e ao Banco Central.",
    "Avise o banco de origem dos PIX."
  ],
  fontes:["CVM","Banco Central (145)"]
},

{
  slug:"consorcio-falso",
  titulo:"Consórcio contemplado vendido por telefone",
  resumo:"Oferecem carta contemplada com “retorno garantido” e pedem entrada por PIX.",
  categoria:"Investimentos",
  resposta:["investimento","compra"],
  destaque:false,
  como:[
    "Ligam oferecendo cota de consórcio já contemplada, de carro ou imóvel.",
    "Prometem rendimento na revenda ou entrega imediata da carta.",
    "Pedem entrada, taxa de transferência ou “agilização” por PIX."
  ],
  sinais:[
    "Consórcio não é investimento e não tem retorno garantido.",
    "Empresa sem autorização do Banco Central.",
    "Pedem PIX para pessoa física.",
    "Pressão para fechar no mesmo dia."
  ],
  exemplo:"“Cota de R$ 80 mil já contemplada por R$ 32 mil. Pagando R$ 3 mil de entrada hoje, transferimos a carta na semana.”",
  protecao:[
    "Consórcio só com administradora autorizada pelo Banco Central.",
    "Carta contemplada tem regras e não é vendida por telefone com urgência.",
    "Nunca pague entrada sem contrato registrado.",
    "Leia o contrato com calma e mostre a alguém de confiança."
  ],
  vitima:[
    "Registre boletim de ocorrência.",
    "Se necessário, registre reclamação no Banco Central após procurar a instituição financeira.",
    "Registre reclamação em consumidor.gov.br.",
    "Avise o banco de onde saiu o PIX."
  ],
  fontes:["Banco Central (145)","Procon"]
},

/* ---------- AFETIVOS ---------- */
{
  slug:"golpe-do-amor",
  titulo:"Romance na internet que termina em pedido de dinheiro",
  resumo:"Uma relação online que, depois de meses, vira urgência financeira.",
  categoria:"Afetivos",
  resposta:["afetivo","investimento","pix"],
  destaque:false,
  como:[
    "O contato começa em rede social ou aplicativo de relacionamento, com muita atenção.",
    "Depois de criar vínculo, surge um problema: doença, alfândega, viagem, dívida.",
    "Os pedidos crescem e a pessoa nunca consegue encontrar pessoalmente."
  ],
  sinais:[
    "Nunca faz videochamada ao vivo.",
    "A história tem sempre um obstáculo para o encontro.",
    "Pedidos de dinheiro aumentam com o tempo.",
    "Pede para você não contar para a família."
  ],
  exemplo:"“Meu amor, estou retido na alfândega com um presente para você. Preciso que pague uma taxa de 2.300 dólares.”",
  protecao:[
    "Nunca envie dinheiro para alguém que você não viu pessoalmente.",
    "Faça videochamada antes de qualquer envolvimento mais sério.",
    "Conte para alguém de confiança sobre a relação.",
    "Procure as fotos da pessoa no Google, fotos roubadas são comuns."
  ],
  vitima:[
    "Pare todo contato e não envie mais nada.",
    "Guarde prints e comprovantes.",
    "Registre boletim de ocorrência.",
    "Conte para a família, o isolamento é o que sustenta o golpe."
  ],
  fontes:["Polícias Civis estaduais","Banco Central (145)"]
},

{
  slug:"cuidador-abuso-financeiro",
  titulo:"Quem cuida de você e começa a mexer no seu dinheiro",
  resumo:"Abuso financeiro: cartão “guardado”, senha “anotada”, empréstimo “para ajudar”.",
  categoria:"Afetivos",
  resposta:["afetivo","abuso"],
  destaque:false,
  como:[
    "Alguém próximo, cuidador, vizinho ou até familiar, assume o controle do cartão e da senha.",
    "Começa com pequenos gastos e evolui para empréstimos, PIX e venda de bens.",
    "A pessoa idosa perde a noção do próprio extrato e às vezes é isolada dos outros parentes."
  ],
  sinais:[
    "Alguém insiste em guardar seu cartão e saber sua senha.",
    "Extrato com saques e PIX que você não fez.",
    "Empréstimo no seu nome que você não pediu.",
    "A pessoa te afasta dos outros parentes e controla as visitas."
  ],
  exemplo:"“A senhora não precisa se preocupar com isso, eu cuido do cartão. Já paguei umas contas atrasadas suas.”",
  protecao:[
    "Nunca entregue cartão e senha, mesmo para quem ajuda você.",
    "Confira o extrato todo mês, com apoio de outra pessoa de confiança.",
    "Cadastre alerta de movimentação no aplicativo.",
    "Mantenha contato com mais de um familiar."
  ],
  vitima:[
    "Peça ajuda a outro parente ou ao Conselho do Idoso da cidade.",
    "Ligue para o Disque 100 e denuncie o abuso financeiro.",
    "Avise o banco e troque senhas.",
    "Registre boletim de ocorrência e procure a Defensoria Pública."
  ],
  fontes:["Disque 100","Defensoria Pública","Conselhos do Idoso"]
},

/* ---------- DIGITAL ---------- */
{
  slug:"falso-suporte-tecnico",
  titulo:"“Seu celular está com vírus, deixa eu acessar”",
  resumo:"Falso suporte pedindo para instalar um aplicativo de acesso remoto.",
  categoria:"Digital",
  resposta:["dispositivo","conta"],
  destaque:false,
  como:[
    "Aparece um aviso na tela dizendo que o aparelho está infectado, com um número para ligar.",
    "O falso técnico pede para instalar um aplicativo de suporte remoto.",
    "Com o acesso, ele vê sua tela, abre o banco e transfere o dinheiro."
  ],
  sinais:[
    "Aviso de vírus no navegador pedindo para ligar.",
    "Pedem para instalar TeamViewer, AnyDesk ou similar.",
    "Pedem para você “acompanhar” o acesso ao aplicativo do banco.",
    "Cobram por um serviço que não existe."
  ],
  exemplo:"“Seu aparelho está infectado. Instale esse aplicativo de suporte para eu limpar. Depois abra o banco para testar.”",
  protecao:[
    "Nenhum banco ou fabricante liga avisando de vírus.",
    "Nunca instale aplicativo de acesso remoto a pedido de estranhos.",
    "Feche o aviso e reinicie o aparelho.",
    "Peça ajuda a um familiar antes de instalar qualquer coisa."
  ],
  vitima:[
    "Desinstale o aplicativo e desconecte o aparelho da internet.",
    "Ligue para o banco de outro telefone e bloqueie contas.",
    "Troque senhas em um aparelho diferente.",
    "Registre boletim de ocorrência."
  ],
  fontes:["CERT.br","Febraban"]
},

{
  slug:"deepfake-voz-ia",
  titulo:"A voz do seu filho clonada por inteligência artificial",
  resumo:"A ligação tem a voz exata do parente, pedindo dinheiro para uma emergência.",
  categoria:"Digital",
  resposta:["afetivo","ameaca","pix"],
  destaque:true,
  como:[
    "O golpista pega áudios e vídeos públicos do seu familiar em redes sociais e clona a voz com IA.",
    "Liga chorando, com a voz idêntica, dizendo que sofreu um acidente ou foi preso e precisa de dinheiro rápido.",
    "Pode durar poucos segundos e passar o telefone para um “policial” ou “médico”."
  ],
  sinais:[
    "A ligação é muito curta e cheia de pedidos urgentes.",
    "A voz acerta o timbre, mas não responde a perguntas pessoais.",
    "Pedem para não desligar e não falar com mais ninguém.",
    "Só aceitam PIX ou entrega de dinheiro por terceiro."
  ],
  exemplo:"“Mãe, bati o carro, tem uma pessoa ferida. Preciso de 6 mil agora, por favor, não desliga, o advogado vai falar com você.”",
  protecao:[
    "Desligue e ligue de volta para o número que você já tem salvo.",
    "Faça uma pergunta que só a pessoa saberia responder.",
    "Combine uma palavra-código na família para emergências.",
    "Diminua a exposição: revise quem vê seus vídeos e áudios nas redes."
  ],
  vitima:[
    "Avise o banco imediatamente e peça bloqueio.",
    "Registre boletim de ocorrência.",
    "Avise a família para ninguém cair na mesma ligação.",
    "Guarde o número e o horário da chamada."
  ],
  fontes:["Polícias Civis estaduais","Febraban","CERT.br"]
},

{
  slug:"qr-code-falso",
  titulo:"QR code colado por cima do verdadeiro",
  resumo:"Adesivo com QR code falso em estacionamento, conta de restaurante ou boleto.",
  categoria:"Digital",
  resposta:["pix","compra"],
  destaque:false,
  como:[
    "Cobrem o QR code original com um adesivo que leva a um PIX de outra pessoa.",
    "Você paga e o valor vai para o golpista, mesmo com o nome do estabelecimento na tela.",
    "Também aparece em faturas e cobranças enviadas por mensagem."
  ],
  sinais:[
    "QR code impresso em adesivo colado por cima.",
    "O nome do recebedor na tela não é o do estabelecimento.",
    "O valor aparece diferente do combinado.",
    "Pedem para você pagar por QR em vez da maquininha."
  ],
  exemplo:"“Pode pagar no QR code da mesa.”, mas o adesivo é do golpista, não do restaurante.",
  protecao:[
    "Confira o nome do recebedor na tela antes de confirmar o PIX.",
    "Desconfie de QR code em adesivo ou com aparência improvisada.",
    "Peça para pagar na maquininha.",
    "Em estacionamento, use o app oficial do local."
  ],
  vitima:[
    "Avise o banco imediatamente e peça o MED (bloqueio especial).",
    "Registre boletim de ocorrência.",
    "Avise o estabelecimento para remover o adesivo.",
    "Se necessário, registre reclamação no Banco Central após procurar a instituição financeira."
  ],
  fontes:["Banco Central (145)","Febraban"]
},

{
  slug:"phishing-site-banco",
  titulo:"Site igual ao do seu banco, com endereço diferente",
  resumo:"Link de SMS, e-mail ou anúncio leva a uma cópia da tela de login.",
  categoria:"Digital",
  resposta:["conta","dispositivo"],
  destaque:false,
  como:[
    "Você recebe um link com aviso de pendência, atualização ou promoção.",
    "A página é idêntica à do banco e pede agência, conta, senha e token.",
    "Com os dados, os golpistas acessam a conta de verdade."
  ],
  sinais:[
    "Endereço com letras trocadas (bb.com.br versus bb-seguranca.net).",
    "A página pede senha completa e código de token.",
    "O banco nunca manda link por SMS pedindo senha.",
    "Cadeado no navegador não garante que o site é do banco."
  ],
  exemplo:"“Sua conta será bloqueada por falta de atualização. Confirme seus dados em bb-atualizacao.net.”",
  protecao:[
    "Digite o endereço do banco você mesmo, ou use o aplicativo oficial.",
    "Nunca clique em link de SMS ou e-mail de banco.",
    "Ative a verificação em duas etapas.",
    "Confira o endereço com atenção antes de digitar qualquer dado."
  ],
  vitima:[
    "Ligue para o banco e bloqueie tudo imediatamente.",
    "Troque as senhas em outro aparelho.",
    "Registre boletim de ocorrência.",
    "Denuncie ao Banco Central (145) e ao CERT.br."
  ],
  fontes:["CERT.br","Febraban","Banco Central (145)"]
},

{
  slug:"app-falso-banco",
  titulo:"Aplicativo falso do banco ou do INSS",
  resumo:"App parecido, instalado fora da loja oficial, que rouba senha e mostra saldo falso.",
  categoria:"Digital",
  resposta:["dispositivo","conta"],
  destaque:false,
  como:[
    "Você instala um aplicativo com o nome e o ícone parecidos com os do banco ou do Meu INSS.",
    "O app pede seus dados de acesso e mostra saldos e telas falsas.",
    "Enquanto isso, o golpista opera sua conta de verdade."
  ],
  sinais:[
    "App instalado por link recebido, não pela loja oficial.",
    "Pedidos de permissão estranhos, como ler SMS.",
    "O aplicativo pede senha completa e token.",
    "Erros de português e ícone ligeiramente diferente."
  ],
  exemplo:"“Baixe o novo app do Meu INSS neste link para liberar seu benefício.”",
  protecao:[
    "Instale só pela loja oficial do seu celular.",
    "Confira o nome do desenvolvedor na página do app.",
    "Nunca instale app por link de mensagem.",
    "Desconfie de app que pede permissão para ler SMS."
  ],
  vitima:[
    "Desinstale o app e desconecte da internet.",
    "Ligue para o banco de outro aparelho e bloqueie a conta.",
    "Troque todas as senhas.",
    "Registre boletim de ocorrência e denuncie o app à loja."
  ],
  fontes:["CERT.br","Banco Central (145)","INSS (135)"]
}

];

/* ============================================================
   QUIZ
   ============================================================ */
var QUIZ = [
  {
    fala:"“Oi mãe, esse é meu número novo. Não liga agora. Preciso que você faça um PIX de R$ 1.200 pra um amigo meu, amanhã te devolvo.”",
    golpe:true,
    explica:"Número novo + pedido de dinheiro no mesmo dia + PIX para terceiro + não pode ligar. Quatro sinais na mesma mensagem. Ligue para o número antigo."
  },
  {
    fala:"“BANCO: identificamos uma compra de R$ 3.490 no seu cartão. Se não foi você, ligue agora para 0800 123 4567.”",
    golpe:true,
    explica:"O número está dentro da mensagem, e é falso. Nunca ligue para o número que veio no aviso. Use o telefone do verso do seu cartão."
  },
  {
    fala:"“Seu benefício está com prova de vida pendente. Faça a prova pelo aplicativo Meu INSS ou vá até a agência. Dúvidas, ligue 135.”",
    golpe:false,
    explica:"Essa é segura: não pede senha, não pede PIX, não manda link e indica o canal oficial. O INSS não cobra nada para liberar benefício."
  },
  {
    fala:"“Aqui é do setor de fraudes. Para cancelar a compra suspeita, confirme o código de 6 dígitos que acabou de chegar no seu SMS.”",
    golpe:true,
    explica:"O código do SMS é a chave da sua conta. Quem pede esse código está tentando entrar nela. Nenhum funcionário de banco pede esse código."
  },
  {
    fala:"“Mãe, bati o carro, tem uma pessoa ferida. Preciso de 6 mil agora. Não desliga, o advogado vai falar com você.”, e a voz é exatamente a do seu filho.",
    golpe:true,
    explica:"Voz clonada por inteligência artificial já é golpe registrado no Brasil. Desligue e ligue para o número que você já tem salvo."
  }
];

/* ============================================================
   UTILIDADES
   ============================================================ */
