$(function(){
	$('li').hover(function(){
		//$(this).find('.subm').show();
		$(this).find('.subm').slideDown();
	}, function(){
		//$(this).find('.subm').hide();
		$(this).find('.subm').slideUp();
	});
});