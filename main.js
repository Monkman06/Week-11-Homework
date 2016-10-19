//main.js is where the game is played and contains all of the user-input.

//var inquirer = require('inquirer'); prompt worked better for this assignment. 
var Game = require('./game.js');
var prompt = require('prompt');
var Word = require('./word.js');

prompt.start();

game = {
	wordBank: [],
	wordsMatched: 0,
	guessesRemained: 10, 
	currentWord: null, 
	startGame: function(word){
		this.resetGuessesRemained();
		this.currentWord = new Word.Word(Game.Game.wordBank[Math.floor(Math.random()* Game.Game.wordBank.length)]);
		this.currentWord = getLetters(); 
		this.currentWord = renderWord();
		this.rePrompt();
	},

	resetGuessesRemained: function(){
		this.guessesRemained = 10;
	},

	rePrompt: function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result){
			console.log('Your guess is:' + result.guessLetter);

			var numberOfGuess = self.currentWord.checkLetter(result.guessLetter);

			if(numberOfGuess == 0){
				console.log('Wrong guess!');
				self.guessesRemained--;
			} else {
				console.log('Correct guess!');
				game.wordsMatched++;


				if(self.currentWord.wordFound(game.wordsMatched)){
					console.log('Good Job!');
					return;
				}
			}

			console.log('Guesses remaining:', self.guessesRemained);

			if((self.guessesRemained > 0) && (self.currentWord.found == false)){
				self.rePrompt();
			} 
			else if(self.guessesRemained == 0){
				console.log('You lost! The correct word was:', (self.currentWord.word));
			} else{
				console.log(self.currentWord.renderWord());

			}
		});
	}
};

game.startGame();
	