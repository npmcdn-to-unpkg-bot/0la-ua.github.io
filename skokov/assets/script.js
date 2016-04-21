$(document).ready(function(){
	//arr=$('.slider-items').children();	
	$('.slider-button-right').click(function(){
		var arr=$('.slider-items').children();
		var last1=arr[0].src, last2=arr[3].src;
			arr[0].src=arr[1].src;
			arr[1].src=arr[2].src;
			arr[2].src=last1;
			arr[3].src=arr[4].src;
			arr[4].src=arr[5].src;
			arr[5].src=last2;
		return false;
	});
	$('.slider-button-left').click(function(){
		var arr=$('.slider-items').children();
		var last1=arr[5].src, last2=arr[2].src;
			arr[5].src=arr[4].src;
			arr[4].src=arr[3].src;
			arr[3].src=last1;
			arr[2].src=arr[1].src;
			arr[1].src=arr[0].src;
			arr[0].src=last2;
		return false;
	});
	$("#vplay")[0].src="https://www.youtube.com/embed/MODJ5vTWzqs";
	$('.video-play').click(function(){
		$('.video-play').css("display","none");
		$('#videostart').css("display","block");
		$("#vplay")[0].src += "?autoplay=1";			
	});
});
