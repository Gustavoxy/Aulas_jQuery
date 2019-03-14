$(function(){

	$('button').bind('click', function(){

		var peso = $('#peso').val();
		var altura = $('#altura').val();
		//Substitiu vírvula p ponto
		altura = altura.replace(',', '.');

		//IMC = peso + altura x altura 
		var imc = peso / (altura * altura);
		peso = peso.replace(',', '.');

		/*
		IMC 				Resultado
		Menos do que 18,5 	Abaixo do peso
		Entre 18,5 e 24,9 	Peso normal
		Entre 25 e 29,9 	Sobrepeso
		Entre 30 e 34,9 	Obesidade grau 1
		Entre 35 e 39,9 	Obesidade grau 2
		Mais do que 40 	Obesidade grau 3
		*/

		if(imc < 18.5){
			var categoria = "Abaixo do peso"
		} else if (imc >= 18.5 && imc <= 24.9){
			var categoria = "Peso normal"
		} else if (imc >= 25 && imc <= 29.9){
			var categoria = "Sobrepeso"
		} else if (imc >= 30 && imc <= 34.9){
			var categoria = "Obesidade grau 1"
		} else if (imc >= 35 && imc <= 39.9){
			var categoria = "Obesidade grau 2"
		} else if (imc > 40){
			var categoria = "Obesidade grau 3"
		}

		$('#resultado').html("Seu IMC é: " + imc + ": " + categoria);
	});

});