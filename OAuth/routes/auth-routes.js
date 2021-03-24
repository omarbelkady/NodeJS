//I do not want express only I want to create an instance of router in the express library 
const router = require('express').Router()

/*
this will enable me to attach routes in this file
I can then export these routes
and use them in the main file(app.js)
*/

//creating the login route as you can see no need to put /auth/login just /login
router.get('/login',(request, response)=>{
    //render a template aka login page
    response.render('login');
});

//loggin out
router.get('/logout',(request, response)=>{
    //implement with passport
    response.send('logout');
});

//authenticate with google
router.get('/google',(request, response)=>{
    //implement with passport
    response.send('Logging in With Google');
});

//exporting it to be able to use it in app.js
module.exports=router;