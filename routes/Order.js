const { Router } = require('express');
const {
  getAllOrders,
  setNewOrder,
  setAddress,
  setOrderProducts,
} = require('../controllers/Order');
const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.get('/', Authorization, getAllOrders);
router.post('/new-order', Authorization, setNewOrder);
router.post('/address', Authorization, setAddress);
router.post('/order-products', Authorization, setOrderProducts);

module.exports = router;
