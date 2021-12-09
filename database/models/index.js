const sequelize = require('../connection');
const Users = require('./Users');
const UserTypes = require('./UserTypes');
const Categories = require('./Categories');
const Products = require('./Products');
const Carts = require('./Carts');
const CartProducts = require('./CartProducts');
const Orders = require('./Orders');
const OrderProducts = require('./OrderProducts');

UserTypes.hasMany(Users, {
  foreignKey: 'user_type_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Users.belongsTo(UserTypes, {
  foreignKey: 'user_type_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Categories.hasMany(Products, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.belongsTo(Categories, {
  foreignKey: 'category_id',
  as: 'categories',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Users.hasOne(Carts);

Carts.belongsTo(Users, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Carts.hasMany(CartProducts, {
  foreignKey: 'cart_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

CartProducts.belongsTo(Carts, {
  foreignKey: 'cart_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasMany(CartProducts, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

CartProducts.belongsTo(Products, {
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Orders.hasMany(OrderProducts, {
  foreignKey: 'order_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderProducts.belongsTo(Orders, {
  foreignKey: 'order_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

Products.hasMany(OrderProducts, {
  foreignKey: 'product_id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

OrderProducts.belongsTo(Products, {
  foreignKey: 'product_id',
  targetKey: 'id',
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
});

module.exports = {
  sequelize,
  Users,
  UserTypes,
  Categories,
  Products,
  Carts,
  CartProducts,
  Orders,
  OrderProducts,
};
