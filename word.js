// require your letter objects
var Letter = require('./letter.js');
var Word = function(wrd){
// property to store the string wrd
this.word=wrd;
this.lets=[];
this.found=false;
// a collection of letter objects
// property is the word found?

	this.getLets = function() {
// populate the collection above with new Letter objects
for(var i=0; i<this.word.length; i++){
	ths.lets.push(new Letters(this.word[i]));
}
	};
	
	//found the current word
	this.didWeFindTheWord = function() {
		this.found=this.lets.every(function(curLet){
      return curLet.appear;
		//sets this.found in the word object to true or false if all letter objects have a true value in their appear property
		});

		return this.found;
	};

	this.checkIfLetterFound = function(guessLetter) {
var whatToReturn=0;
for(var i=0; i<this.lets.length; i++){
// iterate through the collection of letter Objects
if(this.lets[i].charac==guessLetter){
	this.lets[i].appear=true;
	whatToReturn++;
}
}
// if guessLetter matches Letter property, the letter object should be shown
		return whatToReturn;
	};

	this.wordRender = function() {
		var str='';
		for(var i=0; i<this.lets.length; i++){
			str +=this.lets[i].lettersRender();
		}
// render the word based on if letters are found or ot found
		return str;
	};
}

// export to use in main.js
modules.export=main.js;