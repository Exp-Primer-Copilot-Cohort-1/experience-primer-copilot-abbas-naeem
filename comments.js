//Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var ROOT_DIR = "html/";

http.createServer(function (req, res) {
  var urlObj = url.parse(req.url, true, false);
  console.log("opening " + ROOT_DIR + urlObj.pathname);
  fs.readFile(ROOT_DIR + urlObj.pathname, function (err, data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(3000);