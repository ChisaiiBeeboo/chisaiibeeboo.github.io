confirm("Do you want to build a snowman?");


var Game = function() {
	wannaPlay = prompt("Do you want to go and play?");
	
	if (wannaPlay === "yes"){
		console.log("YAAAAaaaaay");
	

var snowMan = {
	name: prompt("What should we name our snowman?"),
	eyes: prompt("Should we use pebbles or an Oreo for his eyes"),
	nose: prompt("And here's a ____ (rhymes with parrot, starts with a C) for a nose!"),
	hereHeIs: function() {console.log("This is " + snowMan.name + " our snowman with " + snowMan.eyes + " eyes and a " + snowMan.nose + " nose (:^)_)_) ")}
};

snowMan.hereHeIs()


var	playPlace = prompt("Should we take " + snowMan.name + " to the beach or the snow palace to play?")
	if (playPlace === "beach") {
		alert(snowMan.name + " has melted!!");
		alert("GAME OVER");
	} else if ( playPlace === "snow palace" )  {
		console.log( "Look at the yellow snow! Look how much fun he's having!" );
		alert("WEEEEeeeee (:^)_)_)");
		alert("OOOoooh Kaaaay baaiiii =/");
	} else {
		console.log( snowMan.name + " can't go there!!");
		alert(snowMan.name + " can't go there, he's a snowman! " + snowMan.name + " is iced water now. GAME OVER.");
	}

	}
else {
		alert("OOOoooh Kaaaay baaiiii =/");
	}

};

		
Game();
