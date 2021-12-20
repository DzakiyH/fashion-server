const {
  Products,
  Orders,
  OrderProducts,
  UserAddress,
  OrderStatuses,
} = require('../database/models');

exports.getAllOrders = async (req, res, next) => {
  const orderProducts = [];

  try {
    const userOrders = await Orders.findAll({
      include: OrderStatuses,
    });

    for (let i = 0; i < userOrders.length; i++) {
      const orderProduct = await OrderProducts.findAll({
        where: {
          order_id: userOrders[i].id,
        },
        include: Products,
      });
      orderProducts.push(orderProduct);
    }

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully created data',
      data: [userOrders, orderProducts],
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getUserOrders = async (req, res, next) => {
  const { user } = req;
  const orderProducts = [];

  try {
    const userOrders = await Orders.findAll({
      where: {
        user_id: user.id,
      },
      include: OrderStatuses,
    });

    for (let i = 0; i < userOrders.length; i++) {
      const orderProduct = await OrderProducts.findAll({
        where: {
          order_id: userOrders[i].id,
        },
        include: Products,
      });
      orderProducts.push(orderProduct);
    }

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully created data',
      data: [userOrders, orderProducts],
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
      status_id: 1,
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

    await order.update({ status_id: 2 });

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

exports.getUserAddress = async (req, res, next) => {
  const { user } = req;

  try {
    const address = await UserAddress.findOne({
      where: {
        user_id: user.id,
      },
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully created data',
      data: address,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllOrderProducts = async (req, res, next) => {
  const { user } = req;
  const orderProducts = [];

  try {
    const orders = await Orders.findAll({
      where: {
        user_id: user.id,
      },
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully retrieved data',
      data: orderProducts,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateOrder = async (req, res, next) => {
  const { id, resiNumber } = req.body;

  try {
    if (resiNumber && resiNumber !== '') {
      const order = await Orders.findByPk(id);

      order.update({ resi: resiNumber, status_id: 3 });

      order.save();

      return res.status(201).json({
        status: 'success',
        code: 201,
        message: 'successfully updated data',
      });
    } else if (!resiNumber || resiNumber === '') {
      const order = await Orders.findByPk(id);

      order.update({ status_id: 4 });

      order.save();

      return res.status(201).json({
        status: 'success',
        code: 201,
        message: 'successfully updated data',
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};
