// var needGoodReadApp = angular.module('need_a_good_read', []);

    // create the controller and inject Angular's $scope
    // needGoodReadApp.controller('mainController', function($scope) {
        // $scope.message = '“Taking a new step, uttering a new word, is what people fear most.” - Fyodor Dostoyevsky';

        // $scope.result  // will need to put this into scope, right? 

        // Joseph: put full xml response between <a> tags and then console.log the object it parses; then I can determine which properties to pull out
 // https://www.npmjs.com/package/xmltojson
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

    // });


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


// complete XML:
// <?xml version="1.0" encoding="UTF-8"?>
// <GoodreadsResponse>
//     <Request>
//         <authentication>true</authentication>
//         <key>
//             <![CDATA[nmDiYOICgwuB6r82a1fDPA]]>
//         </key>
//         <method>
//             <![CDATA[search_search]]>
//         </method>
//     </Request>
//     <search>
        
//         <query>
//             <![CDATA[Robert Kurson]]>
//         </query>
        
//         <results-start>1</results-start>
//         <results-end>9</results-end>
//         <total-results>9</total-results>
        
//         <source>Goodreads</source>
//         <query-time-seconds>0.09</query-time-seconds>
//         <results>
            
//             <work>
//                 <id type="integer">1267146</id>
//                 <books_count type="integer">33</books_count>
//                 <ratings_count type="integer">17876</ratings_count>
//                 <text_reviews_count type="integer">1659</text_reviews_count>
//                 <original_publication_year type="integer">2004</original_publication_year>
//                 <original_publication_month type="integer">1</original_publication_month>
//                 <original_publication_day type="integer">1</original_publication_day>
//                 <average_rating>4.25</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">9530</id>
//                     <title>Shadow Divers</title>
//                     <author>
//                         <id type="integer">6243</id>
//                         <name>Robert Kurson</name>
//                     </author>
//                     <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
//                     <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">42710965</id>
//                 <books_count type="integer">13</books_count>
//                 <ratings_count type="integer">4525</ratings_count>
//                 <text_reviews_count type="integer">749</text_reviews_count>
//                 <original_publication_year type="integer">2015</original_publication_year>
//                 <original_publication_month type="integer">6</original_publication_month>
//                 <original_publication_day type="integer">16</original_publication_day>
//                 <average_rating>3.97</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">23164968</id>
//                     <title>Pirate Hunters: Treasure, Obsession, and the Search for a Legendary Pirate Ship</title>
//                     <author>
//                         <id type="integer">6243</id>
//                         <name>Robert Kurson</name>
//                     </author>
//                     <image_url>https://images.gr-assets.com/books/1432123218m/23164968.jpg</image_url>
//                     <small_image_url>https://images.gr-assets.com/books/1432123218s/23164968.jpg</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">384885</id>
//                 <books_count type="integer">1</books_count>
//                 <ratings_count type="integer">2410</ratings_count>
//                 <text_reviews_count type="integer">526</text_reviews_count>
//                 <original_publication_year type="integer">2006</original_publication_year>
//                 <original_publication_month type="integer" nil="true"/>
//                 <original_publication_day type="integer" nil="true"/>
//                 <average_rating>3.93</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">655211</id>
//                     <title>Crashing Through: A True Story of Risk, Adventure, and the Man Who Dared to See</title>
//                     <author>
//                         <id type="integer">6243</id>
//                         <name>Robert Kurson</name>
//                     </author>
//                     <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
//                     <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">1232803</id>
//                 <books_count type="integer">3</books_count>
//                 <ratings_count type="integer">23</ratings_count>
//                 <text_reviews_count type="integer">1</text_reviews_count>
//                 <original_publication_year type="integer">1998</original_publication_year>
//                 <original_publication_month type="integer">4</original_publication_month>
//                 <original_publication_day type="integer">1</original_publication_day>
//                 <average_rating>4.00</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">528730</id>
//                     <title>Official Three Stooges Encyclopedia: The Ultimate Knucklehead's Guide to Stoogedom-From Amalgamated Association of Morons to Ziller...</title>
//                     <author>
//                         <id type="integer">6243</id>
//                         <name>Robert Kurson</name>
//                     </author>
//                     <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
//                     <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
//                 </best_book>
//             </work>
//             <work>
//                 <id type="integer">27073772</id>
//                 <books_count type="integer">1</books_count>
//                 <ratings_count type="integer">3</ratings_count>
//                 <text_reviews_count type="integer">0</text_reviews_count>
//                 <original_publication_year type="integer" nil="true"/>
//                 <original_publication_month type="integer" nil="true"/>
//                 <original_publication_day type="integer" nil="true"/>
//                 <average_rating>4.67</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">19048932</id>
//                     <title>Into the Light</title>
//                     <author>
//                         <id type="integer">6243</id>
//                         <name>Robert Kurson</name>
//                     </author>
//                     <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
//                     <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">42285567</id>
//                 <books_count type="integer">1</books_count>
//                 <ratings_count type="integer">18</ratings_count>
//                 <text_reviews_count type="integer">2</text_reviews_count>
//                 <original_publication_year type="integer">2012</original_publication_year>
//                 <original_publication_month type="integer">12</original_publication_month>
//                 <original_publication_day type="integer">3</original_publication_day>
//                 <average_rating>4.17</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">22743150</id>
//                     <title>Shadow Divers: The True Adventure of Two Americans Who Risked Everything to Solve One of the Last Mysteries of World War II by Robert Kurson</title>
//                     <author>
//                         <id type="integer">4819027</id>
//                         <name>BookRags</name>
//                     </author>
//                     <image_url>https://s.gr-assets.com/assets/nophoto/book/111x148-bcc042a9c91a29c1d680899eff700a03.png</image_url>
//                     <small_image_url>https://s.gr-assets.com/assets/nophoto/book/50x75-a91bf249278a81aabab721ef782c4a74.png</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">5441</id>
//                 <books_count type="integer">28</books_count>
//                 <ratings_count type="integer">1973</ratings_count>
//                 <text_reviews_count type="integer">176</text_reviews_count>
//                 <original_publication_year type="integer">2002</original_publication_year>
//                 <original_publication_month type="integer" nil="true"/>
//                 <original_publication_day type="integer" nil="true"/>
//                 <average_rating>3.71</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">210016</id>
//                     <title>Leadership</title>
//                     <author>
//                         <id type="integer">3309447</id>
//                         <name>Rudolph W. Giuliani</name>
//                     </author>
//                     <image_url>https://images.gr-assets.com/books/1473017665m/210016.jpg</image_url>
//                     <small_image_url>https://images.gr-assets.com/books/1473017665s/210016.jpg</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">49028064</id>
//                 <books_count type="integer">1</books_count>
//                 <ratings_count type="integer">0</ratings_count>
//                 <text_reviews_count type="integer">0</text_reviews_count>
//                 <original_publication_year type="integer" nil="true"/>
//                 <original_publication_month type="integer" nil="true"/>
//                 <original_publication_day type="integer" nil="true"/>
//                 <average_rating type="float">0.0</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">28812407</id>
//                     <title>Să nu suflii o vorbă/ Dragă John/ Exploratorii Adâncurilor/ Bucătăria Francescăi (Colecția de Romane, #11)</title>
//                     <author>
//                         <id type="integer">14930052</id>
//                         <name>David Rosenfelt/ Nicholas Sparks/ Robert Kurson/ Peter Pezzelli</name>
//                     </author>
//                     <image_url>https://images.gr-assets.com/books/1454243557m/28812407.jpg</image_url>
//                     <small_image_url>https://images.gr-assets.com/books/1454243557s/28812407.jpg</small_image_url>
//                 </best_book>
//             </work>
            
            
//             <work>
//                 <id type="integer">51044799</id>
//                 <books_count type="integer">1</books_count>
//                 <ratings_count type="integer">0</ratings_count>
//                 <text_reviews_count type="integer">0</text_reviews_count>
//                 <original_publication_year type="integer" nil="true"/>
//                 <original_publication_month type="integer" nil="true"/>
//                 <original_publication_day type="integer" nil="true"/>
//                 <average_rating type="float">0.0</average_rating>
//                 <best_book type="Book">
//                     <id type="integer">30523287</id>
//                     <title>Selecções do Livro: Os Finalizadores; Blue Bistro; Mergulhar Na Sombra; Muito Honestamente</title>
//                     <author>
//                         <id type="integer">3353821</id>
//                         <name>Reader's Digest Association</name>
//                     </author>
//                     <image_url>https://images.gr-assets.com/books/1472584449m/30523287.jpg</image_url>
//                     <small_image_url>https://images.gr-assets.com/books/1472584449s/30523287.jpg</small_image_url>
//                 </best_book>
//             </work>
//         </results>
//     </search>
// </GoodreadsResponse>

          

    // “It takes something more than intelligence to act intelligently.” “Only to live, to live and live! Life, whatever it may be!”

    // “What do you think, would not one tiny crime be wiped out by thousands of good deeds?”

