// Criar atalho diferente para minha biblioteca jQuery

// jQuery tem uma funcao específica para evitar conflitos

//Ex:

//var $j = jQuery.noConflict(); $j é a VARIÁVEL ATALHO
/*
$j(document).ready(function(){
	alert("Está funcionando...");
});
*/

var $gustavo = jQuery.noConflict();

// Agora toda vez que eu for usar o jQuery, uso assim: $j()

//Ex:

/*
$gustavo(document).ready(function(){
	alert("Está funcionando...");
});
*/

//Sem criar atalhos e evitando conflitos - NATIVAMENTE

jQuery(document).ready(function(){
	alert("Funcionando nativamente...")
});