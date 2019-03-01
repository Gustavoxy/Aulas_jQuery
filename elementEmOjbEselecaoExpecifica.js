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

POSSO ALTERAR APOS A SELECAO
$('li').eq(posicao).html("Item Alterado").css('colo', 'green');
*/

//PEGAR UM ITEM/VALOR SELECIONADO DE <SELECT>

/*
$('#idade').val() // Pega o VALOR selecionado

$('#idade').find('option').eq(2) // Pega a tag selecionada

$('#idade').find('option').eq(4).attr('selected', 'selected')
Pega a tag selecionada e seta o atributo selected para selected (Seleciona o valor da tag no HTML)


*/