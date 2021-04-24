## NodeJS is saying 2-2322873 2526 56837 2 AND LL-PROG

## NodeJS Debugging Example
```node
const debug = require('debug')('nameOfDebugVar');
console.log("Var Val through the debugger");
let myArray= [].fill(120,0,10000);
let secondArr = myArray.map(elem => item*5);
debug("POST LOOP");
```

## HOW TO RUN
```bash
DEBUG=nameOfDebugVar node nameOfFile.js
```

## How To Get the FE communicate with the BE:
- SOAP
- REST



### Folder Structure Of A NodeJS App
```
  ├──  /models  
  ├──  server.js
  ├──  node_modules
  ├──  package-lock.json
  ├──  package.json
```

### Important Modules in NodeJS You Must Know
1. HTTP(built-in): Allow NodeJS to transfer data over the HTTP Protocol to use it use the require keyword
```js
require('http');
```
2. Express: Node.js web application framework tool that helps with development of web and mobile applications
```js
require('express');
```

3. MySQL: NodeJS Driver to work and connect with the relational database MySQL
```js
require('mysql');
```

4. Dot-env: NodeJS Driver which enables you to load environment variables from a file
```js
require('dotenv');
```

5. Nodemon: A Live server for your NodeJS application. 
Restarts automatically when any changes take place placed in your package.json file
```bash
npm install -g nodemon
```

6. Debug: A JS Debugging utility for your NodeJS application 
```bash
npm install debug
```

7. Passport: An authentication middleware for you NodeJS application
```bash
npm install passport
```

##### Example of Authentication using PassportJS in your NodeJs App using A Post Request
```js
app.post('/login',
  passport.authenticate('local', { successRedirect: '/',
                                   failureRedirect: '/login' })
);
```


8. Bcrypt: Library used to Hash Password in Your Application
```bash
npm install bcrypt
```

9. Mongoose: MongoDB Object Modeling Package which allows MongoDB to work with NodeJS
```bash
npm install mongoose
```

##### Usage
```js
//In NodeJS
const mongoose = require('mongoose');

//ES6 Notation
import mongoose from 'mongoose';
```

- A DB Model Using Mongoose library thanks to its Schema Interace
```js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FirstPost = new Schema({
  author: ObjectID,
  lovesDJ: Boolean,
  dateHeWatchedBD: Date,
  thingsHeLoves: Array,
  favSaying: String
});

```

- I can also use Input Validation before saving the data into my DB
```js
const Comment = new Schema({
  name: { type: String, default: 'hahaha' },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-z]/ },
  date: { type: Date, default: Date.now },
  buff: Buffer
});

// a setter
Comment.path('name').set(function (v) {
  return capitalize(v);
});

// middleware
Comment.pre('save', function (next) {
  notify(this.get('email'));
  next();
});
```



#### How To Connect MongoDB with NodeJS
0. Register First At MongoDB and Select A Plan
1. Create Your Cluster
2. Add A User
3. Select one of the two scenarios: 
  
  a. Whitelist Any IP(ONLY FOR LEARNING PURPOSES)
  
  b. Whitelist your IP

4. To Connect Your Application...Click on Connect Application
5. Select NodeJS as Your Driver
6. Add the connection string into your application code in the db.json file
7. Store your username and password in a .env file inside an environment variable and do not commit this file
8. To be safe add .env file to your .gitignore file so that Git Doesn't track it

- Usage:
```js
const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';
//how to hash a password
bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
});
```


### Folder Structure Of A MERN App[Non-Relational]
```
root  
  ├──frontend

      │────── node_modules
      
      │────── package.json
      
      │────── package-lock.json
      
      │────── .gitignore
      
      │────── debug.log
      
      │────── public     
            │────── favicon.ico
      
            │────── index.html
      
            │────── manifest.json
      │────── src
            │──────────── App.css
      
            │──────────── App.js
      
            │──────────── App.test.js
      
            │──────────── components
      ├── index.css
      
      ├── index.js
      
      ├── logo.svg

      └── serviceWorker.js
  ├──backend
      ├──  /controllers  
      
      ├──  server.js
      
      ├──  /models  
      
      ├──  /routes  
      
      ├──  server.js
      
      ├──  node_modules
      
      ├──  package-lock.json
      
      ├──  package.json
```

### Folder Structure Of A PERN App[Relational]
```
root  
  ├── /frontend

      │────── /node_modules
      
      │────── package.json
      
      │────── package-lock.json
      
      │────── .gitignore
      
      │────── debug.log
      
      │────── /public     
            │────── favicon.ico
      
            │────── index.html
      
            │────── manifest.json
      │────── /src
            │──────────── App.css
      
            │──────────── App.js
      
            │──────────── App.test.js
      
            │──────────── components
      ├── index.css
      
      ├── index.js
      
      ├── logo.svg

      └── serviceWorker.js
  ├── /backend
      ├──  /controllers  
      
      ├──  server.js
      
      ├──  /models  
      
      ├──  /routes  
      
      ├──  server.js
      
      ├──  /node_modules
      
      ├──  package-lock.json
      
      ├──  package.json  
  ├── /model
      ├── /schema
          |── 375fanb.sql
          └── 429fanb.sql

```




#### File Structure of A NodeJS PRoject
```
root  
  ├──nodejs
    ├── src
        ├──  app.js --------------------- Application Entry Point
        ├──  /api-routes ---------------- Controller Layer: For API Routes
        ├──  /config -------------------- where you store your environment vars
        ├──  /loaders ------------------- loaders for startup modules
        ├──  /models -------------------- Data Access Layer: Database models
        ├──  /scripts ------------------  NPM scripts
        ├──  /services ------------------ Service Layer: Store Your business logic
        ├──  /subsribers ---------------- asynchronous Event Handlers
        ├──  /test ---------------------- For Unit Testing
        ├──  package-lock.json
        ├──  package.json
```




#### Use Nodemon so that it restarts the server whenever I make any changes
```bash
npm i -D nodemon
```

#### How To Run NodeMon
```bash
npx nodemon yourfilename.js
```

#### Use Concurrently to be able to run the backend and frontend concurrently
```bash
npm i -D concurrently
```



### Basic Nodejs Application
```js
const http = require('http'),
      
//this is a callback function
makeServer = function (request,response){
   //must you want http displayed I must include the http header with suitable content type
   response.writeHead(200,{'Content-Type':'text/plain'});
   response.write('Hello world');
   response.end();
},
      
server = http.createServer(makeServer);

server.listen(3000,()=>{
  console.log('Node server created at port 3000');
});
```

### Routing Call It Server.js Used So That when The User hits a certain route it displays it
```js
const http = require('http'),
      url = require('url'),
 
makeServer = function (request,response){
   let path = url.parse(request.url).pathname;
   console.log(path);
   if(path === '/'){
      response.writeHead(200,{'Content-Type':'text/plain'});
      response.write('Home Page');
   }
   else if(path === '/about'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('About page');
   }
   else if(path === '/ftn'){
     response.writeHead(200,{'Content-Type':'text/plain'});
     response.write('429 page');
   }
   else{
     response.writeHead(404,{'Content-Type':'text/plain'});
     response.write('Error page');
   }
   response.end();
 },
server = http.createServer(makeServer);
server.listen(3000,()=>{
 console.log('Node server created at port 3000');
});
```


### Building A RESTFul API With NodeJS And Express
- An API Endpoint is a function within your API that returns Data
- A RESTful API is an API whereby the server nor the client have no idea of the state(object) of one another
- By using this interface, different clients hit the same REST Endpoints, perform the same actions, and receive the same responses without minding the state of one another

##### How To Create A RESTful API
1. create a folder
```bash
mkdir nodejs_api
```

1a. navigate to the folder
```bash
cd nodejs_api
```

2. Run the command npm init to create our package.json file
```bash
npm init
```

3. Install My Middleware
```bash
npm install express --save
```

4. 3 necessary files for my app
```bash
touch server.js index.html users.js
```

5. Goto Your Users.js File
```js
// I use module.exports so that every program in my app can use it
module.exports.users = [
 {
  name: 'Mark Ramiro',
  age : 19,
  occupation: 'Aerospace Engineer',
  graduated : false,
  classes : ['Calc3','EPII','ChemII']
 },
  
 {
  name: '55732',
  age : 24,
  occupation: 'Developer',
  graduated : true,
  classes : ['429','375','373']
 },
 {
  name: 'Mike',
  age : 34,
  occupation: 'Full Stack Developer',
  graduated : true,
  classes : ['CALC3','EPII','OChemII']
 },
]
```

6. I use express to create my server
```js
const express = require('express'),
      server = express(),
      users = require('./users');

//setting the port.
server.set('port', process.env.PORT || 3000);

//Adding routes
server.get('/',(request,response)=>{
    /*
    this searches for the file and sends it to the browser
    dirname is my root folder where my server is running from
    */
 response.sendFile(__dirname + '/index.html');
});

//I use response.json to websites requesting the data in JSON format
server.get('/users',(request,response)=>{
 response.json(users);
});

//Binding to localhost://3000
server.listen(3000,()=>{
 console.log('Express server started at port 3000');
});
```

7. Create the index.html file
```html
<!DOCTYPE html>
<html>
<head>
 <meta charset="utf-8">
 <title>Home page</title>
</head>
<body>
 <button>Get data</button>
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>
 
  <script type="text/javascript">
  
    const btn = document.querySelector('button');
    btn.addEventListener('click',getData);
    function getData(e){
        $.ajax({
        url : '/users',
        method : 'GET',
        success : function(data){
           console.log(data);
        },
      
        error: function(err){
          console.log('Failed');
        }
   });
  } 
 </script>
</body>
</html>
```

8. In the root folder I run the below command to start my nodejs application
```js
node server.js
```


9. You just created a NodeJS Crud App



### Working with Files thanks to the FS Module
- The File System allows you to work with files on your local computer
	- To Use it here is how we import it
```js
var fs = require('fs');
```

### URL Module which allows me to use the url address and break it into sections
```
var url = require('url');
```

### Events Module In NodeJS
- Every action you take on your computer is an action
- I can fire an event in NodeJS whenever a file gets opened or closed


```js
var fs = require('fs');
var myfile = fs.createReadStream('./polaanfb.txt');
myfile.on('open', function () {
  console.log('The polanfb text file is open');
});
```

- I can also use the built-in events module that NodeJS provides me with
```js
var events = require('events');
var eventEmitter = new events.EventEmitter();//how to instantiate an event emmitter object
var theEventHandler = function () {
  console.log('2526: I Contacted 7652626 to get an A in 1336 and contacted 35 to get an A in 429');
}
eventEmmitter.on('Something happened please fire this event.', theEventHandler);//Assigning eventEmitter to theEventHandler
//firing the event

//How to emit the event
eventEmitter.emit('Emitted!');
```

### File Uploading thanks to fs, http and formidable module
```js
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
```

### How To Send An Email thanks to the Nodemailer module
```js
var nodemailer = require('nodemailer');
```
