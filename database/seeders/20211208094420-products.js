const uuid = require('uuid');

const { UUID } = require('sequelize/dist');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [
      {
        id: uuid.v4(),
        title: 'men clothes',
        description: 'clothes for men',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_men_qvq2JlSD_h1.png?updatedAt=1638956838566',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'women clothes',
        description: 'clothes for women',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_women_oPvVNzhhj.jpg?updatedAt=1638956840398',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'boy clothes',
        description: 'clothes for boys',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_boy_DpSunEoZw4.jpg?updatedAt=1638956840422',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'girl clothes',
        description: 'clothes for girls',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_girl_CmpoWgEBux.jpg?updatedAt=1638956836881',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'jeans',
        description: 'really nice jeans',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_jeans_bIzJotQN5J.jpg?updatedAt=1638956838073',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'socks',
        description: 'really nice socks',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_socks_nFc0bB4d_Bd5.jpg?updatedAt=1638956838586',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        id: uuid.v4(),
        title: 'shoes',
        description: 'really nice shoes',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_shoes_bcYe9N-DH.jpg?updatedAt=1638956838650',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        id: uuid.v4(),
        title: 'eyeglasses',
        description: 'really nice eyeglasses',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_eyeglasses_vOvLUkO3rcI.jpg?updatedAt=1638956837914',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
      },
      {
        id: uuid.v4(),
        title: 'wristwatch',
        description: 'really nice wristwatches',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/fashionlution/product_wristwatch_K0thprUNvJCp.jpg?updatedAt=1638956842087',
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 4,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('products', null);
  },
};
