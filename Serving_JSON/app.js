var http=require("http");
var fs= require("fs");

var server = http.createServer(function(request,response){
	console.log("A request was made: "+request.url);
	response.writeHead(200, {"Content-Type":"text/html"});
	//Now to send json I replacing text/html with json becasue that is what I am sending
	var myObject = {
		name: 'EnjoysLLP',
		job: 'C-Developer',
		age: 24
	};
	//I have to stringify the object into json format to passe to the response.end method
	response.end(JSON.stringify(myObject));

});


server.listen(3000, "100.115.92.2");
console.log("I am listening on port 3000");
