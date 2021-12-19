'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('orders', 'status');
  },

  down: async (queryInterface, Sequelize) => {
    return null;
  },
};
