$(document).ready(function() {

	$('body').mini_slider({sliderOffset: 310});

	var html = $('#tmpl1').html();
	datas = [
	{ src: "img/img5.jpg", name: "Иван Петров"},
	{ profession: "инженер"},
	{ header: "Хочу учить фронтенд:", text:["причина1","причина2", "причина3"]},
	{ header: "Мой контактный телефон:", text:"+38 222 33 44"},
	{ header: "Мой профиль вконтакте:", text:"<a href=''>vk.com</a>"},
	{ header: "Мой профиль в фейсбуке:", text:"<a href=''>fb.com</a>"},
	{ header: "Мой фидбек:", text:"text2 text2"}

	];

	var content = tmpl(html, datas);

	$('.pattern1').append(content);


	var tmpl2 = document.getElementById('tmpl1').innerHTML;
	var content2 = _.template(tmpl2)(datas);

	$('.pattern2').append(content2);

});

