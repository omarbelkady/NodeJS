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
});



//responding to a get request
app.get("/contact", function(request, response){
	response.send("This is the contact page Go contact 63526 for help in C, 27736259 And Pintos!");
});


//responding to a get request by making a db query and return data from db and inject it into the html and return to user
//app.get("/profile/:id", function(request, response){
	//we will access the id the user requested on the request object
//	response.send("Hey 6342 56837/2 56837 you requested to see the user profile with the id of "+request.params.id);
//});

//For a better profile request by name to making a db query and returning data from db and injecting it to the html and return the user
app.get("/profile/:name", function(request, response){
	//we will access the id the user requested on the request object
	response.send("Hey 6342 56837/2 56837 you requested to see the user profile with the id of "+request.params.name);
});


//listen to a port
app.listen(3000);
