// JavaScript Document
$(document).ready(function() {
    document.addEventListener("deviceready",function () {
		$('#B1').tap(function (){
		navigator.notificacion.beep(1);
			});//tap b1
			$('#B2').tap(function (){
		navigator.notificacion.vibrate(100);
			});//tap b2
	}); //devide ready
});//ready 