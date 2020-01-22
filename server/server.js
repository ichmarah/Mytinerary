const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // When removing 5000, terminal says Server is runnin on undefinedport. Connection to Mongo DB established 
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./keys').mongoURI; // Connect MongoDB with Mongoose.
const mongoose = require('mongoose'); // Connect MongoDB with Mongoose.

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());
app.use('/cities', require('./routes/cities.js'));

mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));


app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});