const express = require('express');
const cors = require('cors');

const app = express();
const port = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
