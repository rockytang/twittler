
var alreadyShown = 0;

$(document).ready(function(){
  //var $body = $('body');
  //$body.html('');
  var $section = $('section');
  $section.html('');

  var index = streams.home.length - 1;

  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweets"></div>');

    $tweet.html( "<p>" + 
      "<a class='user' >" + '@' + tweet.user + "</a>" + ': ' + tweet.message +
      "<br> <span class='postedTime'> Posted on: " + timeStamp(tweet.created_at) + "</span> </p>");
//streams.users.shawndrost has all of shawndrost's tweets
    $tweet.appendTo($section);
    index -= 1;
    alreadyShown += 1;
  }
}); 


$(document).ready(function(){
  $(".user").on('click', function(){
  //$(document).ready(function(){
    //var $body = $('body');
    //$body.html('');
    var $section = $('section');
    $section.html('');

    var index = streams.users.shawndrost.length - 1;

    while(index >= 0){
      var tweet = streams.users.shawndrost[index];
      var $tweet = $('<div class="tweets"></div>');

      $tweet.html( "<p>" + 
        "<a href=streams.users[tweet.user]>" + '@' + tweet.user + "</a>" + ': ' + tweet.message +
        "<span class='postedTime'> Posted on: " + tweet.created_at + "</span> </p>");
  //streams.users.shawndrost has all of shawndrost's tweets
      $tweet.appendTo($section);
      index -= 1;
    }  
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
      $tweet.html('@' + tweet.user + ': ' + tweet.message +
        " Posted on: " + timeStamp(tweet.created_at));
      $tweet.prependTo($section);
      index -= 1;
    };

    alreadyShown = index2;
    
  });
});


/*
 Inspiration from https://gist.github.com/2660489.git
 Return a timestamp with the format "m/d/yy h:MM:ss TT"
*/
 
function timeStamp() {
  var now = new Date();
  var date = [ now.getMonth() + 1, now.getDate() ];
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";

  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;

  time[0] = time[0] || 12;
 
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }

  return date.join("/") + " " + time.join(":") + " " + suffix;
}

  