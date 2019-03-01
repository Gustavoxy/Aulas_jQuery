
//NAVEGANDO ENTRE ELEMENTOS

/* SELECIONAR DIV PAI:

$('.irmao') - Pega a div "irmao"

** SALTANDO PARA TAGS DE PAI/GERACAO ANTERIOR

$('.irmao').parent() - Seleciona/volta p a tag PAI da tag selecionada (ANTERIOR).

$('.irmao').parent().parent().parent() - Vai saltando para as tags PAI/anteriores (tags pai).

*/

// BUSCANDO/SELECIONANDO TAGS:

/*
Buscando/entrando tags/elementos dentro de outras tags: 
$('.site').find('.subtop').find('.irmao')
OBS: .find - BUSCA DENTRO DO ELEMENTO O QUAL ESTÁ SELECIONADO
*/


// SELECIONANDO DIVs POR POSICAO

/*
$('body').find('div').eq(0) - SELEC a div de posiçao 0 da pagina. (PRIMEIRA)
ou
$('div/TAG/ID/CLASS').eq(0) - Seleciono a div de posicao 0.
OBS: .find - BUSCA DENTRO DO ELEMENTO O QUAL ESTÁ SELECIONADO
*/

// BUSCA A TAG PAI SALTANDO DE UMA VEZ P ELA 
/*
$('.irmao').closest('.tagPai') -- busca a tag pai a partir de qualquer tag filha

*/

// SELECIONAR A TAG ***SEGUINTE*** OU FORA DO CONTEXTO (Buca uma tag que nao tem relação com a tag selecionada)

/*
Volto até a div pai que engloba a div a qual desejo selecionar e a partir da div pai, seleciono a tag que desejo:

$('.irmao').closest('.site') -- Seleionei a div PAI de todo o site.

$('.irmao').closest('.site').find('.content') -- A partir da div pai, busquei ".find" a tag ".content" que é a tag SEGUINTE fora do contexto.

*/

// *** IMPORTANTE *** Dica do professor: NUNCA usar o .parant() para encontrar divs PAI. Usar sempre .closest('.elemento')
// .find('.elemento') - BUSCA PARA DENTRO/FRENTE P/ FRENTE
// .parent() - BUSCA PARA FORA P/TRAS DO ELEMENTO P/ CIMA
// .closest() - BUSCA O ELEMENTO PAI (ANTERIOR) P/ CIMA

// PARA ALTERAR O HTML = $('.elemento').html("Alteracao")