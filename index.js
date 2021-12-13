const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/models');
const path = require('path');

const userAuthRouter = require('./routes/UserAuth');
const adminAuthRouter = require('./routes/AdminAuth');
const productsRouter = require('./routes/Product');
const cartsRouter = require('./routes/Cart');
const OrdersRouter = require('./routes/Order');

require('dotenv').config;

const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

sequelize.authenticate().then(() => {
  console.log(`Success connecting database`);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use('/auth/user', userAuthRouter);
app.use('/auth/admin', adminAuthRouter);
app.use('/product', productsRouter);
app.use('/cart', cartsRouter);
app.use('/order', OrdersRouter);

app.use((error, req, res, next) => {
  return res.status(400).json({
    status: 'error',
    code: 400,
    message: 'Bad Request',
    error: error.message,
  });
});

app.listen(port, () => {
  console.log(`server running on port: ${port}`);
});
