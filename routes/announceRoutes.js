const express = require('express');
const announceController = require('../controllers/index').Announce;

const router = express.Router();

// Create a new announce
router.post('/', announceController.createAnnounce);

// Get all announces
router.get('/', announceController.getAllAnnounces);

// Get a specific announce by ID
router.get('/:id', announceController.getAnnounceById);

// Update a announce by ID
router.put('/:id', announceController.updateAnnounce);

// Delete a announce by ID
router.delete('/:id', announceController.deleteAnnounce);

module.exports = router;

// Path: routes/mediaRoutes.js