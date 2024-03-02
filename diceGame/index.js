

	
	var player1 = "Player 1"; 
	var player2 = "Player 2"; 


 
	function editNames() { 
		player1 = prompt("Change Player 1 name"); 
		player2 = prompt("Change player 2 name"); 

	document.querySelector("p.Player1").innerHTML = player1; 
	document.querySelector("p.Player2").innerHTML = player2; 
		
	} 
	// editNames();


	function rollTheDice() { 
       
            var randomNumber1 = Math.floor(Math.random() * 6) + 1; 
            var randomNumber2 = Math.floor(Math.random() * 6) + 1; 
  
            document.querySelector(".img1").setAttribute("src", 
                "images/dice" + randomNumber1 + ".png"); 
  
            document.querySelector(".img2").setAttribute("src", 
                "images/dice" + randomNumber2 + ".png"); 
  
            if (randomNumber1 === randomNumber2) { 
                document.querySelector("h1").innerHTML = "Draw!"; 
            } 
  
            else if (randomNumber1 < randomNumber2) { 
                document.querySelector("h1").innerHTML 
                                = (player2 + " WINS!"); 
            } 
  
            else { 
                document.querySelector("h1").innerHTML 
                                = (player1 + " WINS!"); 
            } 
        }

		// rollTheDice();
    