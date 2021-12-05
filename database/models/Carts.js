const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class Carts extends Model {}

Carts.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
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
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
  },
  {
    modelName: 'carts',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = Carts;
