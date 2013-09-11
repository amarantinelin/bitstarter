var express = require('express');
var app = express();
app.use(express.logger());

var fs = require('fs');
var htmlfile = "index.html";
app.get('/', function(request, response) {
    var data = fs.readFileSync(htmlfile).toString();
 //   var buf = new Buffer(data, 'utf-8');
    response.send(html);
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
