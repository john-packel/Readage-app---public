var needGoodReadApp = angular.module('need_a_good_read', []);

    // create the controller and inject Angular's $scope
  needGoodReadApp.controller('mainController', function($scope, $http) {

  $scope.message = '“Taking a new step, uttering a new word, is what people fear most.”  - Fyodor Dostoyevsky';

  $scope.title = "The Brothers Karamazov";
  $scope.author = "Fyodor Dostoyevsky";
  $scope.rating = "4.30";
  $scope.year = "1880";
  $scope.image = "assets/brothers-karamazov.jpg";
  // $scope.image = "assets/shadow divers.jpeg"
  // $scope.image = "assets/pirate hunters.jpeg";
  // $scope.id = "809944434095820800"; // dostoyevsky

  $scope.id = "809943805646487552"; // brothers karamazov

  
          

        $scope.sendBooks = function(book){
          $http.post('/getbooks', {book: book}
            ).then(function(resp){
              console.log(resp);
              
              $scope.title = resp.data.GoodreadsResponse.search.results.work[0].best_book.title;

              $scope.author = resp.data.GoodreadsResponse.search.results.work[0].best_book.author.name;

              $scope.rating = resp.data.GoodreadsResponse.search.results.work[0].average_rating;

              $scope.year = resp.data.GoodreadsResponse.search.results.work[0].original_publication_year.$t;

              $scope.image = resp.data.GoodreadsResponse.search.results.work[0].best_book.image_url;
          });
        };
   });
     


    // “It takes something more than intelligence to act intelligently.” “Only to live, to live and live! Life, whatever it may be!”

    // “What do you think, would not one tiny crime be wiped out by thousands of good deeds?”

 
        // $scope.result  // will need to put this into scope, right? 

 // testString = '<xml><a>It Works!</a></xml>';  // get some xml (string or document/node) 
 // result = xmlToJSON.parseString(testString);	// parse 

        // testString = '<xml><a> PUT XML HERE </a></xml>';
        
        // result = xmlToJSON.parseString(testString);
     
          // $scope.message = xmlToJSON.parseString(<id type="integer">1267146</id>
          //       <books_count type="integer">33</books_count>
          //       <ratings_count type="integer">17876</ratings_count>
          //       <text_reviews_count type="integer">1659</text_reviews_count>
          //       <original_publication_year type="integer">2004</original_publication_year>
          //       <original_publication_month type="integer">1</original_publication_month>
          //       <original_publication_day type="integer">1</original_publication_day>
          //       <average_rating>4.25</average_rating>
          //       <best_book type="Book">
          //           <id type="integer">9530</id>
          //           <title>Shadow Divers</title>
          //           <author>
          //               <id type="integer">6243</id>
          //               <name>Robert Kurson</name>
          //           </author>
          //           <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
          //           <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
          //       </best_book>);

           // $scope.message = result;




        // <id type="integer">1267146</id>
        //         <books_count type="integer">33</books_count>
        //         <ratings_count type="integer">17876</ratings_count>
        //         <text_reviews_count type="integer">1659</text_reviews_count>
        //         <original_publication_year type="integer">2004</original_publication_year>
        //         <original_publication_month type="integer">1</original_publication_month>
        //         <original_publication_day type="integer">1</original_publication_day>
        //         <average_rating>4.25</average_rating>
        //         <best_book type="Book">
        //             <id type="integer">9530</id>
        //             <title>Shadow Divers</title>
        //             <author>
        //                 <id type="integer">6243</id>
        //                 <name>Robert Kurson</name>
        //             </author>
        //             <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
        //             <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
        //         </best_book>
          

