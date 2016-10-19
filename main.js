var inquirer = require('inquirer');
var words = require('./word.js');
var game = require('./game.js');
var letterCheck = require('./letter.js');

var letterObj = letterCheck.letter.letterFunctions;	

var currentWord, blanks, turns, lettersTried;

function blankSet() {
	currentWord = game.game.wordBank[Math.floor(Math.random()*game.game.wordBank.length)];
	blanks = "";

	for(var i = 0; i < currentWord.length; i++) {
		blanks += '_ ';
	}

	lettersTried = [];
	turns = 10;
}

function userGuess() {
	console.log(blanks);

	inquirer.prompt([
		{
			type: "input",
			message: "Choose a Letter:",
			name: "letter"
		},
	]).then(function (user) {
		var userGuessLetter = user.letter.toLowerCase();
		var isLetter = letterObj.checkLetz(userGuessLetter);
		var inWord = false;

		if(isLetter) {
			for(var i = 0; i < currentWord.length; i++) {
				if(userGuessLetter == currentWord[i]) {
					blanks = letterObj.replaceLetter(blanks, i * 2, userGuessLetter);
					inWord = true;
				}
			}

			if(!inWord && !letterObj.inArray(userGuessLetter, lettersTried)) {
				lettersTried.push(userGuessLetter);
				turns--;
			}

			console.log("You have " + turns + " tries left");
			console.log("Your guesses have been: " + lettersTried);
			console.log("");

			if(blanks.indexOf("_") === -1) {
				console.log("Winner!");
				console.log("The answer is " + currentWord + "!");
				playAgain();
			} else if(turns == 0){
				console.log("GAME OVER");
				console.log("The word was: " + currentWord);
				playAgain();
			} else {
				userGuess();
			}
		} else {
			console.log("Incorrect input! Letters & spaces only!");
			console.log("");
			userGuess();
		}

	});
}

function playAgain() {
	inquirer.prompt([
	{
		type: "confirm",
		message: "Want to play again?",
		name: "again"
	},
	]).then(function (user) {
		if(user.again) {
			console.log("");
			blankSet();
			userGuess();
		} else {
			console.log("Good Bye!");
		}
	});
}


blankSet();
userGuess();