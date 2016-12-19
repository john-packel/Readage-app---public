var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var request = require('request');
var parser = require('xml2json');

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser());


app.post('/getbooks', function (req, res) {
  console.log(req.body.book) //{book: book}
  
  // request('https://www.goodreads.com/author/list.xml?key=nmDiYOICgwuB6r82a1fDPA&q=' + req.body.book, function(error, response, body){
  request('https://www.goodreads.com/search.xml?key=nmDiYOICgwuB6r82a1fDPA&q=' + req.body.book, function(error, response, body){
    var json = parser.toJson(body);
    console.log("to json -> %s", json.GoodreadsResponse);

    // if(!error && response.statusCode == 200){
	res.send(json);
  });

  // res.send('Need A Good Read? test 1, 2, 3...');
  console.log('I am successfully receiving a GET request...');
});

app.post('/api', function(req, res) {
  res.send("you did a post request!")
});

app.listen(3000, function () {
  console.log('Need A Good Read? app listening on port 3000!')});

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
// app.get('/*', function (req, res) {  <!-- why didn't I need a GET? REVIEW THIS! -->
//   request('https://www.goodreads.com/search.xml?key=nmDiYOICgwuB6r82a1fDPA&q=Shadow+Divers', function(error, response, body){

    // // testString = '<xml><a>' + body + '</a></xml>';
    // testString = '<xml><a>It Works!</a></xml>';
    // result = xmlToJSON.parseString(testString);

  // $.get("http://jfcoder.com/test.xml.php", function(body){
  //   var json = $.xml2json(xml);
  //   $('pre').html(JSON.stringify(json)); // To show result in the browser
  // });


    // body = xmlToJSON.parseString(body);
    // console.log("+++++++++body: ", body);
    // if(!error && response.statusCode == 200){
  // res.send(result);
  // });

  
// app.use(bodyParser.json)();

// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// var returnBody = function(){
// 	request('http://www.google.com', function(error, response, body){
// 	if(!error && response.statusCode == 200){
// 		return body;
// 	}
// 	// else{console.log("error is " + error)}
// });
// };


// app.use(partials()); // ?? 
// // Parse JSON (uniform resource locators)
// app.use(bodyParser.json());
// // Parse forms (signup/login)
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(__dirname + '/public'));




// app.use(express.static('public'));
// app.use('/static', express.static('public'))
// app.use(express.static(path.join(__dirname, 'public')));
// app.use('/static', express.static(path.join(__dirname, 'public')));

// var db = require('./app/config'); // won't need unless I get to Mongo

// initial based on Chatterbox:

// var http = require('http'); 

// var port = 4000; 
// var ip = '127.0.0.1'; 

// var server = http.createServer(function(request,response){
// 	console.log('I am successfully serving request type: ' + request.method);
// });

// console.log('Listening on http://' + ip + ':' + port);

// server.listen(port, ip);

// don't need a router for SPA; don't need node url, won't be parsing URLs