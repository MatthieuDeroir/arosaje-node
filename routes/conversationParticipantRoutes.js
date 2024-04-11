const express = require('express');
const conversationParticipantController = require('../controllers/index').ConversationParticipant;

const router = express.Router();

// Create a new conversationParticipant
router.post('/', conversationParticipantController.createParticipant);

// Get all conversationParticipants
router.get('/', conversationParticipantController.getAllParticipants);

// Get a specific conversationParticipant by ID
router.get('/:id', conversationParticipantController.getParticipantById);

// Update a conversationParticipant by ID
router.put('/:id', conversationParticipantController.updateParticipant);

// Delete a conversationParticipant by ID
router.delete('/:id', conversationParticipantController.deleteParticipant);

module.exports = router;
