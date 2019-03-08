//Requisições AJAX são com os métodos GET e POST//

/*
AJAX funcionar de forma ASSINCRONIZADA ou ASSÍNCRONA ou seja, quando carregamos um arquivo para mostrar na tela
essa informação é carregada independente de qualquer outra informação sem ordem de carregamento.
Regra GERAL: Rerquisições deveb ser feitas no MESMO DOMÍNIO ou AO PRÓPRIO site. É possível requisitar em outros domínios.
Quando o AJAX requisita um Arquivo, Endereço, Site, Webservice ou API,
ele recebe alguns tipos de RETORNO dessa requisição.
Por ex: arquivo.txt, arquivo.html, arquivo.xml e arquivo.json (Mais trabalhado com requisições AJAX)
arquivo.xml - arquivo html em formato xml.
.JSON - Tipo de arquivo/informação que é possível FORMATAR o Resultado dela.
.JSON - O Ajax consegue, receber, traduzir e formatar essas informações de forma ordenada.
*/

//EXEMPLOS DE REQUISIÇÕES AJAX
$(function(){

	/*
	//////MÉTODOS DE REQUISIÇÕES AJAX//////
	//Método AUXILIAR do AJAX de requisições: "$('elemento').load"
	$('.botao').bind('click', function(){
		//Pego a div a qual quero inserir a resposta, dou um "load" e especifico o arquivo que quero carregar na div, internamente ou pela retaguarda.
		$('.area').load('ajaxArqExterno.html');
		//OBS: Mais aconselhável para SIMPLES REQUISIÇÕES//
	});
	*/

	/*
	//OUTRO método AUXILIAR de requisições AJAX: ".GET"
	$('.botao').bind('click', function(){
		 
		//Obtenho o arquivo solicitado, executo uma funcão quando terminar a requisição e mando o result para um parâmetro
		//$.get('ArquivoRequisitado', função(ResultadoAqui){
			//Argumentos da função...
		//});
				
		$.get('ajaxArqExterno.html', function(resultado){
			$('.area').html(resultado);
		});
	});
	*/

	/*
	//OUTRO método AUXILIAR de requisições AJAX: ".POST"
	$('.botao').bind('click', function(){
 
		//Obtenho o arquivo solicitado, executo uma funcão quando terminar a requisição e mando o result para um parâmetro
		//$.post('ArquivoRequisitado', função(ResultadoAqui){
			//Argumentos da função...
		//});
				
		$.post("ajaxArqExterno.html", function(resultado){
			$('.area').html(resultado);
		});
	});
	*/

	//Método AUXILIAR de requisições AJAX: "SERIALIZE"
	//SERIALIZE: Pega TODOS os dados preenchidos e não preenchidos e formata os dados de forma a facilitar o envio pelo AJAX
	//Coletar os valores entrados pelo usuário em campos de formulário e transformá-los em formato de string.
	/*
	$('#form').bind('submit', function(dados){
		//Primeiro previnir o ENVIO DIRETO/PADRAO do formulário, pois vamos enviar via AJAX
		dados.preventDefault();

		var txt = $(this).serialize();
		console.log(txt);
	});
	*/

	$('#form').bind('submit', function(dados){
		//Primeiro previnir o ENVIO DIRETO/PADRAO do formulário, pois vamos enviar via AJAX
		dados.preventDefault();

		var txt = $(this).serialize();
		console.log(txt);
		//Requisicao Ajax Completa
		$.ajax({
			type:'GET',
			url:'ajax.php',
			data:txt,
			success:function(result){
				$('.area').html("O valor da soma é: " + result);
			},
			error:function(){
				alert("Algo está errado...");
			}
		});
	});
	




	//////MÉTODOS DE REQUISIÇÕES AJAX//////

});