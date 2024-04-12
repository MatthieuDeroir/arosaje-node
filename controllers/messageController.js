const { Message } = require('../models');

const messageController = {
    createMessage: async (req, res) => {
        try {
            const newMessage = await Message.create(req.body);
            res.status(201).json(newMessage);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create message' });
        }
    },

    getAllMessages: async (req, res) => {
        try {
            const messages = await Message.findAll();
            res.json(messages);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get messages' });
        }
    },

    getMessageById: async (req, res) => {
        try {
            const message = await Message.findByPk(req.params.id);
            if (!message) {
                return res.status(404).json({ error: 'Message not found' });
            }
            res.json(message);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get message' });
        }
    },

    updateMessage: async (req, res) => {
        try {
            const [updated] = await Message.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedMessage = await Message.findByPk(req.params.id);
                res.json(updatedMessage);
            } else {
                res.status(404).json({ error: 'Message not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update message' });
        }
    },

    deleteMessage: async (req, res) => {
        try {
            const deleted = await Message.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'Message deleted successfully' });
            } else {
                res.status(404).json({ error: 'Message not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete message' });
        }
    }
};

module.exports = messageController;
