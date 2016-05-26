// var cost=[];
// var main=function(){
//   $('.medv_choose').click(function(){
//     var index_item =  $('.medv_choose').index($(this));
//     var el=$('.medv_options').eq(index_item);
//     if ( el.css('visibility') == 'hidden') el.css('visibility','visible');
//     else el.css('visibility','hidden');
//   });
//   // $('#make_order_btn').click(function(){
//   //   var err=0;cost=[];
//   //   //cost[0]=$(".checks1 input[type='checkbox']").val();
//   //   $(".checks1").each(function(){
//   //     if ($(".checks1 input[type='checkbox']").is(":checked")) console.log($(".checks1 input[type='checkbox']").val());
//   //   });
//   // });
// };
// $(document).ready(main);

//pure js:
// document.getElementsByClassName('opt').onclick = function(event){
//   var ind=(event.target.id);
//    console.log(ind+" row");
// };
var cost=[];
document.addEventListener('click', function(e) {
  if (event.target.id!==""){
     document.getElementById("error_size").style.visibility="hidden";
    var i=(event.target.id[event.target.id.length-1]);
    var el=document.getElementsByClassName('medv_options')[i];
    var el_style=el.style.visibility;
    if (el.style.visibility=="hidden"||el.style.visibility==false) el.style.visibility="visible";
    else el.style.visibility="hidden";
  };
});
document.getElementById("make_order_btn").onclick = function(){
  cost=[];
  cost[0]=getVal(document.getElementsByName("a"));//size
  if (cost[0].length===0){
    document.getElementById("error_size").style.visibility="visible";
    return;}
  else document.getElementById("costs").value=cost[0][0]*82;

  cost[1]=getVal(document.getElementsByName("b"));//color
  cost[2]=getVal(document.getElementsByName("c"));//eyes
  cost[3]=getVal(document.getElementsByName("d"));//ears
  cost[4]=getVal(document.getElementsByName("e"));//bant
};
function getVal(a1) {
  var j=0;var a2=[];
  for(var i=0;i<a1.length;i++){
    if (a1[i].checked) {a2[j]=a1[i].value;j++;}
  };
  return a2;
}