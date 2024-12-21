const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  steps: {
    type: String,
    required: true
  },
  caloriesburned: {
    type: String
  },
  distancecovered: {
    type: Date
  },
  weight: {
    type: String
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Track = mongoose.model('track', TrackSchema);