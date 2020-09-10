//building a super basic Node WS

const http=require("http");
const url = require("url");
const StringDecoder = require("string_decoder").StringDecoder;
const util = require("util");
const formidable = require("formidable");

const aserver = http.createServer(function(req,res){
//	req.method.toLowerCase; //for GET, POST, PUT, DELETE, CONNECT, TRACE, etc.
	//find all the available methods
	//console.log(http.STATUS_CODES); //http.METHODS outputs all the possible methods there are with http
	//finding what the browser is send to me
	//console.log(req.header);
	
	//Used For Routing
	//console.log(req.url);
	let mypath = url.parse(req.url, true);
	

	//when receiving requests(port, protocol and origin are not available)
	//path methods:
	//path.pathname, path.search, path.query---- pathname is path, search is the queryString, query is the queryString object
	//path.port, path.protocol, path.origin --- these are all nulls
	

	//sending something back to the 63526 user and the third parameter is optional which is an object which is the header 
	res.writeHead(200, "56837 47 2 2-56837",{'Content-Type':'text/plain'});
	res.write('This write method is meant to get things back 968 6342 56837\n');
	res.end('End Of Message Now 63526 Go Learn 2/27736259');
});

aserver.listen(8080, function(){
	console.log("Listening on port 8080");
});

