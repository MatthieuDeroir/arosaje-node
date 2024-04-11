const Species = require('../models/index').Species;

// Get all species
exports.getAllSpecies = async (req, res) => {
    try {
        const species = await Species.find();
        res.json(species);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single species
exports.getSpeciesById = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id);
        if (!species) {
            return res.status(404).json({ message: 'Species not found' });
        }
        res.json(species);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new species
exports.createSpecies = async (req, res) => {
    const species = new Species({
        name: req.body.name,
        description: req.body.description,
        // Add other fields as needed
    });

    try {
        const newSpecies = await species.save();
        res.status(201).json(newSpecies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a species
exports.updateSpecies = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id);
        if (!species) {
            return res.status(404).json({ message: 'Species not found' });
        }

        species.name = req.body.name;
        species.description = req.body.description;
        // Update other fields as needed

        const updatedSpecies = await species.save();
        res.json(updatedSpecies);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a species
exports.deleteSpecies = async (req, res) => {
    try {
        const species = await Species.findById(req.params.id);
        if (!species) {
            return res.status(404).json({ message: 'Species not found' });
        }

        await species.remove();
        res.json({ message: 'Species deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};