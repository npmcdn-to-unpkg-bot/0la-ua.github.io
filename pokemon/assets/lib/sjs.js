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
if (nextURL===null) nextURL=URI;
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
