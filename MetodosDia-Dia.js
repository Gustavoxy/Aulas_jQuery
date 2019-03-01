// SELECIONANDO O HTML DE UM ELEMENTO

/*
$('elemento').html() 
// Seleciona/retorna o html do elemento - De forma DESORGANIZADA

// GUARDAR HTML DE UM ELEMENTO NUMA VARIÁVEL

var valorAlgo = $('.algo').html() - GUARDA "BAGUNÇADO"
valorAlgo = Retorna HTML "BAGUNÇADO"

.trim()**************

$.trim(variável) - Retonar ORGANIZADO.

ENTAO, POSSO GUARDAR A VARIAVEL NOVAMENTE DE FORMA ORGANIZADA:

valorAlgo = $.trim(valorAgo);

OU

GUARDO CORRETAMENTE DE UMA ÚNICA VEZ

var valorAlgo = $.trim($('.algo').html())

*/

//EXECUTAR ALGO A CADA ELEMENTO

/*
.each() - EXECUTA ALGO PARA CADA ELEMENTO
Ex:
$('li').each(function(){
	alert($(this).html()); - THIS EM PARÊNTESE()
})

*/

// VERIFICAR O TIPO DE UMA VARIÁEL

/*
Ex:
var idade = 75;

$.type(variável)

ou seja...

$.type(idade) - RETORNA O TIPO DA VARIÁEL

JAVASCRIPTI PURO = typeof variáve = retorna o tipo de variável

*/

// SABER SE UMA VARIÁVEL É UM NÚMERO

/*
$.isNumeric(variável) - Retorna TRUE ou FALSE

Posso verificar por condicional:
if ($.isNumeric(variável){
	alert("Algum texto");
})


// SABER SE UMA VARIÁVEL É UM ARRAY

$.isArray(variável);

// SABER SE UMA VARIÁVEL É UMA FUNCAO

$.isFunction(variável);

*/