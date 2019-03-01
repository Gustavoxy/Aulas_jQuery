// CONFIGURANDO CLASSES AOS ELEMENTOS HTML

//POSSIVEL EDITAR, ATRIBUIR, REMOVER QUALQUER PROPRIEDADE CSS EM QUALQUER ELEMENTO
/*
Ex:
$('div h2').attr('class', 'fundoVermelho');
ou
$('div h2').addClass('fundoVermelho');

// REMOVENDO UMA CLASSE

Remove SOMENTE aquela ESPECIFICADA que desejo remover
$('div h2').removeClass('fundoVermelho')

*/

//CHECAR SE UM ELEMENTO POSSUI ALGUMA CLASS

/*
Vai retornar TRUE ou FALSE
$('elemento').hasClass('.classe')

ou podemos fazer uma CONDICIONAL

if ($('div h2').hasClass('fundoVermelho')) {
	alert("ESSE ELEMENTO POSSUI UMA CLASSE!");
} else {
	alert("Esse elemento não possui uma classe...");
}

*/

// ADICIONAR CSS ESPECÍFICOS EM UMA TAG

/*
$('elementos/.class/#id').css('propriedade','valor');
Ex:
$('div h2').css('color','blue');
$('div h2').css('font-size','25px');

VARIOS CSS SIMULTANEOS
$('button').css('border','1px solid black').css('background-color','gold')
$('button').css('background-color','red').css('font-size', '20px').css('border','5px solid black').css('color', 'white');;

*/