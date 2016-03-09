var main=function(){
    
 $('a.testiaref').click(function (){   

	var currentDot=$('.active-testidot');	
	var currentSlideImg=$('.img-show');	
	var index = $('a.testiaref').index(this);
	var currentSlideText=$('.text-show');
	currentSlideText.removeClass('text-show');
	currentSlideImg.removeClass('img-show');
	currentSlideImg=$('.testi-img-bg'+(index+1));
	currentSlideText=$('.testi-text'+(index+1));
	currentSlideImg.addClass('img-show');
	currentSlideText.addClass('text-show');
	$(this).addClass('active-testidot');
	currentDot.removeClass('active-testidot');   
 })
}

$(document).ready(main);