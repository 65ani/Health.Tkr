const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema(
    {
     date: { 
            type: Date,
            default: Date.now 
            },
            steps: Number,
            caloriesBurned: Number,
            distanceCovered: Number,
            weight: Number,

        });

const HealthModel = mongoose.model('HealthModel', healthModelSchema);
module.exports = HealthModel;
