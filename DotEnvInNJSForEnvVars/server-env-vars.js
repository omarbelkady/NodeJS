const http = require("http");

//method that will go off read our env vars and save all of them
require("dotenv").config();
//{path: path/filename}

//have access to all env vars thanks to this command
//process.env.PORT

//One location that is secure that holds all our environmental vars
let port = process.env.PORT;
let host = process.env.HOST;


//create the server
let my_server = http.createServer( (req,res) =>{
	console.log("Request made 968 6342 56837 ");
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end("All He loves to code in is C, Assembly and Most Machine Code");
});

my_server.listen(port, host, ()=>{
	console.log(`Server has started listening on NELANPORT ${host}:${port}`);
});
