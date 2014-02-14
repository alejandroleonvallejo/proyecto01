// JavaScript Document
$(document).ready(function() {
    document.addEventListener("deviceready",function () {
		$('#B1').tap(function (){
		navigator.notification.beep(1);
			});//tap b1
			$('#B2').tap(function (){
		navigator.notification.vibrate(3000);
			});//tap b2
	}); //devide ready
});//ready 