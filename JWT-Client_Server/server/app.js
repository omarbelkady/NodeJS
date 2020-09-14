const express = require("express");
const app = express();
const cors = require('cors');
const jwt = require("jsonwebtoken");
require("dotenv").config();
const port = process.env.PORT;
const jwt_key = process.env.JWT_KEY;

//middleware
app.use(cors());

//root
app.get('/', (req,res) => {
	res.status(200).send({code: 0, message: 'ok'});
});

//create a token for someone
app.get("/token", (req,res) =>{
	//create a user
	let id = Math.random().toString(36).substring(2, 8);
	//3 minutes for the session to expire if inactive
	//Remember Date.now is not useful because output is milliseconds
	let limit =  60*3;
	let expires = Math.floor(Date.now()/1000) + limit;
	//timestamp is 3 minutes from now
	let payload = {
		_id : id,
		exp: expires,
	};
	let token = jwt.sign(payload, jwt_key);
	res.status(201).send({code: 0,message: 'ok',data:token});
});

app.get("/test", (req,res) =>{
	//make sure we imitate the route that needs a valid token for access
	const header = req.header("Authorization");
	//remove the bearer at the beginning of the request url and I will use JS destructuring to help me do this 
	const [type, token] = header.split(" ");//outputs bearer token
	if(type === "Bearer" && typeof token !== 'undefined'){
		try{
			//verifying the jwt
			let payload = jwt.verify(token, jwt_key);
			//calculating the time difference between the time stamp and expires time
			let current = Math.floor(Date.now()/1000);
			let diff = current-payload.exp;

			//payload exist and is valid
			res.status(200).send({code: 0, message: `Great Success You Java 56837 ${diff} seconds remaining`});
		}

		catch(err){
			res.status(401).send({code: 123, message: "The token is invalid or expired but most likely 2526 56837 27736259"});
		}
	}
	else{
		res.status(401).send({code: 256837, message: "Invalid Token To much love for Assembly"});
	}
});


app.listen(port,(err) =>{
	if(err){
		console.log("Bad Error 2526 56837 2 Way Too Much");
		return;
	}
	console.log("Listening on port", port);
});
