const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Number,
    required: true
  },
  steps: {
    type: Number,
    required: true
  },
  caloriesburned: {
    type: Number,
    required: true
  },
  distancecovered: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Track = mongoose.model('track', TrackSchema);