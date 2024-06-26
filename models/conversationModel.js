const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Conversation extends Model {}

Conversation.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  CONVERSATION_PARTICIPANT_ID: DataTypes.INTEGER,
}, { sequelize, modelName: 'Conversation' });

module.exports = Conversation;
