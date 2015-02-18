
var time = Date.now();

/*
 Inspiration from https://gist.github.com/2660489.git
 Return a timestamp with the format "m/d/yy h:MM:ss TT"
*/
 
function timeStamp() {
// Create a date object with the current time
  var now = new Date();
 
// Create an array with the current month, day and time
  var date = [ now.getMonth() + 1, now.getDate() ];
 
// Create an array with the current hour, minute and second
  var time = [ now.getHours(), now.getMinutes(), now.getSeconds() ];
 
// Determine AM or PM suffix based on the hour
  var suffix = ( time[0] < 12 ) ? "AM" : "PM";
 
// Convert hour from military time
  time[0] = ( time[0] < 12 ) ? time[0] : time[0] - 12;
 
// If hour is 0, set it to 12
  time[0] = time[0] || 12;
 
// If seconds and minutes are less than 10, add a zero
  for ( var i = 1; i < 3; i++ ) {
    if ( time[i] < 10 ) {
      time[i] = "0" + time[i];
    }
  }
 
// Return the formatted string
  return date.join("/") + " " + time.join(":") + " " + suffix;
}

$(document).ready(function(){
  var $body = $('body');
  $body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweets"></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message +
      " Posted on: " + timeStamp(time));
    $tweet.appendTo($body);
    index -= 1;
  }

});

var addNewestTweets = function(){
  setInterval(function(){
    var $body = $('body');
    $body.html('');

    var index = streams.home.length - 1;
    while(index >= 0){
      var tweet = streams.home[index];
      var $tweet = $('<div class="tweets"></div>');
      $tweet.text('@' + tweet.user + ': ' + tweet.message +
        " Posted on: " + timeStamp(time));
      $tweet.appendTo($body);
      index -= 1;
    }
  }, 8000);
};
addNewestTweets();
