const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { User, Login, Role } = require('../models');
const dotenv = require('dotenv');
const saltRounds = 10;
dotenv.config();
const jwtSecret = process.env.JWT_SECRET;  // You should store this in an environment variable

/**
 * Registers a new user and creates a login record.
 */
async function register({ username, firstName, lastName, birthDate, email, password, roleId }) {
  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const login = await Login.create({
    EMAIL: email,
    HASHED_PASSWORD: hashedPassword,
    ROLE_ID: roleId,
    LAST_LOGIN: new Date(),
    CREATED_AT: new Date(),
    UPDATED_AT: new Date()
  });

  const user = await User.create({
    USERNAME: username,
    FIRST_NAME: firstName,
    LAST_NAME: lastName,
    BIRTH_DATE: birthDate,
    LOGIN_ID: login.ID,
    ROLE_ID: roleId,
    CREATED_AT: new Date(),
    UPDATED_AT: new Date()
  });

  return user;
}

/**
 * Authenticates a user and returns a JWT if successful.
 */
async function login(email, password) {
  const user = await Login.findOne({
    where: { EMAIL: email },
    include: [{ model: User }, { model: Role }]
  });

  if (!user) {
    throw new Error('User not found');
  }

  const isMatch = await bcrypt.compare(password, user.HASHED_PASSWORD);
  if (!isMatch) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.sign({
    id: user.User.ID,
    email: user.EMAIL,
    role: user.Role.DESCRIPTION
  }, jwtSecret, { expiresIn: '24h' });

  return { token, user: user.User };
}

/**
 * Verifies the JWT token and returns the decoded data.
 */
function verifyToken(token) {
    try {
      return jwt.verify(token, jwtSecret);
    } catch (err) {
      console.error('Token verification failed:', err);
      return null;
    }
  }
  
  /**
   * Extracts the user ID from the JWT token without verifying its validity.
   * This should be used cautiously and always followed by verification if used for security purposes.
   */
  function getUserIdFromToken(token) {
    try {
      const decoded = jwt.decode(token);
      return decoded ? decoded.id : null;
    } catch (err) {
      console.error('Failed to decode token:', err);
      return null;
    }
  }

  /**
   * Logs out a user by updating the last login timestamp in the database.
   */

  async function logout(token) {
    const decoded = jwt.decode(token);
    if (!decoded || !decoded.id) {
      throw new Error('Invalid token');
    }
  
    const login = await Login.findOne({
      where: { ID: decoded.id }
    });
  
    if (!login) {
      throw new Error('Login record not found');
    }
  
    login.LAST_LOGIN = new Date();
    await login.save();
  
    return { message: 'User logged out successfully' };
  }
  

module.exports = { register, login, verifyToken, getUserIdFromToken, logout};
