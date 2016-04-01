// var arrT=[];
// $.getJSON('http://pokeapi.co/api/v1/type/?limit=999', function(data) {
// 	for (var i=0;i<data.objects.length;i++){
// 		arrT[i]=data.objects[i].name;
// 	}
// });

var buttonsStyle=[
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
		["Psychic", "#b6a7c0", "#7c6889"]];
var singleP = document.getElementsByClassName("single");
var imgURL="http://pokeapi.co/media/img/",
	imgURL1="url('",
	imgURL2="') no-repeat 50% 50%",
	URI="http://pokeapi.co/api/v1/pokemon/?limit=12";	
arrP=[], nextURL=URI;
function getPokemons12() {
	$.getJSON(nextURL, function(data) {		 
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
			for(var j=0;j<arrP[i].powerP.length;j++) addEl(arrP[i].powerP[j].name,"single"+(i+1));
		};
		nextURL="http://pokeapi.co"+data.meta.next;
	});
};

getPokemons12(nextURL);
card=0;



document.getElementsByClassName("col-1-2")[0].onclick = function(){
	var b;
	if (event.target.id==="getPokemons") {
		arrP=[];
		//document.getElementsByClassName("infobox")[0].style.display="none";
		do{
			b=document.getElementsByTagName("button");
			b[0].remove();
		}while (b.length>1);
		getPokemons12(nextURL);
	}
	else {
		singlePokemon(event);
	};
};
(function(){
})();
function singlePokemon(event){
	var k=0;
	//console.log("t.id "+event.target.id);
	//console.log("p.id "+event.target.parentElement.id);
	//console.log("t clName "+event.target.className);
	// console.log("e.targ "+event.target.className);
	// console.log("e.parnt "+event.target.parentElement.className);
	// console.log("e.cTarg "+event.currentTarget.className);
	k=index(event.target.id)||index(event.target.parentElement.id);
	if (card===0) {		
		document.getElementsByClassName("infobox")[0].style.display="block";card=k;
	}
	else if (card===k){
		document.getElementsByClassName("infobox")[0].style.display="none";
		card=0;
	}
	else card=k;
	showinfo(arrP[k-1]);
}
function addEl(powername,classname){
	var b=document.createElement("button"),t=document.createTextNode(powername);
	b.appendChild(t);
	b.className="but-pow "+powername;
	document.getElementById(classname).appendChild(b);
}
function delEl(){
	var b=document.getElementsByTagName("button");
	for(var i=0;i<b.length;i++)
		if (b[i].id!=="getPokemons") b[i].remove();
}
function index(str){
	var s1=str[str.length-2]
	s2=str[str.length-1];
	if (isNaN(s1)) return s2;
	else return s1+s2;
}
function showinfo(arr){
	document.getElementById("info_name").innerHTML=arr.nameP;
	document.getElementById("td_atck").innerHTML=arr.attack;
	document.getElementById("td_def").innerHTML=arr.defense;
	document.getElementById("td_hp").innerHTML=arr.hp;
	document.getElementById("td_sp_atk").innerHTML=arr.sp_atk;
	document.getElementById("td_sp_def").innerHTML=arr.sp_def;
	document.getElementById("td_speed").innerHTML=arr.speed;
	document.getElementById("td_weight").innerHTML=arr.weight;
	document.getElementById("td_ttl").innerHTML=arr.total_m;
	document.getElementsByClassName("imgb")[0].style.background=imgURL1+imgURL+arr.idP+".png"+imgURL2;
};
