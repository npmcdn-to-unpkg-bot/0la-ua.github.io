arrP = [{},{},{},{},{},{},{},{},{},{},{},{}];
function initdata(){
	
	$.getJSON('http://pokeapi.co/api/v1/pokemon/?limit=12', function(data) {
    
	 	 for (var i=0;i<data.objects.length;i++){
	 	 	//console.log(data.objects[i]);
	 		arrP[i].idP=data.objects[i].pkdx_id;
	 		arrP[i].nameP=data.objects[i].name;
	 		// singleP[i].children[1].innerHTML=arrP[i].nameP;
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
	});	
	// return arrP;
}