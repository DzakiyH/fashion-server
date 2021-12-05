const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class OrderProducts extends Model {}

OrderProducts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    order_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: 'order_products',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = OrderProducts;
