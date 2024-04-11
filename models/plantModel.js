const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Plant extends Model {}

Plant.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  OWNER_ID: DataTypes.INTEGER,
  SPECIES_ID: DataTypes.INTEGER,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Plant' });

module.exports = Plant;
