const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  let img = __dirname + "/favlang.jpg";

  fs.access(img, fs.constants.F_OK, err => {
    //check that we can access  the file
    console.log(`${img} ${err ? "File does not exist" : "exists"}`);
  });

  fs.readFile(img, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>There is no such image 968 6342 56837</h1>");
    } else {
      //specify the content type in the response will be an image
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});
server.listen(27678, function() {
  console.log("Server running on port 27678 Nelan(C-Port) Fav Port");
});
