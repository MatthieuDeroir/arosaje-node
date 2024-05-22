const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Media extends Model {}

Media.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  USER_ID: DataTypes.INTEGER,
  TYPE: DataTypes.STRING,
  FORMAT: DataTypes.STRING,
  ORIGINAL_NAME: DataTypes.STRING,
  HASHED_NAME: DataTypes.STRING,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Medias' });

module.exports = Media;
