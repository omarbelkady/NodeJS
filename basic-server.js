/*
 *building an api
 text a fetch call, ajax call
 get data to the webpage
 respond to http request and send some back
 * */

//bring a node package that build our web server
const http = require('http');

//takes two parameters a function request and response
const my_server = http.createServer(function(req,res){
	//test for downloading data setting the content type
	res.setHeader('Content-type', 'application/json');
	//set it equal to anything aka * to allow data to go anywhere
	res.setHeader('Access-Control-Allow-Origin', "*");
	
	//setHeader can be called more than one time but writeHead is always last and called only once and pass in the status code 200 for success
	res.writeHead(200);

	let dataObject = {"id": 63526, "name": "NelanIsACLover", "email": "nelanlovesPintosAndC@lowlevel.org"};

	//dataObject must be a string for us to send back
	let data = JSON.stringify(dataObject);

	//send everything back to the browser because everything is done
	res.end(data);
});

//pass in the port number and a callback func that will do sth
my_server.listen(63526, function(){
	console.log("Listening on port 63525");
});

