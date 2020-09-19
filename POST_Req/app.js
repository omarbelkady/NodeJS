//A Post is a type of request
//It is when I am asking the server to take-in/store data which is within the body of a request
//Post requests are usualy used when submitting a form

var express=require("express");
var bodyParser = require("body-parser");
var app=express();

var urlencodeParser = bodyParser.urlencoded({extended: false});

app.set("view engine", "ejs");
app.use("/assets", express.static("stuff"));

app.get("/", function(request, response){
	response.render("index");
});

app.get("/contact", function(request, response){
	response.render("contact", {qs: request.query});
});


app.post("/contact", urlencodeParser,function(request, response){
	console.log(request.body);
	response.render("contact", {qs: request.query});
});

app.get("/profile/:name", function(request, response){
	var data = {age: 24, job: "pintosdeveloperandpassionatecdev", hobbies: ["likesToCodeC", "enjoysLLP", "codingPascal"]};
	response.render("profile", person: request.params.name, data:data});
		
});

app.listen(3000);
