const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password : {
      type: String,
      required: true
    }

    //   avatar : {
    //     type: String,
    // }
})


module.exports = mongoose.model('user', userSchema);