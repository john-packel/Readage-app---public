var needGoodReadApp = angular.module('need_a_good_read', []);
// create the controller and inject Angular's $scope
needGoodReadApp.controller('mainController', function($scope, $http) {
// should I be using ng-init for these instead? 
  var quoteChoice = function(){
    var quotes = ['“Taking a new step, uttering a new word, is what people fear most.”  - Fyodor Dostoyevsky', '“It takes something more than intelligence to act intelligently.”  - Fyodor Dostoyevsky', '“Only to live, to live and live! Life, whatever it may be!”  - Fyodor Dostoyevsky', '“What do you think, would not one tiny crime be wiped out by thousands of good deeds?”  - Fyodor Dostoyevsky', '“To go wrong in one\'s own way is better than to go right in someone else\'s.” - Fyodor Dostoyevsky'];
    return quotes[parseInt(Math.random()*5)];
  }
  $scope.message = quoteChoice(); // module.exports = quoteChoice;

// ================== default display & Goodreads.com results ================================
  $scope.title = "The Brothers Karamazov";
  $scope.author = "Fyodor Dostoyevsky";
  $scope.rating = "4.30";
  $scope.year = "1880";
  $scope.image = "assets/brothers-karamazov.jpg";
  $scope.synopsis = "The award-winning translation of Dostoevsky's last and greatest novel. 'The Brothers Karamazov' is a passionate philosophical novel set in 19th-century Russia that enters deeply into the ethical debates regarding God, free will and morality. It is a spiritual drama of moral struggles concerning faith, doubt and reason, set against a modernizing Russia. It is one of John Packel's favorite books, and he loves this quote that harks back to Polonius' farewell speech to Laertes in Shakespeare's 'Hamlet': 'Above all, don't lie to yourself. The man who lies to himself and listens to his own lie comes to a point that he cannot distinguish the truth within him, or around him, and so loses all respect for himself and for others. And having no respect he ceases to love.'";

  $scope.searchRequest = function(input){
    $http.post('/request', {search: input}).then(function(resp){
      console.log('script-controller.js l 21: mainController / Goodreads input (request) = ', input);
      // console.log('resp = ', resp);    
      $scope.title = resp.data.GoodreadsResponse.search.results.work[0].best_book.title;
      $scope.author = resp.data.GoodreadsResponse.search.results.work[0].best_book.author.name;
      $scope.rating = resp.data.GoodreadsResponse.search.results.work[0].average_rating;
      $scope.year = resp.data.GoodreadsResponse.search.results.work[0].original_publication_year.$t;
      $scope.image = resp.data.GoodreadsResponse.search.results.work[0].best_book.image_url;
      $scope.synopsis = '';
      // $scope.synopsis = resp.data.GoodreadsResponse.book.description; // need to make 2nd API call to get this
    });
  };
});
     
// ================== New York Times results ===================================
needGoodReadApp.controller('NYTController', function ($scope, $http){
  $scope.NYTSearch = function (input) {
    console.log('script-controller.js l37: NYTController input (request) = ', input);
    $http.post('/NYTrequest', {search: input}).then(function(resp){
      if(resp.data.response === undefined) {
          console.log('Sorry, the New York Times is not returning search results for this term.');
          $scope.NYTauthor = "Sorry, the New York Times is not returning search results for this term."
          $scope.pubdate = "I know; what the dilly yo? Seriously."
          $scope.section = " Please try another search using the input box at the top of the the page."
          $scope.lead = "If you're really pissed, you can reach the Times' Public Editor at public@nytimes.com. :)"
          return;
         } else {

      var NYTresultsObj = resp.data.response.docs;

      console.log('script-controller.js l40: NYTController: NYTresultsObj = ', NYTresultsObj);
 
      if(!resp.data.response.docs[9].lead_paragraph) {$scope.lead = "Sorry, no result returned."} else {
        $scope.lead = resp.data.response.docs[9].lead_paragraph;
      }
      if(!resp.data.response.docs[9].byline) {$scope.NYTauthor = "Sorry, no result returned."} else {
        $scope.NYTauthor = resp.data.response.docs[9].byline.original;
      }
      if(!resp.data.response.docs[9].headline) {$scope.headline = "Sorry, no result returned."} else {
        $scope.headline = resp.data.response.docs[9].headline.main;
      }
      if(!resp.data.response.docs[9].pub_date) {$scope.pubdate = "Sorry, no result returned."} else {
        var dateFormat = resp.data.response.docs[9].pub_date;
        $scope.pubdate = dateFormat.slice(5,7) + '/' + dateFormat.slice(8,10) + '/' + dateFormat.slice(0,4);
      }
      if(!resp.data.response.docs[9].section_name) {$scope.section = "Sorry, no result returned."} else {
        $scope.section = resp.data.response.docs[9].section_name;
      }
      if(!resp.data.response.docs[9].web_url) {$scope.web_url = "Sorry, no result returned."} else {
        $scope.web_url = resp.data.response.docs[9].web_url;
      }
     // from my attempt to display more than 1 result:
        //  var leadsArray = [];
     //  for(var x = 0; x < 10; x++){
     //    leadsArray.push(NYTresultsObj[x].lead_paragraph)
     //  }
     //  var bylinesArray = [];
     //  for(var y = 0; y < 10; y++){
     //    leadsArray.push(NYTresultsObj[y].byline.original)
     //  }
     // var headlinesArray = [];
     //  for(var w = 0; w < 10; w++){
     //    leadsArray.push(NYTresultsObj[w].headline.main)
     //  }
      
     //  console.log(leadsArray);
     //  console.log(bylinesArray);

     //  $scope.results = {
     //    // headlines: headlinesArray,
     //    leads: leadsArray
     //    // headlines: bylinesArray
     //  }
    }});
  };
});

// ================== Quora.com results ===================================
needGoodReadApp.controller('QuoraController', function($scope) {
  $scope.QuoraSearch = function (input) {
    console.log('script-controller.js line 81. QuoraController: input is: ', input);
    // ==================== x-ray to scrape Quora.com 

    var Xray = require('x-ray');
    var x = Xray();
    var QuoraQURL;
    var QuoraQuestion;

    x('https://www.quora.com/topic/Bitcoin', '.QuestionText', [{
      QQuestionLink: x('.question_link @href'),
      QQuestion:  x('.rendered_qtext')
    }])
    (function(err, qtext) {
      console.log(qtext);
      QuoraQURL = qtext[0].QQuestionLink;
      QuoraQuestion = qtext[0].QQuestion;
        // console.log('QuoraQURL = ', qtext[0].QQuestionLink);
        // console.log('QuoraQuestion = ', qtext[0].QQuestion);
      console.log('QuoraQURL from var = ', QuoraQURL);
      console.log('QuoraQuestion from var = ', QuoraQuestion);
    }); 

    $scope.QuoraQuestion = QuoraQuestion;
    var topicURL = 'https://www.quora.com/topic/Bitcoin' + {search: input};
    console.log('script-controller.js line 87. QuoraController: topicURL is: ', topicURL);
  }
})

  // alternates for default image:
    // $scope.image = "assets/shadow divers.jpeg"
    // $scope.image = "assets/pirate hunters.jpeg";

  // tried to have the twitter widget update
  // $scope.id = "809943805646487552"; // brothers karamazov
    // alternate:
    // $scope.id = "809944434095820800"; // dostoyevsky