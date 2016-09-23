
$(document).ready(function(){

	//generates random number
  	var computerNumber = 1 + Math.floor(Math.random() * 100);
  	console.log(computerNumber);
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  	$("#guessButton").on('click', function(){
  		console.log("clicked");
  		var userNumber = $("#userGuess").val();
  		console.log(userNumber);
  		if (userNumber == computerNumber) {
  			alert("You got it!");
  		}
  		else {
  			alert("you didn't get it :(");
  		}
  	});
});


