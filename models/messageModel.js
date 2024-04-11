const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Message extends Model {}

Message.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  CONVERSATION_PARTICIPANT_ID: DataTypes.INTEGER,
  BODY: DataTypes.TEXT,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Message' });

module.exports = Message;
