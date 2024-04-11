const { Announce } = require('../models'); // Adjust according to your file structure

const announceController = {
    // Get all announces
    getAllAnnounces: async (req, res) => {
        try {
            const announces = await Announce.findAll();
            res.json(announces);
        } catch (error) {
            console.error('Failed to get announces:', error);
            res.status(500).json({ message: error.message });
        }
    },

    // Get a single announce by ID
    getAnnounceById: async (req, res) => {
        try {
            const announce = await Announce.findByPk(req.params.id);
            if (!announce) {
                return res.status(404).json({ message: 'Announce not found' });
            }
            res.json(announce);
        } catch (error) {
            console.error('Failed to get announce:', error);
            res.status(500).json({ message: error.message });
        }
    },

    // Create a new announce
    createAnnounce: async (req, res) => {
        try {
            const { announcerId, plantId, title, body, startDate, endDate } = req.body;
            const announce = await Announce.create({
                ANNOUNCER_ID: announcerId,
                PLANT_ID: plantId,
                TITLE: title,
                BODY: body,
                START_DATE: startDate,
                END_DATE: endDate,
                CREATED_AT: new Date(),
                UPDATED_AT: new Date()
            });
            res.status(201).json(announce);
        } catch (error) {
            console.error('Failed to create announce:', error);
            res.status(400).json({ message: error.message });
        }
    },

    // Update an announce
    updateAnnounce: async (req, res) => {
        try {
            const { announcerId, plantId, title, body, startDate, endDate } = req.body;
            const [updatedRows] = await Announce.update({
                ANNOUNCER_ID: announcerId,
                PLANT_ID: plantId,
                TITLE: title,
                BODY: body,
                START_DATE: startDate,
                END_DATE: endDate,
                UPDATED_AT: new Date()
            }, {
                where: { id: req.params.id }
            });

            if (!updatedRows) {
                return res.status(404).json({ message: 'Announce not found' });
            }

            const updatedAnnounce = await Announce.findByPk(req.params.id);
            res.json(updatedAnnounce);
        } catch (error) {
            console.error('Failed to update announce:', error);
            res.status(400).json({ message: error.message });
        }
    },

    // Delete an announce
    deleteAnnounce: async (req, res) => {
        try {
            const deletedRows = await Announce.destroy({
                where: { id: req.params.id }
            });

            if (!deletedRows) {
                return res.status(404).json({ message: 'Announce not found' });
            }

            res.status(200).json({ message: 'Announce deleted successfully' });
        } catch (error) {
            console.error('Failed to delete announce:', error);
            res.status(500).json({ message: error.message });
        }
    }
};

module.exports = announceController;
