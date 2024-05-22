const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Conversation extends Model {}

Conversation.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
}, { sequelize, modelName: 'Conversations' });

module.exports = Conversation;
