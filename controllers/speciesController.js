const Species = require('../models/index').Species;

const speciesController = {
    create: async (req, res) => {
        try {
            const newSpecies = await Species.create(req.body);
            res.status(201).json(newSpecies);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create species' });
        }
    },

    getAll: async (req, res) => {
        try {
            const speciesList = await Species.findAll();
            res.json(speciesList);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get species' });
        }
    },

    getById: async (req, res) => {
        try {
            const species = await Species.findByPk(req.params.id);
            if (!species) {
                res.status(404).json({ error: 'Species not found' });
            } else {
                res.json(species);
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to get species' });
        }
    },

    updateById: async (req, res) => {
        try {
            const [updated] = await Species.update(req.body, { where: { id: req.params.id } });
            if (!updated) {
                res.status(404).json({ error: 'Species not found' });
            } else {
                const updatedSpecies = await Species.findByPk(req.params.id);
                res.json(updatedSpecies);
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update species' });
        }
    },

    deleteById: async (req, res) => {
        try {
            const deleted = await Species.destroy({ where: { id: req.params.id } });
            if (!deleted) {
                res.status(404).json({ error: 'Species not found' });
            } else {
                res.json({ message: 'Species deleted successfully' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete species' });
        }
    }
};


module.exports = speciesController;