const express = require('express');
const mongoose = require('mongoose');

// const PORT = process.env.PORT || 3000;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// Connect to Mongoose
mongoose.Promise = global.Promise;

mongoose.connect(
  
  process.env.MONGODB_URI ||  "mongodb://user:pandapass1@ds259820.mlab.com:59820/heroku_d3j0q25z", {

  useMongoClient: true
  }
 );

// mongoose.connect('mongodb://localhost/twitter', { useNewUrlParser: true });


require('./routes/api-routes.js')(app);
require('./routes/html-routes.js')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});