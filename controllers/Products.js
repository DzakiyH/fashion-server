const { Users, Products, Categories } = require('../database/models');
const ImageKit = require('imagekit');

require('dotenv').config();

const { IMAGEKIT_URL_ENDPOINT, IMAGEKIT_PUBLIC_KEY, IMAGEKIT_PRIVATE_KEY } =
  process.env;

const imagekit = new ImageKit({
  urlEndpoint: IMAGEKIT_URL_ENDPOINT,
  publicKey: IMAGEKIT_PUBLIC_KEY,
  privateKey: IMAGEKIT_PRIVATE_KEY,
});

exports.getAllProducts = async (req, res, next) => {
  try {
    const products = await Products.findAll({ include: 'categories' });

    if (!products) {
      throw new Error(`can't get the products`);
    }

    return res.status(200).json({
      status: 'success',
      code: 200,
      message: 'successfully retrived data',
      data: products,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.getAllCategories = async (req, res, next) => {
  const categories = await Categories.findAll();

  if (!categories) {
    throw new Error(`can't get the categories`);
  }

  return res.status(200).json({
    status: 'success',
    code: 200,
    message: 'successfully retrived data',
    data: categories,
  });
};

exports.newProduct = async (req, res, next) => {
  const productData = req.body;

  try {
    const product = await Products.create(productData);

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully deleted data',
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.updateProduct = async (req, res, next) => {
  const { id, title, description, image, price, stock } = req.body;

  try {
    const product = await Products.findOne({
      where: {
        id,
      },
    });

    product.update({
      title,
      description,
      image,
      price,
      stock,
    });

    product.save();

    return res.status(201).json({
      status: 'success',
      code: 201,
      message: 'successfully retrived data',
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

exports.deleteProduct = async (req, res, next) => {
  const { id } = req.params;

  try {
    const product = await Products.findByPk(id);

    product.destroy();
  } catch (error) {
    console.log(error.message);
  }

  return res.status(201).json({
    status: 'success',
    code: 201,
    message: 'successfully deleted data',
  });
};

exports.uploadImageAuth = async (req, res, next) => {
  const result = imagekit.getAuthenticationParameters();

  return res.status(200).send(result);
};
