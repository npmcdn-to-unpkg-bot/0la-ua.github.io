jQuery(document).ready(function(){

jQuery(".niceCheck").mousedown(
/* при клике на чекбоксе меняем его вид и значение */
function() {

     changeCheck(jQuery(this));
     
});


jQuery(".niceCheck").each(
/* при загрузке страницы нужно проверить какое значение 
имеет чекбокс и в соответствии с ним выставить вид */
	function() {	     
	     changeCheckStart(jQuery(this));	     
	});

 });

function changeCheck(el)
 
    // функция смены вида и значения чекбокса
    // el - span контейнер дял обычного чекбокса
    // input - чекбокс


{
     var el = el,
          input = el.find("input").eq(0);
   	 if(!input.attr("checked")) {
		el.css("background-position","0 -17px");	
		input.attr("checked", true)
	} else {
		el.css("background-position","0 0");	
		input.attr("checked", false)
	}
     return true;
}


// function changeCheck(el)
// /* 
// 	функция смены вида и значения чекбокса при клике на контейнер чекбокса (тот, котрый отвечает за новый вид)
// 	el - span контейнер для обычного чекбокса
// 	input - чекбокс
// */
// {

// 	var el = el,
// 		input = el.find("input").eq(0);
		  
// 	if(el.attr("class").indexOf("niceCheckDisabled")==-1)
// 	{	
//    		if(!input.attr("checked")) {
// 			el.addClass("niceChecked");
// 			input.attr("checked", true);
// 		} else {
// 			el.removeClass("niceChecked");
// 			input.attr("checked", false).focus();
// 		}
// 	}
	
//     return true;
// }


function changeCheckStart(el)
/* 	если установлен атрибут checked, меняем вид чекбокса*/
{
var el = el,
	input = el.find("input").eq(0);
    if(input.attr("checked")) el.addClass("niceChecked");
    else el.removeClass("niceChecked");			
	if(input.attr("disabled")) el.addClass("niceCheckDisabled");
	else el.removeClass("niceCheckDisabled");	
    return true;
}

