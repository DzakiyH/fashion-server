const { Router } = require('express');
const {
  getAllOrders,
  getUserOrders,
  setNewOrder,
  setAddress,
  setOrderProducts,
  getUserAddress,
  updateOrder,
  deleteOrder,
} = require('../controllers/Order');
const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.get('/', Authorization, getUserOrders);
router.get('/all-orders', Authorization, getAllOrders);
router.get('/address', Authorization, getUserAddress);
router.post('/new-order', Authorization, setNewOrder);
router.post('/address', Authorization, setAddress);
router.post('/order-products', Authorization, setOrderProducts);
router.post('/update-order', Authorization, updateOrder);
router.delete('/delete-order/:orderId', Authorization, deleteOrder);

module.exports = router;
