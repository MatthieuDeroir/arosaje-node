const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class ConversationParticipant extends Model {}

ConversationParticipant.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  CONVERSATION_ID: DataTypes.INTEGER,
  USER_ID: DataTypes.INTEGER,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'ConversationParticipant' });

module.exports = ConversationParticipant;
