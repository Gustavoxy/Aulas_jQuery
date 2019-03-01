// COMO SABER SE UM ELEMENTO EXISTE

/* 

****OBS: QUALQUER seleção no jQuery vai RETORNAR UM ARRAY CONTENDO o elemento/elementos que ele achou/selecionou
		 ou UM ARRAY VAZIO.
		 OU SEJA, vai trazer um resultado POSITIVO SEMPRE: [] ou [0,1,2] = Positivo


PARA VERIFICAR SE UM ELEMENTO EXISTE:

if ($('#algo').length > 0) {
    alert("O ELEMENTO EXISTE!");
} else {
	alert("NÃO EXISTE ESSE ELEMENTO...");
}

**.length TEM QUE SER MAIOR QUE ZERO para existir.

*/

//COMO SABER SE UM ELEMENTO TEM UMA CLASSE - FU

/* .hasClass
Retorna TRUE or FALSE
if($('p').hasClass('teste')) {
	alert("TEM A CLASSE!");
} else {
	alert("NAO TEM A CLASSE");
}

*/