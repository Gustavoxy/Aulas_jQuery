$(function(){
	alert("Está funcionando...");
});

// Manipulando atributos de tags
// Seleciono a tag 'a', e seto o atributo ().attr('href') para o valor 'https://www.google.com.br'

$(function(){
	$('a').attr('href', 'https://www.google.com.br');
});

/*
$('elemento/class/id').attr('attr', 'valor');
*/

/* 
Saber o atributo de algum elemento
$('alemento').attr('atributo'); // Sem informar o valor. Somente attr
*/