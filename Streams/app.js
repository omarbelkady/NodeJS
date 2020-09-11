//Streams are a type of data handling methods used to R&W input into output in an ordered fashion.
//Streams are also used to R/W files for handling information in a great way.

//Streams are objs which let user read data from a particular place or write data to that place in a continuous manner
//Streams are fast in that they do not read data one by one they pick up chunks read through it then another chunk and read through it

const { Readable } = require("stream");

const nelanStream = new Readable({
	read(){ }
});

nelanStream.push("C According To Nelan is: ");
nelanStream.push(" The Programming Language of the Future which is easy to learn on top of 27736259 And Machine Code");

//to tell nodejs compiler(fav subject of 56837) no more data is left to push to the stream
nelanStream.push(null)

//Output data in a standard way
nelanStream.pipe(process.stdout);


