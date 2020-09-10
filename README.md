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
