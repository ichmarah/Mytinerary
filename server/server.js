const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // When removing 5000, terminal says Server is runnin on undefinedport. Connection to Mongo DB established 
const bodyParser = require('body-parser');
const cors = require('cors');

// Connect MongoDB with Mongoose.
const db = require('./keys').mongoURI;
const mongoose = require('mongoose');

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors());

// const cityModel = require('../model/cityModel')

// Test route?
// app.use('/test', require('./routes/cities.js'))
// res.send({ msg: 'Cities test route.' })

// })
// module.exports = router

app.use('/cities', require('./routes/cities.js'))
// res.send({ msg: 'Cities test route.' })

// })
// module.exports = router



mongoose.connect(db, { useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log('Connection to Mongo DB established'))
    .catch(err => console.log(err));


app.listen(port, () => {
  console.log('Server is running on ' + port + 'port');
});