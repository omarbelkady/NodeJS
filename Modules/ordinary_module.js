const c = function(){
	console.log("This is the function c the best prog lang in the world within the ordinary_module.js file");
};

const ably = function(){
	console.log("This is the function ably aka assembly the second best programming language in the world for 63526 within the ordinary_module.js file");
};



//to use the module it depends what I export
//module.exports = c;
//above I am only exporting c Nelan Fav prog lang

//I can pass in an object to see what I want to bring out this is better because one liner
module.exports = {c, ably};



