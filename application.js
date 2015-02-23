var alreadyShown = 0;

$(document).ready(function(){
  var $section = $('section');
  $section.html('');

  var index = streams.home.length - 1;

  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweets"></div>');

    $tweet.html( "<p>" + '@' +
      "<span class='user' >" + tweet.user + "</span>" + ': ' + tweet.message +
      "<br> <span class='postedTime'> Posted on: " + tweet.created_at + "</span> </p>");

    $tweet.appendTo($section);
    index -= 1;
    alreadyShown += 1;
  }
}); 

$(document).ready(function(){
  $(".user").on('click', function(){
    var $section = $('section');
    $section.html('');

    var user = $(this).text();
    var index = streams.users[user].length - 1;

    while(index >= 0){
      var tweet = streams.users[user][index];
      var $tweet = $('<div class="tweets"></div>');

      $tweet.html( "<p>" + '@' +
      "<span class='user' >" + tweet.user + "</span>" + ': ' + tweet.message +
      "<br> <span class='postedTime'> Posted on: " + tweet.created_at + "</span> </p>");
      
      $tweet.appendTo($section);
      index -= 1;
    };  
  });
});

$(document).ready(function(){
  $(".update").on('click', function(){
    var $section = $('section');
    var index = streams.home.length - 1;
    var index2 = streams.home.length - 1;

    while(index >= alreadyShown) {
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweets"></div>');
      
      $tweet.html( "<p>" + '@' +
      "<span class='user' >" + tweet.user + "</span>" + ': ' + tweet.message +
      "<br> <span class='postedTime'> Posted on: " + tweet.created_at + "</span> </p>");
      
      $tweet.prependTo($section);
      index -= 1;
    };

    alreadyShown = index2;
    
  });
});



  