const http = require("http");
const fs = require("fs");

let server = http.createServer((req, res) => {

  if (req.url == "/" || req.url == "home") {
    fs.createReadStream(__dirname + "/index.html").pipe(res);
  } 
  else if (req.url == "obj") {
    res.writeHead(200, { "Content-Type": "application/json" });
    let obj = {
      name: "qc",
      age: 123,

    }
    res.end(JSON.stringify(obj))
  }
  else {
    res.writeHead(404);
    res.end("NOT FOUND")
  }

})

server.listen(1130, "127.0.0.1");