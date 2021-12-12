const {
  Users,
  Orders,
  OrderProducts,
  UserAddress,
} = require('../database/models');

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
