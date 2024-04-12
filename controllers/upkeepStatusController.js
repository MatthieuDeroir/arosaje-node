const { UpkeepStatus } = require('../models');

const upkeepStatusController = {
    createUpkeepStatus: async (req, res) => {
        try {
            const newUpkeepStatus = await UpkeepStatus.create(req.body);
            res.status(201).json(newUpkeepStatus);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create upkeepStatus' });
        }
    },

    getAllUpkeepStatus: async (req, res) => {
        try {
            const upkeepStatuses = await UpkeepStatus.findAll();
            res.json(upkeepStatuses);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeepStatuses' });
        }
    },

    getUpkeepStatusById: async (req, res) => {
        try {
            const upkeepStatus = await UpkeepStatus.findByPk(req.params.id);
            if (!upkeepStatus) {
                return res.status(404).json({ error: 'UpkeepStatus not found' });
            }
            res.json(upkeepStatus);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get upkeepStatus' });
        }
    },

    updateUpkeepStatus: async (req, res) => {
        try {
            const [updated] = await UpkeepStatus.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedUpkeepStatus = await UpkeepStatus.findByPk(req.params.id);
                res.json(updatedUpkeepStatus);
            } else {
                res.status(404).json({ error: 'UpkeepStatus not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update upkeepStatus' });
        }
    },

    deleteUpkeepStatus: async (req, res) => {
        try {
            const deleted = await UpkeepStatus.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'UpkeepStatus deleted successfully' });
            } else {
                res.status(404).json({ error: 'UpkeepStatus not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete upkeepStatus' });
        }
    }
};

module.exports = upkeepStatusController;
