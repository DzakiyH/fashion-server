const { Products, Carts, CartProducts } = require('../database/models');

exports.addItemToCart = async (req, res, next) => {
  const { user } = req;
  const { product_id } = req.body;

  try {
    const cart = await Carts.findOne({
      where: {
        user_id: user.id,
      },
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
  } catch (error) {
    console.log(error.message);
  }
};

exports.getCartitems = async (req, res, next) => {
  const { user } = req;

  try {
    const cart = await Carts.findOne({
      where: {
        user_id: user.id,
      },
    });

    const cartProducts = await CartProducts.findAll({
      where: {
        cart_id: cart.id,
      },
      include: Products,
    });

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully retrived all products',
      data: cartProducts,
    });
  } catch (error) {
    console.log(error.message);
  }
};
