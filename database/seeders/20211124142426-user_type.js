const uuid = require('uuid');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_type', [
      {
        id: 1,
        type: 'customer',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        type: 'seller',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_type', null);
  },
};
