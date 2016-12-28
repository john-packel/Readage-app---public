var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var request = require('request');
var parser = require('xml2json');

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser());

app.post('/request', function (req, res) {
  console.log('server.js l. 14: req.body.search = ', req.body.search)
  console.log('server.js l. 14: req.body = ', req.body)
  // console.log('server.js l. 14: req = ', req)

  request('https://www.goodreads.com/search.xml?key=nmDiYOICgwuB6r82a1fDPA&q=' + req.body.search,function(error, response, body){
      if(error){
        console.error('Error at line 17 in index.js (server).');
        return next(error);
      }
        else {
    var json = parser.toJson(body);
    console.log("to json -> %s", json.GoodreadsResponse);
	res.send(json);}
  });

  console.log('I am successfully receiving a GET request...');
});

app.post('/NYTrequest', function (req, res) {
  console.log('server.js l. 31: NYTrequest req.body.search ', req.body.search);

  request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=6a37f426b37a40daa8a4bca027c34077',
   function(error,response, body){
    if(error){
      console.error('Error at line 35 in index.js (server).');
      return next (error);
    }
    else {
    console.log(body);
    res.send(body);}
  })
});

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Need A Good Read? app listening on port ' + port + ', defined by process.env.port');

// I believe I don't need a server-config file because those elements are in this file. 
// Do I need Grunt, other dependencies, .deployment, any devDependencies, anything else in gitignore?
// NEED TO REMOVE API KEYS!!! to config.js file? 

// code from API:
// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': "6a37f426b37a40daa8a4bca027c34077",
//     'q': "dostoyevsky"
//   },
// }, function(err, response, body) {
//   body = JSON.parse(body);
//   console.log(body);
// });

// var bodyParser = function(){  // Illustration of what bodyParser is doing (Jeff)
//   return function(req, res, next){
//     var string = ''
//     req.on('data', function(chunk){
//       string += chunk
//     })
//     req.on('end', function(){
//       req.body = string
//       next();
//     })
//   }
// }