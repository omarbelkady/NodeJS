const http = require("http");
const fs = require("fs");

const server = http.createServer(function(req, res) {
  let img = __dirname + "/pod.jpg";

  fs.access(img, fs.constants.F_OK, err => {
    //check that we can access  the file
    console.log(`${img} ${err ? "does not exist" : "exists"}`);
  });

  fs.readFile(img, function(err, content) {
    if (err) {
      res.writeHead(404, { "Content-type": "text/html" });
      res.end("<h1>No such image</h1>");
    } else {
      //specify the content type in the response will be an image
      res.writeHead(200, { "Content-type": "image/jpg" });
      res.end(content);
    }
  });
});
server.listen(1234, function() {
  console.log("Server running on port 1234");
});
