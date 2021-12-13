require('dotenv').config();
const { Sequelize } = require('sequelize');

const { DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT, DB_DIALECT, DB_LOGGING } =
  process.env;

if (process.env.CLEARDB_DATABASE_URL) {
  const connection = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
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
} else {
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
}
