var express = require('express')
var app = express()
var fs = require('fs');
 
var template = {
  HTML:function(title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB1 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },list:function(filelist){
    var list = '<ul>';
    var i = 0;
    while(i < filelist.length){
      list = list + `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`;
      i = i + 1;
    }
    list = list+'</ul>';
    return list;
  }
}

app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response) { 
  fs.readdir('./data', function(error, filelist){
    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.HTML(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`
    ); 
    response.send(html);
  });
});
 
app.get('/page', function(req, res) { 
  return res.send('/page');
});
 
app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
