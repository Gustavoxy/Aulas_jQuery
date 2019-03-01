// UTILIZA O JQUERY P GUARDAR DADOS NA MEMORIA DO JQUERY
// NAO SALVA NO HTML

/*
SALVANDO DADOS.
Sintaxe:
$('elemento').data('nomeDoDado/VAR', 'valor');
Ex:
$('input').data('idade', 90); - SALVA

$('input').data('idade'); - RETORNA DADO SALVO

// GUARDANDO DADOS DE UM CAMPO DO HTML

Sintaxe:
$('elmento').data('nomeDoDado/VAR', $('input').val().length) - Guarda a qtde de caracteres digitados

$('input').data('caracteres', $('input').val().length)