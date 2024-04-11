const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Announce extends Model {}

Announce.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ANNOUNCER_ID: DataTypes.INTEGER,
  PLANT_ID: DataTypes.INTEGER,
  TITLE: DataTypes.STRING,
  BODY: DataTypes.TEXT,
  START_DATE: DataTypes.DATEONLY,
  END_DATE: DataTypes.DATEONLY,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Announce' });

module.exports = Announce;
