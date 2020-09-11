//Everything we build in NodeJS is built on Modules
//Modules are like individual JS file and we import the file if we wish to use it

//Some files are built into node like the file system
const fs = require("fs");

//Remember there arent just the node module that are built in that we can use
//We can create a module

//now imagine I have a hundred modules within a script and I only want two
//I can do this similar to destructuring
//const {ably, c} = require("./ordinary_module");
//ably and c are now objects


//Now to import our created module I do this:
//2 modules: c and ably
const c = require("./ordinary_module");

//Now because I said main I can shorten the code below to the uncommented one
//const j = require("./second_module/clover.js");
const j = require("./second_module");
c.ably();
c.c();
j();


//Remember to place the package.json file within the folder to bring in the file
