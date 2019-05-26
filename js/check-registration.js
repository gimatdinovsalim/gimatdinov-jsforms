$(document).ready(function(){

	(function(){


		var validPassword = false;
		var validEmail = false;




			$('form').submit(function(event){

				event.preventDefault();

				var email = $("#email").val().trim();
				var password = $("#password").val();
				



					// EMAIL
				

					if (email == "mail@mail.com") {

						$(".error-pass-and-email").css("display", "block");

							$('#email').on('focus', function(){

							  $(".error-pass-and-email").css("display", "none"); 

							});

					} else if (email !== '') {

						var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

						if (pattern.test( email )) {
							
							validEmail = true;

						} else {

						$(".error-wrong-email").css("display", "block");

							$('#email').on('focus', function(){

							  $(".error-wrong-email").css("display", "none");

							});
						}
						
					} else {

						$(".error-no-email").css("display", "block");

						$('#email').on('focus', function(){

							  $(".error-no-email").css("display", "none"); 

							});
					} 
					



					// PASSWORD



					if (password !== '') {

						var ptn = /[^a-zA-Z0-9]/;

						if (ptn.test( password )) {
							
							validPassword = true;

						} else {

							$(".error-no-password").css("display", "block");

							$('#email').on('focus', function(){

							    $(".error-no-password").css("display", "none"); 

							});
						}
					}else {

						$(".error-no-password").css("display", "block");

						$('#password').on('focus', function(){

						     $(".error-no-password").css("display", "none"); 

						});
					} 




					// FINAL



				if (validPassword == true && validEmail == true) {

					$("form").unbind('submit').submit();
					
				}




				

			});
	}());
});