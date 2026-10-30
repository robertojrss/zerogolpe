# ZeroGolpe.org

Website educativo e gratuito sobre golpes comuns contra pessoas idosas no Brasil, com **45 dossiês**, busca, orientações, quiz e formulário de relatos.

**Hospedagem:** GitHub Pages, com domínio `zerogolpe.org` e repositório público.

## Estrutura

- `index.html`: interface do site;
- `assets/css/style.css`: visual responsivo e recursos de acessibilidade;
- `assets/js/app.js`: navegação, busca, quiz e formulário;
- `assets/js/data.js`: catálogo de golpes;
- `assets/js/referencias.js`: links das fontes institucionais;
- `assets/js/config.js`: chave pública do serviço de formulário;
- `CNAME`: domínio personalizado do GitHub Pages;
- `.nojekyll`: desabilita o processamento automático de Jekyll;
- `FONTES.md`: documentação das fontes;
- `PUBLICAR.md`: passo a passo para publicar no GitHub Pages e ajustar o DNS.

## Privacidade e processamento de relatos

Os relatos **não são armazenados no GitHub**. O formulário envia seus dados para o Web3Forms, um serviço externo, que os processa e os encaminha ao e-mail de recebimento configurado. Não há backend próprio. O serviço pode reter dados segundo sua política de privacidade.

A *Access Key* do Web3Forms é pública por desenho do serviço e pode ficar em código aberto, mas não deve ser confundida com senha ou token administrativo. Se terceiros utilizarem a chave, podem tentar enviar spam. Nunca armazene relatos reais, dados identificáveis, credenciais privadas ou backups de usuários no repositório.

Sem a chave configurada, o site desabilita o envio e permite copiar o texto do relato. Configure e teste o recebimento antes de divulgar o formulário.

### Crédito

Criado e mantido por [Roberto Junior (robertojrs)](https://www.linkedin.com/in/robertojrs/).
