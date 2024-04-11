const Login = require('../models/index').Login;

// Import the necessary modules and models

// Controller methods for CRUD operations
const loginController = {
    // Create a new login
    createLogin: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const newLogin = await Login.create({
                street,
                city,
                state,
                country,
                postalCode
            });
            res.status(201).json(newLogin);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create login' });
        }
    },

    // Get all logins
    getAllLogins: async (req, res) => {
        try {
            const logins = await Login.findAll();
            res.json(logins);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get logins' });
        }
    },

    // Get a single login by ID
    getLoginById: async (req, res) => {
        try {
            const login = await Login.findByPk(req.params.id);
            if (!login) {
                return res.status(404).json({ error: 'Login not found' });
            }
            res.json(login);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get login' });
        }
    },

    // Update a login by ID
    updateLogin: async (req, res) => {
        try {
            const { street, city, state, country, postalCode } = req.body;
            const [updatedRows] = await Login.update(
                {
                    street,
                    city,
                    state,
                    country,
                    postalCode
                },
                {
                    where: {
                        id: req.params.id
                    }
                }
            );
            if (updatedRows === 0) {
                return res.status(404).json({ error: 'Login not found' });
            }
            const updatedLogin = await Login.findByPk(req.params.id);
            res.json(updatedLogin);
        } catch (error) {
            res.status(500).json({ error: 'Failed to update login' });
        }
    },

    // Delete a login by ID
    deleteLogin: async (req, res) => {
        try {
            const deletedRows = await Login.destroy({
                where: {
                    id: req.params.id
                }
            });
            if (deletedRows === 0) {
                return res.status(404).json({ error: 'Login not found' });
            }
            res.json({ message: 'Login deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete login' });
        }
    }
};

module.exports = loginController;