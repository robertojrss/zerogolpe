# Publicar o ZeroGolpe no GitHub Pages, gratuitamente

Este pacote já está pronto para hospedagem estática no GitHub Pages.
O arquivo `CNAME` contém o domínio `zerogolpe.org` e `.nojekyll` impede o processamento do Jekyll.

## 1. Criar e publicar o repositório

1. Entre em https://github.com/new
2. Crie um repositório **público** chamado `zerogolpe` (o nome é livre).
3. Faça upload do **conteúdo da pasta** deste projeto na **raiz** do repositório, incluindo `index.html`, `assets/`, `.nojekyll` e `CNAME` (se o upload pela interface ocultar arquivos iniciados por ponto, adicione `.nojekyll` pelo editor ou ignore-o, pois não é necessário para este site).
4. Em `Settings > Pages > Build and deployment`, escolha `Deploy from a branch`, branch `main`, pasta `/(root)` e salve.
5. Aguarde a publicação automática e abra o endereço de prévia indicado pelo GitHub.

> No modo "Deploy from a branch", o GitHub Pages aceita sites estáticos e não precisa de Node, build, servidor ou assinatura.

## 2. Conectar o domínio zerogolpe.org

1. Em `Settings > Pages > Custom domain`, informe `zerogolpe.org` e clique em `Save`.
2. No painel DNS do registrador (Wix, se foi lá que o domínio foi comprado), configure os registros **A** do domínio raiz `@`:

| Tipo | Nome/Host | Aponta para |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. Para que `www.zerogolpe.org` também funcione, adicione um registro `CNAME`, com host `www`, apontando para **SEU-USUARIO.github.io** (substitua pelo seu nome de usuário do GitHub, **sem caminho /zerogolpe**).
4. Remova registros A ou CNAME antigos que apontem o site para a Wix, quando conflitarem com esses valores. Não apague registros de e-mail/MX/TXT que você ainda use.
5. Depois da verificação do domínio, ative `Enforce HTTPS` em `Settings > Pages`. Essa opção pode demorar até 24 h para ficar disponível.

Documentação oficial do GitHub:
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

Documentação Wix:
- https://support.wix.com/pt/article/conectar-um-dom%C3%ADnio-wix-a-um-site-externo

## 3. Ativar o formulário Web3Forms

1. Gere sua Access Key na conta https://web3forms.com/
2. Abra `assets/js/config.js` e substitua `COLE_SUA_ACCESS_KEY_AQUI` pela chave gerada.
3. Salve e faça o commit; o GitHub Pages publicará automaticamente a alteração.
4. Envie um relato fictício pelo `https://zerogolpe.org` e confirme o recebimento no e-mail vinculado ao Web3Forms.

**Importante sobre o repositório público:** a Access Key do Web3Forms é uma chave pública por design (não uma senha), mas terceiros podem tentar usá-la para enviar spam ao formulário. O Web3Forms fornece proteções antispam. Nunca envie senhas, tokens privados, documentos das vítimas ou registros reais de ocorrência para o repositório GitHub. O site não armazena relatos no GitHub; ao enviar, os dados são processados pelo Web3Forms.

Se o formulário não estiver configurado, o site informa que não pode enviar e permite copiar o relato, sem afirmar que houve entrega.

## Custo

- Hospedagem GitHub Pages (repositório público): R$ 0 de assinatura.
- HTTPS e domínio personalizado: R$ 0 adicionais no GitHub.
- Web3Forms: plano gratuito sujeito ao limite contratado.
- Renovação anual do domínio: cobrança do registrador.
