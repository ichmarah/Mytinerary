const express = require('express');
const users = express.Router();
const userModel = require('../model/userModel')

// const bcrypt = require('bcrypt');
// const saltRounds = 10;  

//get all cities from database. find() is a Mongoose method.
users.get('/all', (req, res) => {
  userModel.find({})
    .then(all => {
      res.send(all)
    })
    .catch(err => console.error(err));
});


users.post('/register', (req, res, next) => {
  // Declare requisit for valid name, email, password
  const validName = typeof req.body.name === 'string'
  const validEmail = typeof req.body.email === 'string' && req.body.email.trim() !== '';
  const validPassword = typeof req.body.password === 'string' && req.body.password.trim() !== '' && req.body.password.length > 6; 
  console.log( validEmail, validPassword);

  //Check if name, email, password are valid
  if (!validName) {
    return res.status(400).json({ message: "Please enter a valid name" });
  } else if (!validEmail) {
    return res.status(400).json({ message: "Please enter a valid email address" });
  } else if (!validPassword) {
    res.status(400).json({ message: "Password must be longer than 6 characters" });
  } else if (!req.body.email || !req.body.password) {
    res.status(400).json({ msg: "Please enter all fields" });
  }

  //Check if email is already registered
  userModel.findOne({ email: req.body.email  })
    .then(user => {
      if (user) { return res.status(400).json({ message: "This email already exists" })
      } else {     // If email not found, user can register. newUser is created based on the userModel and saved
        const newUser = new userModel({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          // avatar: req.body.avatar
        })
        newUser.save()
          .then(user => {res.send(user)
          })
      }
    })
    .catch(err => {
      res.status(500).send("Server error")})
});


module.exports = users;




