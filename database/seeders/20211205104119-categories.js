'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [
      {
        id: 1,
        name: 'clothes',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'footwear',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'headwear',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'handwear',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null);
  },
};
