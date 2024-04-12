const { verifyToken } = require('../services/authService');

/**
 * Middleware to protect routes by verifying JWT.
 * It expects the JWT to be sent in the Authorization header as a Bearer token.
 */
function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).send({ error: 'No token provided. Authorization header must be of the form: Bearer [token]' });
  }

  const token = authHeader.split(' ')[1];
  const verified = verifyToken(token);

  if (!verified) {
    return res.status(401).send({ error: 'Invalid or expired token' });
  }

  // Attach user data to the request object for use in subsequent handlers
  req.user = verified;
  next();
}

module.exports = authMiddleware;
