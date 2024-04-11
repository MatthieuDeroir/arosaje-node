const Upkeep = require('../models/index').Upkeep;

// Import the necessary modules and models

// Controller methods for CRUD operations
const upkeepController = {
    // Create a new upkeep
    createUpkeep: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newUpkeep = new Upkeep({
                street,

                city,
                state,
                country,
                postalCode
            });
            const savedUpkeep = await newUpkeep.save();
            res.status(201).json(savedUpkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create upkeep' });
        }
    },

    // Get all upkeepes
    getAllUpkeeps: async (req, res) => {
        try {
            const upkeepes = await Upkeep.find();
            res.json(upkeepes);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeepes' });
        }
    },

    // Get a single upkeep by ID
    getUpkeepById: async (req, res) => {
        try {
            const upkeep = await Upkeep.findById(req.params.id);
            if (!upkeep) {
                return res.status(404).json({ error: 'Upkeep not found' });
            }
            res.json(upkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeep' });
        }
    },

    // Update an upkeep by ID
    updateUpkeep: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const updatedUpkeep = await Upkeep.findByIdAndUpdate(
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
            if (!updatedUpkeep) {
                return res.status(404).json({ error: 'Upkeep not found' });
            }
            res.json(updatedUpkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update upkeep' });
        }
    },

    // Delete an upkeep by ID
    deleteUpkeep: async (req, res) => {
        try {
            const deletedUpkeep = await Upkeep.findByIdAndDelete(req.params.id);
            if (!deletedUpkeep) {
                return res.status(404).json({ error: 'Upkeep not found' });
            }
            res.json(deletedUpkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete upkeep' });
        }
    }
};

module.exports = upkeepController;