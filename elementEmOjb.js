//Posso guardar um elemento em uma variável por jQuery
/*
var titulo = $('div h2'); << objeto jQuery DENTRO da variável
console.log(titulo);

Posso editar o elemento a partir da variável:
titulo.html = ("Novo título")
*/

//MANDANDO UMA VARIÁVEL P O JQUERY E MANIPULANDO
//Ex:
//selecao via javascript
var teste = document.getElementById('teste');
console.log(teste);

/*
// manipulando a variável por jQuery
$(teste).html("Texto da div modificado por jQuery");
console.log(teste);
*/

/*OU javascrip c jQuery
$(document.getElementById("teste").html("Novo texto da div");

//SELECIONANDO ELEMENTOS DE UMA LISTA

/*
POSICAO = ARRAY
$('li:eq(posicao)');
ou
$('li').eq(posicao);
POSSO GUARDAR TUDO EM VARIÁVEIS
var item = $('li').eq(posicao);
*/