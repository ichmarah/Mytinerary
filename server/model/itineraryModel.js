const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    country: {
        type: String,
        required: true
    },
    activity: {
        type: String, // Gets to be an array because some cities have more than one activity!
    },
    img: {
        type: String
    },
    summary: {
        type: String
    },
    price: {
        type: String
    },
    rating: {

        type: String
    }
})

//name of module is the singular version (itinerary) of the database name (cities)
module.exports = mongoose.model('itinerary', itinerarySchema)