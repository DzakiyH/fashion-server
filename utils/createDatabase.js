const { Client } = require('pg');
require('dotenv').config();

const client = new Client();

client.connect(process.env.DATABASE_URL);
client.query('CREATE DATABASE fashionlution', (err, res) => {
  console.log(err ? err.stack : 'something went wrong');
  client.end();
});
