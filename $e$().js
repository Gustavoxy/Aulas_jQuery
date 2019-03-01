// Usar o jQuery: 
//$()
//$.acao;

//$(elemento).acao - Alguma acao que pode ser do jQuery OU NÃO. É executada num determinado elemento (dentro do parentese).

//ou

//$.acao - acao que geralmente é do próprio jQuery. parte da biblioteca.

//outra forma para substituir o $: jQuery.(argumentos)

//Resumo:

//$.acao = acao que executo no jQuery
//$(...).acao = acao que vou executar no elemento que está sendo passado.

//CODIGO PARA RODAR QUANDO A PAGINA ESTIVER PRONTA

// Pega o document, e QUANDO ESTIVER PRONTO(ready), execute esta ação:
$(document).ready(function(){
	alert("Mensagem por jQuery ^^");
});

// Versao menor:
$(function(){
	alert("Mensagem por jQuery alternativa =D");
});

// Outra versao:
function paginaCarregada() {
	alert("Página carregada! ;)");
}
$(document).ready(paginaCarregada);