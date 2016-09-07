var slider1 = document.getElementById('slider1');
var slider2 = document.getElementById('slider2');
var slider3 = document.getElementById('slider3');

window.addEventListener = window.addEventListener || function (e, f) { window.attachEvent('on' + e, f); }; //doesnt work :(

slider1.attachEvent('onclick', getClick );
slider2.attachEvent('onclick', getClick );
slider3.attachEvent('onclick', getClick );

function getClick (e){
	var e = e || event;
	e.returnValue = false;
	var shift = 0;
	e = e.target || e.srcElement;
	if ((e.className).substr(e.className.length-4, e.className.length) === "prev") shift = -1;
	else shift = 1;
	console.log(shift);
	var parent = (e.parentElement).parentElement;
	var list = parent.children[1].children;
	console.log("list=",list);
	var curSlider, nextSlider, nextSliderN;
	for (var i = 0; i < list.length; i++) {
		if (list[i].className > '') {
			curSlider = list[i];
			nextSliderN = i + shift;
			if ( nextSliderN >= list.length) nextSliderN = 0;
			if ( nextSliderN < 0 ) nextSliderN = list.length - 1;
			nextSlider = list[nextSliderN];
		}
	};
	curSlider.className = '';
	nextSlider.className = 'active-slider';
}




// var startQuery = "http://api.pixplorer.co.uk/image?";
// var endQuery = "&amount=7&size=tb";

// var datas={};
// function getImg(urltext) {
// 	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
// 	var xhr = new XHR();
// 	xhr.open("GET", urltext, false);
// 	xhr.send();
// 	console.log(xhr.status);
// 	console.log(xhr.statusText);
// 	datas = JSON.parse(xhr.responseText);
// 	console.log(datas);


// 	var html = document.getElementById('tmpl-img').innerHTML;
// 	html = html.replace(/&lt;/g, "<");
// 	html = html.replace(/&gt;/g, ">");
// 	var content = tmpl(html, datas.images);

// 	document.getElementById('mygrid').innerHTML = content;

// 	//debugger
// };

// function reloadTmpl(){

// window.onload = initImages;


// function initImages(){
// 	reloadTmpl();
// 	getImg(startQuery+endQuery);
// }

var optionsMasonry = {
    itemSelector: '.grid2-item',
    initLayout: true,
    transitionDuration: '0.4s',
    gutter: 10
};   
$(function () {
//alert("ie8");
var $grid;

function getImg(text) {
    var startQuery = "http://api.pixplorer.co.uk/image?";
    var endQuery = "&amount=7&size=tb";

    $.getJSON( (startQuery+'word='+text+endQuery), function(datas){
    var pattern = $('#tmpl2').html();
    var items = tmpl(pattern, datas);            
    $grid.masonry('destroy');
    $('#mygrid2').html('');
    $('#mygrid2').append(items);
    $grid = $('#mygrid2').masonry(optionsMasonry);
    $grid.masonry('layout', $('.grid2-item'));
    });
}

$('#search-img').on('click', function (e) {
	e.preventDefault();
    e.returnValue = false;
    getImg($('#query-text').val());
});

function getText() {
    $.support.cors = true;
    $grid = $('#mygrid2').masonry(optionsMasonry);
    $grid.masonry('layout', $('.grid2-item'));
    getImg($('#query-text').val());
};

templates();
getText();
});