var express = require('express')
var app = express()
var url = request.url;
var fs = require('fs');

app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) { 
  url = '/index.html';
  return res.send(fs.readFileSync(__dirname + url));
});
 
app.get('/page', function(req, res) { 
  return res.send('/page');
});
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
