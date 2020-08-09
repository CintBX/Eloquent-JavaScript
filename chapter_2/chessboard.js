/* 
	Write a program that creates a string that represents an 8×8 grid, 
	using newline characters to separate lines. 
	At each position of the grid there is either a space or a "#" character. 
	The characters should form a chessboard.

	console.log should show something like this:
		 # # # #
		# # # # 
		 # # # #
		# # # # 
		 # # # #
		# # # # 
		 # # # #
		# # # #

	When you have a program that generates this pattern, define a binding size = 8,
	and change the program so that it works for any size, outputting a grid of the given width and height.
*/

// Step 1: Program generates pattern
function firstBoard() {
	let board = "";
	for(var x = 0; x < 8; x++) {
		for(var y = 0; y < 8; y++) {
			if((x + y) % 2 == 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n";
	}
	console.log(board);
};
// firstBoard();


// Step 2: Use binding size = 8
function secondBoard() {
	let size = 8;
	let board = "";

	for(var x = 1; x <= size; x++) {
		for(var y = 1; y <= size; y++) {
			if((x + y) % 2 == 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n";
	};
	console.log(board);
};
// secondBoard();


// Step 3: 
function chessBoardFinal(size) {
	let board = "";

	for(var x = 0; x < size; x++) {
		for(var y = 0; y < size; y++) {
			if((x + y) % 2 == 0) {
				board += " ";
			} else {
				board += "#";
			}
		}
		board += "\n"
	}	
	console.log(board);
}
chessBoardFinal(8);