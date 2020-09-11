var events = require("events");

var eventEmitter = new events.EventEmitter();


//How To Create An Event Handler:
var ordEventHandler = function(){
	console.log("Nelan Has Too Much Love For C/Assembly/Pintos/Machine Code/COMPILERS and mostly Low Level Programming");
	console.log("He hates Java Too Much");
}

//Assigning the event handler to an event
eventEmitter.on("NelanEvent", ordEventHandler);

//Fire the NelanEvent:
eventEmitter.emit("NelanEvent");
