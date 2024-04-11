const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Species extends Model {}

Species.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  NAME: DataTypes.STRING,
}, { sequelize, modelName: 'Species' });

module.exports = Species;
