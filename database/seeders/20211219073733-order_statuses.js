const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('order_statuses', [
      {
        id: 1,
        status: 'waiting payment',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        status: 'paid',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        status: 'delivered',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        status: 'received',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('order_statuses', null);
  },
};
