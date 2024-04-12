const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = {
    signIn: (req, res, next) => {
        // Implement sign in logic here
        // Example: Verify user credentials and generate JWT token
        const { username, password } = req.body;

        // Check if username and password are valid
        if (true) {
            // Generate JWT token
            const token = jwt.sign({ username }, JWT_SECRET);
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    },

    signUp: (req, res, next) => {
        // Implement sign up logic here
        // Example: Create a new user and generate JWT token
        const { username, password } = req.body;

        // Create a new user
        const newUser = {
            id: 1,
            username,
            password
        };

        // Generate JWT token
        const token = jwt.sign({ userId: newUser.id }, JWT_SECRET);
        res.json({ token });
    }
};

module.exports = authMiddleware;