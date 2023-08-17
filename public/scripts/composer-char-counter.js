$(document).ready(function() {
  console.log("Ready");
  $("#tweet-text").on('keyup', function() {

    let chars = 140 - ($(this).val()).length;
    let counter = $(this).siblings(".tweet-footer").find(".counter");

    if (chars < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', '#545149');
    }

    counter.val(chars);
  });

});