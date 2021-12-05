const sequelize = require('../connection');
const User = require('./Users');
const UserType = require('./UserTypes');
const Categories = require('./Categories');
const Products = require('./Products');
const Carts = require('./Carts');
const CartProducts = require('./CartProducts');
const Orders = require('./Orders');
const OrderProducts = require('./OrderProducts');

UserType.hasMany(User, {
  as: 'users',
  foreignKey: 'user_type_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

User.belongsTo(UserType, {
  as: 'user_type',
  foreignKey: 'user_type_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Categories.hasMany(Products, {
  as: 'products',
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.belongsTo(Categories, {
  as: 'product_category',
  foreignKey: 'category_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

User.hasOne(Carts, {
  as: 'cart',
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Carts.hasOne(User, {
  as: 'user',
  foreignKey: 'user_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Carts.hasMany(CartProducts, {
  as: 'products',
  foreignKey: 'cart_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

CartProducts.belongsTo(Carts, {
  as: 'cart',
  foreignKey: 'cart_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasMany(CartProducts, {
  as: 'cart_products',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

CartProducts.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Orders.hasMany(OrderProducts, {
  as: 'order_products',
  foreignKey: 'order_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderProducts.belongsTo(Orders, {
  as: 'order',
  foreignKey: 'order_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasMany(OrderProducts, {
  as: 'order_products',
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderProducts.belongsTo(Products, {
  as: 'products',
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = {
  sequelize,
  User,
  UserType,
  Categories,
  Products,
  Carts,
  CartProducts,
  Orders,
  OrderProducts,
};
