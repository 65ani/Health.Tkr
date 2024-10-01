const  HealthModel = require('../models/HealthModel');  // Import health model

// Create a new tracks
exports.createTrack = async (req, res) => {
    try {
        let newTrack = new HealthModel({
            date: req.body.date,
            steps: req.body.steps, 
            caloriesBurned: req.body.caloriesBurned,
            distanceCovered:req.body.distanceCovered,
            weight: req.body.weight
        });
        newTrack = await newTrack.save(); // Save the new tracks to the database
        res.send(newTrack); // Send the saved room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Get all tracks
exports.getAllTrack= async (req, res) => {
    try {
        const allTrack = await HealthModel.find(); // Get all tracks from the database
        res.send(allTrack); // Send all tracks as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something  wrong
    }
};

//get a track by ID
exports.getTrackById = async (req, res) => {
    try {
        const TrackById = await HealthModel.findById(req.params.id); // Find track by ID
        if (!TrackById) return res.status(404).send('track not found in database'); // If track is not found, return 404
        res.send(TrackById); // Send the room as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};

// Update a track by ID
exports.updateTrack = async (req, res) => {
    try {

        let newTrack = new HealthModel({
            date: req.body.date,
            steps: req.body.steps, 
            caloriesBurned: req.body.caloriesBurned,
            distanceCovered:req.body.distanceCovered,
            weight: req.body.weight
        });

        if (!updatedTrack) return res.status(404).send('Track not found in database'); // If Track is not found, return 404
        res.send(updatedTrack); // Send the updated Track as a response
    } catch (err) {
        res.status(400).send(err.message); // Send an error response if something goes wrong
    }
};