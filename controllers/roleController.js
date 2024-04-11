const { Role } = require('../models');

const roleController = {
    createRole: async (req, res) => {
        try {
            const newRole = await Role.create(req.body);
            res.status(201).json(newRole);
        } catch (error) {
            res.status(500).json({ error: 'Failed to create role' });
        }
    },

    getAllRoles: async (req, res) => {
        try {
            const roles = await Role.findAll();
            res.json(roles);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get roles' });
        }
    },

    getRoleById: async (req, res) => {
        try {
            const role = await Role.findByPk(req.params.id);
            if (!role) {
                return res.status(404).json({ error: 'Role not found' });
            }
            res.json(role);
        } catch (error) {
            res.status(500).json({ error: 'Failed to get role' });
        }
    },

    updateRole: async (req, res) => {
        try {
            const [updated] = await Role.update(req.body, {
                where: { id: req.params.id }
            });
            if (updated) {
                const updatedRole = await Role.findByPk(req.params.id);
                res.json(updatedRole);
            } else {
                res.status(404).json({ error: 'Role not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to update role' });
        }
    },

    deleteRole: async (req, res) => {
        try {
            const deleted = await Role.destroy({
                where: { id: req.params.id }
            });
            if (deleted) {
                res.json({ message: 'Role deleted successfully' });
            } else {
                res.status(404).json({ error: 'Role not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to delete role' });
        }
    }
};

module.exports = roleController;
