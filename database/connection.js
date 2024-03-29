require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT, DB_DIALECT } = process.env;

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  port: parseInt(DB_PORT, 10),
  dialect: DB_DIALECT,
  logging: false,
  pool: {
    min: 1,
    max: 5,
    acquire: 30000,
    idle: 60000,
  },
});
module.exports = connection;
