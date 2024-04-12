const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

class Login extends Model {}

Login.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  LAST_LOGIN: DataTypes.DATE,
  EMAIL: DataTypes.STRING,
  HASHED_PASSWORD: DataTypes.STRING,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Login' });


module.exports = Login;
