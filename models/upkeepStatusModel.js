const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class UpkeepStatus extends Model {}

UpkeepStatus.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  STATUS: DataTypes.STRING,
}, { sequelize, modelName: 'UpkeepStatus' });

module.exports = UpkeepStatus;
