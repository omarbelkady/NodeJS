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
  ├──  /models  
  ├──  server.js
  ├──  node_modules
  ├──  package-lock.json
  ├──  package.json





### Folder Structure Of A MERN App
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
          ├──  /models  
          ├──  server.js
          ├──  node_modules
          ├──  package-lock.json
          ├──  package.json



#### Use Nodemon so that it restarts the server whenever I make any changes
```bash
npm i -D nodemon
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
<<<<<<< HEAD

=======
>>>>>>> 80807f02904fd5969e4b7910666b0d05836bf781
