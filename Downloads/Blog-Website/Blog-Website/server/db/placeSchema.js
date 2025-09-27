const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String, // Single string to store image URL
    required: true
  },
});

const Place = mongoose.model('Place', placeSchema);
module.exports = Place;
