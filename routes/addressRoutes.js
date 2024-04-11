const express = require('express');
const addressController = require('../controllers/index').Address;

const router = express.Router();

// Create a new address
router.post('/', addressController.createAddress);

// Get all addresss
router.get('/', addressController.getAllAddresses);

// Get a specific address by ID
router.get('/:id', addressController.getAddressById);

// Update a address by ID
router.put('/:id', addressController.updateAddress);

// Delete a address by ID
router.delete('/:id', addressController.deleteAddress);

module.exports = router;