const express = require('express');
const upkeepController = require('../controllers/index').Upkeep;

const router = express.Router();

// Create a new upkeep
router.post('/', upkeepController.createUpkeep);

// Get all upkeeps
router.get('/', upkeepController.getAllUpkeeps);

// Get a specific upkeep by ID
router.get('/:id', upkeepController.getUpkeepById);

// Update an upkeep by ID
router.put('/:id', upkeepController.updateUpkeep);

// Delete an upkeep by ID
router.delete('/:id', upkeepController.deleteUpkeep);

module.exports = router;
