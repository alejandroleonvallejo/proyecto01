// JavaScript Document
$(document).ready(function() {
    document.addEventListener("deviceready",function () {
		$('#B1').tap(function (){
		navigator.notificacion.beep(1);
		
		})
	}); //devide ready
});//ready 