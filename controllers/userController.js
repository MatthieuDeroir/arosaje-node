const { User } = require('../models');

const userController = {
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    },

    getAllUsers: async (req, res) => {
        try {
            const users = await User.findAll();
            console.log(users);
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get users' });
        }
    },

    getUserById: async (req, res) => {
        try {
            const user = await User.findByPk(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json(user);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get user' });
        }
    },

    updateUser: async (req, res) => {
        try {
            const [updated] = await User.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedUser = await User.findByPk(req.params.id);
                res.json(updatedUser);
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const deleted = await User.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'User deleted successfully' });
            } else {
                res.status(404).json({ error: 'User not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
};

module.exports = userController;
