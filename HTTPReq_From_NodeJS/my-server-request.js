//To use http
//const http= require("http");


//Using now https
const https = require("https");

//.Transform used to modify or transform data while I am writing it or reading from it
const Stream = require("stream").Transform;

const fs = require("fs");
//I make the request thanks to the http/https module here I am requesting https
https
	.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY", resp => {
		let data = "";


		//data has been received
		resp.on("data", chunk =>{
			data += chunk;
		});

		//Full response received
		resp.on("end", () =>{
			//I can change this title to get the title back
			//let url = JSON.parse(data).hdurl;
			let url = JSON.parse(data).hdurl;
			console.log(url);
			
			https.get(url, res => {
				console.log(res.headers);
				console.log(res.headers["content-type"], res.headers["content-length"]);

				//if you want to check for a different image type like gif or png then place it there
				if(res.statusCode == 200 && res.headers["content-type"]=="image/jpeg")
				{
					//caching and saving the image in the local fs
					let img = new Stream();

					res.on("data", chunk => {
						//instead of concatenating to the string I push to the stream instead
						img.push(chunk);
					});

					
					res.on("end", () => {
						//where I save it ... dirname is built-in node function which tells us where our curret directory is
						let filename = __dirname + "/apod.jpg";
						fs.writeFileSync(filename, img.read());//take everything from the stream and write it to the file
					});
				}

			});
		});
})
.on("error", err => {
	console.log("Error: " + err.message)
});
