const db = require('../models');

module.exports = function (app) {

 app.get('/api/tweets', function (req, res) {
    db.Tweet.find({})
      .then(function (tweets) {
        res.json(tweets);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


  app.post('/api/tweets', function (req, res) {
    db.Tweet.create(req.body)
      .then(function (tweets) {
        res.json(tweets);
      })
      .catch(function (err) {
        res.json(err);
      });
  });


 app.delete("/api/tweet/:tweetid", (req, res) => {
   
  db.Tweet.findByIdAndRemove(req.params.tweetid).then((response) => {
    res.send(response);
  });
}); 
}