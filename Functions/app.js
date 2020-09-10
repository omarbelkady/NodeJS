//passing a func inside another func
function callFunction(func){
	func();
}

function regularFunc(){
	console.log("Nelan is a C-56837");
}

//function calling 
regularFunc()

//The above lines are ordinary plain JS 
//Function expression example where the function has no name aka anonymous func
var nelanSaysHeLovesC = function(){
	console.log("Nelan Writes Assembly All Day");
};
//To invoke the anonymous function I call the variable instead
nelanSaysHeLovesC();

callFunction(nelanSaysHeLovesC);
