//var prompt=require('prompt');// require prompt to use to make the game 
var Word= require('./word.js')//require the objects/exports you will use

prompt.start();

game = {
	wordBank : ["Harely Quinn","Brainiac","Zod","Joker","Darkseid","Metallo","Mr. Freeze","FireFly"], // create or import a list of words
	wordsWon : 0,// count of words Found per word
	guessesRemaining : 10, //make sure the user has 10 guesses
	currentWrd : null, //the word object
	startGame : function (wrd){
		
    this.resetGuessesRemaining();
		//get a random word from the array
    this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()*this.wordBank.length)]);
		//populate currentWrd (made from Word constructor function) object with letters
    this.currentWrd.getLets();
		this.keepPromptingUser();

	}, 
	resetGuessesRemaining: function(){
   this.guessesRemaining =10; // reset guess count for new game	
	},
	keepPromptingUser : function(){
		var self = this;

		prompt.get(['guessLetter'], function(err, result) {
		    // result is an object like this: { guessLetter: 'f' }
		    //console.log(result);
			  // console log the letter you chose
         console.log('The letter or space you guessed is: ' + results.guessLetter);
		    //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
        var findHowManyOfUserGuess = self.currentWrd.checkIfFound(result.guessLetter);
		    //if the user guessed incorrectly minus the number of guesses they have left
				// and console.log if they were incorrect or correct
		    if (findHowManyOfUserGuess==0){
          console.log('You made a wrong guess!');
          self.guessesRemaining--;
		    }	else{
		    	console.log('You guessed correctly!');
		    
				//check if you win only when you are right
				if (self.currentWrd.didWeFindTheWord()){
           console.log('You Won!');
				}
			}        //end game
			 console.log('Guesses remaining: ', self.guessesRemaining);
		    // display the user how many guesses remaining
	console.log('Guesses left: ', self.guessesRemaining);
	console.log(self.currentWrd.workRender());
	console.log(' You have already guessed these letters: ')		// display letters the user has guessed
			  // if user has remaining guesses and Word isn't found
			if((self.guessesRemaining>0)&&(self.currentWrd==false)){
				self.keepPromptingUser();
			}
				// if user has no guesses left, show them the word and tell them they lost
		else if(self.guessesRemaining==0){
			console.log('Game over dude! It was ', self.currentWrd.word)
			console.log('Get back in the zone dude!');
				}else{
				console.log(self.currentWrd.wordRender());// show the user word and rendered
		    }
		});
	}

};
game.startGame();
