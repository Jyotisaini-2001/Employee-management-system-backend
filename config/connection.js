// // config/db.js

// const mysql = require('mysql');
// require('dotenv').config();

// // Create MySQL connection
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// // Connect to MySQL database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database');
// });

// module.exports = connection;
// Load environment variables from .env file
require('dotenv').config();

// Import Sequelize
const { Sequelize } = require('sequelize');

// Create Sequelize instance using environment variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql'
  }
);

// Authenticate the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to MySQL database using Sequelize');
  })
  .catch(err => {
    console.error('Unable to connect to the MySQL database:', err);
  });

module.exports = sequelize;
