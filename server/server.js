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

  request('https://www.goodreads.com/search.xml?key=nmDiYOICgwuB6r82a1fDPA&q=' + req.body.search, function(error, response, body){
    var json = parser.toJson(body);
    console.log("to json -> %s", json.GoodreadsResponse);
	res.send(json);
  });

  console.log('I am successfully receiving a GET request...');
});

app.post('/NYTrequest', function (req, res) {
  console.log('server.js l. 28: NYTrequest req.body.search ', req.body.search);

  request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=6a37f426b37a40daa8a4bca027c34077',
   function(error,response, body){
    console.log(body);
    res.send(body);
  })
});

app.listen(3000, function () {
  console.log('Need A Good Read? app listening on port 3000!')});

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