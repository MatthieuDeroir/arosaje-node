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
  ADDRESS_ID: {
    type:DataTypes.INTEGER,
    references: {
      model: 'Addresses',
      key: 'ID'
    }
  },
  LOGIN_ID: {
    type:DataTypes.INTEGER,
    references: {
      model: 'Logins',
      key: 'ID'
    }
  },
  ROLE_ID: {
    type:DataTypes.INTEGER,
    references: {
      model: 'Roles',
      key: 'ID'
    }
  
  },
  PROFILE_PICTURE_ID: {
    type:DataTypes.INTEGER,
    references: {
      model: 'Medias',
      key: 'ID'
    }
  },
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Users' });


module.exports = User;
