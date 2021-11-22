$(document).ready(function(){

$(window).scroll(function(){
var scroll = $(document).scrollTop();
if (scroll > 200) {
$('.navbar-menu').addClass('navbar-active');
$('.color_change').css("color","grey");
$('.lang_box').css("left", "-130px");
$('#sm_menu').addClass('smtop');
}
else
{
$('.navbar-menu').removeClass('navbar-active');
$('.color_change').css("color","white");
$('#sm_menu').removeClass('smtop');
};
});
});
var togglebtn = document.getElementById('togglebtn');
togglebtn.addEventListener('click', function(){
var menu = document.getElementById('sm_menu')

menu.classList.toggle('active_menu');
});
document.onclick = function(e){
if (e.target.id != "togglebtn" && e.target.id != 'sm_menu') {

document.getElementById('sm_menu').classList.remove('active_menu');
}
else
{
}
};