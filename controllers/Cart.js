const { Users, Carts, CartProducts } = require('../database/models');

exports.newCart = async (req, res, next) => {
  const { user_id } = req.body;

  const cart = await Carts.findOne({
    where: {
      user_id,
    },
  });

  if (cart) {
    throw new Error(`This user already has a cart`);
  }

  Carts.create({
    user_id,
  });

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully registered a new cart',
  });
};

exports.addItemToCart = async (req, res, next) => {
  const { user } = req;
  const { product_id } = req.body;

  const cart = Carts.findOne({
    user_id: user.id,
  });

  const cartProduct = await CartProducts.findOne({
    where: {
      product_id,
    },
  });

  if (cartProduct) {
    cartProduct.update({
      quantity: cartProduct.quantity + 1,
    });
  } else {
    CartProducts.create({
      quantity: 1,
      cart_id: cart.id,
      product_id,
    });
  }

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully added product to the cart',
  });
};
