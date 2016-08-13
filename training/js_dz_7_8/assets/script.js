function childheight(){
	var absHeight = $('.tab-text-active').height();
	$('.tabs-box').css('height', absHeight+35);
}

var main = function() {
	childheight();

	$('a.tab').click(function() {
		var prevTab = $('a.tab-active');
		var curTab = $(this);

		var prevTabText = $('.tab-text-active');
		var curTabText = $('.tab-text').eq(curTab.index());

		prevTab.removeClass('tab-active');
		curTab.addClass('tab-active');
		prevTabText.fadeOut(50).removeClass('tab-text-active');
		curTabText.fadeIn(50).addClass('tab-text-active');    
		childheight();
	 });
	$('input').mouseover(function(event) {
		$(this).siblings('.hint').slideToggle("medium");
	}).mouseout(function(){
		$(this).siblings('.hint').fadeToggle( "medium", "linear" );
	});
}



$(document).ready(main);
$(window).resize(childheight);