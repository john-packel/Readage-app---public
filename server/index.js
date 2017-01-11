var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var request = require('request');
var parser = require('xml2json');



app.use(express.static(__dirname + '/../client'));
app.use(bodyParser());

app.post('/request', function (req, res) {
  console.log('index.js l. 14: req.body.search = ', req.body.search)
  console.log('index.js l. 14: req.body = ', req.body)
  // console.log('server.js l. 14: req = ', req)

// example of book search by GR id - Brothers Karamazov - (to get description)
    // request('https://www.goodreads.com/book/show/4934.xml?key=nmDiYOICgwuB6r82a1fDPA', function(error, response, body){

  request('https://www.goodreads.com/search.xml?key=nmDiYOICgwuB6r82a1fDPA&q=' + req.body.search,function(error, response, body){
      if(error){
        console.error('Error at line 17 in index.js (server).');
        return next(error);
      }
        else {
    var json = parser.toJson(body);
    // console.log("to json -> %s", json.GoodreadsResponse);
	res.send(json);}
  });

  console.log('I am successfully receiving a GET request...');
});

app.post('/NYTrequest', function (req, res) {
  console.log('index.js l. 34: NYTrequest req.body.search ', req.body.search);

  request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=6a37f426b37a40daa8a4bca027c34077',
   function(error,response, body){
    if(error){
      console.error('Error at line 35 in index.js (server).');
      return next (error);
    }
    else {
    // console.log(body);
    res.send(body);}
  })
});

var port = process.env.PORT || 8080;

app.listen(port);

console.log('Time for a Good Read? app listening on port ' + port + ', defined by process.env.port');

// =================================================
// Trying to use x-ray to scrape Quora.com:

  var Xray = require('x-ray');
  var x = Xray();
  // var x = new Xray();
 
// tried examples in documentation, tutorials and this talk: https://www.fullstackacademy.com/tech-talks/web-scraping-with-x-ray
  // I can get the question and question URL but can't figure out how to filter out all the other stuff

// these 3 return same results: @class="rendered_qtext" AND @class="question_text" AND @class="question_link"

  // x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class="rendered_qtext"'}])

  // x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class="question_text"'}])

  x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class.question_text', href: '@href', ql: '@a.question_link', rqt: '@span.rendered_qtext'}])


// x('https://www.quora.com/topic/Bitcoin', 'span', ['@class="rendered_qtext"'])

// #__w2_p4vsdhp_link > span > span

   
// to get the a tags, doesn't matter whether @span.question_text or blank ''
// x('https://www.quora.com/topic/Bitcoin', 'a', [{atags: '@span.question_text'}])
// x('https://www.quora.com/topic/Bitcoin', 'a', [{atags: ''}])

//  x('https://www.quora.com/topic/Bitcoin', {
//   title: 'title',
//   body: x('body', {href: '@href'})
//   // body: x('body', {section: x('@web_page logged_out pretty_blogs lang_en gating-comment_upvoters-off gating-qtext2_beta_group-off gating-feed_desktop_modal-off', {href: '@href'})})
// })

  // questions: x('@div class="QuestionText', {href: '@href'})
  // elements: x('@"pagedlist_item"', {q: '@div class="QuestionText'})


 // paged list item: #uqBNtD
// feed paged list: #tcFUwN



//   // body: 'body',
//   // items: x('.item', [{
//   //   title: '.item-content',
//   //   description: '.item-content section'
  // }])

(function(err, obj) {
  console.log('obj = ', obj)})


// from documentation: 

// var Xray = require('x-ray');
// var x = Xray();
 
// x('https://dribbble.com', 'li.group', [{
//   title: '.dribbble-img strong',
//   image: '.dribbble-img [data-src]@data-src',
// }])
//   .paginate('.next_page@href')
//   .limit(3)
//   .write('results.json');


// x('https://www.quora.com/topic/Bitcoin', 'title').write('results.json')



// x('http://news.ycombinator.com', 'body@html')(function(results){
//   console.log('results.json =', results);
//   console.log('inner html =', body);
// });

// x('http://google.com', 'title')(function(err, title) {
//   console.log('index.js line 69 +++++');
//   console.log(title) // Google 
// });





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