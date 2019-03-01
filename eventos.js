
//EXECUTANDO JQUERY DENTRO DA FUNCAO, FAZ O CODIGO SER EXECUTADO APOS O CARREGAMENTO DA PAGINA
//ECONOMIZANDO ALUNS SEGUNDOS NA EXIBIÇÃO.
$(function(){
	$('#evento1').click(function(){
		alert("Clicou no Botão! =)");
	});
	/*
	AO CLICAR:
	.click(function(){
		//Argumento...
	});
	$('#evento2').click(function(){
		$('#evento2').attr('class', 'color');
	});
	OU
	$('#evento2').click(function(){
		$(this).addClass('color');
	})
	*/

	/*
	*****MAIS UTILIZADO*****
	.bind (Qualquer tipo de evento)
	$('elementos/tags').bind('evento', function(){
		//argumento
	});
	$('.eventoA').bind('click', function(){
		$(this).toggleClass('colorido');
	});
	REMOVER O EVENTO:
	$('elemento').unbind('evento');

	*****MAIS UTILIZADO*****

	---ALTERNATIVA--- 
	$('elemento').on('evento', function(){
		//argumento...
	})
	REMOVE O EVENTO:
	$('elemento').off('evento');
	---ALTERNATIVA---
	*/

	$('.eventoA').bind('click', function(){
		$(this).toggleClass('colorido');
	});

	$('#evento2').click(function(){
		/*
		if($(this).hasClass('color')){
			$(this).removeClass('color');
		} else {
			$(this).addClass('color');
		}
		*/
		//OU: .toggleClass('classe') //ALTERNA REMOVENDO E ADICIONANDO
		$(this).toggleClass('color'); 
	});

	/*
	$('#evento0').mouseover(function(){
		$(this).addClass('color2');
	});
	$('#evento0').mouseout(function(){
		$(this).removeClass('color2');
	});
	*/

	//OU uso FUNCAO AUXILIAR - SOMENTE UM evento responsável por DUAS AÇÕES
	/*
	.hover - Quando PASSAR e TIRAR o Mouse. hover serve para simplificar eventos com DUAS funcionalidades.
	$('#evento0').hover(function(){
		$(this).addClass('color2');
	}, function(){
		$(this).removeClass('color2');
	});
	*/
	//OU'- .toggleClass:
	$('#evento0').hover(function(){
		$(this).toggleClass('color2');
	});

	//ACIONAMENTO FALSO DE EVENTOS (ACIONAR EVENTOS DE FORMA FALSA)
	/*
	$('elemento').trigger('evento') - Aciona um evento por jQuery*/

	$('.falso1').bind('click', function(){
		alert("Clicou no Falso 1 =D");
	});
	$('.falso2').bind('click', function(){
		alert("Clicou no Falso 2 ^^");
	});
	
	/*
	// CLICAR NUM BOTAO E ACIONAR AÇÕES EM VÁRIOS ELEMENTOS:
	.trigger('evento');
	Fazer o próprio jQuery DISPARAR o evento (FALSAMENTE):
	$('elemento').trigger('evento');
	*/
	// DISPARAR UM EVENTO EM OUTROS ELEMENTOR A PARTIR DE UM ÚNICO ELEMENTO:
	$('.falso3').bind('click', function(){
		$('.falso4').trigger('click');
	});
	$('.falso4').bind('click', function(){
		alert("Clicou no Botão 4! ;)");
	});
	// CLICAR NUM BOTAO E ACIONAR AÇÕES EM VÁRIOS ELEMENTOS:


	// CHECKBOX DESABILITANDO INPUT //
	$('.boxcpf').bind('click', function(){
		if($(this).prop('checked')){
			$('#cnpj').attr('disabled', 'disabled');
		} else {
			$('#cnpj').removeAttr('disabled');
		}
	});
	$('.boxcnpj').bind('click', function(){
		if($(this).prop('checked')){
			$('#cpf').attr('disabled', 'disabled');
		} else {
			$('#cpf').removeAttr('disabled');
		}
	});
	// CHECKBOX DESABILITANDO INPUT //


	//// PREVINE/SUPRIME/SEGURA a AÇÃO PADRÃO/Original e executa o resto do Código: ///
	// Parâmetro deve ser passado
	$('#pegarNome').bind('click', function(e){
		e.preventDefault(); //Previne/Segura a Ação Padrão antes de executar o código
		//e.type - mostra o TIPO DE EVENTO/ação que ocorre
		//var nome = $('#nome').val();
		alert(e.type);
	});

	/*OUTRA FORMA DE MOSTRAR QUAL É O EVENTO*/
	/*Funcao que MOSTRA qual é o EVENTO*/
	/*Parâmetro vai receber o evento*/
	function eventoDoBotao(x){
		x.preventDefault();
		alert(x.type);
		console.log(this); //MOSTRA EM QUAL ELEMENTO OCORRE O EVENTO
		//console.log(x.target);//MOSTRA EM QUAL ELEMENTO OCORRE O EVENTO
	}
	/*Funcao que chama outra funçao ao executar algum evento*/
	$(function(){
		$('#pegarNome').bind('click', eventoDoBotao);
		$('#pegarNome').bind('mouseover', eventoDoBotao);
		$('#pegarNome').bind('mouseout', eventoDoBotao);
	});
	//// PREVINE/SUPRIME/SEGURA a AÇÃO PADRÃO/Original e executa o resto do Código: ///


	/*****EVENTOS DIVERSOS*****/

	/*Evento de Browser: SCROLL*/
	$('.texto').bind('scroll', function(scroll){
		$(this).addClass('colorirTexto');
		console.log("Esse foi um evento de " + scroll.type);
	});
	$('.texto').bind('mouseout', function(mouseout){
		$(this).removeClass('colorirTexto');
		alert("Saiu do Scroll!");
		console.log("Esse foi um evento de " + mouseout.type);
	});

	/*Evento de Browser: RESIZE*/
	$(window).bind('resize', function(resize){
		console.log("Mudou o tamanho da Janela. Esse foi um evento de " + resize.type);
	});

	/*Eventos de Formulário*/
	//SUBMIT:
	$('#formulario').bind('submit', function(dados){
		dados.preventDefault();//PREVINIU/Segurou O SUBMIT. PAROU a ação.
		console.log("Os dados foram submitados. Esse foi um evento de " + dados.type);
	});

	//SELECT - Seleção de Texto: Quando selecionar algum texto no campo, ele fará este evento:
	$('#nomeForm').bind('select', function(texto){
		console.log("Algo foi selecionado. Esse foi um evento de " + texto.type);
	});

	//FOCUS - Quando o cursor selecionar/clicar em uma <input>
	$('#nomeForm, #email, #telefone').bind('focus', function(foco){
		$(this).css('background-color', 'yellow');
		console.log("Focou no campo. Esse foi um evento de " + foco.type);
	});
	//BLUR - Desfocar - Quando o cursor "SAI" de uma <input>
	$('#nomeForm, #email, #telefone').bind('blur', function(desfocou){
		$(this).css('background-color', 'white');
		console.log("Saiu do campo. Esse foi um evento de " + desfocou.type);
	});

	//CHANGE- Funcionar para CHECKBOX e RADIU também - Quando ALTERNA entre as opções da tag <select>
	$('#idadeForm').bind('change', function(alternou){
		console.log("Idade selecionada: " + $(this).val());
		console.log("Alternou a opção. Esse foi um evento de " + alternou.type);
	});

	//TECLADO
	$('#nomeForm').bind('keydown', function(teclabaixo){
		//"parametro.keyCode" - acessando propriedade padrão do objeto para saber qual foi a tecla.
		console.log("A tecla " + teclabaixo.keyCode + " foi apertada!");
		console.log("Esse foi um evento de " + teclabaixo.type);
	});
	$('#nomeForm').bind('keyup', function(teclaalto){
		//"parametro.keyCode" - acessando propriedade padrão do objeto para saber qual foi a tecla.
		console.log("A tecla " + teclaalto.keyCode + " foi solta! ");
		console.log("Esse foi um evento de " + teclaalto.type);
	});
	/*Posso usar o "objeto.keyCode" para saber quando o usuário digitou uma tecla específica e fazer alguma ação*/
	$('#emailForm').bind('keyup', function(tecla){
		if(tecla.keyCode == 13){
			var email = $(this).val();
			console.log("Apertou ENTER");
			console.log("Email informado: " + email);
			//$(this).val()//Retorna o texto
			$(this).val("");//Limpa o imput email//
		}
	});

	//MOUSE
	/*
	$('.meuBotao').bind('mousedown', function(down){
		console.log("Apertou o mouse.");
		console.log("Esse foi um evento de " + down.type);
	});
	$('.meuBotao').bind('mouseup', function(up){
		console.log("Soltou o botão do mouse.");
		console.log("Esse foi um evento de " + up.type);
	});
	*/
	$('.meuBotao').bind('mousemove', function(move){
		console.log("Moveu o cursor do mouse.");
		console.log("Esse foi um evento de " + move.type);
	});
	$('.meuBotao').bind('mouseover', function(cima){
		console.log("Mouse está em cima.");
		console.log("Esse foi um evento de " + cima.type);
		$(this).addClass('meuBotaoHover');
	});
	$('.meuBotao').bind('mouseout', function(out){
		$(this).removeClass('meuBotaoHover');
	});
	/*
	$('.meuBotao').bind('click', function(click){
		// Click EQUIVALE ao "mouseup"
		alert("Clicou! ^^")
		console.log("Clicou. Evento de " + click.type);
	});
	*/
	// DUPLO CLICK
	$('.meuBotao').bind('dblclick', function(dbl){
		console.log("Dois clicks!");
		console.log("Evento de " + dbl.type);	
	});
	/*****EVENTOS DIVERSOS*****/
});

function clicou() {
	$('button').click(alert("Clicou no Botão! =D"))
};