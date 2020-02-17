const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // When removing 5000, terminal says Server is runnin on undefined port. Connection to Mongo DB established 
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./keys').mongoURI; // Connect MongoDB with Mongoose.
const mongoose = require('mongoose'); // Connect MongoDB with Mongoose.

const passport = require('passport');
require('./passport');


// Middlewares
app.use(bodyParser.json()); //To parse as json data the data the user has input in body, because Express does not know how to read request body
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use(passport.initialize()); // Should be before bodyparser?


// Routes 
app.use('/cities', require('./routes/cities'));
app.use('/itineraries', require('./routes/itineraries'));
app.use('/users', require('./routes/users'));

// connect MongoDB
mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true, dbName: 'client'})
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.error(err));

//Start the server
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});