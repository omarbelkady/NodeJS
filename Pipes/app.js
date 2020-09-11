var http = require("http");
var fs = require("fs");

var theReadStream = fs.createReadStream(__dirname + '/readingFile.txt', 'utf8');
var theWriteStream = fs.createWriteStream(__dirname+ '/writingFile.txt');

/*
theReadStream.on('data', function(someData){
	console.log("New Data received");
	theWriteStream.write(someData);
});*/



//We receive data down the stream we fill up the buffer it when its filled up it sends up a portion of the data
//and we are actively listening for the someData event when we are receiving the portion of data
//We get this data and we write it to a writeStream and send it somewhere else.
//
//
//Pipes help up take data from a read Stream and pipe it to a write stream Instead of listening for the event to receive
//data. The pipe does it automatically for me. The pipe automatically does it for us and pipes it to the write stream
//This prevents us from waiting for the data events and manually write to a write Stream. 
//
//I change the above code to this remember we can only pipe from a readable stream to a writeable stream
theReadStream.pipe(theWriteStream);
