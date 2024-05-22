const { Model, DataTypes } = require('sequelize');
const  sequelize  = require('../database/sequelize');

class Address extends Model {}

    Address.init({
        ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        STREET: DataTypes.STRING,
        NUMBER: DataTypes.STRING,
        POSTAL_CODE: DataTypes.STRING,
        CITY: DataTypes.STRING,
        COUNTRY: DataTypes.STRING,
        LATITUDE: DataTypes.DECIMAL(10, 8),
        LONGITUDE: DataTypes.DECIMAL(11, 8),
    },{ sequelize, modelName: 'Announces' });

module.exports = Address;
