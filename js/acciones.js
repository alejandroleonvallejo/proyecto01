// JavaScript Document
$(document).ready(function() {
    document.addEventListener("deviceready",function () {
		$('#B1').tap(function (){
		navigator.notificacion.beep(1);
		
		});//tap b1
	}); //devide ready
});//ready 