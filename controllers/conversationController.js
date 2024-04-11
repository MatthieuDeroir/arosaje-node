const Conversation = require('../models/index').Conversation;

const conversationController = {
    // Get all conversations
    getAllConversations: async (req, res) => {
        try {
            const conversations = await Conversation.findAll();
            res.json(conversations);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single conversation
    getConversationById: async (req, res) => {
        try {
            const conversation = await Conversation.findByPk(req.params.id);
            if (conversation) {
                res.json(conversation);
            } else {
                res.status(404).json({ message: 'Conversation not found' });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new conversation
    createConversation: async (req, res) => {
        const conversation = new Conversation({
            // Set the properties of the conversation here
        });

        try {
            const newConversation = await conversation.create();
            res.status(201).json(newConversation);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Update a conversation
    updateConversation: async (req, res) => {
        try {
            const conversation = await Conversation.findByPk(req.params.id);
            if (conversation) {
                // Update the properties of the conversation here
                await conversation.save();
                res.json(conversation);
            } else {
                res.status(404).json({ message: 'Conversation not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Delete a conversation
    deleteConversation: async (req, res) => {
        try {
            const conversation = await Conversation.findByPk(req.params.id);
            if (conversation) {
                await conversation.destroy();
                res.json({ message: 'Conversation deleted' });
            } else {
                res.status(404).json({ message: 'Conversation not found' });
            }
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};

module.exports = conversationController;