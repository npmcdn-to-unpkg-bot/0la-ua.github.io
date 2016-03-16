(function (){

$("ul").on("click", "span", function () {
      $(this).parent().remove();
    });

})();

function add_el(){
var LIel=document.getElementsByClassName("el");

$(".ul-list").append("<li class='el'>элемент "+(LIel.length+1)+"<span class='del-el'>x</span></li>");	

}
