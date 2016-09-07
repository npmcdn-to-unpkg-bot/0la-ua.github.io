var slider1 = document.getElementById('slider1');
// var arrLeft = slider1.children[0].querySelectorAll("a")[0];
// var arrRight = slider1.children[0].querySelectorAll("a")[1];
var slider2 = document.getElementById('slider2');

var slider3 = document.getElementById('slider3');

window.addEventListener = window.addEventListener || function (e, f) { window.attachEvent('on' + e, f); };

slider1.addEventListener('click', getClick );
slider2.addEventListener('click', getClick );
slider3.addEventListener('click', getClick );

function getClick (e){
	var e = e || event;
	e.preventDefault();
	var shift = 0;
	if ((e.target.className).substr(e.target.className.length-4, e.target.className.length) === "prev") shift = -1;
	else shift = 1;
	console.log(shift);
	var parent = (e.target.parentElement).parentElement;
	var list = parent.children[1].children;
	console.log("list=",list);
	var curSlider, nextSlider, nextSliderN;
	for (var i = 0; i < list.length; i++) {
		if (list[i].classList.value > '') {
			curSlider = list[i];
			nextSliderN = i + shift;
			if ( nextSliderN >= list.length) nextSliderN = 0;
			if ( nextSliderN < 0 ) nextSliderN = list.length - 1;
			nextSlider = list[nextSliderN];
		}
	};
	curSlider.classList.value = '';
	nextSlider.classList.value = 'active-slider';
}


var grid = document.querySelector('.grid');

var msnry = new Masonry( grid, {
  itemSelector: '.grid-item',
  columnWidth: 33.333,
  gutter: 20,
  percentPosition: true
});

imagesLoaded( grid ).on( 'progress', function() {
  msnry.layout();
});


var startQuery = "http://api.pixplorer.co.uk/image?";
var endQuery = "&amount=7&size=tb";

var datas={};

function getImg(urltext) {
	var XHR = ("onload" in new XMLHttpRequest()) ? XMLHttpRequest : XDomainRequest;
	var xhr = new XHR();
	xhr.open("GET", urltext, false);
	xhr.send();
	console.log(xhr.status);
	console.log(xhr.statusText);
	datas = JSON.parse(xhr.responseText);
	console.log(datas);


	var html = document.getElementById('tmpl-img').innerHTML;
	html = html.replace(/&lt;/g, "<");
	html = html.replace(/&gt;/g, ">");
	var content = tmpl(html, datas.images);

	document.getElementById('mygrid').innerHTML = content;

	//debugger
};

function createPattern (classes, i) {
		var div = document.createElement("div");
		div.classList = classes;
		var image = document.createElement("div");
		image.classList = "img";
		image.setAttribute('style', 'background:url(<%= datas.images['+ i +'].imageurl %>)');
		div.appendChild(image);

		var p = document.createElement("p");
		node = document.createTextNode('<%= datas.images[' + i + '].word %>');
		//p.innerHTML = '<%= datas.images[' + i + '].word %>';
		p.appendChild(node);
		div.appendChild(p);
		return div;
}

function reloadTmpl(){

	var mygrid = document.getElementById('mygrid');
	for (var i=0; i<mygrid.children.length; i++) {
		mygrid.removeChild(mygrid.children[i]);
	};

	var div = document.createElement('div')
	div.classList = 'grid-sizer';
	mygrid.appendChild(div);

	//debugger;

	var temp_el = document.createElement('script');
	temp_el.setAttribute('type','text/html');
	temp_el.setAttribute('id', 'tmpl-img');


	for (var i=0; i<4; i++) {
		temp_el.appendChild(createPattern('grid-item col-big-3 col-med-3 col-small-1 col-mob-1', i));
	};

	for (var i=4; i<6; i++) {
		temp_el.appendChild(createPattern('grid-item grid-item-width2 col-big-3 col-med-3 col-small-1 col-mob-1', i));
	};
	temp_el.appendChild(createPattern('grid-item col-big-3 col-med-3 col-small-1 col-mob-1', 6));
	//debugger;
	mygrid.appendChild(temp_el);	
	
};

document.getElementById('search-img').addEventListener( 'click', function(e){
	e.preventDefault();
	var el = document.getElementById('query-text');
	reloadTmpl();

	getImg(startQuery+'word='+el.value+endQuery);
});

window.onload = initImages;


function initImages(){
	reloadTmpl();
	getImg(startQuery+endQuery);
}




