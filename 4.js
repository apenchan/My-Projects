$(document).ready(function(){
	console.log("Here and working!");
});

// objectives by date:
//5.10 Add onclick to each column
//5.10 add color to each player. This includes defining player1 and player2
// 5.10 Each onclick must have a trickle down (in the "#game-tiles" div)
// // declare players
// var rowA = ["0A", "1A", "2A", "3A", "4A"];
// var rowB = ["0B", "1B", "2B", "3B", "4B"];
// var rowC = ["0C", "1C", "2C", "3C", "4C"];
// var rowD = ["0D", "1D", "2D", "3D", "4D"];
// var rowE = ["0E", "1E", "2E", "3E", "4E"];

var col0 = [$("#0A"), $("#0B"), $("#0C"), $("#0D"), $("#0E")];
var col1 = [$("#1A"), $("#1B"), $("#1C"), $("#1D"), $("#1E")];
var col2 = [$("#2A"), $("#2B"), $("#2C"), $("#2D"), $("#2E")];
var col3 = [$("#3A"), $("#3B"), $("#3C"), $("#3D"), $("#3E")];
var col4 = [$("#4A"), $("#4B"), $("#4C"), $("#4D"), $("#4E")];
var player = 1;
// var player2 = "O";
// player1 will input first name; player2 will input second name given in alert

//Onclick Objective
// player can select a square. 
//player can click occupied square, as long as row isn't occupied
// each square must trickle to the bottom of the column
//if row is occupied, then row can not be selected

//Gravity objective
//need to establish an id for each row and is for each column
// make an array for each row and column
// declare a gravity variable
// if each column in the array for its row is occupied, then row cannot be added to
// estabslish what it means for the column to be occupied
// Once occupied, add class to row indicating that row is full
// add gravity 

//


	var classZero = $(".zero");


$(".column").click(function(){
	console.log("You have clicked!");
	var columnSelect = $(this);// this makes it so only the first item is clickable
	columnSelect.addClass("clicked");
	console.log(classZero);
	console.log(col0);

	if (columnSelect.hasClass("X") || columnSelect.hasClass("O")) {
		// 	var loopCol = function() {
		// 	for (var i = 0; i < col0.length; i++) {
		// 		if (col0[i] != $("X") || col0[i] != $("O")) {//cannot have class of X or O
		// 			alert("column is full!");
		// 		}
		// 	}
		// }
		// loopCol();

		var checkFull = function(){
			for (var i= 0; i<classZero.length; i++) {
				console.log(classZero[i]);
				// if (classZero[i].hasClass("X") || classZero[i].hasClass("O")) {
				// 	alert("column is full");
				// }
			}
		}
		checkFull();
		// alert("Select another column");//we have not yet added what the values to players
		//will be using "X" and "O" to keep track of each player move (easier on the eyes)
		//HERE I need to see which column I'm in. Create a function that determines which column im in
		//iterate through the array associated with that column. 
		//if cell is full, move to the one above it
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

		// var loopCol = function() {
		// 	for (var i = 0; i < col0.length; i++) {
		// 		if (col0[i] != $("X") || col0[i] != $("O")) {//cannot have class of X or O
		// 			alert("column is full!");
		// 		}
		// 	}
		// }
		// loopCol();
