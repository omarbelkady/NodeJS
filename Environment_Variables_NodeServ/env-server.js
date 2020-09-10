const http = require("http");
const url = require("url");
const debug = require("debug")("app");

//listen for env var NODE_ENV= development | production if I am running a development server or a production server

//checking for process env if it exists set process.env.NODE_ENV to var(env) else set it development
const env = (process.env.NODE_ENV)?process.env.NODE_ENV:'development';

const port = (env === 'development')?3000:5000;


const server = http.createServer(function(req,res){
	debug(req.url, req.methd);
	debug(req.headers);

	res.setHeader("Content-type", "application/json");
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.writeHead(200, "OK", {"Content-Type":"application/json"});

	let dataObj = {id: 123, name: "Nelan", email: "nelanisaClover@pintos.org"};

	let data = JSON.stringify(dataObj);

	res.end(data);
});

server.listen(port, function(){
	//1st param is the environmental variable
	console.log(`Listening for${env} port ${port}`);
});
