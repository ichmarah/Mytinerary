const express = require('express');
const users = express.Router();
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;  
// const {check, validationResult} = require('express-validator/check');

//get all cities from database. find() is a Mongoose method.
users.get('/all', (req, res) => {
  userModel.find({})
    .then(all => {
      res.send(all)
    })
    .catch(err => console.error(err));
});

users.post('/register', (req, res) => {
  userModel.findOne({ email: req.body.email  })
  .then(user => {
    if (user) { return res.status(400).send( 'This email already exists' )
    // if (user) { return res.render({ msg: 'This email already exists' })
    } else {     // If email not found, user can register. newUser is created based on the userModel and saved
        bcrypt.hash(req.body.password, saltRounds) //Generate salt and hash
        .then( hash => {
          const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: hash
            // avatar: req.body.avatar
          })
          newUser.save()
            .then(user => {res.send(user)
            })
            .catch(err => {
              res.send("Error posting to DB")
            })
        })
        .catch( error => console.error(error))
      }
  })
})


// const validations = [
//   check('name')
//     .not().isEmpty()
//     .trim().escape()
//     .withMessage('Name is required'),
//   check('email')
//     .isEmail()
//     .trim()
//     .not().isEmpty()
//     .normalizeEmail()
//     .withMessage('A valid email is required'),
//   check('password')
//     .not().isEmpty()
//     .isLength({min: 6})
//     .withMessage('A password is required and must be at least 6 characters long')
// ];
//validations,

// users.post('/register', (req, res) => {
//   // Declare requisit for valid name, email, password
//   const validName = typeof req.body.name === 'string' && req.body.name.trim() !== ''
//   const validEmail = typeof req.body.email === 'string' && req.body.email.trim() !== '';
//   const validPassword = typeof req.body.password === 'string' && req.body.password.trim() !== '' && req.body.password.length > 6; 
//   console.log( validEmail, validPassword);

//   //Check if name, email, password are valid
//   if (!validName) {
//     return res.status(400).json({ msg: "Please enter a valid name" });
//     // return res.render('register', { msg: 'Please enter a valid name' } )
//   } else if (!validEmail) {
//     return res.status(400).json({ msg: "Please enter a valid email address" });
//     // return res.render('register', { msg: 'Please enter a valid email address' } )
//   } else if (!validPassword) {
//     res.status(400).json({ msg: "Password must be longer than 6 characters" });
//     // return res.render('register', { msg: 'Password must be longer than 6 characters' } )
//   } else if (!req.body.email || !req.body.password) {
//     res.status(400).json({ msg: "Please enter all fields" });
//     // return res.render('register', { msg: 'Please enter all fields' } )
//   }

//   //Check if email is already registered
//   userModel.findOne({ email: req.body.email  })
//     .then(user => {
//       if (user) { return res.status(400).json({ msg: "This email already exists" })
//       // if (user) { return res.render({ msg: 'This email already exists' })
//       } else {     // If email not found, user can register. newUser is created based on the userModel and saved
//         bcrypt.hash(req.body.password, saltRounds) //Generate salt and hash
//         .then( hash => {
//           const newUser = new userModel({
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//             // avatar: req.body.avatar
//           })
//           newUser.save()
//             .then(user => {res.send(user)
//             })
//         })
        
//       }
//     })
//     .catch(err => console.error(err))});
//       // res.render({ msg: 'Server Error' })


module.exports = users;