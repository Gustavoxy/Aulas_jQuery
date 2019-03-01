
// Altera o html exibido
//$('#lista').html('Esse é um <strong>texto</strong>')

//$('#lista').text('Esse é um <strong>texto</strong>')
// Transforma em texto literalemnte.

/* Alterando Atributo de uma IMG
$('img').attr('width', '200');
ou
$('#grupo img').find('img').width(200);
*/

/*Adicionar VALOR na INPUT:
$('input').val('Valor do meu input');<<MAIS INDICADO
ou
$('input').attr('value', 'Valor do input');
*/

//PARA MUDAR CONTEÚDOS DE DIV, usar o atributo ".html" ou ".text"//


//ADICIONAR UMA IMAGEM OU DIV **APÓS** ALGUM ELEMENTO DA PAGINA//
/*
Seleciono o ELEMENTO ANTERIOR a minha imagem, a qual será adicionada e:
$('elementoAnterior').after("<img src='https://bnetcmsus-a.akamaihd.net/cms/template_resource/9DX5KAUVSRMV1517267253798.jpg'>"); IMAGEM
ou
$('elementoAnterior').after("<div>Texto qualquer</div>); DIV
*/


/*ADICIONAR UMA IMAGEM **ANTES** DE ALGUM ELEMENTO DA PAGINA
$('elementoAnterior').before("<img src='https://bnetcmsus-a.akamaihd.net/cms/template_resource/9DX5KAUVSRMV1517267253798.jpg'>"); IMAGEM
ou
$('elementoAnterior').before("<div>Texto qualquer</div>); DIV
*/

/*ADICIONANDO ITEM **DENTRO** DE UM CONTEÚDO ou ELEMENTO

Adiciona DEPOIS do conteúdo ou elemento (DENTRO DO CONTEÚDO)
$('lista').append("<li>Item Seguinte</li>"); .append = ADD DEPOIS / .html = SUBSTITUI//

aqui eu add uma div dentro de outra div id="grupo"
$('#grupo').append('<div><h1>TEXTO H1</h1></div>');

Adiciona ANTES do CONTEÚDO ou ELEMENTO (DENTRO DO CONTEÚDO)
$('lista').prepend("<li>Item Seguinte</li>"); .prepend = add ANTES / .html = SUBSTITUI//
ou
$('#grupo').prepend('<div><h1>TEXTO H1</h1></div>');

*/

//REMOVENDO UM ELEMENTO

//$('elemento').remove()