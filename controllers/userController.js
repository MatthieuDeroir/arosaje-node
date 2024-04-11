const User = require('../models/index').User;

// Import the necessary modules and models

// Controller methods for CRUD operations
const userController = {
    // Create a new user
    createUser: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newUser = new User({
                street,

                city,
                state,
                country,
                postalCode
            });
            const savedUser = await newUser.save();
            res.status(201).json(savedUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    },

    // Get all useres
    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get users' });
        }
    },

    // Get a single user by ID
    getUserById: async (req, res) => {
        try {
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    },

    // Update an user by ID
    updateUser: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const updatedUser = await User.findByIdAndUpdate(
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
            if (!updatedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(updatedUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    },

    // Delete an user by ID
    deleteUser: async (req, res) => {
        try {
            const deletedUser = await User.findByIdAndDelete(req.params.id);
            if (!deletedUser) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(deletedUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
};

module.exports = userController;