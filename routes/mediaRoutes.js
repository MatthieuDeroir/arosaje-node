const express = require('express');
const mediaController = require('../controllers/index').Media;

const router = express.Router();

// Create a new media
router.post('/', mediaController.createMedia);

// Get all media
router.get('/', mediaController.getAllMedia);

// Get a specific media by ID
router.get('/:id', mediaController.getMediaById);

// Update a media by ID
router.put('/:id', mediaController.updateMedia);

// Delete a media by ID
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;
