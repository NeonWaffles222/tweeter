/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // gets the amrkup for each tweet in the array and appends it to the html file
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //creats a markup for a tweet then returns it
  const createTweetElement = (tweetData) => {

    const $tweet = $(`<article class="tweet">
    <header class="tweet-head">
          <div class="tweet-user">
            <img src=${tweetData.user.avatars} class="tweet-img">
            <div class="user-name">${escape(tweetData.user.name)}</div>
          </div>
          <div class="user-tag">${escape(tweetData.user.handle)}</div>
        </header>
        <p class="tweet-content">${escape(tweetData.content.text)}</p>
    <footer class="tweet-foot">
      <div class="tweet-date">${timeago.format(tweetData.created_at)}</div>
      <div class="tweet-icons">
        <i class="fa-solid fa-flag icon-hover"></i>
        <i class="fa-solid fa-repeat icon-hover"></i>
        <i class="fa-solid fa-heart icon-hover"></i>
      </div>
    </footer>
    </article > `);

    return $tweet;
  };

  const loadtweets = () => {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (data) => {
        renderTweets(data);
      }
    });

  };
  // loads tweets when the page is refreshed
  loadtweets();

  $("form").on("submit", function(event) {
    event.preventDefault();

    const $data = $(this).serialize();
    const text = $(this).find('textarea').val();

    // console.log(text.length);

    if (!text) {
      $(".tweet-error").html("Tweet is empty.");
    } else if (text.length > 140) {
      $(".tweet-error").html("Tweet excedes character limit.");
    } else {
      $.ajax({
        type: 'POST',
        url: '/tweets',
        data: $data,
        success: () => {
          loadtweets();
          $("#tweet-text").val('');
        }
      });
    }

  });
});

;
