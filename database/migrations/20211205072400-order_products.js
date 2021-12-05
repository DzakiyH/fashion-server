'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('order_products', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
        type: Sequelize.UUID,
        references: {
          model: 'orders',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
      product_id: {
        type: Sequelize.UUID,
        references: {
          model: 'products',
          key: 'id',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('order_products');
  },
};
