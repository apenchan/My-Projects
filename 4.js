$(document).ready(function(){
	console.log("Here and working!");
});

// objectives by date:
//5.10 Add onclick to each column
//5.10 add color to each player. This includes defining player1 and player2
// 5.10 Each onclick must have a trickle down (in the "#game-tiles" div)
// // declare players
// var rowA = ["4A", "3A", "2A", "1A", "0A"];
// var rowB = ["0B", "1B", "2B", "3B", "4B"];
// var rowC = ["0C", "1C", "2C", "3C", "4C"];
// var rowD = ["0D", "1D", "2D", "3D", "4D"];
// var rowE = ["0E", "1E", "2E", "3E", "4E"];
var columnItems =[
	[$("#0A"), $("#0B"), $("#0C"), $("#0D"), $("#0E")],
	[$("#1A"), $("#1B"), $("#1C"), $("#1D"), $("#1E")],
	[$("#2A"), $("#2B"), $("#2C"), $("#2D"), $("#2E")],
	[$("#3A"), $("#3B"), $("#3C"), $("#3D"), $("#3E")],
	[$("#4A"), $("#4B"), $("#4C"), $("#4D"), $("#4E")]];
var player = 1;
var row = document.getElementsByClassName("row");
var columns = document.getElementsByClassName("columns");
var gameTiles = document.getElementbyId("game-tiles");
// var columnZero = $(".zero");
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


$(".column").click(function(){
	console.log("You have clicked!");
	var $columnSelect = $(this);// this makes it so only the first item is clickable
	$columnSelect.addClass("clicked");

		// alert("Select another column");//we have not yet added what the values to players
		//will be using "X" and "O" to keep track of each player move (easier on the eyes)
		//HERE I need to see which column I'm in. Create a function that determines which column im in
		//iterate through the array associated with that column. 
		//if cell is full, move to the one above it
	if ($columnSelect.hasClass("X") || $columnSelect.hasClass("O")) {


	} else {
			if (player === 1){
					$columnSelect.addClass("X");
					player = 2;
			} else {
	// 		if (player2 === 2){
					$columnSelect.addClass("O");
					player = 1;
		}

	//right now on alert is for column, must change this for row. 
	//If row is full, then row cannot be added to anymore
	//if row is full, add class to row column alerting that row is full
	//before doing that, must forst create a "pile up"/gravity of divs
	// var move 
	isFull();
	// loopCol();
		}
});
	

var isFull = function (columnNumber){
	var $columnArray = $("." + columnNumber);
	console.log($columnArray);
	console.log($columnArray.length);
	for(var i = 0; i < $columnArray.length; i++){
		console.log($columnArray[i]);
		var currentColumn = $columnArray[i];
		console.log($(currentColumn).hasClass("clicked"));
		//determine if each element is clicked
		var array = []
		if ($(currentColumn).hasClass("clicked")){
			alert("I am full!");
			break;// the break will stop alert 
		}

	// }
	//for (var i = 0; i < columnZero.length; i++) {
	
	// if (columnZero === ".clicked") {
	// 	alert ("I am full");
	// 	//}
	}
}

// console.log($full);






//scrap for now
// var sort = function(array) {
// 	if($(array).hasClass("X") || $(array).hasClass("O")){
// 		return true;
// 	}
// }


// var loopCol = function(array) {
// 	var $filteredColumns = columnItems.filter();
// 	console.log($filteredColumns)
// 	if ($filteredColumns.length == 5) {
// 		alert("column is full");
// 	}

			// for (var i = 0; i < col0.length; i++) {
				//if (col0[i].hasClass("X") || col0[i].hasClass("O")) {//cannot have class of X or O
					//alert("column is full!");
				//}
			//}
// }
// loopCol();

//Gravitiy
// if we select on any empty box, the player must automatically drop to the next most clear box
// a lot of if else statements
// if A0 = X || O, then A1
//columnSelect.this needs to render into the next open space. 

var gravity = function(columns) {
	for (var i = row.length - 1; i > 0; i--) {
		if()
	}
}












// var loopCol1 = function() {
// var filteredCol1 = col1.filter(sort);
// 	if (filteredCol1.length == 5) {
// 		alert("column is full");
// 	}
// }
// loopCol1

		// var checkFull = function(){
		// 	for (var i= 0; i<classZero.length; i++) {
		// 		console.log(classZero[i]);
		// 		if (classZero[i].hasClass("X") || classZero[i].hasClass("O")) {
		// 			alert("column is full");
		// 		}
		// 	}
		// }
		// var isFull = function (){
// 	//for (var i = 0; i < columnZero.length; i++) {
// 		if (columnZero = ".clicked") {
// 			alert ("I am full");
// 		//}
// 	}
// }