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
var singleP_row=document.getElementById("row1");
var imgURL="http://pokeapi.co/media/img/",
	imgURL1="url('",
	imgURL2="') no-repeat 50% 50%",
	URI="http://pokeapi.co/api/v1/pokemon/?limit=12";	
arrP=[[],[]], nextURL=URI;
var getN=function(s){
	for(var i=s.length-1;i>0;) if(!isNaN(s[i])) --i; else return i+1;
};
function getPokemons12() {
	console.log("num="+num);
	$.getJSON(nextURL, function(data) {				
	 	 for (var i=0; i<data.objects.length; i++){
	 	 	//console.log(data.objects[i]);  getall
	 	 	arrP[num][i]={};	 	 		 	 	
	 		arrP[num][i].idP=data.objects[i].pkdx_id;
	 		arrP[num][i].nameP=data.objects[i].name;
	 		arrP[num][i].urlP=data.objects[i].resource_uri;
	 		arrP[num][i].powerP=data.objects[i].types;
	 		arrP[num][i].attack=data.objects[i].attack;
	 		arrP[num][i].defense=data.objects[i].defense;
	 		arrP[num][i].hp=data.objects[i].hp;
	 		arrP[num][i].sp_atk=data.objects[i].sp_atk;
	 		arrP[num][i].sp_def=data.objects[i].sp_def;
	 		arrP[num][i].speed=data.objects[i].speed;
	 		arrP[num][i].weight=data.objects[i].weight;
	 		arrP[num][i].total_m=data.objects[i].moves.length;

	 		//create card
	 		var singleP=document.createElement('div');//<div class="col-1-3">
	 		singleP.className="col-1-3";
		 	var divSingle=document.createElement('div');//<div class="single" id="single1">
		 	divSingle.className = "single";
		 	divSingle.id="single"+(num*12+i);
		 	divImg=document.createElement('div');
		 	divImg.className="imgg img"+(num*12+i);//<div class="imgg img1"></div>
		 	divImg.style.background=imgURL1+imgURL+arrP[num][i].idP+".png"+imgURL2;
		 	divSingle.appendChild(divImg);//added image	 	
		 	var p_name=document.createElement('p');//<p id="name1" class="name">Name</p>
			var p_node = document.createTextNode(arrP[num][i].nameP);
			p_name.appendChild(p_node);//added name
			p_name.id="name"+(num*12+i);
			p_name.className="name";
			divSingle.appendChild(p_name);//buttons
			for (var j=0;j<arrP[num][i].powerP.length;j++) {
		 		var b=document.createElement("button"),
		 		t=document.createTextNode(arrP[num][i].powerP[j].name);
				b.appendChild(t);
				b.className="but-pow "+arrP[num][i].powerP[j].name;
				divSingle.appendChild(b);//added buttons
			};			
			singleP.appendChild(divSingle);	
			singleP_row.appendChild(singleP);
		 	 
	 	 };
		nextURL="http://pokeapi.co"+data.meta.next;
	});
};
if (nextURL===null) nextURL=URI;
num=nextURL.substring(getN(nextURL),nextURL.length)/12-1;
getPokemons12(nextURL);
card=0;
document.getElementsByClassName("col-1-2")[0].onclick = function(){
	var b;
	if (event.target.id==="getPokemons") {
		num=nextURL.substring(getN(nextURL),nextURL.length)/12;
		arrP[num]=[[],[]];
		//document.getElementsByClassName("infobox")[0].style.display="none";
		// do{
		// 	b=document.getElementsByTagName("button");
		// 	b[0].remove();
		// }while (b.length>1);		
		getPokemons12(nextURL);
	}
	else {
		singlePokemon(event);
	};
};
(function(){
})();
function singlePokemon(event){
	var k=0,shown=0,row=0;
	//console.log("t.id "+event.target.id);
	//console.log("p.id "+event.target.parentElement.id);
	//console.log("t clName "+event.target.className);
	// console.log("e.targ "+event.target.className);
	// console.log("e.parnt "+event.target.parentElement.className);
	// console.log("e.cTarg "+event.currentTarget.className);
	shown=index(event.target.id)||index(event.target.parentElement.id);
	row=Math.floor(shown/12);
	k=shown-row*12;
	if (card===0) {		
		document.getElementsByClassName("infobox")[0].style.display="block";card=shown;
	}
	else if (card===shown){
		document.getElementsByClassName("infobox")[0].style.display="none";
		card=0;
	}
	else card=shown;
	showinfo(arrP[row][k]);
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
