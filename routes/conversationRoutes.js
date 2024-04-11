const express = require('express');
const conversationController = require('../controllers/index').Conversation;

const router = express.Router();

// Create a new conversation
router.post('/', conversationController.createConversation);

// Get all conversations
router.get('/', conversationController.getAllConversations);

// Get a specific conversation by ID
router.get('/:id', conversationController.getConversationById);

// Update a conversation by ID
router.put('/:id', conversationController.updateConversation);

// Delete a conversation by ID
router.delete('/:id', conversationController.deleteConversation);

module.exports = router;