/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];

  // gets the amrkup for each tweet in the array and appends it to the html file
  const renderTweets = function(tweets) {
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  //creats a markup for a tweet then returns it
  const createTweetElement = (tweetData) => {

    const $tweet = $(`<article class="tweet">
    <header class="tweet-head">
          <div class="tweet-user">
            <img src=${tweetData.user.avatars} class="tweet-img">
            <div class="user-name">${tweetData.user.name}</div>
          </div>
          <div class="user-tag">${tweetData.user.handle}</div>
        </header>
        <article class="tweet-content">${tweetData.content.text}</article>
        <footer class="tweet-foot">
          <div class="tweet-date">${tweetData.created_at}</div>
          <div class="tweet-icons">
            <i class="fa-solid fa-flag icon-hover"></i>
            <i class="fa-solid fa-repeat icon-hover"></i>
            <i class="fa-solid fa-heart icon-hover"></i>
          </div>
        </footer>
    </article>`);

    return $tweet;
  };

  renderTweets(data);
});


