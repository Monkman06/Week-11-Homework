//letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

var Letter = function(enterLetter) {
  this.letterEntered = enterLetter; //this is where use will input so it is empty.
  this.appear = false;
  this.printLetter = function(){
    if(this.appear === true){
      return this.letterEntered;
    } else{
      return "_";
    }
  };

};

exports.Letter = Letter;