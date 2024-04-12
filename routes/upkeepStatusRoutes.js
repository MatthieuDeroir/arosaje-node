const express = require('express');
const upkeepStatusController = require('../controllers/index').UpkeepStatus;

const router = express.Router();

// Create a new upkeep status
router.post('/', upkeepStatusController.createUpkeepStatus);

// Get all upkeep statuses
router.get('/', upkeepStatusController.getAllUpkeepStatus);

// Get a specific upkeep status by ID
router.get('/:id', upkeepStatusController.getUpkeepStatusById);

// Update an upkeep status by ID
router.put('/:id', upkeepStatusController.updateUpkeepStatus);

// Delete an upkeep status by ID
router.delete('/:id', upkeepStatusController.deleteUpkeepStatus);

module.exports = router;
