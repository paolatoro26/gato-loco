/*$(document).ready(init);
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
}*/
$(document).ready(init);
function init()
{	
	var jugador1="x";
	var jugador2="o";
	var count=0;
	
	agregarValor();
}
function agregarValor()
{
	var divisiones=$(".divisiones").children();
	alert(divisiones.length)
}
/*
function agregarX()
{
	$(this).text("o");
}

function quienGano()
{
	var todos=$(".divisiones").children();
	var posicion = ;
	if(todos[1].value=="x" && todos[2].value=="x" && todos[3].value=="x")
	{
		alert("ganaste")
	}
}*/
