// db/init.js
require('dotenv').config();
const { Sequelize } = require('sequelize');

    const config = {
        dialect: 'sqlite', // Default to SQLite
        storage: './database/db.sqlite',
        logging: false // Optionally turn off logging
    };

    // if (process.env.DB_DIALECT === 'postgres') {
    //     config.host = process.env.DB_HOST;
    //     config.database = process.env.DB_NAME;
    //     config.username = process.env.DB_USER;
    //     config.password = process.env.DB_PASS;
    // }

    const sequelize = new Sequelize(config);

    try {
         sequelize.authenticate();
        console.log('Connection has been established successfully.');
         sequelize.sync(); // Synchronize all models
        console.log('Models are synchronized successfully.');


    } catch (err) {
        console.error('Unable to connect to the database:', err);
        throw err;
    }

    module.exports = sequelize;