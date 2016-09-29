
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

    //generates random number
    var computerNumber = 1 + Math.floor(Math.random() * 100);
    console.log(computerNumber);
  	
    //Hot or cold Function
    $("#guessButton").on('click', function(e){
  		var userNumber = $("#userGuess").val();
  		 if (userNumber == "") {
        alert("Please enter a number.")
        e.preventDefault();
        return false;

       }
       else if (userNumber == computerNumber) {
        alert("That's the number!!");
        e.preventDefault();
        return false;
      }

      else if (userNumber - computerNumber <= 10 && userNumber - computerNumber >= 0-10) {
  			alert("You're Super HOT!!!");
        e.preventDefault();
        return false;
  		}

      else if (userNumber - computerNumber <= 20 && userNumber - computerNumber >= 0-20) {
        alert("You're Hot :)!!");
        e.preventDefault();
        return false;
      }

      else if (userNumber -  computerNumber <= 30 && userNumber - computerNumber >= 0-30) {
        alert("You're getting warm!");
        e.preventDefault();
        return false;
      }

      else if (userNumber - computerNumber <= 50 && userNumber - computerNumber >= 0-50) {
        alert("You're cold :(");
        e.preventDefault();
        return false;
      }

  		else {
  			alert("You're very far away...");
        e.preventDefault();
        return false;
  		};
  	});

    //counts clicks on submit button
    $("#guessButton").click(function(){
      $("#count").html(function(i, val){
        return +val+1;
      });
    });

    $("#guessButton").click(function(){
      $(".text").value = " ";
    });

    //reloads page creating new game
    $("#newGame").click(function(){
      location.reload();
    });
});


