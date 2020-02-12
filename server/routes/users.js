const express = require('express');
const users = express.Router();
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;
const key = require('../keys');
const jwt = require('jsonwebtoken');

//get all cities from database. find() is a Mongoose method.
users.get('/all', (req, res) => {
  userModel.find({})
    .then(all => {
      res.send(all)
    })
    .catch(err => console.error(err));
});

users.post('/register', (req, res) => {
  // console.log('body in /register',req.body) // password provided in input form is undefined
  userModel.findOne({ email: req.body.email  })
  // console.log(req.body) //When submitting input form, req.body is emty: {}
  .then(user => {
    if (user) { return res.status(400).send( 'This email already exists' )
    // if (user) { return res.render({ msg: 'This email already exists' })
    } else {     // If email not found, user can register. newUser is created based on the userModel and saved
        bcrypt.hash(req.body.password, saltRounds, (error, hash) => {
          if (error) {
            console.log('Error: ', error)
          }
          // console.log(req.body.password)
          const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hash
            // avatar: req.body.avatar
          })
          // To save data in db
          newUser.save()
            .then(user => {res.send(user)
            })
            .catch(err => {
              // res.send("Error posting to DB", err)
              res.status(status).send(body) // This is put because console said so (?)
            })
        }
          ) //Generate salt and hash
      
        
      }
  })
})


// Login route
users.post('/login', (req, res) => {
// Compare password in req.body with password in DB. 
  const { email, password } = req.body;
  console.log('Input form filled: ', req.body)
  if(!email || !password) {
    return res.status(400).json({ msg: "Both fields required" });
  } 

  userModel.findOne({ email })
    .then(user => {
      if (!user) {
        return res.status(400).json({ msg: "User not found" });
      }
      console.log('User found: ', user);
      bcrypt.compare(req.body.password, user.password)
        // In Postman, password provided should not be hash and salted as in DB. Need to use the unsalted/unhashed password used when registered! Only then matches: true. A token will be provided.
        .then(matches => {
          console.log('Password matches: ', matches)
          if (matches) {
            jwt.sign(
              {id: user._id},
              key.secretOrKey, 
              {expiresIn: '2 days'}, // Token espires in 2 days
              (err, token) => {
                if (err){
                  res.json({
                    success: false,
                    token: 'There was an error'
                  });
                } else {
                    res.json({
                      success: true,
                      token: token,
                      user: {
                        id: user._id,
                        name: user.name,
                        email: user.email
                      }
                    })
                }
              }
            )
          }
        })
    })
})





module.exports = users;