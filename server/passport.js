const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require("passport");
const key = require('./keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./model/userModel')

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey= key.secretOrKey;
console.log("passport");

// Will be part of Google Strategy callback funciton (cb)
function extractProfile (profile) {
  return {
    id: profile.id,
    name: profile.name,
    email: profile.email
  }
}

module.exports = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log('payload: ', jwt_payload)
    userModel.findOne(jwt_payload.email)
    .then(user => {
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    })
    .catch(err => console.log(err));
  })
);


// Google strategy
passport.use(new GoogleStrategy({ // First parameter
  clientID: key.myClientID,
  clientSecret: key.myClientSecret,
  callbackURL: '/google/redirect'
},
// Second parameter: callback funciton done() included
  (accessToken, refreshToken, profile, done) => {
    // Get profile from Google
   done(null,  extractProfile (profile));
   // Check if user already exist
    User.findOne({email: profile.email}) 
      // console.log(profile.email);
    .then()
      
    
  }
))



//===========================================================

// // const mongoose = require('mongoose');
// // const userModel = mongoose.model('user', 'userSchema'); // This does not work. Error = MongooseError [MissingSchemaError]: Schema hasn't been registered for model "user". [0] Use mongoose.model(name, schema)
// const userModel = require('./model/userModel');
// const key = require('./keys');

// const passport = require("passport");

// const opts = {};
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken('Authorization');
// opts.secretOrKey= key;

// module.exports = passport.use(
//   new JwtStrategy(opts, (jwt_payload, done) => {
//       userModel.findById(jwt_payload.id)
//       .then(user => {
//           if (user) {
//               return done(null, user);
//           }
//           return done(null, false);
//       })
//       .catch(err => console.log(err));
//   })
// );