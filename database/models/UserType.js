const { Model, DataTypes } = require('sequelize');
const connection = require('../connection');

class UserType extends Model {}

UserType.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
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
    modelName: 'user_type',
    sequelize: connection,
    paranoid: false,
    timestamps: false,
  }
);

module.exports = UserType;
