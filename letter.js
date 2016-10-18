var Letter = function(let) {
	
// property to store the actual letter	
this.charec=let;
// property/boolean if the letter can be shown 
this.appear=false;
	this.letterRender = function() {
		//if appear is false then show the _
		//else appear is true then show character
    return!(this.appear)?"_":this.charec;
	};
};

// export to use in word.js
module.exports=Letter;