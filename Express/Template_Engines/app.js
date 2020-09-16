var express = require("express");

var app = express();

//how to use ejs in our app and telling express we are wishing to use ejs as our view engine/template engine 1st arg is what I want to set and second is which view engine I want to use
//by default now it will look for a view folder to search for the view therefore I must create a views folder
app.set('view engine', 'ejs');


app.get("/", function(request, response){
	response.sendFile(__dirname+'/index.html');
});


app.get("/contact", function(request, response){
	response.sendFile(__dirname+'/contact.html');
});


app.get("/profile/:name", function(request, response){
	var data = {age: 24, job:"enthusiast c developer", favlang: "Assembly", nelansFavHobbies: ["Teach LLP", "Learning about Imperative Programming", "Reading About C"]};
	//since I created a view file I no longer need to do this I can now just call the render method to render the view or template I wish
	//response.send('Serving you a profile page'+request.params.name);
	//the way we pass data to a view is by passing an object as the second parameter to the render method
	response.render("profile",{person: request.params.name, data:data});
});

app.listen(3000);
