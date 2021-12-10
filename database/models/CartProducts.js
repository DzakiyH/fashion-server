const { Model, DataTypes, Sequelize } = require('sequelize');
const connection = require('../connection');

class CartProducts extends Model {}

CartProducts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    cart_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: 'cart_products',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = CartProducts;
