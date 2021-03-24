const express = require('express');
//creating my express app
const app = express();
const authentication_routes = require('./routes/auth-routes');

//setting up the view engine
app.set("View Engine", "ejs");

/*
the way to use a set of routes I imported is by using app.use method then the routes
the first parameter is the route I want to use for the specified path specified in the second parameter
*/
app.use('/auth',authentication_routes)

//creating a route for the home post
app.get('/', (request, response)=>{
    //render the home template when the user hits the route /home
    response.render("Home")
})

//listen to a port 
app.listen(3000,()=>{
    console.log('Server started on Port 3000');
});