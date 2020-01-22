const express = require('express');

const router = express.Router();

// router.get('/test', (req, res) => {
// });

// res.send({ msg: 'Cities test route.' })

// })
// module.exports = router;

const cityModel = require('../model/cityModel')

//get all cities from database
router.get('/all', (req, res) => {
    cityModel.find({})
        .then(files => {
            res.send(files)
        })
        .catch(err => console.error(err));
});

module.exports = router;

// post a city from client side
router.post('/', (req, res) => {
    const newCity = new cityModel({
        name: req.body.name,
        country: req.body.country
    })
    newCity.save()
      .then(city => {
      res.send(city)
      })
      .catch(err => {
      res.status(500).send("Server error")}) 
});