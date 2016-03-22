// var arrT=[];
// $.getJSON('http://pokeapi.co/api/v1/type/?limit=999', function(data) {
// 	for (var i=0;i<data.objects.length;i++){
// 		arrT[i]=data.objects[i].name;
// 	}
// });

var buttonsStyle={
		type:[
		["Normal", "#ffffff","#8f8f8f"],
		["Fighting", "#bfc4fd", "#595b75"],
		["Flying", "#71e2fe", "#377281"],
		["Poison", "#e7a7fe", "#755282"],
		["Ground", "#fcc298", "#71533d"],
		["Rock", "#a6b0b6", "#474c4f"],
		["Bug", "#64cc7a", "#30613a"],
		["Ghost", "#79fcfe", "#326768"],
		["Steel", "98bdcc", "#5f808e"],
		["Fire", "5f808e", "#f36731"],
		["Water", "#aebefd", "#697abc"],
		["Grass", "#96fd96", "#5aba5a"],
		["Electric", "#fcf9aa", "#dfd64e"],
		["Ice", "#cbfcf2", "#4dd8bc"],
		["Dragon", "#d8c64d", "#fef347"],
		["Dark", "#b9b7c6", "#7a7985"],
		["Fairy", "#fabef2", "#987093"],
		["Unknown", "#e0dde0", "#f6f2f5"],
		["Shadow", "#ebebeb", "#aeaeae"],
		["Psychic", "#b6a7c0", "#7c6889"]]
};

var singleP = document.getElementsByClassName("single");
var imgURL="http://pokeapi.co/media/img/",
	imgURL1="url('",
	imgURL2="') 50% 50%";

// var arP=initdata();
var arrP = [];
//img http://pokeapi.co/media/img/19.png

	$.getJSON('http://pokeapi.co/api/v1/pokemon/?limit=12', function(data) {    
	 	 for (var i=0; i<data.objects.length; i++){
	 	 	//console.log(data.objects[i]);  getall
	 	 	arrP[i]={};
	 		arrP[i].idP=data.objects[i].pkdx_id;
	 		arrP[i].nameP=data.objects[i].name;
	 		arrP[i].urlP=data.objects[i].resource_uri;
	 		arrP[i].powerP=data.objects[i].types;
	 		arrP[i].attack=data.objects[i].attack;
	 		arrP[i].defense=data.objects[i].defense;
	 		arrP[i].hp=data.objects[i].hp;
	 		arrP[i].sp_atk=data.objects[i].sp_atk;
	 		arrP[i].sp_def=data.objects[i].sp_def;
	 		arrP[i].speed=data.objects[i].speed;
	 		arrP[i].weight=data.objects[i].weight;
	 		arrP[i].total_m=data.objects[i].moves.length;
	 	 };

		for (var i=0; i<singleP.length;i++){
			singleP[i].children[1].innerHTML=arrP[i].nameP;
			document.getElementsByClassName("img"+(i+1))[0].style.background=imgURL1+imgURL+arrP[i].idP+".png"+imgURL2;

		}
	});	


	

//console.log(arrP);

// $(document).ready(function(){
// });
(function(){

//console.log(arrP);
// for(var i=0;i<arrP.length;i++){
// 	console.log(arrP[i].speed);
// }


})()
