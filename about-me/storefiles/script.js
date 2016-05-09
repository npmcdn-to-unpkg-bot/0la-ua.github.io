// function loadMap(){
// 	var latLong = new google.maps.LatLng(50.45,30.523333);
// 	var mapOpt={
// 		zoom:15,
// 		mapTypeId:google.maps.MapTypeId.ROADMAP,
// 		center:latLong
// 	};
// 	var map=new google.maps.Map(document.getElementById("map_container"),mapOpt);
// };
var main=function(){
	$('.side-menu').click(function() {
	    $('.menu').animate({
			left: "0px"
		}, 200);
		$('body').animate({
    		left: "150px"
    	}, 200);
	 });
	$('.menu-close').click(function() {
    	$('.menu').animate({
    		left: "-150px"
    	}, 200);
    	$('body').animate({
    		left: "0px"
    	}, 200);
	});
	//window.onload=loadMap;
	$('.arr-next').click(function() {
	    var currentSlide = $('.active-slide');
	    var nextSlide = currentSlide.next();
	    var currentDot = $('.active-dot');
	    var nextDot = currentDot.next();
	    if(nextSlide.length === 0) {
	      nextSlide = $('.slide').first();
	      nextDot = $('.dot').first();
	    }    
	    currentSlide.fadeOut(600).removeClass('active-slide');
	    nextSlide.fadeIn(600).addClass('active-slide');
	    currentDot.removeClass('active-dot');
	    nextDot.addClass('active-dot');
  	});
	$('.arr-prev').click(function() {
	    var currentSlide = $('.active-slide');
	    var prevSlide = currentSlide.prev();
	    var currentDot = $('.active-dot');
	    var prevDot = currentDot.prev();
	    if(prevSlide.length === 0) {
	      prevSlide = $('.slide').last();
	      prevDot = $('.dot').last();    }
	    
	    currentSlide.fadeOut(600).removeClass('active-slide');
	    prevSlide.fadeIn(600).addClass('active-slide');
	    currentDot.removeClass('active-dot');
	    prevDot.addClass('active-dot');
  	});
  	$('.dot').click(function(){
  		var nextDot=$(this);
  		var currentDot=$('.active-dot');
  		var currentSlide=$('.active-slide');
  		var nextSlide=$(".slide").eq(nextDot.index());
  		currentSlide.fadeOut(600).removeClass('active-slide');
	    nextSlide.fadeIn(600).addClass('active-slide');
	    currentDot.removeClass('active-dot');
	    nextDot.addClass('active-dot');
  	});
	$('.button-post').click(function(){
		var post=$('.status-box').val();
		$('<li>').text(post).prependTo('.posts_text');
		$('.status-box').val('');
		$('.counter').text('140');
		$('.button-post').addClass('disabled');
	});
	$('.status-box').keyup(function(){
		var postLength=$(this).val().length;
		var charactersLeft=140-postLength;
		$('.counter').text(charactersLeft);
		if(charactersLeft<0) $('.button-post').addClass('disabled');
		else if(charactersLeft===140) $('.button-post').addClass('disabled');
		else $('.button-post').removeClass('disabled');
	});
	$('.button-post').addClass('disabled');
};
$(document).ready(main);