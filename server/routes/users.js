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

// Check if email and password are valid: must be a string, and when trimmed from surrounding whitespaces, it should not consist of spaces. Password should consist of 6 or more characters.
function validUser(user) {
  const validEmail = typeof user.email === 'string' && user.email.trim() !== '';
  const validPassword = typeof user.password === 'string' && user.password.trim() !== '' && user.password.trim().length >= 6;
  // if both are true/valid, return
  return validEmail && validPassword;
}

users.post('/register', (req, res, next) => {
  console.log(req.body);
  // res.json({
  //   message: '✅'
  // });
  if (validUser(req.body)) {
    res.json({
      message: '✅'
    });
  } else {
    // send an error
    next(new Error('Invalid user')) 
  }
});


module.exports = users;


//   const newUser = new userModel({
//       name: req.body.name,
//       email: req.body.email,
//       password: req.body.password,
//       avatar: req.body.avatar
//   })
//   newUser.save()
//     .then(user => {res.send(user)
//     })
//     .catch(err => {
//     res.status(500).send("Server error")}) 
// });

