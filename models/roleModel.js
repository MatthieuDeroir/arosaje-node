const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Role extends Model {}

Role.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  DESCRIPTION: DataTypes.STRING,
}, { sequelize, modelName: 'Roles' });

module.exports = Role;
