var needGoodReadApp = angular.module('need_a_good_read', []);
// create the controller and inject Angular's $scope
needGoodReadApp.controller('mainController', function($scope, $http) {
// should I be using ng-init for these instead? 
  var quoteChoice = function(){
    var quotes = ['“Taking a new step, uttering a new word, is what people fear most.”  - Fyodor Dostoyevsky', '“It takes something more than intelligence to act intelligently.”  - Fyodor Dostoyevsky', '“Only to live, to live and live! Life, whatever it may be!”  - Fyodor Dostoyevsky', '“What do you think, would not one tiny crime be wiped out by thousands of good deeds?”  - Fyodor Dostoyevsky'];
    return quotes[parseInt(Math.random()*4)];
  }
  $scope.message = quoteChoice();

  $scope.title = "The Brothers Karamazov";
  $scope.author = "Fyodor Dostoyevsky";
  $scope.rating = "4.30";
  $scope.year = "1880";
  $scope.image = "assets/brothers-karamazov.jpg";

  $scope.searchRequest = function(input){
    $http.post('/request', {search: input}).then(function(resp){
      console.log('requested = ', input);
      console.log('resp = ', resp);    
      $scope.title = resp.data.GoodreadsResponse.search.results.work[0].best_book.title;
      $scope.author = resp.data.GoodreadsResponse.search.results.work[0].best_book.author.name;
      $scope.rating = resp.data.GoodreadsResponse.search.results.work[0].average_rating;
      $scope.year = resp.data.GoodreadsResponse.search.results.work[0].original_publication_year.$t;
      $scope.image = resp.data.GoodreadsResponse.search.results.work[0].best_book.image_url;
    });
  };
});
     
needGoodReadApp.controller('NYTController', function ($scope, $http){
  $scope.NYTSearch = function (input) {
    console.log('l41: input = ', input);
    $http.post('/NYTrequest', {search: input}).then(function(resp){
      var NYTresultsObj = resp.data.response.docs;

 
      var leadsArray = [];
      for(var x = 0; x < 10; x++){
        leadsArray.push(NYTresultsObj[x].lead_paragraph)
      }
      var bylinesArray = [];
      for(var y = 0; y < 10; y++){
        leadsArray.push(NYTresultsObj[y].byline.original)
      }
     var headlinesArray = [];
      for(var w = 0; w < 10; w++){
        leadsArray.push(NYTresultsObj[w].headline.main)
      }
      
      console.log(leadsArray);
      console.log(bylinesArray);

      $scope.results = {
        headlines: headlinesArray,
        leads: leadsArray,
        // headlines: bylinesArray

        // leads: ['A way of life imported from Denmark extols wooden bowls, cuddling, old shoes and line-dried laundry, among many other wholesome items and behaviors.', 'Before his most memorable television role as a masked vigilante, Mr. Williams played the detective Kenny Madison on two ABC series.']
      }

      // $scope.lead = resp.data.response.docs[0].lead_paragraph;
      // $scope.NYTauthor = resp.data.response.docs[0].byline.original;
      // $scope.headline = resp.data.response.docs[0].headline.main;
      // var dateFormat = resp.data.response.docs[0].pub_date;
      // $scope.pubdate = dateFormat.slice(5,7) + '/' + dateFormat.slice(8,10) + '/' + dateFormat.slice(0,4);
      // $scope.section = resp.data.response.docs[0].section_name;
      // $scope.web_url = resp.data.response.docs[0].web_url;
    });
  };
});

  // alternates for default image:
    // $scope.image = "assets/shadow divers.jpeg"
    // $scope.image = "assets/pirate hunters.jpeg";

  // tried to have the twitter widget update
  // $scope.id = "809943805646487552"; // brothers karamazov
    // alternate:
    // $scope.id = "809944434095820800"; // dostoyevsky