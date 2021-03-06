const express = require('express');
const cities = express.Router();
const cityModel = require('../model/cityModel')

//get all cities from database. find() is a Mongoose method.
cities.get('/all', (req, res) => {
  cityModel.find({})
    .then(all => {
      res.send(all)
    })
    .catch(err => console.error(err));
});


// post a city from client side
// cities.post('/', (req, res) => {
//   const newCity = new cityModel({
//     name: req.body.name,
//     country: req.body.country
//   })
//   newCity.save()
//     .then(city => {
//       res.send(city)
//     })
//     .catch(err => {
//       res.status(500).send("Server error")
//     })
// });

// get one city from the database. findOne() is a Mongoose method.
// router.get('/:city', (req, res) => {
//   let cityRequested = req.params.name;
//   cityModel.findOne({
//       name: cityRequested
//     })
//     .then(city => {
//       res.send(city)
//     })
//     .catch(err => console.log(err));
//   });

module.exports = cities;