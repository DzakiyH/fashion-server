const uuid = require('uuid');
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const password = 'pass12345';

    let user_types = await queryInterface.sequelize.query(
      `SELECT id FROM user_types`
    );

    user_types = user_types[0];

    if (user_types && user_types.length > 0) {
      queryInterface.bulkInsert('users', [
        {
          id: uuid.v4(),
          email: 'budi@gmail.com',
          password: bcrypt.hashSync(password, 12),
          first_name: 'budi',
          last_name: 'utomo',
          phone_number: '083345650156',
          created_at: new Date(),
          updated_at: new Date(),
          user_type_id: user_types[0].id,
        },
        {
          id: uuid.v4(),
          email: 'susi@gmail.com',
          password: bcrypt.hashSync(password, 12),
          first_name: 'susi',
          last_name: 'utami',
          phone_number: '088472569821',
          created_at: new Date(),
          updated_at: new Date(),
          user_type_id: user_types[1].id,
        },
      ]);
    }
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null);
  },
};
