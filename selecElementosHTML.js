//IMPORTANT - Bloco de cod. para executar só depois que carregar o script.

//Selecionar um elemento":

$('button') // Vai selecionar todos os elementos "button"

// Selecionar elementos específicos

$('#botao1') // Seleciona elemento por ID

$('.botao') // Seleciona elemento por CLASSE

$('li') // Seleciona o elemento <li>

$('li.botao')// Selecionar elementos que tenham determinadas classes
//$('tag.classe')

// Selecionar elementos por classe dentro de classes
$('.lista2 li.botao') // Entro na classe, seleciono o elemento.classe
//ou
$('ul.lista2 li.botao') // Entro na tag <ul> de classe="lista2", pego a tag <li> de class="botao"
//ou
$('.lista2 li.botao') // Pego a class="lista2", pego a tag <li> de classe botao