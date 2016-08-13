(function($){

	function fillStr(s) {
		var i = s.length - 1, arr = [];
		while (s[i] != '/') {
			arr.unshift(s[i]);
			--i;
		};
		return arr.join('');
	}

	$.fn.mini_slider = function (options) {
		var defaults = {
			sliderOffset: 310,
			printSrc: false,
			SrcColor: '#4C3E35'
		}
		var settings = $.extend (defaults, options);

		var sliderPrev = $(".prev"),
			sliderNext = $(".next"),
			slider = $(".slider-list"),
			sliderImg = $(".slider-item img"),
			sliderP = $(".slider-item p"),
			sliderOffset = settings.sliderOffset;

			sliderP.css('color', settings.SrcColor);

		var curSlider = 0;
		var itemsNum = slider.find("li").length,
			minOffset = - (itemsNum -3 ) * sliderOffset;

		function getDescr() {
			var src=sliderImg, descr=[];
			for(var i=0; i< itemsNum; i++) 
				sliderP[i].innerHTML = fillStr(src[i].attributes[0].value);
			sliderP.css('display','block');
		}

		if (settings.printSrc) getDescr();
		else sliderP.css('display','none');

		sliderPrev.click(function() {
			if (curSlider != 0) {
				curSlider += sliderOffset;
				slider.animate({ left : curSlider + "px"}, 800);
			} 
		});

		sliderNext.click(function() {
			if (curSlider != minOffset) {			
				curSlider -= sliderOffset;
				slider.animate({ left : curSlider + "px"}, 800);
			}	
		});

		$(".arrows").click(function() {
			if (curSlider != minOffset) $(sliderNext).removeClass("arrow-inactive");
			else $(sliderNext).addClass("arrow-inactive");
			if (curSlider != 0) $(sliderPrev).removeClass("arrow-inactive");
			else $(sliderPrev).addClass("arrow-inactive");
		});

	}
})(jQuery);