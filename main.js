var http = require('http');
var fs = require('fs');
var url = require('url');


var app = http.createServer(function (request, response) {
  var _url = request.url;

  // url의 queryString 정보를 가져오는 로직
  var queryData = url.parse(_url, true).query;
  // url의 queryString 정보를 가져오는 로직
  var pathname = url.parse(_url, true).pathname;

  if (pathname === '/') {
    if (queryData.id === undefined) {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, descrition) {
        var descrition = "hello, Node.Js"
        var title = "welcome";
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${descrition}</p>
          </body>
          </html>      
          `;
        response.writeHead(200);
        response.end(template);
      });
    } else {
      fs.readFile(`data/${queryData.id}`, 'utf8', function (err, descrition) {
        var title = queryData.id;
        var template = `
          <!doctype html>
          <html>
          <head>
            <title>WEB1 - ${title}</title>
            <meta charset="utf-8">
          </head>
          <body>
            <h1><a href="/">WEB</a></h1>
            <ul>
              <li><a href="/?id=HTML">HTML</a></li>
              <li><a href="/?id=CSS">CSS</a></li>
              <li><a href="/?id=JavaScript">JavaScript</a></li>
            </ul>
            <h2>${title}</h2>
            <p>${descrition}</p>
          </body>
          </html>      
          `;
        response.writeHead(200);
        response.end(template);
      });
    }
  }
  else {
    response.writeHead(404);
    response.end("not founding");
  }


});
app.listen(3000);