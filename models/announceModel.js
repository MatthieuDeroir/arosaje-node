const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Announce extends Model {}

Announce.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  ANNOUNCER_ID: 
  {
    type: DataTypes.INTEGER,
    references: {
      model: 'User',
      key: 'ID'
    }
  },
  UPKEEP_ID: 
  {
    type: DataTypes.INTEGER,
    references: {
      model: 'Upkeep',
      key: 'ID'
    }
  },
  TITLE: DataTypes.STRING,
  BODY: DataTypes.TEXT,
  START_DATE: DataTypes.DATEONLY,
  END_DATE: DataTypes.DATEONLY,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Announce' });

module.exports = Announce;
