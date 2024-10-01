const express = require('express');
const router = express.Router();
const HealthController = require('../controllers/HealthController.js');

// Routes for health CRUD operations
router.post('/tracks', HealthController.createTrack);      // Create a new track
router.get('/tracks', HealthController.getAllTrack);      // Get all track
 router.get('/tracks/:id', HealthController.getTrackById);  // Get a single track by ID
router.put('/tracks/:id', HealthController.updateTrack);   // Update a track by ID
// router.delete('//Health:id',  HealthController.deleteRoom);// Delete a track by ID

module.exports = router;