const Role = require('../models/index').Role;

// Import the necessary modules and models

// Controller methods for CRUD operations
const roleController = {
    // Create a new role
    createRole: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newRole = new Role({
                street,

                city,
                state,
                country,
                postalCode
            });
            const savedRole = await newRole.save();
            res.status(201).json(savedRole);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create role' });
        }
    },

    // Get all rolees
    getAllRoles: async (req, res) => {
        try {
            const rolees = await Role.find();
            res.json(rolees);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get rolees' });
        }
    },

    // Get a single role by ID
    getRoleById: async (req, res) => {
        try {
            const role = await Role.findById(req.params.id);
            if (!role) {
                return res.status(404).json({ error: 'Role not found' });
            }
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get role' });
        }
    },

    // Update an role by ID
    updateRole: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const updatedRole = await Role.findByIdAndUpdate(
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
            if (!updatedRole) {
                return res.status(404).json({ error: 'Role not found' });
            }
            res.json(updatedRole);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update role' });
        }
    },

    // Delete an role by ID
    deleteRole: async (req, res) => {
        try {
            const deletedRole = await Role.findByIdAndDelete(req.params.id);
            if (!deletedRole) {
                return res.status(404).json({ error: 'Role not found' });
            }
            res.json(deletedRole);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete role' });
        }
    }
};

module.exports = roleController;