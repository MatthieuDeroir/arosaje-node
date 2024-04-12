const { Plant } = require('../models');

const plantController = {
    createPlant: async (req, res) => {
        try {
            const newPlant = await Plant.create(req.body);
            res.status(201).json(newPlant);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create plant' });
        }
    },

    getAllPlants: async (req, res) => {
        try {
            const plants = await Plant.findAll();
            res.json(plants);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get plants' });
        }
    },

    getPlantById: async (req, res) => {
        try {
            const plant = await Plant.findByPk(req.params.id);
            if (!plant) {
                return res.status(404).json({ error: 'Plant not found' });
            }
            res.json(plant);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get plant' });
        }
    },

    updatePlant: async (req, res) => {
        try {
            const [updated] = await Plant.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedPlant = await Plant.findByPk(req.params.id);
                res.json(updatedPlant);
            } else {
                res.status(404).json({ error: 'Plant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update plant' });
        }
    },

    deletePlant: async (req, res) => {
        try {
            const deleted = await Plant.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'Plant deleted successfully' });
            } else {
                res.status(404).json({ error: 'Plant not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete plant' });
        }
    }
};

module.exports = plantController;
