"use strict";

/*
 * Ícones vetoriais das situações da página inicial.
 * SVGs independentes, sem fontes, CDNs ou bibliotecas de terceiros.
 * Decorativos: o texto do botão continua sendo o nome acessível.
 */
var ICONES_SITUACOES = Object.freeze({
  afetivo: '<circle cx="8" cy="8" r="3"/><path d="M2.5 20v-1.5A5.5 5.5 0 0 1 8 13a5.5 5.5 0 0 1 5.5 5.5V20"/><path d="M16 5.4a3 3 0 0 1 0 5.8"/><path d="M17 13.2a5.5 5.5 0 0 1 4.5 5.3V20"/>',
  banco: '<path d="m2 9 10-6 10 6"/><path d="M3 9h18"/><path d="M5 10v9M10 10v9M14 10v9M19 10v9"/><path d="M2 21h20M4 19h16"/>',
  pix: '<rect x="3" y="3" width="8" height="8" rx="1.5" transform="rotate(45 7 7)"/><rect x="13" y="3" width="8" height="8" rx="1.5" transform="rotate(45 17 7)"/><rect x="3" y="13" width="8" height="8" rx="1.5" transform="rotate(45 7 17)"/><rect x="13" y="13" width="8" height="8" rx="1.5" transform="rotate(45 17 17)"/>',
  conta: '<path d="M20.4 11.5a8.2 8.2 0 0 1-8.3 8.3 9 9 0 0 1-3.8-.8L3 20.5l1.7-5.1A8.2 8.2 0 0 1 3.8 12 8.3 8.3 0 1 1 20.4 11.5Z"/><path d="M8.5 8.3c.8 3 3 5.2 6 6l1.4-1.3"/>',
  inss: '<rect x="5" y="2.5" width="14" height="19" rx="2"/><path d="M9 7h6M9 11h6M9 15h4"/><path d="M15 2.5v4h4"/>',
  compra: '<path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5z"/><path d="M3 7.5 12 12l9-4.5M12 12v9"/><path d="M7.5 5.25 16.5 9.75"/>',
  dispositivo: '<rect x="6.5" y="2" width="11" height="20" rx="2"/><path d="M10 5h4M11 18.5h2"/><path d="M12 9v4M12 15.5h.01"/>',
  ameaca: '<path d="M12 2.5 20 6v5.6c0 5-3.5 8.2-8 10-4.5-1.8-8-5-8-10V6z"/><path d="M12 7v6M12 16.5h.01"/>',
  investimento: '<circle cx="12" cy="12" r="9.5"/><path d="M15.5 8.5c-1.2-1.3-5.9-1.6-6.5.8-.8 3.3 6.5 1.1 6.3 4.8-.2 3-5.5 3.2-6.8 1.4M12 5v14"/>',
  abuso: '<rect x="2.5" y="5" width="19" height="14" rx="2"/><circle cx="8.4" cy="11" r="2.1"/><path d="M5 16c.5-2.4 6.3-2.4 6.8 0M14.5 10h4M14.5 13.5h4"/>'
});

function iconeSituacao(chave) {
  var desenho = ICONES_SITUACOES[chave] || ICONES_SITUACOES.ameaca;
  return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">' + desenho + '</svg>';
}
function iconeSeta() {
  return '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false"><path d="m9 5 7 7-7 7"/></svg>';
}
