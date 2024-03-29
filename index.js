const express = require('express');
const cors = require('cors');
const { sequelize } = require('./database/models');
const path = require('path');
const helmet = require('helmet');
const xss = require('xss-clean');
const rateLimit = require('express-rate-limit');
const compression = require('compression');

const userAuthRouter = require('./routes/UserAuth');
const adminAuthRouter = require('./routes/AdminAuth');
const productsRouter = require('./routes/Product');
const cartsRouter = require('./routes/Cart');
const OrdersRouter = require('./routes/Order');

require('dotenv').config;

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(xss());
app.use(helmet());
app.use(compression());
// security
// const limiter = rateLimit({
//   windowMs: 10 * 60 * 1000,
//   max: 100,
// });

// app.use(limiter);

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

app.listen({ port, host: '0.0.0.0' }, () => {
  console.log(`server running on port: ${port}`);
});
