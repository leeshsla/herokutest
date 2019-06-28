var http = require('http');
var fs = require('fs');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
      var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    response.writeHead(200);
    response.end(fs.readFileSync(__dirname + url));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});
