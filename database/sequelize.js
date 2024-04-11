const { Pool } = require('pg');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('arosaje', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres',
  // Additional options
});

module.exports = sequelize;


// Database connection details
const database = 'arosaje';
const username = 'postgres';
const password = 'postgres';
const host = 'localhost';
const port = 5432;
const dialect = 'postgres';

// Initialize a pool using the superuser (or a user with database creation rights)
const pool = new Pool({
  user: username,
  host: host,
  database: 'postgres', // connect to the default database to check for the existence of the target database
  password: password,
  port: port,
});

pool.query(`SELECT 1 FROM pg_database WHERE datname='${database}'`, async (error, results) => {
  if (error) {
    console.error('Error checking database existence:', error);
    process.exit(1); // Exit if we can't check the database
  }

  if (results.rows.length === 0) {
    // Database does not exist, create it
    await pool.query(`CREATE DATABASE "${database}"`);
    console.log(`Database ${database} created.`);
  } else {
    console.log(`Database ${database} already exists.`);
  }
  pool.end(); // Close the pool connection

  // Now that the database is ensured to exist, initialize Sequelize
  const sequelize = new Sequelize(database, username, password, {
    host: host,
    port: port,
    dialect: dialect,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    define: {
      timestamps: false
    }
  });


  // Test the connection
  async function testConnection() {
    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }

  testConnection();

  // After establishing a connection with sequelize.authenticate()


async function initializeDatabase() {
  try {
    // Synchronize all models with the database
    await sequelize.sync({ force: false }); // Use { force: true } to drop tables before recreating them
    console.log('All models were synchronized successfully.');
  } catch (error) {
    console.error('Failed to synchronize models with the database:', error);
  }
}

initializeDatabase();


});

