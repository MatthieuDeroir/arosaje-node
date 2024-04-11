const { DataTypes } = require('sequelize');
const  sequelize  = require('../database/sequelize');

const Address = sequelize.define('Address', {
    ID: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    STREET: DataTypes.STRING,
    NUMBER: DataTypes.STRING,
    POSTAL_CODE: DataTypes.STRING,
    CITY: DataTypes.STRING,
    COUNTRY: DataTypes.STRING,
    LATITUDE: DataTypes.DECIMAL(10, 8),
    LONGITUDE: DataTypes.DECIMAL(11, 8),
    });

module.exports = Address;
