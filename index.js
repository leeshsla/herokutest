const express = require('express')
const app = express()
 
app.set('port', (process.env.PORT || 5000))

app.get('/', function(req, res) { 
  return res.send('/');
});
 
app.get('/page', function(req, res) { 
  return res.send('/page');
});
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
