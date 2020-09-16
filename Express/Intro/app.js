var express = require("express");
//run our express app
var app = express();


//how to respond to requests e.g. GET-paste a url in the address bar, POST-post data to a server from a web form, DELETE, PUT

	//Responding using GET: place a route and place the function we want to fire when we get the request: app.get('route',func)
	//
	//
	//
	//Responding using POST: app.post('route', func);
	//
	//
	//
	//Responing using DELETE: app.delete('route', func);


//responding to a get request
app.get("/", function(request, response){
	response.send("This is the home page Go 53276 2 And 27736259");
})



//responding to a get request
app.get("/contact", function(request, response){
	response.send("This is the contact page Go contact 63526 for help in C, 27736259 And Pintos!");
})

//listen to a port
app.listen(3000);
