const express = require('express');
const plantController = require('../controllers/index').Plant;

const router = express.Router();

// Create a new plant
router.post('/', plantController.createPlant);

// Get all plants
router.get('/', plantController.getAllPlants);

// Get a specific plant by ID
router.get('/:id', plantController.getPlantById);

// Update a plant by ID
router.put('/:id', plantController.updatePlant);

// Delete a plant by ID
router.delete('/:id', plantController.deletePlant);

module.exports = router;
