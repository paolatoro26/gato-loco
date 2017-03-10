$(document).ready(init);
function init ()
{
	$("section.inicio2").hide();
	$("section.inicio3").hide();
	paginaDos();
	paginaTres();
}
function paginaDos()
{
	$(".iniciar button").on('click',paginaJugadores)
}
function paginaJugadores()
{
	$("section.inicio2").show();
	$("section.inicio1").hide();
}
function paginaTres()
{
	$(".comenzar button").on('click',paginaJuego)
}
function paginaJuego()
{
	$("section.inicio3").show();
	$("section.inicio2").hide();
}