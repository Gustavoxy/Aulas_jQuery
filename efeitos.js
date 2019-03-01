$(function(){
	//******APARECER/DESAPARECER******//
	/*

	$('.meuBotao2').hide();
	$('.meuBotao2').hide('slow');
	$('.meuBotao2').show('fast');
	$('.meuBotao2').hide('slow');
	$('.meuBotao2').show('fast');
	
	ALTERNA O STATUS ATUAL
	Se estiver hiden, vai mostrar, se estiver mostrando, esconde.
	$('.meuBotao2').toggle();
	$('.meuBotao2').toggle('slow');	
	$('.meuBotao2').toggle('fast');
	*/

	$('.meuBotao').bind('mouseover', function(){
		$(this).addClass('meuBotaoHover');
	});
	$('.meuBotao').bind('mouseout', function(){
		$(this).removeClass('meuBotaoHover');
	});
	/*
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2').toggle('fast');
	});
	*/
	//******APARECER/DESAPARECER*******//

	/**********FADE**********/
	/*
	$('.meuBotao2').fadeOut(); - DESAPARECE
	$('.meuBotao2').fadeIn(); - APARECE
	
	$('.meuBotao2').fadeTo('fast', 0.5);
	$('.meuBotao2').fadeTo('fast', 1);
	//Especifica ATÉ QUE PONTO o fade deve ir.
	
	$('.meuBotao2').fadeToggle(); - Se estiver exibindo o elemento, ele SOME, se NÃO estiver exibindo, ele EXIBE.
	$('.meuBotao2').fadeToggle('slow'); LENTO
	$('.meuBotao2').fadeToggle('fast'); RÁPIDO
	*/
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2').fadeToggle('slow');
	});

	/**********FADE**********/
});