const ConversationParticipant = require('../models/index').ConversationParticipant;

const conversationParticipantController = {
    getAllParticipants: async (req, res) => {
        try {
            const participants = await ConversationParticipant.findAll();
            res.status(200).json(participants);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    getParticipantById: async (req, res) => {
        const { id } = req.params;
        try {
            const participant = await ConversationParticipant.findByPk(id);
            if (!participant) {
                return res.status(404).json({ error: 'Participant not found' });
            }
            res.status(200).json(participant);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    createParticipant: async (req, res) => {
        const { name, email } = req.body;
        try {
            const participant = await ConversationParticipant.create({ name, email });
            res.status(201).json(participant);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    updateParticipant: async (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        try {
            const participant = await ConversationParticipant.findByPk(id);
            if (!participant) {
                return res.status(404).json({ error: 'Participant not found' });
            }
            await participant.update({ name, email });
            res.status(200).json(participant);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    },

    deleteParticipant: async (req, res) => {
        const { id } = req.params;
        try {
            const participant = await ConversationParticipant.findByPk(id);
            if (!participant) {
                return res.status(404).json({ error: 'Participant not found' });
            }
            await participant.destroy();
            res.status(204).end();
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = conversationParticipantController;