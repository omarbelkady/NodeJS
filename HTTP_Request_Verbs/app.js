//When you make a request from a web server e.g. typing a link and hittin//enter that is sending a request from the browser(client) to the web 
//server somewhere. 
//OR Postman: enter a url you request and choose the HTTP request verbs you wish to use
//what comes after your domain is your endpoint 
//when you combine a verb and an endpoint you create a response
//GET: READ some data
//POST: Sending from the client(browser) some data to the server. Create sth new 
//

"use strict";
const data = require("./data");//data.channels[n].id .name .last_update
const express = require("express");
const server = require("http");
const app = express();

app.use(express.json());

//PERFORMING CRUD OPERATIONS

app.get("/api/channel", (req, res) => { 
	//return the list of channels
	// respond with a 200
	res.json(data);
	console.log("GET", data.channels);
});


//READ ENTIRE ELEMENT or a specific thing
app.get("/api/channel/:id", (req, res) => { 
	//return specific channel 
	// respond with a 200
	let obj = data.channels.find(item => item.id == parseInt(req.params.id));
	res.json(obj);
	console.log("GET", obj);
});

//CREATE
app.post("/api/channel", (req, res) => { 
	//add new channel then return new list 
	// respond with a 201
	// getting the name property outputted within my body
	let { name } = req.body;
	console.log(req.body);
	//searching for the highest id number within my data
	let id = data.channels.reduce((prev, curr) => {
		return prev < curr.id ? curr.id : prev;
	}, 0) + 1;
	let last_update = Date.now();
	//turning everything I collected and bundling it into an object
	let obj = { id, name, last_update };

	//pushing i
	data.channels.push(obj);
	res.status(201).json(obj);
	console.log("POST", data.channels);
});


//UPDATE WITH PUT we have option to say if record does not exist then create it
app.put("/api/channel/:id", (req, res) => { 
	//replace a channel based on id
	// respond with 200 or 204
	// 202 if the operation is async and still pending
	// Basically an UPDATE but we could also do an INSERT if the id is available
	// Or we could choose to create a new id and do an INSERT if the id does not exist 
	let id = parseInt(req.params.id);
	let name = req.body.name;
	let last_update = Date.now();
	let idx = data.channels.findIndex(item => item.id === id);
	data.channels[idx].name = name;
	data.channels[idx].last_update = last_update;
	res.status(200).json(data.channels[idx]);
	console.log("PUT", data.channels);
});


//UPDATE NEVER INSERTS IF THE ID ISN'T THERE UNLIKE PUT 
app.patch("/api/channel/:id", (req, res) => { 
		//edit a channel
		// respond with 200 or 204 // 202 if the operation is async and still pending
		let id = req.params.id;
		let name = req.body.name;
		let last_update = Date.now();
		let idx = data.channels.findIndex(item => item.id === id);
		data.channels[idx].name = name;
		data.channels[idx].last_update = last_update;
		res.status(200).json(obj);
		console.log("PATCH", data.channels);
});


//REMOVE THE ID/OBJ
app.delete("/api/channel/:id", (req, res) => {
	//delete a channel //respond with 200 or 204
	// 202 if the operation is async and still pending
	let id = req.params.id;
	data.channels = data.channels.filter(item => item.id !== id);
	res.status(204).end();
	console.log("DELETE", data.channels);
});

//head method tests if the resource is available and returns a header
app.head("/api/channel", (req, res) => { 
	//return same headers as get. no content. to check that endpoint is functional
	res.status(200).end();
});


//talking to a resources and outputs what type of operation are you allowed to perform
app.options("/api/channel", (req, res) => { 
	//return headers including ALLOW to say what methods are allowed
	res.status(200);
	res.set("Allow", "GET, POST, PUT, PATCH, DELETE, OPTIONS, HEAD");
	res.set("Access-Control-Allow-Origin", "*"); //cors
	res.set("Content-Length", "0");
	res.end();
});

/*
 * 1xx(Info): request has been received and being processed
 * 2xx(Success) : action was successfully received understood and accepted
 * 200: OK
 * 201: Created
 * 202: Accepted
 * 204: No Content
 *
 *
 * 3xx(Redirect): further action must be taken to complete the request
 * 4xx(Client Error): request contains incorrect syntax or cannot be fullfiled
 * 5xx(Server Error): server failed to fulfill a valid request
 * */
app.listen(3000, err =>{
	if(err){
		return console.log(err);
	}

	console.log("listening on port: ", 3000);
});
