const express = require('express');
const speciesController = require('../controllers/index').Species;

const router = express.Router();

// Create a new species
router.post('/', speciesController.createSpecies);

// Get all species
router.get('/', speciesController.getAllSpecies);

// Get a specific species by ID
router.get('/:id', speciesController.getSpeciesById);

// Update a species by ID
router.put('/:id', speciesController.updateSpecies);

// Delete a species by ID
router.delete('/:id', speciesController.deleteSpecies);

module.exports = router;
