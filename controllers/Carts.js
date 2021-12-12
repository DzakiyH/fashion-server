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
    console.log(error);
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

exports.updateProductQuantity = async (req, res, next) => {
  const { user } = req;
  const { quantity, product_id } = req.body;

  try {
    const cart = await Carts.findOne({
      where: {
        user_id: user.id,
      },
    });

    const cartProducts = await CartProducts.findOne({
      where: {
        product_id,
        cart_id: cart.id,
      },
      include: Products,
    });

    const originalQuantity = cartProducts.quantity;

    await cartProducts.update({ quantity: originalQuantity + quantity });

    await cartProducts.save();

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully changed data',
      data: cartProducts,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.removeProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const cartProducts = await CartProducts.findOne({
      where: {
        id,
      },
    });

    await cartProducts.destroy();

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully removed products',
    });
  } catch (error) {
    console.log(error.message + 'remove');
  }
};

exports.emptyCart = async (req, res, next) => {
  const { id } = req.params;
  try {
    const cartProducts = await CartProducts.findAll({
      where: {
        cart_id: id,
      },
    });

    cartProducts.map(async (product) => {
      return await product.destroy();
    });

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully removed cart',
    });
  } catch (error) {
    console.log(error.message + 'empty');
  }
};
