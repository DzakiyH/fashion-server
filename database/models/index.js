const sequelize = require('../connection');
const User = require('./User');
const UserType = require('./UserType');

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

module.exports = {
  sequelize,
  User,
  UserType,
};
