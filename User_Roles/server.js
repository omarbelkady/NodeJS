const express = require("express");
const app = express();
const {ROLE, users} = require("./data");
const {authUser, authRole} = require("./basicAuth");
const projectRouter = require("./routes/projects");

app.use(express.json());
app.use(setUser);
app.use("/projects", projectRouter);

app.get("/", (request,response)  =>{
	response.send("Home Page");
});


app.get("/dashboard", authUser,(request,response)  =>{
	response.send("The Dashboard Page");
});

//1. Authenticate User 
//2. Checking if the user has the admin role
//3. Then if both conditions evaluate to true run the code inside
app.get("/admin",authUser, authRole(ROLE.ADMIN),(request,response)  =>{
	response.send("Admin Page");
});

//MiddleWare Function
function setUser(request, response, next)
{
	const userId = request.body.userId;
	if(userId){
		request.user = user.find(user => user.id ===userId)
	}
	next();
}

app.listen(3000);
