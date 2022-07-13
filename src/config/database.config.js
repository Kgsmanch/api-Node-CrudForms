//Variable dotEnv
const path = require('path');
require('dotenv').config({ path: './src/config/.env.dev' })
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;


// Connection
const { Sequelize, Model, DataTypes } = require('sequelize');
const database = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host:'localhost',
  dialect:'mysql',
})

try {
  database.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

module.exports = database;

