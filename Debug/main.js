const debug = require('debug')('app');


debug('A variable value .. through debug');	
console.log("Variable Value throug the console");

let myarr = [].fill(120,0,10000);
let arr2 = myarr.map(elem => item*5);
debug("POST LOOP!");
