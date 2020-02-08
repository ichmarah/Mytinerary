const express = require('express');
const users = express.Router();
const userModel = require('../model/userModel')
const bcrypt = require('bcrypt');
const saltRounds = 10;

//get all cities from database. find() is a Mongoose method.
users.get('/all', (req, res) => {
  userModel.find({})
    .then(all => {
      res.send(all)
    })
    .catch(err => console.error(err));
});

users.post('/register', (req, res) => {
  console.log('body in /register',req.body) // password provided in input form is undefined
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


// users.post('/register', (req, res) => {
//   console.log( 'req.body', req.body) // shows input in body
//   userModel.findOne({ email: req.body.email })
//   // console.log(req.body.email) // Shows undefined
//   .then(user => {
//     console.log(user) //shows null when email not found but Postman keeps loading. However, user IS createdin Postman!!
//     // When trying in input form, console.log(req.body) is empty --> value is not being passed.
//     // I downloaded my users list from MongoDB, only shows the one I imported from Ubiqum's heroku. In my download file, I see all the new users I posted on Postman! But they are not showing in MongoDB even when I refresh it.
//     if (user == null) {
//       bcrypt.hash(req.body.password, saltRounds, (error, hash)  => {
//         if (!error) {
//           const newUser = new userModel({
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//             // avatar: req.body.avatar
//           })
//           // console.log(newUser) // not even logged
//           newUser.save()
//             .then(user => {res.status(status).send(body)
//             })
//             .catch(error => {
//               res.status(status).send(body, error, 'Error posting in DB')
//             })
//         } else {
//           console.log('Error: ', error)
//         }
//     }) //Generate salt and hash
  
//     // if (user) { return res.render({ msg: 'This email already exists' })
//     } else { 
//       return res.status(400).send( 'This email already exists' )    // If email not found, user can register. newUser is created based on the userModel and saved
//     }   
          
        
      
//     })
//   .catch( error => console.error(error))
      
  
// })


module.exports = users;





// users.post('/register', (req, res) => {
//   // req.body = JSON.parse(JSON.stringify(Object.keys(req.body)))

//   bcrypt.hash(req.body.password, saltRounds, function( hash) {
//     userModel.findOne({ email: req.body.email  } )        
//       .then((user) => {
//         if (user) { 
//           // console.log(user)
//           return res.status(400).send( 'This email already exists' )
//         } else {
          
//           const newUser = new userModel({
//             name: req.body.name,
//             email: req.body.email,
//             password: hash
//             // avatar: req.body.avatar
//           })
//           newUser.save()
//             .then(user => {res.json('User added!')
//             })
//         }
        
//       })
//       .catch( error => console.error(error))
//       })

// }) //Generate salt and hash
  
