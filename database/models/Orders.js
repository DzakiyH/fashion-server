const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class Orders extends Model {}

Orders.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    status_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    total_payment: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resi: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    modelName: 'orders',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = Orders;
