const Plant = require('../models/index').Plant;

// Get all plants
const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find();
        res.json(plants);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get a single plant
const getPlantById = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }
        res.json(plant);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Create a new plant
const createPlant = async (req, res) => {
    const plant = new Plant({
        // Set the properties of the plant object based on the request body
        // Example: name: req.body.name, description: req.body.description
    });

    try {
        const newPlant = await plant.save();
        res.status(201).json(newPlant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Update a plant
const updatePlant = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        // Update the properties of the plant object based on the request body
        // Example: plant.name = req.body.name; plant.description = req.body.description;

        const updatedPlant = await plant.save();
        res.json(updatedPlant);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a plant
const deletePlant = async (req, res) => {
    try {
        const plant = await Plant.findById(req.params.id);
        if (!plant) {
            return res.status(404).json({ message: 'Plant not found' });
        }

        await plant.remove();
        res.json({ message: 'Plant deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getAllPlants,
    getPlantById,
    createPlant,
    updatePlant,
    deletePlant
};