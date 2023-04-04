require('dotenv').config();

const {
  DB_NAME,
  DB_PASS,
  DB_USER,
  DB_PORT,
  DB_DIALECT,
  DB_LOGGING,
  DATABASE_URL,
} = process.env;

let sequelizeConfig = {
  dialect: DB_DIALECT,
  host: DATABASE_URL,
  port: parseInt(DB_PORT, 10),
  username: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
  logging: DB_LOGGING,
  seederStorage: 'sequelize',
  seederStorageTableName: 'SequelizeData',
};

module.exports = sequelizeConfig;
