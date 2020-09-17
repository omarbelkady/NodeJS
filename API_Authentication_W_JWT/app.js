const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();
app.get("/api", (request, response)=>{
	response.json({
		message: "Welcome To the API"
	});
});

//Create a protected route and the second parameter is a middleware func
//verifytoken
app.post("/api/posts", verifyToken,(request,response)=>{
	//The token is now in the request object and I want a callback aka arrow function
	jwt.verify(request.token, "secretkey", (error, authenData)=>{
		//checking if there is any error
		if(error){
			response.sendStatus(403);
		}
		else{
			response.json({
				message: "Post created",
				authenData
			});
		}
	});
});

//Getting the token by creating a login route with post
app.post("/api/login", (request, response)=>{
	//moke user
	const user = {
		id: 1,
		username: "isaclvoer",
		email: "pintoslover@codescallday.com"
	}

	//performing it in an asynchronous way and sending it along as a payload
	//because asynchronous I must have a callback func
	//for the session expiry s for seconds, m for minutes, h for hours, days for days or d for days
	//2+5+6+8+3+7=31 secs.
	jwt.sign({user:user},"secretkey", {expiresIn: "31s"},(error, token)=>{
		response.json({
			token: token
		});
	});
});

//Format of The Token 
//Authorization: Bearer <access_token_key_here>

//Verifying Token Exists Middleware Function
function verifyToken(request, response, next){
   //Get the authentication header value which means when I send my token send it in the header
   const theBearerHeader = request.headers["authorization"]; 
   //Making sure the bearer token is not undefined
   if(typeof theBearerHeader !== "undefined")
   {
      //split the string with a space and transforms the string to an array
      const the_bearer = theBearerHeader.split(" ");
      //retrieve the token from the array
      const the_bearer_token = the_bearer[1];
      
      //setting the token
      request.token = the_bearer_token;
      
      //Calling the next middleware function
      next();
   }
   else{
      //Forbidden
      response.sendStatus(403);
   }
}


app.listen(5000,()=> console.log("Server started on port 5000"));
