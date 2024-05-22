const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Upkeep extends Model {}

Upkeep.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  PLANT_ID: DataTypes.INTEGER,
  USER_ID: DataTypes.INTEGER,
  REQUIRE_ADVICE: DataTypes.BOOLEAN,
  UPKEEP_STATUS_ID: DataTypes.INTEGER,
  START_DATE: DataTypes.DATEONLY,
  END_DATE: DataTypes.DATEONLY,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Upkeeps' });

module.exports = Upkeep;
