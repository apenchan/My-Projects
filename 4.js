$(document).ready(function(){
	console.log("Here and working!");
});
var options = document.getElementsByClassName(".box");

var player1 = {
	name: '',
	avatar: 'O'
};

var player2 = {
	name: '',
	avatar: 'X'
};

var turn = player1;

var switchTurn = function() {
	if (turn === player1) {
		turn = player2;
	} else {
		turn = player1;
	}
	console.log(turn.name)
}

player1.name = prompt('What is your name player 1?');
player2.name = prompt("And what do they call player2?");

// each inner array represents a row
// eeach index position insde a row array is equal to...
// - tiles[0][0]
// - tiles[4][2]

var tiles = [
	[null, null, null, null, null],//top rpw
	[null, null, null, null, null], // 2nd to top row
	[null, null, null, null, null], // 3rd to top row
	[null, null, null, null, null], // 4th from top row
	[null, null, null, null, null] //the bottem row
];

$(".box").click(function(){
	box_clicked = $(this).attr("id");
	box_number = box_clicked - 1;
})


arrayOfBoxes = $(".box");
for(var i = 0; i < arrayOfBoxes.length; i++) {
	$(arrayOfBoxes[i]).click(function () { 
		var $selected = $(this); 
		// check if its possible
		if ($selected.hasClass("clicked")) {
			console.log('duplicate move detected');
			return false;
		} else {
			$selected.addClass("clicked");
			// visualize the move on the dom
			if (turn === player1){
				$selected.addClass("X");
				// if (getWinner("X")) {
				// 	alert("Mazel! " + player1 + " ! You won.");
			} else {
				$selected.addClass("O");
		 }
		 if (getWinner()==="player1") {
		 	alert("Great! + player1 +  has won");
		 } else if
		 	(getWinner()==="player2") {
		 	alert ("Great! + player2 + has won");
		 }
			// grab the position of the clicked div, so we can match it and update it on the multidimensional array HARD PART
			console.log($selected);
			rowInfo = $(this).attr('class');

				// - find the row of the thing that got clicked
				// - find the column of the thing that got clicked
				// - updTE THE multi dim array using the above u index positions


				// [bonus]Add gravity

				// add at least 1 win check to alert winner


			switchTurn();
		}
	// }
		getWinner();
	});
}
arrayOfBoxes[i];

var getWinner = function() {
	if ($(".sq21").hasClass("X"||"O") && $(".sq22").hasClass("X"||"O") && $(".sq23").hasClass("X"||"O") && $(".sq24").hasClass("X"||"O")) {
			return true;
	}
};
getWinner();




// - i need an infstatement to check if the box is open or closed
// - i need to addclass to show that box is now that players avatar
// - find which position inside the multidimensional array was clicked.



// //arrayOfBoxes[]
// // arrayOfBoxes.click(function() {
// 	console.log("grabbed all boxes")
// 	for (var i = 0; i < arrayOfBoxes.length; i++){
// 		console.log(arrayOfBoxes[i])
// 	}
// });





// var rows = [];
// var columns =[];
// rows.push($(".row5"), $(".row4"), $(".row3"), $(".row2"), $(".row1"));
// columns.push($(".column0"), $(".column1"), $(".column2"), $(".column3"), $(".column4"));


// One idea...

// var board = [[null, null, null, null, null], [null]]

// board[0] = column1
// board[1] = column2
// board[2] = column3

// what is row0: index 0 for all the iterations of board
var rows = [
['row5', 'row5', 'row5', 'row5', 'row5'],
['row4', 'row4', 'row4', 'row4', 'row4'],
['row3', 'row3', 'row3', 'row3', 'row3'],
['row2', 'row2', 'row2', 'row2', 'row2'],
['row1', 'row1', 'row1', 'row1', 'row1']
];
var columns = [
['column0', 'column0', 'column0', 'column0', 'column0'],
['column1', 'column1', 'column1', 'column1', 'column1'],
['column2', 'column2', 'column2', 'column2', 'column2'],
['column3', 'column3', 'column3', 'column3', 'column3'],
['column4', 'column4', 'column4', 'column4', 'column4']
];
// var boxes = function () {
// for (var i = 0; i < rows.length; i++) {
// 	for (var j = 0; j < rows.length[i]; j++){
// 		console.log();
// 	}
// }



// var full = function(){
// 	if ( )
// }
	// 	for (var i = 0; i < columnItems; i++){
	// 		for(var j = 0; j < columnItems[i].length; j++) {
	// 		$(columnItems[i][j]).click(function () {
	// 			console.log("Do I work?!?");
	// 		});
	// 	}
	// }
var player = 1;
// var columns = document.getElementsByClassName("column");
// var gameTiles = document.getElementById("game-tiles");
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


// $(".box").click(function(){
// 	console.log("You have clicked!");
// 	var $columnSelect = $(this);// this makes it so only the first item is clickable
// 	$columnSelect.addClass("clicked");


// 		// alert("Select another column");//we have not yet added what the values to players
// 		//will be using "X" and "O" to keep track of each player move (easier on the eyes)
// 		//HERE I need to see which column I'm in. Create a function that determines which column im in
// 		//iterate through the array associated with that column. 
// 		//if cell is full, move to the one above it
// 	if ($columnSelect.hasClass("X") || $columnSelect.hasClass("O")) {
// 		// var $rowA = $(".rowA"); 
// 		// if ($columnSelect!= )
// 	} else {
// 			if (player === 1){
// 					$columnSelect.addClass("X");
// 					player = 2;
// 			} else {
// 	// 		if (player2 === 2){
// 					$columnSelect.addClass("O");
// 					player = 1;
// 				}


	//right now on alert is for column, must change this for row. 
	//If row is full, then row cannot be added to anymore
	//if row is full, add class to row column alerting that row is full
	//before doing that, must forst create a "pile up"/gravity of divs
	// var move 
	// isFull();
	//}// loopCol();
		//}
// });




// var isFull = function (columnNumber){
// 	var $columnArray = $("." + columnNumber);
// 	console.log($columnArray);
// 	console.log($columnArray.length);
// 	for(var i = 0; i < $columnArray.length; i++){
// 		console.log($columnArray[i]);
// 		var currentColumn = $columnArray[i];
// 		console.log($(currentColumn).hasClass("clicked"));
// 		//determine if each element is clicked
// 		var array = []
// 		if ($(currentColumn).hasClass("clicked")){
// 			alert("I am full!");
// 			break;// the break will stop alert 
// 		}

// 	// }
// 	//for (var i = 0; i < columnZero.length; i++) {
	
// 	// if (columnZero === ".clicked") {
// 	// 	alert ("I am full");
// 	// 	//}
// 	}
// }

// console.log($full);
// var notClicked = function (row) {
// 		if ($columnSelect != ("#RA")) {
// 		$columnSelect.removeClass("clicked");
// 	} else {
// 		alert ("click lowest row!");
// 	}
// }
// notClicked();




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
//if Array 0 is full, move onto next row
//columnSelect.this needs to render into the next open space. 

// $("#0C").click(function(){
// 	$("#0A").animate({



// 	})
// }




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




// =================
// PSEUDO CODE PLAN
// =================

// + HTML AND ALL GAME ELEMENTS
// + On click listener, available for all boxes

// - keep track of state of each box via class ('clicked' = filled)
// - when you click something...aka click handler
// 	- add class "clicked"
// 	- update the board in the multidimensional array
// 	- depending on turn, adds the pplayers turn avatar
// 	- if the box "below" is not clicked...aka gravity
// 		- Find the column of the box that was clicked
// 		- Find the multidimensional array associated with that column
// 		- Find the index position of that one and the one that needs to be identified below it

