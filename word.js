//word.js should contain all of the methods which will check the letters guessed versus the random word selected.
var Letter = require('./letter.js');


var Word = function(word){
	this.word = word;
	this.lettersArray = [];
	this.found = false;
	this.getLetters = function(){
		for(i=0; i < this.word.length; i++){
			this.lettersArray.push(new Letter.Letter(this.word[i]));
		}
	};

	this.wordFound = function(parameters){
		if(parameters === this.lettersArray.length){
			this.found = true;
		}
		return this.found;
	};

	this.checkLetter = function(userGuess){
		var match = 0;

		for(i=0; i < this.lettersArray.length; i++){
			if(userGuess === this.lettersArray[i].theLetterinWord){
				this.lettersArray[i].appear = true;
				console.log("You have a matching letter!");
				match++
			};
		}
		return match;

	};

	this.renderWord = function(){
		var string = "";

		for (i = 0; i < this.lettersArray.length; i++) {
			string += this.lettersArray[i].printLetter();
		}
		return string;
	};
}

exports.Word = Word; 	




