// NEED TO REMOVE API KEYS!!!

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var request = require('request');
var parser = require('xml2json');

require('dotenv').config();

// Ex in documentation: https://devcenter.heroku.com/articles/config-vars
// const aws = require('aws-sdk');
//
// let s3 = new aws.S3({
//   accessKeyId: process.env.S3_KEY,
//   secretAccessKey: process.env.S3_SECRET
// });


var Goodreads_Key = process.env.GOODREADS_KEY;
var NYTimes_Article_Key = process.env.NYTIMES_ARTICLE_KEY;

app.use(express.static(__dirname + '/../client'));
app.use(bodyParser());

app.post('/request', function (req, res) {
  console.log('index.js l. 13: Goodreads req.body.search = ', req.body.search)
  console.log('index.js l. 15: Goodreads req.body = ', req.body)
  console.log('GReads key = ', Goodreads_Key)
  console.log('index.js l. 25. search string: https://www.goodreads.com/search.xml?key=' + Goodreads_Key + 'q=' + req.body.search)
  // console.log('server.js l. 14: req = ', req)
  request('https://www.goodreads.com/search.xml?key=' + Goodreads_Key + '&q=' + req.body.search, function(error, response, body){
      if(error){
        console.error('Error at line 17 in index.js (server).');
        return next(error);
      }
        else {
    var json = parser.toJson(body);
    // console.log("to json -> %s", json.GoodreadsResponse);
    console.log('index.js l. 25. search string: https://www.goodreads.com/search.xml?key=' + Goodreads_Key + 'q=' + req.body.search);
	res.send(json);}
  });
  // example of book search by GR id - Brothers Karamazov - (to get description)
    // request('https://www.goodreads.com/book/show/4934.xml?key=<<REMOVED>>', function(error, response, body){
});

app.post('/requestSynopsis', function(req, res) {
  console.log('index.js l. 33; request received from controller for requestSynopsis: ', req.body.search);
  request('https://www.goodreads.com/book/show/' + req.body.search +'.xml?key=' + Goodreads_Key, function(error, response, body) {
    if(error) {
      console.error('Error at l. 36 in index.js (server).');
      return next(error);
    } else {
      var json = parser.toJson(body);
   res.send(json)}
  });
});

app.post('/NYTrequest', function (req, res) {
  console.log('index.js l. 34: NYTrequest req.body.search ', req.body.search);

  request('https://api.nytimes.com/svc/search/v2/articlesearch.json?q=' + req.body.search + '&api-key=' + NYTimes_Article_Key,
   function(error,response, body){
    if(error){
      console.error('Error at line 40 in index.js (server).');
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

app.post('/QuoraRequest', function (req, res) {
  console.log('index.js l. 55: QuoraRequest req.body.search ', req.body.search);

// ==========================  x-ray to scrape Quora.com:

  var Xray = require('x-ray');
  var x = Xray();

var QuoraQURL;
var QuoraQuestion;

// x('https://www.quora.com/search?q=george+bush', '.QueryResults', [{
//   QQuestionLink: x('.question_link @href'),
//   QQuestion:  x('.rendered_qtext')
//
var space = / /gi;
var replacedValue = req.body.search.replace(space, '+');
console.log('replacedValue = ', replacedValue);
// previous before replace fix above: x('https://www.quora.com/search?q=' + req.body.search.replace(' ','+'), '.pagedlist_item', [{

x('https://www.quora.com/search?q=' + replacedValue, '.pagedlist_item', [{
  QQuestionLink: x('.question_link @href'),
  QQuestion:  x('.rendered_qtext')
}])
// (function(err, qtext) {
//   console.log('index.js l 71: qtext = ', qtext);

// working code John M helped me figure out:
// x('https://www.quora.com/topic/' + req.body.search, '.QuestionText', [{
//   QQuestionLink: x('.question_link @href'),
//   QQuestion:  x('.rendered_qtext')
// }])
(function(err, qtext) {
  console.log('index.js l 71: qtext = ', qtext);
  console.log('search string = ', 'https://www.quora.com/search?q=' + req.body.search.replace(' ','+'));
  if(qtext === undefined) {
        $scope.QuoraQuestion1 = "Sorry, there are no Quora.com results for this search term. Must be a weird one because they have all kids of silly stuff on there.";
      };
  // QuoraQURL = qtext[0].QQuestionLink;
  // QuoraQuestion = qtext[0].QQuestion;
  // // console.log('QuoraQURL = ', qtext[0].QQuestionLink);
  // // console.log('QuoraQuestion = ', qtext[0].QQuestion);
  // console.log('QuoraQURL from var = ', QuoraQURL);
  // console.log('QuoraQuestion from var = ', QuoraQuestion);

  res.send(qtext);
});
});


// from John when working it out:
// x('https://www.quora.com/topic/Bitcoin', '.question_text', [
//   question: x('.rendered_qtext')
// }]) // this is called composing; calling function again on the initial results
// (function(err, qtext) {
//   console.log(qtext)
// })

// x('https://www.quora.com/topic/Bitcoin', ['a question_link'])(function(err, qtext) {
//   console.log(qtext)
// })

// x('https://www.quora.com/topic/Bitcoin', ['.rendered_qtext', '@href', 'question_link@href'])(function(err, qtext) {
//   console.log(qtext)
// })



// I tried examples in documentation, tutorials and this talk: https://www.fullstackacademy.com/tech-talks/web-scraping-with-x-ray
  // I can get the question and question URL but can't figure out how to filter out all the other stuff

// these 3 return same results: @class="rendered_qtext" AND @class="question_text" AND @class="question_link"

  // x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class="rendered_qtext"'}])

  // x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class="question_text"'}])

  // x('https://www.quora.com/topic/Bitcoin', 'a', [{crqt: '@class.question_text', href: '@href', ql: '@a.question_link', rqt: '@span.rendered_qtext'}])

// x('https://www.quora.com/topic/Bitcoin', '#__w2_PoIJk4i_feed_item', [{qt: 'div.Question_Text'
//   @class.question_text', href: '@href', ql: '@a.question_link', rqt: '@span.rendered_qtext'}])


// got this working based on tutorial, but only headline & imageURL are returned
  // x('http://www.wsj.com/news/whats-news', '#move_2 > div.zonedModule > div > ul > li', [{
  //   headline: 'h3 a', // so it drills down based on this path? selector > h3 > a
  //   link: 'h3 a @href',
  //   imageURL: 'img@data-src',
  //   snippet: 'div.summary-container p', // he doesn't explain why .summary
  //   keyword: x('h3 @href', 'head meta[name="keywords"]@content')
  // }])

// John M: website is tree; html > body >



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

// (function(err, obj) {
//   console.log('obj = ', obj)})


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


// code from API:
// request.get({
//   url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//   qs: {
//     'api-key': <<removed for security>>,
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
