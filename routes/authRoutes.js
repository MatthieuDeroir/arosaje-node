// authRoutes.js

const express = require('express');
const router = express.Router();
const authService = require('../services/authService'); // Assuming authService is located in services directory

// POST /api/auth/register
router.post('/register', async (req, res) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).send(user);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

// POST /api/auth/login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.send(result);
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
});

module.exports = router;
