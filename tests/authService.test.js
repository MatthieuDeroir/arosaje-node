const bcrypt = require('bcrypt');
const { register, login, verifyToken, logout } = require('../services/authService');
const { User, Login, Role } = require('../models');

// Mocking bcrypt and jwt
jest.mock('bcrypt');
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn().mockReturnValue('mock_token'),
  verify: jest.fn().mockReturnValue({ id: 1, email: 'test@example.com' }),
  decode: jest.fn().mockReturnValue({ id: 1 })
}));

// Mocking models
jest.mock('../models', () => ({
  User: { create: jest.fn() },
  Login: { create: jest.fn(), findOne: jest.fn() },
  Role: {}
}));

describe('AuthService', () => {
  describe('register', () => {
    it('should create user and login records and return the new user', async () => {
      bcrypt.hash.mockResolvedValue('hashed_password');
      Login.create.mockResolvedValue({
        ID: 1,
        EMAIL: 'test@example.com',
        HASHED_PASSWORD: 'hashed_password',
        ROLE_ID: 1
      });
      User.create.mockResolvedValue({
        USERNAME: 'testuser',
        LOGIN_ID: 1
      });

      const user = await register({
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        birthDate: '1990-01-01',
        email: 'test@example.com',
        password: 'password',
        roleId: 1
      });

      expect(user).toEqual({ USERNAME: 'testuser', LOGIN_ID: 1 });
      expect(bcrypt.hash).toHaveBeenCalledWith('password', 10);
    });
  });

  describe('login', () => {
    it('should authenticate user and return a JWT', async () => {
      bcrypt.compare.mockResolvedValue(true);
      Login.findOne.mockResolvedValue({
        EMAIL: 'test@example.com',
        HASHED_PASSWORD: 'hashed_password',
        User: { ID: 1 },
        Role: { DESCRIPTION: 'User' }
      });

      const result = await login('test@example.com', 'password');
      expect(result.token).toBe('mock_token');
      expect(result.user).toEqual({ ID: 1 });
    });
  });

  describe('verifyToken', () => {
    it('should verify the JWT and return decoded data', () => {
      const decoded = verifyToken('some_token');
      expect(decoded).toEqual({ id: 1, email: 'test@example.com' });
    });
  });
    describe('getUserIdFromToken', () => {
      it('should extract the user ID from the token', () => {
        const { getUserIdFromToken } = require('../services/authService');
        require('jsonwebtoken').decode.mockReturnValue({ id: 1, email: 'test@example.com' });
  
        const userId = getUserIdFromToken('some_token');
        expect(userId).toEqual(1);
      });
  
      it('should return null if the token is invalid', () => {
        const { getUserIdFromToken } = require('../services/authService');
        require('jsonwebtoken').decode.mockReturnValue(null);
  
        const userId = getUserIdFromToken('invalid_token');
        expect(userId).toBeNull();
      });
    });

  

    describe('logout', () => {
        it('should log out the user by updating the last login', async () => {
          require('jsonwebtoken').decode.mockReturnValue({ id: 1 });
          const loginInstance = { LAST_LOGIN: new Date(), save: jest.fn() };
          Login.findOne.mockResolvedValue(loginInstance);
    
          const response = await logout('valid_token');
          expect(response).toEqual({ message: 'User logged out successfully' });
          expect(loginInstance.save).toHaveBeenCalled();
        });
    
        it('should handle null decoded token', async () => {
          require('jsonwebtoken').decode.mockReturnValue(null);
    
          await expect(logout('invalid_token')).rejects.toThrow('Invalid token');
        });
    
        it('should handle case where login record is not found', async () => {
          require('jsonwebtoken').decode.mockReturnValue({ id: 1 });
          Login.findOne.mockResolvedValue(null);
    
          await expect(logout('token_with_no_corresponding_login')).rejects.toThrow('Login record not found');
        });
      });
});
