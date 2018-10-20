//add your Tweet model here

const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TweetSchema = new Schema({
  tweet: {
    type: String,
    required: "You must include a tweet",
    
  },
  username: {
    type: String,
    required: "You must enter a username",
  },
  date: {
    type: Date,
    default: Date.now
    }
});


var Tweet = mongoose.model('Tweet', TweetSchema);
module.exports = Tweet;