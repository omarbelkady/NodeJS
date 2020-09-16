var http = require("http");
var fs = require("fs");

var a_server = http.createServer(function(request,response){
	console.log("A request was made: "+ request.url);
	if(request.url === "/home" || request.url === "/"){
		response.writeHead(200, {"Content-Type": "text/html"});
		//Creating a read stream to read index.html
		fs.createReadStream(__dirname+"/index.html").pipe(response);
	}


	else if(request.url === "/contact"){
		response.writeHead(200, {"Content-Type": "text/html"});
		//Creating a read stream to read contact.html
		fs.createReadStream(__dirname+"/contact.html").pipe(response);
	}

	//This is an api endpoint that the js browser might request
	else if(request.url === "/api/lowlevellovers"){
		var lowlevellovers = [{name: "Nelan Ngo", favHobbyOrLang:"Pascal, Machine Code, Assembly" ,id: 2},{name:"Angela Cao", favHobbyOrLang: "R.E.A.D.I.N.G"}];
		//sending the data as json to the browser
		response.writeHead(200, {"Content-Type":"application/json"});
		//I must convert the Objects from JSON(Objects) to a String
		response.end(JSON.stringify(lowlevellovers));
	}

	//if they type a route that doesn't match anything RETURN 404
	else{
		response.writeHead(404, {"Content-Type": "text/html"});
		fs.createReadStream(__dirname+"/404.html").pipe(response);
	}


});

a_server.listen("25683", "100.115.92.2");
console.log("I am listening to any C/MC/Pintos Requests on port 25683 aka Clover Port");
