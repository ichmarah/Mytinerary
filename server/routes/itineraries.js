const express = require('express');
const itineraries = express.Router();
const itineraryModel = require('../model/itineraryModel')

// get one city from the database to show its itinerary/itineraries. findOne() is a Mongoose method.
itineraries.get('/:name', (req, res) => { // works in Postman!
  // console.log(req.params.name)
  itineraryModel.find({name: req.params.name})
    .then(itineraries => res.send(itineraries))
    .catch(error => console.log(error));
  });

module.exports = itineraries;