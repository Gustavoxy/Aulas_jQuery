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
	/*
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2').fadeToggle('fast');
	});
	*/
	/**********FADE**********/


	/**********SLIDE/DESLISAMENTO**********/
	/*
	$('.meuBotao2').slideDown(); SOBE ou .slideDown('fast/slow');
	$('.meuBotao2').slideUp(); DESCE ou .slideDown('fast/slow');
	$('.meuBotao2').slideToggle(); ALTERNANDO - ou .slideToggle('fast/slow');
	*/
	/*
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2').slideToggle('fast');
	});
	*/
	$('.hellowBar').bind('click', function(){
		$(this).slideUp('fast');
	});
	
	/**********SLIDE/DESLISAMENTO**********/


	/**********ANIMACOES/ANIMATE**********/
	/*
	$('elementos').bind('click', function(){
		$('elementos').animate({
			JSON/PARAMETROS CSS
		},{
			JSON
			duration: 1000,
			//Evento
			complete: function(){
				console.log("funcition quando FINALIZA a animation")
			}
			//Evento
			start: function(){
				console.log("function quando a animation STARTA")
			}
		});

		Ex:
		// SINTAXE BÁSICA
		$('.meuBotao2').animate({
			Prop. CSS que serão aplicadas (SÓ PROPRIEDADES)
		}, Duração em MiliSeg 1000(1Seg));
	});
	*/

	/*
	// Animation SINTAXE BÁSICA
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2').animate({
			'margin-left': '180px',
			//'width': '700px',
			//'margin-top': '20px',
			'border-radius': '100px',
		},	500); // 500 MiliSeg - 0.5Seg
	});
	*/
	
	$('.meuBotao').bind('click', function(){
		$('.meuBotao2, .meuBotao3').html("Uhuu!").css('text-align', 'center').css('font-size', '20px');
		$('.meuBotao2').animate({
			'margin-left': '200px',
			'border-radius': '100px',
			'margin-top': '30px',
			'width': 100,
			'height': 100,
		},	{
			duration: 1000,
		}); // Segunda animation no mesmo bloco //
		$('.meuBotao3').animate({
			'margin-left': 200,
			'border-radius': 100,
			'margin-top': '30px',
			'width': 100,
			'height': 100,
		},	{
			duration: 1000, 
			start: function(){
				console.log("Começou a animação!");
			},
			step: function(){
				//Faz algo a cada passo durante a animação
				console.log("Nova etapa...");
			},
			complete: function(){
				alert("Fim da animação... T_T");
			}
		});
	});

	/**********ANIMACOES/ANIMATE**********/
});