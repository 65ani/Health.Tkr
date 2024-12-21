const mongoose = require('mongoose');

const TrackSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  steps: { type: Number, required: true }, // Changed to Number
  caloriesburned: { type: Number }, // Changed to Number
  distancecovered: { type: Number }, // Changed to Number
  weight: { type: Number }, // Changed to Number
  updated_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('track', TrackSchema);
