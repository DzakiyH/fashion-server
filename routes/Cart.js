const { Router } = require('express');
const {
  addItemToCart,
  getCartitems,
  updateProductQuantity,
  removeProduct,
} = require('../controllers/Carts');
const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.get('/', Authorization, getCartitems);
router.post('/add-product', Authorization, addItemToCart);
router.put('/update-quantity', Authorization, updateProductQuantity);
router.delete('/delete-product/:id', Authorization, removeProduct);

module.exports = router;
