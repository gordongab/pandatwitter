const showModal = function(event) {
    event.preventDefault();
    $('.modal-container').show();

}

const hideModal = function(event) {
    event.preventDefault();
    $('.modal-container').hide();

}

$(document).on('click', '.delete', function() {
    const id = $(this).data('id');
   
    $.ajax({ url: `/api/tweet/${id}`,type: 'delete',success: function(response){
        console.log(response);
        getTweets();
    } })
  })


const render = function (tweet) {
   $('.center-feed').append(`<div class="tweet"><div class="handle-div"><img src="assets/pandaprofile.jpeg" class="avatar" height=50 width=50> <span class="panda-avi">Panda Express <img class="verified" src="assets/verifiedhandle.png"><span class="handle1">@PandaExpress</span><span class="handle2">Oct 20</span>` + `<button data-id=${tweet._id} class="delete">x</button></div>` +`</span>
    </div><p class="tweet-text">${tweet.tweet}</p><hr></hr>`);

};


const saveTweet = function (event) {
    event.preventDefault();
      const inputTweet = $('.textarea').val();
        
        const postTweet = {
            tweet: inputTweet,
            username: 'panda'
        }

        $.post('api/tweets', postTweet)
         .then(function(data){
         console.log(data);
         render(data);
         })
            
}


$('.tweetbutton').on('click', showModal);
$('.close-modal').on('click', hideModal);
$('.close-modal').on('click', saveTweet);


function getTweets(){
    $(".center-feed").empty();
    $.get('api/tweets')
 .then(function(serverData){
     for (let i = 0; i < serverData.length; i++){
         render(serverData[i]);
     }
    
 })
}
getTweets();


