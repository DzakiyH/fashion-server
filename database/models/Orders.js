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
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
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
