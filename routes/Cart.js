const { Router } = require('express');
const { addItemToCart, getCartitems } = require('../controllers/Carts');
const { Authorization } = require('../middlewares/Authorization');

const router = Router();

router.get('/', Authorization, getCartitems);
router.post('/add-product', Authorization, addItemToCart);

module.exports = router;
