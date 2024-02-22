//Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var comments = [];

http.createServer(function (req, res) {
  //parse URL
  var parsedUrl = url.parse(req.url, true);
  var pathName = parsedUrl.pathname;
  if (pathName === '/') {
    fs.readFile('./index.html', function (err, data) {
      if (err) {
        res.end('404 Not Found');
      } else {
        res.end(data);
      }
    });
  } else if (pathName === '/post') {
    var comment = parsedUrl.query;
    comments.push(comment);
    res.end('success');
  } else if (pathName === '/get') {
    var commentStr = JSON.stringify(comments);
    res.end(commentStr);
  } else {
    fs.readFile('.' + pathName, function (err, data) {
      if (err) {
        res.end('404 Not Found');
      } else {
        res.end(data);
      }
    });
  }
}).listen(3000);
console.log('Server is running at http://');