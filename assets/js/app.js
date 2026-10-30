"use strict";

function $(s,r){ return (r||document).querySelector(s); }
function esc(s){
  return String(s==null?"":s).replace(/[&<>"']/g,function(c){
    return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];
  });
}
function norm(s){
  return String(s||"").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
}
function acha(slug){
  for(var i=0;i<GOLPES.length;i++){ if(GOLPES[i].slug===slug) return GOLPES[i]; }
  return null;
}
function paraTexto(g){
  var L=[];
  L.push("ZEROGOLPE, "+g.titulo);
  L.push(g.resumo);
  L.push("");
  L.push("COMO FUNCIONA");
  g.como.forEach(function(x){ L.push("- "+x); });
  L.push("");
  L.push("SINAIS DE ALERTA");
  g.sinais.forEach(function(x){ L.push("- "+x); });
  L.push("");
  L.push("COMO SE PROTEGER");
  g.protecao.forEach(function(x){ L.push("- "+x); });
  L.push("");
  L.push("SE JÁ ACONTECEU");
  g.vitima.forEach(function(x){ L.push("- "+x); });
  L.push("");
  L.push("Mais golpes em zerogolpe.org");
  return L.join("\n");
}
function aviso(txt,cor){
  var d=document.createElement("div");
  d.setAttribute("role","status");
  d.textContent=txt;
  d.className="aviso-flutuante"+(cor ? " aviso-erro" : "");
  document.body.appendChild(d);
  setTimeout(function(){ d.remove(); },2600);
}

/* ============================================================
   ACESSIBILIDADE
   ============================================================ */
var CHAVE_TAM="zg_tamanho", CHAVE_CON="zg_contraste";
$("#btn-enviar").addEventListener("click",function(){ location.hash="#enviar"; });
function aplicaTamanho(px){
  px=Math.max(16,Math.min(27,px));
  document.documentElement.style.fontSize=px+"px";
  try{ localStorage.setItem(CHAVE_TAM,px); }catch(e){}
}
try{
  var t=parseInt(localStorage.getItem(CHAVE_TAM),10);
  if(t) aplicaTamanho(t);
  if(localStorage.getItem(CHAVE_CON)==="1"){ document.body.classList.add("contraste"); }
}catch(e){}

$("#btn-mais").addEventListener("click",function(){
  aplicaTamanho(parseFloat(getComputedStyle(document.documentElement).fontSize)+1);
});
$("#btn-menos").addEventListener("click",function(){
  aplicaTamanho(parseFloat(getComputedStyle(document.documentElement).fontSize)-1);
});
$("#btn-contraste").addEventListener("click",function(){
  var on=document.body.classList.toggle("contraste");
  this.setAttribute("aria-pressed",on?"true":"false");
  try{ localStorage.setItem(CHAVE_CON,on?"1":"0"); }catch(e){}
});

var falando=false;
function paraFala(){
  if(window.speechSynthesis){ window.speechSynthesis.cancel(); }
  falando=false;
  var b=$("#btn-ouvir");
  if(b){ b.setAttribute("aria-pressed","false"); b.textContent="🔊 Ouvir"; }
}
$("#btn-ouvir").addEventListener("click",function(){
  if(!("speechSynthesis" in window)){ aviso("Seu navegador não lê em voz alta."); return; }
  if(falando){ paraFala(); return; }
  var u=new SpeechSynthesisUtterance($("#conteudo").innerText.replace(/\n{2,}/g,"\n"));
  u.lang="pt-BR"; u.rate=0.92;
  u.onend=paraFala; u.onerror=paraFala;
  window.speechSynthesis.speak(u);
  falando=true;
  this.setAttribute("aria-pressed","true");
  this.textContent="⏹ Parar";
});

/* ============================================================
   HOME
   ============================================================ */
var entradasEl=$("#entradas");
ENTRADAS.forEach(function(e){
  var b=document.createElement("button");
  b.type="button";
  b.className="cartao cartao--"+e.chave;
  b.innerHTML =
    '<span class="cartao-icone">'+iconeSituacao(e.chave)+'</span>'+
    '<span class="cartao-conteudo"><strong class="cartao-titulo">'+esc(e.titulo)+
    '</strong><span class="cartao-nota">'+esc(e.nota)+'</span></span>'+
    '<span class="cartao-seta">'+iconeSeta()+'</span>';
  b.addEventListener("click",function(){ mostrarSituacao(e.chave); });
  entradasEl.appendChild(b);
});

function itemLista(g){
  return '<li><a href="#golpe/'+encodeURIComponent(g.slug)+'">'+esc(g.titulo)+"<small>"+esc(g.resumo)+"</small></a></li>";
}

var destaquesEl=$("#destaques");
GOLPES.filter(function(g){ return g.destaque; }).forEach(function(g){
  destaquesEl.insertAdjacentHTML("beforeend",itemLista(g));
});

$("#todos-resumo").textContent="Ver todos os "+GOLPES.length+" golpes";
var porCategoria={};
GOLPES.forEach(function(g){
  if(!porCategoria[g.categoria]) porCategoria[g.categoria]=[];
  porCategoria[g.categoria].push(g);
});
Object.keys(porCategoria).sort().forEach(function(cat){
  var bloco=document.createElement("div");
  bloco.innerHTML="<h3>"+esc(cat)+"</h3>";
  var ul=document.createElement("ul");
  ul.className="lista";
  porCategoria[cat].sort(function(a,b){ return a.titulo.localeCompare(b.titulo,"pt-BR"); })
    .forEach(function(g){ ul.insertAdjacentHTML("beforeend",itemLista(g)); });
  bloco.appendChild(ul);
  $("#todos-lista").appendChild(bloco);
});

function mostrarSituacao(chave){
  var achados=GOLPES.filter(function(g){ return g.resposta.indexOf(chave)>-1; });
  $("#q").value="";
  var r=$("#resultados"); r.hidden=false;
  var titulo="";
  ENTRADAS.forEach(function(e){ if(e.chave===chave) titulo=e.titulo; });
  var html='<h2 class="titulo-resultado">'+esc(titulo)+"</h2>";
  if(!achados.length){
    html+='<p class="vazio">Ainda não há conteúdo específico aqui. Use a busca acima ou ligue para o banco e para a polícia.</p>';
  } else {
    html+='<ul class="lista">'+achados.map(itemLista).join("")+"</ul>";
  }
  r.innerHTML=html;
  r.scrollIntoView({behavior:"smooth",block:"start"});
}

$("#q").addEventListener("input",function(){
  var termo=norm(this.value).trim();
  var r=$("#resultados");
  if(termo.length<2){ r.hidden=true; r.innerHTML=""; return; }
  var palavras=termo.split(/\s+/).filter(Boolean);
  var achados=GOLPES.filter(function(g){
    var alvo=norm([g.titulo,g.resumo,g.categoria,g.exemplo,(g.sinais||[]).join(" "),(g.como||[]).join(" "),(g.protecao||[]).join(" ")].join(" "));
    return palavras.every(function(p){ return alvo.indexOf(p)>-1; });
  });
  r.hidden=false;
  if(!achados.length){
    r.innerHTML='<p class="vazio">Nada encontrado para “'+esc(this.value)+'”. Tente: PIX, INSS, ligação, motoboy, advogado, boleto, sequestro.</p>';
    return;
  }
  r.innerHTML="<h2 class=\"titulo-resultado\">"+achados.length+(achados.length===1?" resultado":" resultados")+"</h2><ul class=\"lista\">"+achados.map(itemLista).join("")+"</ul>";
});

/* ============================================================
   TELA DE GOLPE
   ============================================================ */
var telaHome=$("#tela-home"), telaGolpe=$("#tela-golpe"), telaQuiz=$("#tela-quiz"), telaEnviar=$("#tela-enviar");

function listaHtml(itens,classe){
  return '<ul class="'+(classe||"chev")+'">'+itens.map(function(x){ return "<li>"+esc(x)+"</li>"; }).join("")+"</ul>";
}

function abrirGolpe(slug){
  var g=acha(slug);
  if(!g){ location.hash="#"; return; }
  paraFala();
  var html='<p class="voltar"><a href="#">← Voltar ao início</a></p>';
  html+="<h1>"+esc(g.titulo)+"</h1>";
  html+='<p class="lead">'+esc(g.resumo)+"</p>";
  html+='<div class="etiquetas"><span class="etiqueta">'+esc(g.categoria)+"</span>";
  (g.resposta||[]).forEach(function(ch){
    ENTRADAS.forEach(function(e){ if(e.chave===ch) html+='<span class="etiqueta">'+esc(e.titulo)+"</span>"; });
  });
  html+="</div>";
  html+='<div class="acoes">'
    +'<button type="button" class="solido" id="b-whats">📲 Enviar no WhatsApp</button>'
    +'<button type="button" id="b-copiar">📋 Copiar texto</button>'
    +'<button type="button" id="b-imprimir">🖨 Imprimir</button></div>';
  html+="<h2>Como funciona</h2>"+listaHtml(g.como,"lista-num");
  html+="<h2>Sinais de alerta</h2>"+listaHtml(g.sinais);
  html+='<h2>Um exemplo de como chega</h2><div class="exemplo"><span class="rotulo">Mensagem ou ligação típica</span>'+esc(g.exemplo)+"</div>";
  html+='<div class="caixa"><h3>Como se proteger</h3>'+listaHtml(g.protecao)+"</div>";
  html+='<div class="caixa caixa-alerta"><h3>Se já aconteceu com você</h3>'+listaHtml(g.vitima,"lista-num")+"</div>";
  var refs = REFERENCIAS_POR_GOLPE[g.slug] || ["CERT_GOLPES", "MJ_PREVENCAO"];
  var links = refs.map(function(id) {
    var f = FONTES_CONFIAVEIS[id];
    if (!f) return "";
    return '<li><a target="_blank" rel="noopener noreferrer" href="'+esc(f.url)+'" aria-label="'+esc(f.titulo)+', abre em nova aba">'+esc(f.titulo)+'</a></li>';
  }).join("");
  if (links) {
    html += '<details class="referencias"><summary>Fontes oficiais e referências (opcional)</summary>'
      + '<div class="referencias-corpo"><p>Links apenas para conferir a informação. Você não precisa abri-los para continuar lendo. Se abrir, será em outra aba, e o ZeroGolpe continuará aqui.</p>'
      + '<ul class="referencias-lista">'+links+'</ul></div></details>';
  }
  html+='<p class="lead aviso-informativo">Este conteúdo é informativo e não substitui orientação do seu banco, do INSS ou de um advogado. Em caso de prejuízo, registre boletim de ocorrência.</p>';

  telaGolpe.innerHTML=html;
  telaHome.hidden=true; telaQuiz.hidden=true; telaEnviar.hidden=true; telaGolpe.hidden=false;
  document.title=g.titulo+", ZeroGolpe";
  window.scrollTo(0,0);

  $("#b-whats").addEventListener("click",function(){
    var txt="*ZeroGolpe*, "+g.titulo+"\n\n"+g.resumo+"\n\nSinais de alerta e o que fazer:\n"+location.href;
    window.open("https://wa.me/?text="+encodeURIComponent(txt),"_blank","noopener");
  });
  $("#b-copiar").addEventListener("click",function(){ copiar(paraTexto(g),"Texto copiado. Cole no grupo."); });
  $("#b-imprimir").addEventListener("click",function(){ window.print(); });
}

function copiar(txt,msgOk){
  function ok(){ aviso(msgOk||"Copiado."); }
  function erro(){ aviso("Não foi possível copiar. Selecione o texto manualmente.","#7a2b00"); }
  if(navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(txt).then(ok,erro);
  } else {
    var ta=document.createElement("textarea");
    ta.value=txt; document.body.appendChild(ta); ta.select();
    try{ document.execCommand("copy"); ok(); }catch(e){ erro(); }
    ta.remove();
  }
}

/* ============================================================
   QUIZ
   ============================================================ */
var respostasQuiz=[];
function montarQuiz(){
  paraFala();
  var lista=$("#quiz-lista"), fim=$("#quiz-fim");
  lista.innerHTML=""; fim.hidden=true; respostasQuiz=[];
  QUIZ.forEach(function(item,idx){
    var d=document.createElement("div");
    d.className="quiz-q";
    d.innerHTML='<p class="fala">'+esc(item.fala)+"</p>";
    var divB=document.createElement("div");
    divB.className="quiz-botoes";
    var bG=document.createElement("button");
    bG.type="button"; bG.textContent="Tem sinais de golpe";
    var bS=document.createElement("button");
    bS.type="button"; bS.textContent="Não vi sinais";
    function responde(escolha){
      respostasQuiz[idx]=escolha;
      var acertou=(escolha===item.golpe);
      var box=document.createElement("div");
      box.className="resposta "+(acertou?"certa":"errada");
      box.innerHTML="<strong>"+(acertou?"Você acertou.":"Atenção:")+"</strong> "+esc(item.explica);
      var antigo=d.querySelector(".resposta");
      if(antigo) antigo.remove();
      d.appendChild(box);
      bG.disabled=true; bS.disabled=true;
      atualizaFim();
    }
    bG.addEventListener("click",function(){ responde(true); });
    bS.addEventListener("click",function(){ responde(false); });
    divB.appendChild(bG); divB.appendChild(bS);
    d.appendChild(divB);
    lista.appendChild(d);
  });
}
function atualizaFim(){
  var fim=$("#quiz-fim");
  if(respostasQuiz.length<QUIZ.length){ fim.hidden=true; return; }
  var acertos=0;
  QUIZ.forEach(function(it,i){ if(respostasQuiz[i]===it.golpe) acertos++; });
  var msg = acertos===QUIZ.length
    ? "Você reconheceu todos. Na dúvida, vale a regra de ouro: desligue e confirme por outro canal."
    : (acertos>=3 ? "Você pegou a maioria. Revise as que errou, os golpes mudam de roupa, mas os sinais são os mesmos."
                  : "Vale treinar mais. Comece pelas quatro perguntas da página inicial e depois releia os sinais de alerta.");
  fim.hidden=false;
  fim.innerHTML='<div class="caixa"><h3>Você acertou '+acertos+' de '+QUIZ.length+"</h3><p>"+esc(msg)+"</p>"
    +'<div class="acoes"><button type="button" id="b-reiniciar">Refazer o teste</button>'
    +'<button type="button" class="solido" id="b-quiz-whats">📲 Mandar para alguém</button></div></div>';
  $("#b-reiniciar").addEventListener("click",function(){ montarQuiz(); window.scrollTo(0,0); });
  $("#b-quiz-whats").addEventListener("click",function(){
    var txt="Fiz o teste do ZeroGolpe e acertei "+acertos+" de "+QUIZ.length+". Faça você também: "+location.href;
    window.open("https://wa.me/?text="+encodeURIComponent(txt),"_blank","noopener");
  });
}

/* ============================================================
   RELATOS: REVISÃO E ENVIO POR FORMULARIO AJAX
   ============================================================ */
var relatoAguardandoEnvio = null;
var envioEmAndamento = false;

var RISCOS = [
  { re:/\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/, nome:"um CPF" },
  { re:/\b\d{2}\.\d{3}\.\d{3}\/0001-\d{2}\b/, nome:"um CNPJ" },
  { re:/\b\d{9,}\b/, nome:"uma sequência longa de números (conta, cartão ou telefone)" },
  { re:/\b\d{4}[\s-]?\d{4}[\s-]?\d{4}[\s-]?\d{4}\b/, nome:"um número de cartão" },
  { re:/senha\s*[:\-]?\s*\S+/i, nome:"uma senha escrita" },
  { re:/c[oó]digo\s*[:\-]?\s*\d+/i, nome:"um código de verificação" },
  { re:/\b\d{5}-?\d\b/, nome:"possível agência e conta" },
  { re:/[\w.+-]+@[\w-]+\.[\w.]+/, nome:"um e-mail" }
];
function analisar(texto){
  var achados=[];
  RISCOS.forEach(function(r){
    if(new RegExp(r.re.source,"i").test(texto)) achados.push(r.nome);
  });
  return achados;
}
function valor(id){ var el=$("#"+id); return el ? el.value.trim() : ""; }
function montarRelato(){
  var L=["RELATO PARA O ZEROGOLPE", "", "O que aconteceu:", valor("f-historia")];
  var campos=[
    ["f-canal","Como chegou"], ["f-quando","Quando foi"],
    ["f-perda","Perda"], ["f-quem","Quem relata"],
    ["f-nome","Como prefere ser chamado"], ["f-cidade","Cidade"]
  ];
  campos.forEach(function(c){if(valor(c[0])) L.push(c[1]+": "+valor(c[0]));});
  L.push("", "Autorização para uso educativo de versão anônima: "+($("#c-autorizo").checked?"Sim":"Não"));
  if(valor("f-contato")) L.push("", "CONTATO PRIVADO (não publicar): "+valor("f-contato"));
  return L.join("\n");
}
function limparPrevia(){
  if(envioEmAndamento) return;
  relatoAguardandoEnvio=null;
  $("#saida-relato").hidden=true;
  $("#saida-relato").innerHTML="";
}
$("#form-relato").addEventListener("input",limparPrevia);
$("#form-relato").addEventListener("change",limparPrevia);
$("#b-limpar").addEventListener("click",function(){
  if(envioEmAndamento) return;
  $("#form-relato").reset();
  limparPrevia();
  $("#f-historia").focus();
});
$("#form-relato").addEventListener("submit",function(ev){
  ev.preventDefault();
  if(envioEmAndamento) return;
  var historia=valor("f-historia"), saida=$("#saida-relato");
  if(valor("f-site")) { aviso("Não foi possível processar o relato."); return; }
  if(historia.length<20){
    aviso("Conte um pouco mais sobre o que aconteceu.");
    $("#f-historia").focus(); return;
  }
  if(!$("#c-limpo").checked || !$("#c-tratamento").checked){
    aviso("Confirme a revisão dos dados e autorize o envio para continuar.");
    return;
  }
  var riscos=analisar(historia);
  if(riscos.length){
    saida.innerHTML='<div class="alerta"><h3>Remova os dados pessoais</h3><p>Identificamos possível '+esc(riscos.join(", "))+'. Revise o texto antes de enviá-lo.</p><p>Não inclua documentos, senhas, códigos de verificação ou dados bancários.</p></div><div class="acoes"><button type="button" id="b-voltar-corrigir">Voltar e corrigir</button></div>';
    saida.hidden=false;
    $("#b-voltar-corrigir").addEventListener("click",function(){ $("#f-historia").focus(); });
    saida.scrollIntoView({behavior:"smooth",block:"start"});
    return;
  }
  var texto=montarRelato();
  relatoAguardandoEnvio=texto;
  saida.innerHTML='<h2>Confira seu relato antes de enviar</h2>'
    +'<p class="lead">O conteúdo será encaminhado ao e-mail do ZeroGolpe por um serviço externo. Você permanecerá nesta página.</p>'
    +'<div class="previa">'+esc(texto)+'</div>'
    +'<div class="acoes"><button type="button" class="solido" id="b-enviar-relato">Enviar relato agora</button>'
    +'<button type="button" id="b-copiar-relato">Copiar texto</button>'
    +'<button type="button" id="b-voltar-corrigir">Corrigir</button></div>'
    +'<div id="status-envio" class="status-envio" role="status" aria-live="polite"></div>';
  saida.hidden=false;
  saida.scrollIntoView({behavior:"smooth",block:"start"});
  $("#b-voltar-corrigir").addEventListener("click",function(){ $("#f-historia").focus(); });
  $("#b-copiar-relato").addEventListener("click",function(){ copiar(texto,"Relato copiado."); });
  $("#b-enviar-relato").addEventListener("click",enviarRelato);
});

async function enviarRelato(){
  if(envioEmAndamento || !relatoAguardandoEnvio) return;
  var btn=$("#b-enviar-relato"), status=$("#status-envio");
  if(!btn || !status) return;
  // Falha segura: envio desativado se a chave ainda nao foi configurada.
  if(!FORMULARIO.accessKey || FORMULARIO.accessKey === "COLE_SUA_ACCESS_KEY_AQUI"){
    status.className="status-envio envio-erro";
    status.innerHTML='<strong>Recebimento temporariamente indisponível.</strong><p>O formulário ainda não foi ativado. Use “Copiar texto” para guardar seu relato. Nenhuma informação foi enviada.</p>';
    btn.disabled=true;
    btn.textContent="Envio indisponível";
    return;
  }
  envioEmAndamento=true;
  btn.disabled=true;
  btn.textContent="Enviando...";
  status.className="status-envio";
  status.textContent="Estamos encaminhando seu relato. Não feche esta página.";
  var controlador=new AbortController();
  var timeout=setTimeout(function(){controlador.abort();}, FORMULARIO.timeoutMs || 20000);
  try {
    var dados={
      access_key: FORMULARIO.accessKey,
      subject:"Novo relato de possível golpe | ZeroGolpe",
      from_name:"ZeroGolpe.org",
      message: relatoAguardandoEnvio,
      autorizacao_publicacao:$("#c-autorizo").checked?"Sim, em versão anônima":"Não",
      botcheck: valor("f-site")
    };
    var resposta=await fetch(FORMULARIO.endpoint,{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify(dados),
      signal:controlador.signal
    });
    var resultado;
    try { resultado=await resposta.json(); } catch(e) {resultado=null;}
    var aceito=resposta.ok && resultado && resultado.success===true;
    if(!aceito) throw new Error("Resposta não confirmada pelo serviço de envio.");
    status.className="status-envio envio-ok";
    status.innerHTML='<strong>Seu relato foi encaminhado ao serviço de e-mail.</strong><p>O serviço aceitou o envio, mas isso não confirma a entrega na caixa de entrada nem a leitura pela equipe. Obrigado por contribuir.</p>';
    // O envio foi aceito pelo provedor. Não enviar novamente em um clique acidental.
    relatoAguardandoEnvio=null;
    btn.textContent="Envio solicitado";
    $("#form-relato").reset();
  } catch(e) {
    status.className="status-envio envio-erro";
    status.innerHTML='<strong>Não foi possível confirmar o envio.</strong><p>Verifique sua conexão e tente novamente. Você também pode copiar o relato para não perder o texto.</p>';
    btn.disabled=false;
    btn.textContent="Tentar enviar novamente";
  } finally {
    clearTimeout(timeout);
    envioEmAndamento=false;
  }
}

/* ============================================================
   ROTEAMENTO
   ============================================================ */
function escondeTudo(){
  telaHome.hidden=true; telaGolpe.hidden=true; telaQuiz.hidden=true; telaEnviar.hidden=true;
}

function rota(){
  var h=location.hash.replace(/^#\/?/,"");
  paraFala();

  if(h.indexOf("golpe/")===0){ abrirGolpe(decodeURIComponent(h.slice(6))); return; }

  if(h==="quiz"){
    escondeTudo(); telaQuiz.hidden=false; montarQuiz();
    document.title="Essa mensagem é golpe?, ZeroGolpe";
    window.scrollTo(0,0);
    return;
  }

  if(h==="enviar"){
    escondeTudo(); telaEnviar.hidden=false;
    document.title="Envie um golpe, ZeroGolpe";
    window.scrollTo(0,0);
    return;
  }

  escondeTudo(); telaHome.hidden=false;
  document.title="ZeroGolpe, Golpes comuns contra idosos: como reconhecer e o que fazer";
}

window.addEventListener("hashchange",rota);
rota();