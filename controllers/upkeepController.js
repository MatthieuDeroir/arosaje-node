const { Upkeep } = require('../models');

const upkeepController = {
    createUpkeep: async (req, res) => {
        try {
            const newUpkeep = await Upkeep.create(req.body);
            res.status(201).json(newUpkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create upkeep' });
        }
    },

    getAllUpkeeps: async (req, res) => {
        try {
            const upkeeps = await Upkeep.findAll();
            res.json(upkeeps);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeeps' });
        }
    },

    getUpkeepById: async (req, res) => {
        try {
            const upkeep = await Upkeep.findByPk(req.params.id);
            if (!upkeep) {
                return res.status(404).json({ error: 'Upkeep not found' });
            }
            res.json(upkeep);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeep' });
        }
    },

    updateUpkeep: async (req, res) => {
        try {
            const [updated] = await Upkeep.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedUpkeep = await Upkeep.findByPk(req.params.id);
                res.json(updatedUpkeep);
            } else {
                res.status(404).json({ error: 'Upkeep not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update upkeep' });
        }
    },

    deleteUpkeep: async (req, res) => {
        try {
            const deleted = await Upkeep.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'Upkeep deleted successfully' });
            } else {
                res.status(404).json({ error: 'Upkeep not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete upkeep' });
        }
    }
};

module.exports = upkeepController;
