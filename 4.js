$(document).ready(function(){
	console.log("Here and working!");
});

// objectives by date:
//5.10 Add onclick to each column
//5.10 add color to each player. This includes defining player1 and player2
// 5.10 Each onclick must have a trickle down (in the "#game-tiles" div)
// declare players

var player = 1;
// var player2 = "O";
// player1 will input first name; player2 will input second name given in alert

//Onclick Objective
// player can select a square. 
//player can click occupied square, as long as row isn't occupied
// each square must trickle to the bottom of the column
//if row is occupied, then row can not be selected

$(".column").click(function(){
	console.log("You have clicked!");
	var columnSelect = $(this);// this makes it so only the first item is clickable
	if (columnSelect.hasClass("X") || columnSelect.hasClass("O")) {
		// alert("Select another column");//we have not yet added what the values to players
		//will be using "X" and "O" to keep track of each player move (easier on the eyes)
	} else {
		if (player === 1){
			columnSelect.addClass("X");
			player = 2;
		} else {
	// 		if (player2 === 2){
			columnSelect.addClass("O");
			player = 1;
	//right now on alert is for column, must change this for row. 
	//If row is full, then row cannot be added to anymore
	//if row is full, add class to row column alerting that row is full
	//before doing that, must forst create a "pile up"/gravity of divs

		}
	}
});