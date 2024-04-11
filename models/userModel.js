const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class User extends Model {}

User.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  USERNAME: DataTypes.STRING,
  FIRST_NAME: DataTypes.STRING,
  LAST_NAME: DataTypes.STRING,
  BIRTH_DATE: DataTypes.DATEONLY,
  LAST_GPS_LOCALIZATION: DataTypes.STRING,
  LAST_GPS_LOCALIZATION_TIMESTAMP: DataTypes.DATE,
  ADDRESS_ID: DataTypes.INTEGER,
  LOGIN_ID: DataTypes.INTEGER,
  PROFILE_PICTURE_ID: DataTypes.INTEGER,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'User' });

module.exports = User;
