const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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

// userSchema.pre('save', async function(next) {
//   try{
//     // Generate a salt
//     const salt = await bcrypt.genSalt(10);
//     // Generate a password hash (is actually salt + hash)
//     const hash = await bcrypt.hash(this.password, salt)
//     // Re-assign original version over original plain text password
//     this.password = hash;
//     next();
//   }catch(error) {
//     next(error);
//   }
// });

// // Compare passwords
// userSchema.methods.isValid = async function (newPassword) {
//   try{
//     return await bcrypt.compare(newPassword, hash); // Will return a boolean! No need to store it in a variable
//   } catch(error {
//     throw new Error(error); // If error found, throw whatever error that has been found. Next is not used because we do not have access to next(). This is why we need to throw
//   })
// }

module.exports = mongoose.model('user', userSchema);