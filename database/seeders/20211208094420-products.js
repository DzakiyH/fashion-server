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
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_8pn0ZROi0.jpg?updatedAt=1679738057154',
        price: 10,
        stock: 20,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'women clothes',
        description: 'clothes for women',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_wdQQzFG30.jpg?updatedAt=1679738159934',
        price: 15,
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'boy clothes',
        description: 'clothes for boys',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_cZ-HhpRJj.jpg?updatedAt=1679738107702',
        price: 8,
        stock: 30,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'girl clothes',
        description: 'clothes for girls',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_lJpfnL0o6.jpg?updatedAt=1679738189882',
        price: 12,
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'jeans',
        description: 'really nice jeans',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_GTvKi-gnMjz.jpg?updatedAt=1639401920178',
        price: 20,
        stock: 15,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 1,
      },
      {
        id: uuid.v4(),
        title: 'socks',
        description: 'really nice socks',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_f0q49FEdF6.jpg?updatedAt=1679738204067',
        price: 5,
        stock: 40,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        id: uuid.v4(),
        title: 'shoes',
        description: 'really nice shoes',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_ETjnpJZ9O.jpg?updatedAt=1679738173759',
        price: 35,
        stock: 10,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 2,
      },
      {
        id: uuid.v4(),
        title: 'eyeglasses',
        description: 'really nice eyeglasses',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/test-image_hMpX8f-cB.jpg?updatedAt=1679738142335',
        price: 20,
        stock: 7,
        created_at: new Date(),
        updated_at: new Date(),
        category_id: 3,
      },
      {
        id: uuid.v4(),
        title: 'wristwatch',
        description: 'really nice wristwatches',
        image:
          'https://ik.imagekit.io/rdj8uzjj8gp/product_wristwatch_Mo9zD9JbE.jpg?updatedAt=1680534344075',
        price: 50,
        stock: 3,
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
