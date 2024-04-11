const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');


class Comment extends Model {}

Comment.init({
  ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  USER_ID: DataTypes.INTEGER,
  BODY: DataTypes.TEXT,
  CREATED_AT: DataTypes.DATE,
  UPDATED_AT: DataTypes.DATE,
}, { sequelize, modelName: 'Comment' });

module.exports = Comment;
