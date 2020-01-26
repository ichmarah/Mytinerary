const express = require('express');
const router = express.Router();
const itineraryModel = require('../model/itineraryModel')

// get one city from the database to show its itinerary/itineraries. findOne() is a Mongoose method.
router.get('/:city', (req, res) => {
  let cityRequested = req.params.name;
  itineraryModel.find({
      name: cityRequested
    })
    .then(city => {
      res.send(city)
    })
    .catch(err => console.log(err));
  });

module.exports = router;