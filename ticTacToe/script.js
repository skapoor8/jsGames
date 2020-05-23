/*
*   Purpose:    To implement a 2 player tic tac toe game
*   Filename:   script.js
*   Date:       Aug 7st, 2018
*   Author:     Siddharth Kapoor
*/

// State variables
var turn = 0;
var board = ['', '', '', '', '', '', '', '', ''];
var win = false;
var winner = '';

// Handles a user selecting a cell to play
function play(cell) {
	if (cell.innerHTML == '') {
		if (turn % 2 == 0) {
			cell.innerHTML = 'X';
		} else {
			cell.innerHTML = 'O';
		}
		turn++;
		checkWin(cell.innerHTML);
	}
}

// Checks if a player has won the game
function checkWin(p) {
	for (i = 1; i < 10; i++) {
		board[i - 1] = document.getElementById('c' + i).innerHTML;
	}

	if ((board[0] == p && board[1] == p && board[2] == p) ||
		(board[3] == p && board[4] == p && board[5] == p) ||
		(board[6] == p && board[7] == p && board[8] == p) ||
		(board[0] == p && board[3] == p && board[6] == p) ||
		(board[1] == p && board[4] == p && board[7] == p) ||
		(board[2] == p && board[5] == p && board[8] == p) ||
		(board[0] == p && board[4] == p && board[8] == p) ||
		(board[2] == p && board[4] == p && board[6] == p)) {
		winner = 'Player ' + p + ' won!';
		win = true;
		gameOver();
	}

	if (win == false && turn == 9) {
		winner = 'Tic';
		gameOver();
	}

	console.log(turn);
}

// Handles end of game
function gameOver() {
	document.getElementById('player').innerHTML = winner;
	document.getElementById('panel').style.display = 'block';
}

// Lets players restart the game
function restart() {
	document.getElementById('panel').style.display = 'none';
	restore();
}

// Utility function to reset board used by restart()
function restore() {
	for (i = 1; i < 10; i++) {
		document.getElementById('c' + i).innerHTML = '';
	}
	turn = 0;
	win = false;
}