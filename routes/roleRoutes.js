const express = require('express');
const roleController = require('../controllers/index').Role;

const router = express.Router();

// Create a new role
router.post('/', roleController.createRole);

// Get all roles
router.get('/', roleController.getAllRoles);

// Get a specific role by ID
router.get('/:id', roleController.getRoleById);

// Update a role by ID
router.put('/:id', roleController.updateRole);

// Delete a role by ID
router.delete('/:id', roleController.deleteRole);

module.exports = router;
