$(document).ready(function(){

	(function(){


		var validPassword = false;
		var validEmail = false;




			$('form').submit(function(event){

				event.preventDefault();

				var password = $("#password").val();
				var email = $("#email").val();



					// PASSWORD



				if (password == "123") {

					var validPassword = true;

				} else if (password.length == 0) {

					$(".error-no-password").css("display", "block");
					
					$('#password').on('focus', function(){

						  $(".error-no-password").css("display", "none"); 

						});	
					

				} else{

					$(".error-wrong-password").css("display", "block");

					$('#password').on('focus', function(){

						  $(".error-wrong-password").css("display", "none");

						});
					var validPassword = false;
				}



		           // EMAIL


					if (email.length == 0) {
				
						$(".error-no-email").css("display", "block");

						$('#email').on('focus', function(){

					 		 $(".error-no-email").css("display", "none"); 

						});

					}

					if (email !== '') {

						var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;

						if (pattern.test( email )) {

							if (email == "mail@mail.com") {

								var validEmail = true;

							} else {

								$(".error-wrong-email").css("display", "block");

								$('#email').on('focus', function(){

								    $(".error-wrong-email").css("display", "none");

								});
									var validEmail = false;
							}

						}else {

							$(".error-wrong-email").css("display", "block");

							$('#email').on('focus', function(){

							    $(".error-wrong-email").css("display", "none");

							});
							var validEmail = false;

						}
					}

					if (validPassword == false && validEmail == false) {

						$(".error-wrong-email").css("display", "none");
						$(".error-wrong-password").css("display", "none");

						$(".error-pass-and-email").css("display", "block");

						$('#email').on('focus', function(){

						    $(".error-pass-and-email").css("display", "none");

						});
					
					}


				



					// FINAL



				if (validPassword == true && validEmail == true) {

					$("form").unbind('submit').submit();
					
				}




				

			});
	}());
});