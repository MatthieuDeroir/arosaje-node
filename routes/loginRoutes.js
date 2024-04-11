const express = require('express');
const loginController = require('../controllers/index').Login;

const router = express.Router();

// Create a new login
router.post('/', loginController.createLogin);

// Get all logins
router.get('/', loginController.getAllLogins);

// Get a specific login by ID
router.get('/:id', loginController.getLoginById);

// Update a login by ID
router.put('/:id', loginController.updateLogin);

// Delete a login by ID
router.delete('/:id', loginController.deleteLogin);

module.exports = router;
