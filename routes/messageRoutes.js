const express = require('express');
const messageController = require('../controllers/index').Message;

const router = express.Router();

// Create a new message
router.post('/', messageController.createMessage);

// Get all messages
router.get('/', messageController.getAllMessages);

// Get a specific message by ID
router.get('/:id', messageController.getMessageById);

// Update a message by ID
router.put('/:id', messageController.updateMessage);

// Delete a message by ID
router.delete('/:id', messageController.deleteMessage);

module.exports = router;
