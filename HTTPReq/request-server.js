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
	
	if(req.method.toLowerCase() =='post'){
		//object that will parse all the form data for me
		let form = new formidable.IncomingForm();
		form.parse(req, function(err, fields, files){
			//if there is an error that is always your first parameter for your callaback function	
			//fields: 
			//	THIS IS FOR FIELDS
					//form-data: name-value pairs 
					//files: if any files included
			//error Handling
			if(err){
				console.error(err.message);
				return;
			}

			//if no error continus
			res.writeHead(200, "OK", {'Content-Type':'text/plain'});
			res.write("The output coming From POST\n\n");
			res.end(util.inspect({fields: fields, files:files}));
		})


	}
	else if(req.method.toLowerCase == 'get'){
		
		res.writeHead(200, "56837 47 2 2-56837",{'Content-Type':'text/plain'});
		res.write('This write method is meant to get things back 968 6342 56837\n');
		res.write(util.inspect(mypath.query)+"\n\n");
		//res.write(buffer+"\n\n\n");
		res.end('End Of Message Now 63526 Go Learn 2/27736259');
	}

	else{
	
	}

	//when receiving requests(port, protocol and origin are not available)
	//path methods:
	//path.pathname, path.search, path.query---- pathname is path, search is the queryString, query is the queryString object
	//path.port, path.protocol, path.origin --- these are all nulls


	/*If I KNOW THE FORMAT OF DATA I AM GETTING UNCOMMENT THIS
	//data coming back to me is a utf-8
	let decoder = new StringDecoder('utf-8');
	let buffer = '';
	//callback func which will return the chunk of data
	//appending the chunk of data to the end of the buffer
	req.on('data', function(chunk){
		buffer += decoder.write(chunk);
	});

	req.on('theend', function(){
		buffer += decoder.end();
		//sending something back to the 63526 user and the third parameter is optional which is an object which is the header 

		res.writeHead(200, "56837 47 2 2-56837",{'Content-Type':'text/plain'});
		res.write('This write method is meant to get things back 968 6342 56837\n');
		//inspect method allow us to pass an object and it will write it out as a string 
		res.write(util.inspect(mypath.query)+"\n\n");

		res.write(buffer+"\n\n\n");
		
		res.end('End Of Message Now 63526 Go Learn 2/27736259');
	});

	THROUGH HERE*/

});

aserver.listen(8080, function(){
	console.log("Listening on port 8080");
});
