const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/models');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

sequelize.authenticate().then(() => {
  console.log(`Success connecting database`);
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
