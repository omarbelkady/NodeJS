const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.API_PORT || 4444;


const bcrypt = require("bcrypt");
const salt_rounds = 13;

const users = require('./my_data').users;


//json body req
app.use(express.json());
app.use(cors());



//making sure the data from user is clean
app.post("register", async(req, res) =>{
	//getting the email and pswd from request body
	//checking if the email doesn't already exist within my records
	let userMatch = users.find((user) => req.body.email === user.email);
	if(!userMatch){
		//if there is no user match hash the password
		//req.body.password is the password to hash
		let passHash = await bcrypt.hash(req.body.password, salt_rounds);
		//pushing the user data
		let newUser = {
			_id: Data.now(),
			email: req.body.email,
			password: passHash,
		};
		users.push(newUser);
		console.log("All the users within the sys", users);
		//sending a response of user to the server
		res.status(201).send({data: newUser});
	}else{
		res
			.status(400)
			.send({error:{ code: 400, message: "Email Already taken 968 2-56837"}});
		}
});

app.post("/login", async(req,res) =>{
	//receiving the email and pass from the request body
	//checking if there is a match
	let userMatch = users.find((user) => req.body.email === user.email);
	if(userMatch){
		//password Validtion using bcrypt
		let submittedPswd = req.body.password; //password as plain text
		let savedPass = userMatch.password; //the password that will be saved must be hashed

		//I use the bcrpyt.compare() method to hash and make a comparison of the passwrod
		//Notice how anything that has await is async function
		const passwordMatch = await bcrypt.compare(submittedPswd, savedPass);
		if(passwordMatch){
			res.status(200).send({data: {token: 'this is a fake token ' }});
		} else{
			res.status(401).send({
				error: { code: 401, message: "Invalid username and password you must learn c now"},
			});
		}
	}
	//No User Match
	else{
		//making the delay so so that the user does not know there is no match
		let fakePswd = `$2b$${salt_rounds}$invalidusernaadfmalfmalfamlafam`;
		await bcrypt.compare(submittedPswd, fakePswd);
		//make the process slower
		res
			.status(401)
			.send({error: {code: 401, message: "invalid username or password"}});
	}
});

app.listen(port, function(error){
	if(error){
		console.log("There was an error and this failed to start the server Go learn C");
		return;
	}
	console.log(`Listening to you on port ${port}`);
});
