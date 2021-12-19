'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn('orders', 'status', 'status_id');
  },

  down: async (queryInterface, Sequelize) => {},
};
