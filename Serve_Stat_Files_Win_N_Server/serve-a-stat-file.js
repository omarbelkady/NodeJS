//creating a http server that returns static file
const http = require("http");
const url = require("url");
const fs = require("fs");


//instead of using the switch statement i will install a module called mime-type
//npm i mime-types
const lookup = require("mime-types").lookup;

const server = http.createServer((req,res) =>{
	//request handling and returns a static file from folder called "public"
	let aparseURL = url.parse(req.url, true);

	//remove slashes from url
	let path = aparseURL.path.replace(/^\/+|\/+$/g, "");
	if(path == ""){
		path = "index.html";
	}
	console.log(`The Path Requested is ${path}`);

	let afile = __dirname + "/public/"+path;

	//asnychronous readFile function uses a callback
	
	fs.readFile(afile, function(error, content){
		//checking if we do have the file if we do not log this
		if(error){
			console.log(`File Not Found ${afile}`);
			res.writeHead(404);
			res.end();
		}
		else{
			//content type specification
			console.log(`Returning ${path}`);
			res.setHeader("X-Content-Type-Options","nosniff");
			let mime = lookup(path);
			res.writeHead(200, {"Content-type": mime});
			//The beauty of this mime is that if I have 100 static files I do not have to look at every single one of them and say explicitly what is it going to be
		/*
			switch(path){
				case "main.css":
					res.writeHead(200, {"Content-type": "text/css"});
					break;
				

				case "main.js":
					res.writeHead(200, {"Content-type": "application/javascript"});
					break;

				
				case "index.html":
					res.writeHead(200, {"Content-type": "text/html"});
					break;
			}
		*/
			res.end(content);
		}
	});
});

server.listen(25683, "100.115.92.2", () =>{
	console.log("Listening on Port 25683");
});
