const {
  Products,
  Orders,
  OrderProducts,
  UserAddress,
} = require('../database/models');

exports.getAllOrders = async (req, res, next) => {
  const { user } = req;

  try {
    const userOrder = await Orders.findOne({
      where: {
        user_id: user.id,
      },
    });

    const orderProducts = await OrderProducts.findAll({
      where: {
        order_id: userOrder.id,
      },
      include: Products,
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully created data',
      data: orderProducts,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.setNewOrder = async (req, res, next) => {
  const { user } = req;
  const { total_payment } = req.body;

  try {
    await Orders.create({
      user_id: user.id,
      total_payment,
      status: 'waiting payment',
    });
  } catch (error) {
    console.log(error.message);
  }

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully created data',
  });
};

exports.setAddress = async (req, res, next) => {
  const { user } = req;
  const {
    first_name,
    last_name,
    address,
    province,
    city,
    postal_code,
    phone_number,
  } = req.body;

  try {
    const userAddress = await UserAddress.findOne({
      where: {
        user_id: user.id,
      },
    });

    if (userAddress) {
      await userAddress.update({
        first_name,
        last_name,
        address,
        province,
        city,
        postal_code,
        phone_number,
        user_id: user.id,
      });

      await userAddress.save();
    } else {
      await UserAddress.create({
        first_name,
        last_name,
        address,
        province,
        city,
        postal_code,
        phone_number,
        user_id: user.id,
      });
    }
  } catch (error) {
    console.log(error.message);
  }

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully created data',
  });
};

exports.setOrderProducts = async (req, res, next) => {
  const { user } = req;
  const products = req.body;

  try {
    const order = await Orders.findOne({
      where: {
        user_id: user.id,
      },
    });

    await order.update({ status: 'paid' });

    for (let i = 0; i < products.length; i++) {
      await OrderProducts.create({
        order_id: order.id,
        product_id: products[i].product_id,
        quantity: products[i].quantity,
      });
    }

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully created data',
    });
  } catch (error) {
    console.log(error.message);
  }
};
