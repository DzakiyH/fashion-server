const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class OrderStatuses extends Model {}

OrderStatuses.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: new Date(),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    modelName: 'order_statuses',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = OrderStatuses;
