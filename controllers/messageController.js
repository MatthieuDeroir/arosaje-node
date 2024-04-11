const Message = require('../models/index').Message;

// Import the necessary modules and models

// Controller methods for CRUD operations
const messageController = {
    // Create a new message
    createMessage: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newMessage = new Message({
                street,

                city,
                state,
                country,
                postalCode
            });
            const savedMessage = await newMessage.save();
            res.status(201).json(savedMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create message' });
        }
    },

    // Get all messagees
    getAllMessages: async (req, res) => {
        try {
            const messagees = await Message.find();
            res.json(messagees);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get messagees' });
        }
    },

    // Get a single message by ID
    getMessageById: async (req, res) => {
        try {
            const message = await Message.findById(req.params.id);
            if (!message) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get message' });
        }
    },

    // Update an message by ID
    updateMessage: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const updatedMessage = await Message.findByIdAndUpdate(
                req.params.id,
                {
                    street,
                    city,
                    state,
                    country,
                    postalCode
                },
                { new: true }
            );
            if (!updatedMessage) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(updatedMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update message' });
        }
    },

    // Delete an message by ID
    deleteMessage: async (req, res) => {
        try {
            const deletedMessage = await Message.findByIdAndDelete(req.params.id);
            if (!deletedMessage) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(deletedMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete message' });
        }
    }
};

module.exports = messageController;