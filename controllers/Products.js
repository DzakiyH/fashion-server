const { Users, Products, Categories } = require('../database/models');

exports.getAllProducts = async (req, res, next) => {
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
