const  HealthModel = require('../models/HealthModel');  // Import Room model

// Create a new tracks
exports.createTracks = async (req, res) => {
    try {
        let newTracks = new HealthModel({
            date: req.body.date,
            steps: req.body.steps, 
            caloriesBurned: req.body.caloriesBurned,
            distanceCovered:req.body.distanceCovered,
            weight: req.body.weight
        });
        newTracks = await newTracks.save(); // Save the new tracks to the database
        res.send(newTracks); // Send the saved room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all rooms
exports.getAllTracks= async (req, res) => {
    try {
        const allTracks = await HealthModel.find(); // Get all tracks from the database
        res.send(allTracks); // Send all tracks as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};