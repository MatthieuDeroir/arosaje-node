const { Address } = require('../models'); // Assuming your models/index.js exports models

const addressController = {
    // Create a new address
    createAddress: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newAddress = await Address.create({
                street,
                city,
                state,
                country,
                postalCode
            });
            res.status(201).json(newAddress);
        } catch (error) {
            console.error('Failed to create address:', error);
            res.status(500).json({ error: 'Failed to create address' });
        }
    },

    // Get all addresses
    getAllAddresses: async (req, res) => {
        try {
            const addresses = await Address.findAll();
            res.json(addresses);
        } catch (error) {
            console.error('Failed to get addresses:', error);
            res.status(500).json({ error: 'Failed to get addresses' });
        }
    },

    // Get a single address by ID
    getAddressById: async (req, res) => {
        try {
            const address = await Address.findByPk(req.params.id);
            if (!address) {
                return res.status(404).json({ error: 'Address not found' });
            }
            res.json(address);
        } catch (error) {
            console.error('Failed to get address:', error);
            res.status(500).json({ error: 'Failed to get address' });
        }
    },

    // Update an address by ID
    updateAddress: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const [updatedRows] = await Address.update(
                { street, city, state, country, postalCode },
                { where: { id: req.params.id } }
            );
            if (!updatedRows) {
                return res.status(404).json({ error: 'Address not found' });
            }
            const updatedAddress = await Address.findByPk(req.params.id);
            res.json(updatedAddress);
        } catch (error) {
            console.error('Failed to update address:', error);
            res.status(500).json({ error: 'Failed to update address' });
        }
    },

    // Delete an address by ID
    deleteAddress: async (req, res) => {
        try {
            const deletedRows = await Address.destroy({ where: { id: req.params.id } });
            if (!deletedRows) {
                return res.status(404).json({ error: 'Address not found' });
            }
            res.status(204).send(); // No content to send back
        } catch (error) {
            console.error('Failed to delete address:', error);
            res.status(500).json({ error: 'Failed to delete address' });
        }
    }
};

module.exports = addressController;
